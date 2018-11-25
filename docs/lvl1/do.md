# Do block

Do blocks are ad-hoc methods. They are similar to methods in that they 
represent parametrized blocks of code. Unlike methods, do blocks are 
expressions, so they are treated as values rather than declarations. On their
own, they do not have a name we can refer to, nor means of invoking them.

In other languages, do blocks appear under names like 'function expression'
or 'lambda'.

Do blocks are usually used when a function or a method needs a function or a
method as an argument.

## Cheats

- do blocks compile to function expressions in JavaScript.
- The do block syntax is `do |x, y, z| body`.
- Parameters delimited by bars `| |` are optional.
- The body can be one line or multiple lines.
- `self` inside a do block refers to the `self` in the outer scope.
- `this` inside a do block is a normal `this`.
- Named function declarations are written similarly to methods, but with 
  `var def` instead of `def`.

## Writing do blocks

The syntax of the do block looks very different compared to methods, but the 
basic structure is the same.

Here is a method:

```imba
def add x, y
    x + y
```

Here is an equivalent do block:

```imba
var add = do |x, y| x + y
```

Do blocks have all the features that [methods](./methods.md) do, like
optional and rest parameters.

## Using do blocks as callbacks

Do blocks are most commonly used as callbacks in methods and functions. While
declared methods or imported functions can also be used as callbacks, do
blocks have an advantage of being ad-hoc. They can be defined on the spot as
one-off callbacks.

Here is an example of using a method as a callback:

```imba
def afterSave assets
    game.start assets, config

loadAssets self:afterSave
```

If we rewrite the above using a do block it looks like this:

```imba
loadAssets do |assets| game.start assets, config
```

## Using & placeholder

In some cases callbacks are not conveniently the last parameter. The
`setTimeout` and `setInterval` built-in functions are good examples.

```imba
setInterval do
    gameTimer.update Date.now
, 100
```

The `&` character can be used as a placeholder in such cases, to allow us to 
supply the callback last. This requires parentheses around all parameters.

```imba
setInterval(&, 100) do gameTimer.update Date.now
```

!!! note
    If you come from a functional programming background, this may look like
    partial application. During compilation, Imba actually replaces the
    placeholder with the callback in the resulting code so it's not doing any
    partial application, and there is no penalty for using this syntax.

## Using do blocks to write higher order methods

Higher order functions are functions that take functions as arguments or
return them. We have already seen an example of a higher order function
that take other functions as arguments in the `setInterval` example in this
section, where we use a do block as an argument. 

Do blocks can also be very useful when we want to write methods that are
higher order functions (a.k.a. higher order methods). Because declaring a 
method also creates a property on the `self` object, declaring new methods 
[inside other methods](./methods.md#declaring-methods-within-methods) may
sometimes yield unexpected results, and can create properties we don't really
need. Because of this, it is usually preferred to use do blocks instead.

Consider the following method.

```imba
def drawShape screen, shape
    screen.save
    screen.draw shape
    screen.restore

drawShape screen, triangle
drawShape screen, rectangle
drawShape screen, machoDudeWithTagsAsArms
```

If we use this method throughout our program, and there is only one `screen`
that we draw to, it may seem like a bad idea to keep supplying `screen`
object every time we call `drawShape`. We can solve this by converting the 
`drawShape` into a higher order method:

```imba
def drawShape screen
    do |shape|
        screen.save
        screen.draw shape
        screen.restore

var drawToScreen = drawShape screen

drawToScreen triangle
drawToScreen rectangle
drawToScreen machoDudeWithTagsAsArms
```

!!! note
    The technique in the last example is called
    [currying](https://en.wikipedia.org/wiki/Currying).

## Do blocks and `self`

The `self` object inside a do block always refers to the `self` in the outer 
scope.

```imba
def keyHandlerFor code
    # ....

def attachEventHandler target
    target.addEventListener 'keydown', do |event|
        var keyHandler = self.keyHandlerFor event.keyCode
        keyHandler
```

In this example, the `self.keyHandler` refers to a method on the same `self`
object on which `attachEventHandler` is declared.

!!! note
    You probably notice that we do not really need to use `self.` in the last
    example. It's just there to make it explicit and clear. Even if we omit
    `self.`, it makes no difference because Imba always treats undeclared
    names as methods on the `self` object.

## Function declarations

In the very first example in this section, we have seen a do block that was
assigned to a variable. This pattern can be written using `var def`
declarations.

Although `var def` declarations look similar to method declarations, they are
semantically closer to do blocks.

Let's take a look at the first example again:

```imba
var add = do |x, y| x + y
```

Here is a version that is rewritten using `var def`.

```imba
var def add x, y
    x + y
```
    
!!! warning 
    Function declarations are **not subject to hoisting** in Imba even if it
    may seem so just looking at the compiler output. Calling a `var def`
    function above the point of declaration will cause the compiler to treat
    the reference as a method call on the `self` object.

The example of the `drawShape` higher order method can also be rewritten
using function declarations:

```imba
def drawShape screen
    var def draw shape
        screen.save
        screen.draw shape
        screen.restore
```

There is no practical difference between the original `drawShape` and this
one in this particular case, but the main difference is that the inner
function has a name, unlike do blocks. This is an important property when it
comes to [recursive
functions](https://en.wikipedia.org/wiki/Recursion_(computer_science)).
