# Escape sequences

Escape sequence is a sequence of backslash `\` followed by one or more 
characters. They are used to represent some of the special characters in a 
strings and regular expressions.

## Common escape sequences

* `\'` - single quote
* `\"` - double quote
* `\\` - backslash
* `\b` - backspace
* `\f` - form feed
* `\n` - line feed
* `\r` - carriage return
* `\t` - horizontal tab
* `\v` - vertical tab
* `\0` - NULL character

## Hexadecimal escape sequences

Some characters can be escaped using hexadecimal notation. These are the
characters in the ASCII range (0-255). The hexadecimal escape sequences are 
in the `\xnn` format where `nn` is a two-digit hexadecimal number.

## Unicode escape sequences

There are two formats of the Unicode escape sequences.

- `\unnnn` - UTF-16 with four hexadecimal digits `nnnn`
- `\u{nnnn}` ~ `\u{nnnnn}` - Unicode with four or five hexadecimal digits `nnnn`

A full table of Unicode characters can be found on
[unicode-table.com](https://unicode-table.com/).
