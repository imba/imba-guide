# Comments

Comments are used to add annotation to your code or prevent pieces of code
from running. The contents of the comments are completely ignored by the
compiler. 

Imba has inline and block comments.

## Cheats

- Inline comments start with `#`
- Block comments are delimited by `###`

## Inline comments

The character that signifies a comment is the hash character `#`. Inline
comments begin at the first `#` on the line, and are terminated by a newline.

```imba
# This is a inline (single-line) comment.
'Imba'  # Inline comment can be used at the end of the code.
```

## Block comments

Block comments are delimited by triple-hash `###` which are on their own
lines. The initial triple-hash must be at the very beginning of the line but
can be followed by any characters.

```imba
###
This is a block comment.
It can span multiple lines.
###

###This is also a block comment.###

### And so is this.
###
```

!!! note
    When using block comments, at least one non-hash character must be
    present after the opening triple-hash.

## Using comments

Inline comments are usually used for short comments about the next or current
line. This is sometimes used to bring attention to a particular line or a few
lines or explain the less obvious.

```imba
var menuHeight = window::innerHeight * 0.8 - 42  # 42px from the top
```

Blocks comments are used for longer comments that describe the behavior of
methods and classes that come immediately after them, or even whole modules.

```imba
###
Add two values together. Also works on strings.

When `x` is a string, `y` can be of any type.
###
def add x, y
  x + y
```
