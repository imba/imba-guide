# Imba vs JavaScript

As mentioned in the introduction, Imba is not really vs JavaScript. Imba is 
meant to integrate smoothly into the JavaScript ecosystem. However, if you are 
coming to Imba from JavaScript (or CoffeeScript), there may be pitfalls that
could cause you frustration.

This section lists some of the common pitfalls and gotchas that a JavaScript
programmer may encounter while learning Imba. This list is not exhaustive by any
means, and is based on the author's own experiences.

If you are not familiar with advanced JavaScript, you may not run into any of 
these issues, so we recommend that you move on to the next chapter and come back
to this one if you run into trouble.

## Significant whitespace

Whitespace in Imba is significant. Indentation levels are used to determine 
block boundaries.

Imba is especially sensitive to mixed tabs and spaces. For the best results,
we recommend using [EditorConfig](https://editorconfig.org/) and similar
tools to normalize indentation style.

## Implicit return

The last statement in a function is also its return value. This means that
most of the time you do not need an explicit return in most cases.

For instance:

```imba
def div x, y
    if y == 0
        window.Infinity
    else
        x / y
```

Note that if we omit the `else` clause in the above function, then we have a 
different situation:

```imba
def div x, y
    if y == 0
        window.Infinity
    x / y
```

In this case, `x / y` is the last statement, so that is always the return value.
In order to ever return the `window.Infinity` value, we would need to use the
`return` statement:

```imba
def div x, y
    if y == 0
        return window.Infinity
    x / y
```

### `self` and `this`

Both `self` and `this` are available in classes. The `self` is always bound to
the current object, even inside `do` blocks inside methods. If you define a 
method inside a method, however, `self` is bound to `this` inside the method, 
which usually has no meaning.

```imba
class Foo
    def someMethod
        def innerMethod
            self.bar
        self.bar
        self.bar do self.bar

    def bar
        self
```

The above class compiles to this:

```javascript
/*** compiler output ***/

function Foo(){ };

Foo.prototype.someMethod = function (){
	var self = this;
	function innerMethod(){
		return this.bar();
	};
	self.bar();
	return self.bar(function() { return self.bar(); });
};


Foo.prototype.bar = function (){
	return this;
};
```

## Implicit function and method calls

When a name is referenced, Imba compiles it into a JavaScript function or
method call in some situations. 

Because there are so many cases in which the result can be what you did not 
expect, we'll first lay down some guidelines, and then discuss what won't work.

- In [methods](../ch1/methods.md) (functions defined using `def` keyword)
  that are defined in module scope, do not use undeclared variables.
- In methods in [classes](../ch2/classes.md) and [tags](../ch2/tags.md), only
  reference undeclared names for properties (props) and methods that are
  declared (or the special `data` property in tags).
- Do not define methods inside methods. Use `do` blocks instead.
- Prefix global functions and properties with `window` (or `global` on NodeJS).
- Always declare variables before using them (do not rely on hoisting behavior).

As long as you observe the above rules, you should be fine. Now let's take a 
look at a few examples to explain the above rules in more detail.

```imba
def foo
    console.log 'Hello, world'

var bar = 'baz'

foo             #>> foo()
bar             #>> bar
baz             #>> self.baz()

def someFunc
    var x = '12'
    f           #>> this.f()
    x           #>> x
```

This also applies cases where we use property access or operators:

```imba
def foo
    console.log 'Hello, world'

foo:length      #>> foo().length
foo + 2         #>>foo() + 2`

def someFunc
    f:length    #>> this.f().length
    f + 2       #>> this.f() + 2
```

It does *not* apply when using assignment. The behavior differs based on whether
the assignment happens in a method or outside it. 

Assigning to a function outside a method is a compile error. 

Within a class, a setter for a property of the same name is called.
If the method is not bound to a class, this automatically results in a
runtime error. 

If the method is bound to a class, this can still result in a runtime error
unless the class also declares a property of the same name. The compiler does
not check

```imba
def foo
    console.log 'Hello, world'

foo = 'bar'  # won't compile


def someFunc
    f = 12      #>> this.setF(12)


class Foo
    def someFunc
        f = 12  #>> this.setF(12)


class Bar
    prop f

    def someFunc
        f = 12
```

In the `Foo` class, although `setF()` *is* called, the property is not declared,
so the call will fail. In the `Bar` class, the call will succeed.

You should keep in mind that this behavior extends to what would normally be a 
global function in JavaScript. For example `isNaN` cannot be used as is, but 
must be prefixed with `window.`:

```imba
window.isNaN NaN    #>> window.isNaN(NaN)
isNaN NaN           #>> self.isNaN(NaN)
```

### No blocks

Imba does not technically have blocks. The `when`, `until`, `for`, and `if`
'blocks' are all compiled to expressions. This means that they can be
assigned and passed around as arguments. This, combined with implicit returns,
gives you new possibilities to write shorter code. For example:

```imba
def filter arr, cond
    for val, i in arr
        if not cond val, i
            continue
        val
```

### Properties

Properties in Imba work a bit differently than in JavaScript. Consider the
following two implementations:

```imba
# Imba

class Foo
    def initialize
        foo = 12
```

```javascript
// JavaScript

class Foo {
    constructor() {
        this.foo = 12;
    }
}
```

Even though they look similar, the Imba version will cause a run-time error. In 
Imba, any and all properties you want to use must be declared using the `prop` 
keyword. To make the `Foo` class work as expected in `Imba`, you need to change 
it as follows:

```imba
class Foo
    prop foo

    def initialize
        foo = 12
```

When importing classes defined in Imba into JavaScript modules, you need to keep
in mind that properties in Imba are compiled to a getter-setter pair.

Let's say we have an Imba module like this:

```imba
export class SomeClass
    prop foo

    def initialize x
        foo = x
```

Now if we import it into a JavaScript module, the behavior is as follows:

```javascript
import { SomeClass } from './SomeClass.imba'

let someObj = new SomeClass(12);
someObj.foo == 12       // false
someObj.foo() == 12     // true
someObj.setFoo(2)
someObj.foo() == 2      // true
someObj._foo            // 2
```

### Imba methods are not first-class

[Methods](../ch1/methods.md), a.k.a. functions that are defined using the
`def` keyword, are not first-class objects in Imba. This is one of the more
significant differences compared to JavaScript.

If you define a function like so:

```
def someFunc
    false
```

you cannot assign it to variables or pass it around as arguments.

The [`do` blocks](../ch1/do.md), a.k.a. lambdas or function
expressions, *can* be assigned and passed around, and this is what you should
use if that is the behavior you want.

```
var someFunc = do false
```

Note, though, that with `do` blocks assigned to variables, you do not have the
implicit function call behavior. The above function must be called with 
parentheses:

```
someFunc()
```

### Method call vs property access

Imba has separate syntaxes for property access vs method calls. The dot notation
is reserved for methods in Imba, while a colon `:` is used for properties:

```imba
var arr = []

arr:length      #>> arr.length
arr.length      #>> arr.length()
arr.push 12     #>> arr.push(12)
```

This rule only applies to plain JavaScript objects (including arrays, regexps, 
etc.) or objects created by built-in or 3rd party constructors. Objects created
using Imba classes use the dot notation for properties as well as methods 
because Imba instance properties are getter *methods*.

```imba
class Foo
    prop foo

    def initialize x
        foo = x

var f = Foo.new 12
f.foo           #>> f.foo()
f.foo === 12    # true
```

### Global object properties

Global functions cannot be called as is. They must always be prefixed with
`window.` (or `global.`). Functions like `isNaN()` or `scrollTo()` should be
written as `window.isNaN` and `window.scrollTo` in Imba. 

Similarly global objects like `location` must also be accessed as 
`window:location`.

The following names do not require a prefix:

- `window`
- `document`
- `console`
- `process`
- `setTimeout`
- `setInterval`
- `clearTimeout`
- `clearInterval`
- `parseInt`
- `parseFloat`
- `__dirname`

If you find it tedious to use the prefix, you can declare functions global by 
using the `extern` keyword. This only works with functions, though, not 
properties.

```imba
extern scrollTo
scrollTo 120        #>> scrollTo(120)
```

### Aliases for Boolean values

Boolean values `true` and `false` have aliases, `yes` and `no` respectively.
There is no difference between the two forms.

### Variable arity functions

If you are used to writing functions that use splats to capture multiple 
trailing arguments, you may be confused as to how to do this in Imba.

For example, in JavaScript, you may be doing something like this:

```javascript
function someFunc(x, ...rest) {
    // ...
}
```

or this:

```javascript
function someFunc(x) {
    var rest = [].slice.call(arguments, 1);
}
```

The `arguments` object is available as a `$0` special variable. `$0` compiles
directly to `arguments`, so it cannot be sliced as is. Here is some code that
demonstrate how to slice the arguments:

```imba
def someFunc x
    var rest = v for v, i in $0 when i > 0 
    # ...
```

There is no native way to apply the capture arguments to a function, though, as 
Imba does not treat methods as first-class objects. To work around this, we 
need to embed JavaScript. Code within backticks in the snippet below is plain
JavaScript which will not be touched by the compiler.

```imba
def partial f
    var args = arg for arg, i in $0 when i > 0
    `f.bind(void 0, args)`      #>> return f.bind(void 0, arg)
```

You already probably know, though, that methods in Imba cannot be passed around
as values, so the above `partial` function would normally go to waste. However,
we can, again, use embedded JavaScript to work around this:

```imba
def add x, y
    x + y

var inc = partial `add`, 1  #>> var inc = partial(add,1)
```

## Passing `do` blocks to functions

If you have a method that takes a function as one of its arguments, you may have 
tried something like this and got a compile error:

```imba
someMethod do |x| x + 1, someOtherArg
```

There are several solutions to this. 

(1) You can wrap the `do` block in parentheses:

```imba
someMethod (do |x| x + 1), someOtherArg
```

(2) You could also assign the `do` block to a temporary variable:

```imba
var inc = do |x| x + 1
someMethod inc, someOtherArg
```

(3) Alternatively, you can use the `&` placeholder:

```imba
someMethod(&, someOtherArg) do |x| x + 1
```

Note that the `&` placeholder is replaced at compile time so there is no
run-time performance penalty for using it.

The author of this guide recommends the second solution, as it gives you an 
opportunity to clarify the purpose of the `do` block by giving it a name and 
it looks least surprising of the three.

When writing methods of your own, you should generally try to take functions
last whenever possible. This may sound very wrong to programmers with an FP 
background, but Imba is not very well suited to FP in general, so the 'correct' 
argument order has a different meaning.

## Instantiating classes

To instantiate a class, you will use the `new` method on the class, rather than
a `new` keyword:

```imba
Date.new 2018, 2, 11, 5, 44
```

If you wish to chain a method call on the crated object, you can either enclose
parameters in parentheses, or you can wrap the whole call into parentheses.

```imba
Date.new(2018, 2, 11, 5, 44).getTime
(Date.new 2018, 2, 11, 5, 44).getTime
```

To chain multiple method calls, you have to repeat the whole wrapping process
except when methods don't take any arguments:

```imba
(Date.new 2018, 2, 11, 5, 44).getTime .toFixed 2 
#>> (new Date(2018,2,11,5,44)).getTime().toFixed(2);

(Date.new 2018, 2, 11, 5, 44).getTime .toFixed 2 .toString
#>> (new Date(2018,2,11,5,44)).getTime().toFixed((2).toString());
```

Note in the last example that `toString()` is called on `2` rather than the 
return value of the `toFixed()` method. To avoid this, `2` must be wrapped in 
parentheses.

```imba
(Date.new 2018, 2, 11, 5, 44).getTime .toFixed(2) .toString
#>> (new Date(2018,2,11,5,44)).getTime().toFixed(2).toString();
```
