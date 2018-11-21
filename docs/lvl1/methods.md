# Methods

Methods are reusable blocks of code that can be applied to its arguments.

Methods are similar to mathematical functions, although they are not strictly
the same thing. In other languages, methods are known as 'functions',
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

## Method syntax

Here is a simple method that has no parameters.

```imba
def alwaysFalse
    no
```

To use this method we call it. Since the method `alwaysFalse` has no arguments
it can be called simply by referencing its name in the code:

```imba
var returnValue = alwaysFalse
```

Methods have a return value. The return value of a method is the last
statement in the method. In the case of `alwaysFalse`, the return value is
`no` as it is the last (and only) expression that evaluated. This is called
an 'implicit return'.

The `return` statement can be used to explicitly return a value. Here is an
example of a function that returns a value explicitly.

```imba
var x = 1
var y = 0

def divideWhenSafe
    if y === 0
        return x
    x / y
```

In the above function, we return `x` as is if `y` is 0, otherwise we divide
`x` by `y`.

In the last example, if we want to avoid the `return` statement (for cosmetic
reasons), we would simply introduce the `else` clause, because `if` block is 
an expression:

```imba
var x = 1
var y = 0

def divideWhenSafe
    if y === 0
        x
    else
        x / y
```

## Method parameters

As mentioned at the beginning of this section, methods can have parameters.
Here is a method that takes two parameters.

```imba
def add x, y
    x + y
```

To call the method `add`, we reference its name, and we also supply values to 
it by listing the values after the name of the function.

```imba
var sum = add 1, 2
```

The values that were given (or 'passed') to `add` are also called
'arguments', so we can say that 'we passed arguments `1` and `2` to `add`.'
The vales `1` and `2` are bound to names `x` and `y` in the function. The
code of the method body is then evaluated, and the value of the last
expression (`x + y`) is returned.

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
