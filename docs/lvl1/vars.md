# Variables and variable scope

Variables are labels for values. When a variable appears in the code, it can
be usually be substituted for a value. The value variables are substituted
for are assigned to them at some point the program's execution (if ever).

Variables (as their name suggest) are used as placeholders for values that could
change during execution.

## Cheats

- Variables are declared with `var`, `const`, and `let`.
- Variable scope is exactly the same as in JavaScript.
- `const` and `let` are not transpiled (they are literal `let`/`const`).
- `const` is not checked for reassignment at compile time.
- Don't (ab)use hoisting. Undeclared names are treated as method calls.

## Declaring and assigning values

In Imba, variables are first declared, and then values can be assigned to them 
one or more times.

```imba
var x           # we have declared a variable `x`
x = 1           # we have assigned a value `1` to `x`
x               # we have referenced `x` and we got `1`
x = 2           # reassigned `x` with a value `2`
x               # referenced `x` again, this time we got `2`
```

We can declare *and* assign in a single statement like this:

```imba
var x = 1
```

## Allowed variable names

Variable names can contain any letter, numbers, or an underscore. The names
cannot start the names with numbers, though.

```imba
var foo               # OK
var foo1              # OK
var FOO               # OK
var foo_bar           # OK
var _foo              # OK
var 1foo              # ERROR!
```

## Variable visibility (scope)

Variables are only visible within, [methods](./methods.md) and [`do`
blocks](./do.md) inside which they are declared. Variables declared outside any 
method and `do` block are visible to the entire module. 

Variables are visible from any line below their declaration, including any
methods, classes, tags and blocks that come after it, but this visibility
does not extend past the end of the body of the method or `do` block, or
outside the module.

```imba
var x = 12            # `x` is visible from all lines below this one

def foo y             # `y` is visible only inside the `foo` method
    var z             # `z` is visible only inside the `foo` method
    z = do |n|        # `n` is visible only inside the `do` block
        var f = 12    # `f` is visible only inside the `do` block
        f + y / n
    z 2

# This code is not supposed to make sense, don't worry. :-)
```

!!! warning
    Because Imba code compiles to JavaScript, variables are subject to hoisting.
    However, because of the way Imba compiler treats variable references, you 
    should not rely on hoisting, and instead always declare variables above
    the point where they are used.
