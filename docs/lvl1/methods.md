# Methods

Methods are reusable blocks of code that can be applied to its arguments.

Methods are similar to mathematical functions, although they are not strictly
the same thing. In other languages, Imba methods are known as 'functions',
'procedures', and 'subroutines'. While these things may have slightly
different meanings to different programmers, they all serve the same purpose.

Methods are used to reduce duplication where similar or identical behavior is
used in different parts of a program. They are identified by a name,
parameters that serve as placeholders for arguments passed to them, and the 
method body, which is the code that belongs to a method.

The best way to think of methods is 'configurable named code blocks'. They
can be configured using parameters, and they are packaged into a named method
so you can easily refer to it by name without retyping the entire block again
and again.

## Cheats

- Syntax for defining methods is `def methodName x, y, z`
- Methods in module scope are literally methods, not stand-alone functions.
- Methods in module scope are methods on a `self` object which is an object
  in the private module scope.
- Methods can reference each other in the module via the `self` of `this` 
  objects.
- The rest spread `...args` is written as `*args`.
- Optional arguments can be given a default value with `arg = exp` syntax.
- Default values of optional arguments apply even when `undefined` is passed
  explicitly.
- Parenthesis around arguments are optional even when there are no arguments.

## Basic syntax

Here is a simple method that has no parameters.

```imba
def completeDenial
    no
```

To use this method we call it. Since the method `completeDenial` has no
arguments it can be called simply by referencing its name in the code:

```imba
completeDenial
```

If you have programmed in another language, you may think that this is what's
commonly known as a 'function', but in Imba, these are real methods. They are
methods on an object called `self`.

We can call the `completeDenial` method like this as well:

```imba
self.completeDenial
```

## Method parameters

As mentioned at the beginning of this section, methods can have parameters.
Parameters are used to configure how a method operates or pass it values to
operate on. Here is a method that takes two parameters.

```imba
def add x, y
    x + y
```

To call the method `add`, we reference its name, and we also supply values to 
it by listing the values after the name of the function.

```imba
add 1, 2
# 3
```

The values that were given (or 'passed') to `add` are also called
'arguments', so we can say that 'we passed arguments `1` and `2` to `add`.'
The vales `1` and `2` are bound to names `x` and `y` in the function. The
code of the method body is then evaluated, and the value of the last
expression (`x + y`) is returned.

## Method return value

Methods have a return value. The return value of a method is the last
statement in the method. In the case of `completeDenial`, the return value is
`no` as it is the last (and only) expression that evaluated. This is called
an 'implicit return'.

The `return` statement can be used to explicitly return a value. Here is an
example of a function that returns a value explicitly.

```imba
var ammo = 100
var cheatsEnabled = yes

def shoot
    if cheatsEnabled
        return ammo
    ammo -= 1
```

In the above method, we have two statements, the `if` block and `ammo`. Since
the return value is always the last statement, we have to use `return` to
short-circuit the function if we want to return from within the `if` block.

Alternatively, we can make the `if` block the last statement by including the `else` clause. This gets rid of the `return` statement.

```imba
var ammo = 100
var cheatsEnabled = yes

def shoot
    if cheatsEnabled
        ammo
    else
        ammo -= 1
```

In the section about [control structures](./controls.md), we have briefly
talked about using `return` to short-circuit a loop inside methods. When
using a `return` statement inside a loop, the method returns immediately,
just like with `if` blocks.

```imba
var battery = {
    capacity: 200
    charge: 15
}

def charge batt, amount
    while amount
        batt:charge += 1
        if batt:charge > batt:capacity
            return "Blown!"
    "Charged"

charge battery, 500
# "Blown!"
```

It's important to keep in mind what happens if we short-circuit return from a 
loop when loop is the last statement in a method. For example:

```imba
def brokenRange x
    var i = 1
    while i < x
        if (i > 50)
            return i
        i

brokenRange 100
# 51

brokenRange 5
# [1, 2, 3, 4]
```

## Optional parameters

One or more parameters in a method can be made optional. This is done by 
assigning a default value to a parameter.

```imba
def bang text, puncutation = '!'
    text + punctuation
```

The parameter `punctuation` will have a default value of `'!'` if no values are
bound to it, or if the value bound to it is `undefined` (more on this special
value later).

```imba
var excessiveGreating = bang 'Hello'
var normalGreeting = bang 'Hello', '.'
```

In the example, `excessiveGreeting` will be `'Hello!'`, because the second 
value is omitted 

## Referencing methods as objects

Just like any other value in JavaScript, methods are also objects. They can be
assigned and passed to other methods and functions as arguments.

We already mentioned that methods, when referenced by name, are immediately
called. When we want to use them as values instead of calling them, we need to
prefix the method name with `self:`.

```imba
def increment x
    x + 1

[1, 2, 3].map self:increment
# [2, 3, 4]
```

## Declaring methods in object literals

Methods can be declared inside object literals.

```imba
var laserGun = {
    ammo: 1000
    dmg: 50
    def shoot
        "Woosh!"
}
```

This creates a property on the object that has a key matching the method name.
Methods defined in object literals can be called using the `object.key` 
notation.

```imba
laserGun.shoot
# "Woosh!"
```

When defined inside object literals, we can use `self` to refer to the object
to which the method belongs.

```imba
var laserGun = {
    ammo: 1000
    dmg: 50
    def shoot target
        self:ammo -= 1
        target:hp -= self:dmg 
}

var badPerson = {
    hp: 100
}

laserGun.shoot badPerson
badPerson:hp
# 50
```

When we want to use the method as a value, we can reference it using the `:`
operator.

```
var shoot = laserGun:shoot
```

In Imba, all methods are unbound. This means that they are not hard-wired to
the objects to which they belong. To demonstrate this we will use the `shoot`
variable we have defined earlier to shoot another target.

```
var anotherTarget = {
    hp: 50
}

shoot anotherTarget
# TypeError: this is undefined
```

What happened is that `shoot` is unbound, so `self` is `undefined`. Attempting
to decrease the value of `self:ammo` threw a `TypeError` exception.

This is the result of what is know as 'invocation context'. Methods are
called as bound only when we specify the object on which they are called
using `object.key` notation. In the last example, we did not use the `.` 
anywhere so the method was called unbound (it's invocation context was
`undefined`). 

!!! note
    Also read about [`.bind`](https://mzl.la/2P0iy0o),
    [`.call`](https://mzl.la/2P3aQD7) and [`.apply`](https://mzl.la/2P0ivSg)
    methods for different ways to control the invocation context.

## Method type

All methods are objects of type 'function'.

## Useful methods and properties

!!! note
    It may sound strange, but methods have their own methods and properties, 
    because they are themselves objects.

- [`:length`](https://mzl.la/2P34L9s)
- [`:name`](https://mzl.la/2P0ikq4)
- [`.apply`](https://mzl.la/2P0ivSg)
- [`.bind`](https://mzl.la/2P0iy0o)
- [`.call`](https://mzl.la/2P3aQD7)
- [`.toString`](https://mzl.la/2P0oq9X)
