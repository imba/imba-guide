# Statements and expressions

Statements and expressions are how we organize our code and express various
concepts.

Knowing the difference between statements and expressions will be very
important for programming effectively with Imba.

!!! warning
    Some of the things you normally use as a statement in JavaScript are
    *expressions* in Imba.

## Cheats

- One statement per line.
- Multiple statements per line when separated by `;`.
- Blocks like `if`, `try`, `when`, `until`, `for` are expressions.

## Definitions

Statements are instructions for the computer to perform some action.
Expressions are various representations of values. They can be a single value
(e.g., `1`) or very complex (`if x > 1 then createPrevious else null`), but 
it is always possible to treat them as a single value.

## Statements in imba

Each line in an Imba program is a statement. A line can sometimes contain
multiple statements separated by a semi-colon `;`. This is not common, and is
generally not recommended.

Each statement comprises of one or more expressions, or statements. When a
statement contains statements, we say that it is a compound statement.

For example:

```imba
var x = 1       # `var` statement, `1` is an expression
x + 1           # single expression
extern isNaN    # single statement `extern`, `isNaN` is an expression
```

## Blocks (compound statements)

Some statements mark the start of a block. Subsequent lines, until the end of 
the block are all part of a compound statement.

!!! warning
    JavaScript uses block delimiters (curly braces), while Imba uses
    significant whitespace.

Blocks start with an opening statement, and then one or more statements that
are indented by +1 level. Blocks end when a line is encountered that is
indented at the same level as the opening statement.

```imba
def add x, y    # `def` statement marks the start of a block
    x + y       # this single expression statement is part of the block

var n = 1       # this `var` statement is not part of the block
```

The following statements create blocks:

- `def`
- `var def`
- `if`
- `try`
- `when`
- `until`
- `for`
- `tag`
- `class`

### Compound blocks

Some blocks may have multiple indented regions which are all part of the same
block. In case of the `if` conditional statement, `else` *continues* the block 
created by the `if` statement.

```imba
if x > 1        # `if` statement, `x > 1` expression
    x - 1       # single expression
else if x === 1 # `else if` statement, `x === 1` expression
    x           # single expression
else            # `else` statement
    0           # single expression
```

The following blocks can be compound:

- `if` - `else`
- `try` - `catch`

## Block expressions

In many languages, blocks like `if` do not have a meaning on their own. The
entire block, when executed, provides a meaning. In contrast, in Imba, `if`,
`while`, `until`, and `for` blocks have a meaning on their own. They are
treated as expressions that can be assigned and passed as arguments. This
will be covered in more detail in the section on [control
structures](./controls.md).

## Wrapping expressions in parentheses

Expressions can be wrapped in parentheses. This does not change the value of the
expression, but it allows us to more clearly specify the order in which we want
the expressions to evaluate. This is exactly the same as in maths.

For instance:

```imba
12 - 3 * 4      # 0
(12 - 3) * 4    # 36
```
