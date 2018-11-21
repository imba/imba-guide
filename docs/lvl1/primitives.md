# Primitive types

All programming languages have some notion of types. In simple terms, types
are the 'kind' of values. They determine what we can do with them. Types
exist because different operations we perform on values do not always make
sense for all values. For example we cannot divide a number 3 by a word
'chair'. That does not make any sense.

!!! note
    In Imba, there is no direct relationship between types and classes.

In Imba, values have one of the following types:

- number
- string
- boolean
- undefined
- null
- regular expression
- object
- array
- function

For the purposes of this guide, we divide types into primitive and complex 
types. This section only covers the primitive types. Those are:

- [number](#number)
- [string](#string)
- [boolean](#boolean)
- [undefined](#undefined)
- [null](#null)

The rest of the types are covered in other sections.

!!! note
    Because all types in Imba are inherited from JavaScript itself, a link to
    the Mozilla Developer Network documentation page on each type will be
    provided. It is recommended to read those pages as well.

## Cheats

- All types are the same as in JavaScript, only minor syntax differences.
- `typeof` operator works the same way as in JavaScript.
- Double-quoted string is also a template string, embed with `"{expr}"`.
- Single-quoted string cannot be used as templates.
- Multi-line strings supported via `"""` and `'''`.
- Multi-line double-quoted strings are also template strings.
- Booleans can also be written as `yes` and `no` (idiomatic).
- Indentation of multi-line string is honored (aligned to first line).
- `typeof null is 'object'` like in JavaScript. Sorry.

## Testing for types

To determine the type of some value, we use the `typeof` operator. Writing 
`typeof` followed by an expression evaluates to a string that containing the 
name of the type.

```imba
typeof 1  # 'number'
```

For each type discussed in this section, we will also include the expected 
result of using `typeof` with the value.

## Number

**typeof:** number

**MDN:** [Number](https://mzl.la/19kgqcw)

All numeric values in Imba are of type 'number'. Unlike many other languages, 
Imba does not make any distinction between floating point and integer numbers,
and has no representation of rational, irrational, decimal, and other types of 
numbers.

Here are some examples of numbers:

```imba
1
0
1242
12.4
53.6666666661
```

Technically, JavaScript number type is a double-precision floating point number,
and has a range of -(2^53-1) to (2^53 - 1).

The maximum value for numbers on a given platform (browser, NodeJS) can be
obtained using `Number:MAX_VALUE` constant. Normally this should be
1.7976931348623157e+308.

The largest integer that can be safely represented in JavaScript can be obtained
using `Number:MAX_SAFE_INTEGER`. Normally, this should be 9007199254740991.

### NaN (Not a Number)

**typeof:** number

**MDN:** [NaN](https://mzl.la/1BoFs5h)

`NaN` is not a type on its own. It is rather a special value of the 'number'
type. It represents a value that is a nun-number, usually a result of an
invalid computation.

`NaN` was present in JavaScript since the very beginnings in order to avoid 
critical failure of programs in face of invalid mathematical operations such as
division by zero. Result of any such operation is always `NaN`.

The `NaN` is never equal to any value, including `NaN` itself. It is therefore 
not possible to test whether a value is a `NaN` using equality test.

```imba
9 / 0 === NaN  # this will be false
NaN === NaN  # this is also false
```

We test for `NaN` using either the global `isNaN` function or `Number.isNaN`
function. Main difference is that the global function tests if a value is
anything but a number (`NaN`, string, Boolean, etc.) whereas `Number.isNaN`
tests only if a value is `NaN`.

```imba
isNaN 2                 # no
isNaN 'number'          # yes
isNaN 9 / 0             # yes
isNaN NaN               # yes
Number.isNaN 2          # no
Number.isNaN 'number'   # no
Number.isNaN 9 / 0      # yes
Number.isNan NaN        # yes
```

## String

**typeof:** string

**MDN:** [String](https://mzl.la/ORU8rA)

Character sequences (characters, words, text, etc.) are of type 'string'.

A string is represented as either single-quoted or double-quoted string of 
characters:

```imba
'single-quoted'
"double-quoted"
```

There is no separate type for single characters. Single characters are
represented as strings with a single character.

```imba
'string'
'c'
```

Imba strings are fully Unicode. There are no different types of Unicode and
non-Unicode strings.

```imba
'日本語'
```

Empty strings are represented with quotes that have no characters in them.

```imba
''
""
```

Double-quoted strings are, for the most part, exactly the same as
single-quoted ones, except that they also support expression interpolation.

```imba
"string"
"embed {1 + 2}"

var someNumber = 12
"embed {someNumber}"
```

Keep in mind that we are embedding expressions, so any valid expression can go
into the curly braces, including control structures.

Some characters within strings must be escaped. This includes characters like 
tab, newline, carriage return, and quotes.

For instance:

```imba
var stringWithTab = '\tindented'
```

The sequence of backslash `\` followed by one or more character is called an
'escape sequence' and represents these special characters.

Here is a list of common escape sequences:

- `\'` - single quote (used for single quotes inside single-quoted strings)
- `\"` - double quote (used for double quotes inside double-quoted strings)
- `\n` - newline
- `\t` - tab
- `\\` - backspace itself

A full list of recognized escape sequences can be found in an
[appendix](../appendices/escapes.md).

Imba also has a syntax for multi-line strings. These are strings where 
whitespace characters do not have to be explicitly escaped.

Multi-line strings are quoted using sets of three single- or double-quotes.

```imba
var longerText = """
                 A voluptates enim omnis. Eius exercitationem ad qui nemo atque 
                 aut asperiores. Modi perferendis qui dolor doloribus aut quia.

                    Culpa est harum beatae ipsam aut accusamus dolorum. Quo qui 
                    quia fugit incidunt consequuntur. Voluptas omnis nihil nam 
                    corporis. Earum ut eum excepturi at.
                 """

var longerSingle = '''
                   A voluptates enim omnis. Eius exercitationem ad qui nemo 
                   atque aut asperiores. Modi perferendis qui dolor doloribus 
                   aut quia.
                   '''
```

Note that in both cases, indentation is ignored. In the first example, the
second paragraph of the text is indented only 3 spaces compared to the first
one.

As with normal single- and double-quoted strings, embedding expressions only 
works with the double-quoted variant.

## Boolean

**typeof:** boolean

**MDN:** [Boolean](https://mzl.la/1zgVz8P)

The 'boolean' type has only two values, True and False. As their name suggests,
they represent truth values, and are commonly used in logic operations.

In Imba, boolean values have two names for each of the two values. The truth 
value for True can be written as either `true` or `yes`, whereas the False can
be written as either `false` or `no`. Both forms are exactly the same and the
choice is a matter of preference.

```imba
true
yes

false
no
```

The boolean values can be used in numeric operations as 1 (for `true`) and 0
(for `false`). It is not recommended to do this too often as it makes the code
harder to analyze most of the time.


## Undefined

**typeof:** boolean

**MDN:** [undefined](https://mzl.la/SsajwO)

There is only one value of the type 'undefined'. Undefined represents a an
absence of value. It has the same meaning and semantics as the JavaScript
counterparts.

Undefined value is represented by the `undefined` keyword.

The value appears frequently to represent different things that are missing.
For example when a missing property on an object is accessed, `undefined` is
returned. When an argument is not passed for a given function parameter, it
is `undefined`, and so on.

## Null

**typeof:** object

**MDN:** [null](https://mzl.la/1zDsM8O)

The null value may seem similar to `undefined` but it is a *value* that
represents 'no value'.

Null value is represented using the `null` keyword.

To differentiate between `undefined` and `null` conceptually, you could think
of `undefined` as being unintentional, and `null` as intentional absence of
value. Most of the time, the difference technically does not matter, but it
is common for methods that can foreseeably return no useful value to return
`null` rather than `undefined` (e.g., `documnent.getElementById` when an
element with a specified id does not exist).

The `null` value is of type 'object'. This is not a typo, and it's by design,
inherited as is from JavaScript.

```imba
var x = null
x === null  # yes
```

Another important property of `null` value is that it compares equal to 
`undefined` when non-strict equality operator is used:

```imba
null === undefined  # no
null == undefined   # yes
```
