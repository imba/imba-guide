# Regular expressions

Regular expression is a language that represents patterns in strings.
Different programming languages have different flavors of this notation. Imba
uses the JavaScript flavor. Regular expressions are used to test for, search
for or extract character patterns in strings.

## Cheats

- The regular expression syntax and flags are the same as in JavaScript.
- Multi-line regular expressions are supported with `///`.
- *Unescaped* whitespace in multi-line regular expressions are ignored.

## Writing regular expressions

Single line regular expressions are written in the `/pattern/modifiers` form,
and the multi-line regular expressions are written with triple-slashes.

In multi-line regular expressions, any unescaped whitespace is collapsed,
which is not the case with single-line expressions.

This is an example of a single-line regular expression:

```imba
/reg exp/
```

This is an example of a multi-line regular expression:

```imba
///
(can use multi-line regexp
# Can add comments inside the regular expressions.
| that ignores whitespace
)?
///
```

The second example is identical to the following:

```imba
/(canusemulti-lineregexp|thatignoreswhitespace)?/
```

Regular expressions can have flags. The flags are single characters that are
written directly after the closing slash `/`. These flags change the way 
regular expressions operate.

```imba
/reg exp/gi
```

The example regular expression has `g` and `i` flags. The `g` flag tells the
regular expression to apply 'globally' (match all occurrences, not just the
first one), and `i` flag tells it to 'ignore' the differences between upper-
and lower-case letters.

Regular expressions can also be created from strings using the `RegExp` 
constructor.

```imba
RegExp.new '\\w+', 'gi'
```

Although the regular expression literal syntax is normally preferred, the 
constructor can be used to create regular expressions dynamically by using
template strings:

```imba
var name = 'John'
RegExp.new "[a-z]+_{name}\\.txt", 'i'
```

!!! warning
    When constructing regular expressions from strings with embedded
    variables, you should be careful to escape any backslashes in the
    variable. Failure to do so may allow the users of your program to modify
    the meaning of your regular expression by including backslashes in the 
    input.

## Regular expression syntax

Regular expressions in Imba use the same notation as the JavaScript regular
expressions, so we will not provide a full reference on the syntax. See the
[MDN article](https://mzl.la/2P3AveU) on regular expressions for more
details.

## Useful methods and properties

- [`:flags`](https://mzl.la/2OZUCKH)
- [`:global`](https://mzl.la/2OZV3EP)
- [`:ignoreCase`](https://mzl.la/2OTPMyJ)
- [`:lastIndex`](https://mzl.la/2P1wZl4)
- [`:multiline`](https://mzl.la/2OZFGMO)
- [`:source`](https://mzl.la/2OZnXVQ)
- [`:sticky`](https://mzl.la/2OZ1asV)
- [`:unicode`](https://mzl.la/2OVZoJ7)
- [`.exec`](https://mzl.la/2P0siI3)
- [`.test`](https://mzl.la/2OZpew6)

## String methods that accept regular expressions

Some string methods accept regular expressions. These are:

- [`.replace`](https://mzl.la/2OZTmqU)
- [`.split`](https://mzl.la/2OXq4cx)
- [`.match`](https://mzl.la/2P0suqL)
- [`.replace`](https://mzl.la/2OZTmqU)
