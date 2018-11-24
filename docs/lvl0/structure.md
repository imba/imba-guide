# Guide structure and conventions

The guide is divided into three parts.

[**Level 1**](../lvl1/index.md) covers the language basics. It gives you a
fairly complete coverage of all the basics that would be required to write
very simple programs.

[**Level 2**](../lvl2/index.md) covers the more complex concepts such as
modules and classes. It will give you a good foundation for the syntax and
mechanics of these concepts without going too deep into how you can use them
(there are better books on the topic).

**Bonus** material will cover miscellaneous topics that are outside of the
scope of a *language* guide. These topics include such things as building and
testing Imba programs.

## Cheats

Each section has a **Cheats** heading which gives an express overview for
experienced programmers.

## Conventions

### Strict

Imba, by default, does not compile with `use strict`. The code examples in 
this guide will assume `use strict`. If you don't know what this means, always
be sure to have `"use strict"` as the first line in your Imba files. You can 
read more about the strict mode [on MDN](https://mzl.la/2P35qaW).

### The global object

In code snippets, we will use `window` as the global object. Keep in mind that
on NodeJS, this object is called `global`.

### Compiler output

In the code examples, we will sometimes reference the compiled JavaScript
code. The result of the compilation will usually be presented in the same
line or the line below, and will be in the `#>> code...` format for brevity.

When the space does not permit, compiled code will be presented as a separate 
code block that includes the comment `/*** compiler output ***/` at the top.

### JavaScript programmer warnings

In some sections, we include a warning box to warn JavaScript developers of
significant differences between Imba and JavaScript. Like this:

!!! warning
    JavaScript developers, beware of this difference!
