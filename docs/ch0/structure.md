# Guide structure and conventions

The guide is divided into three parts.

[**Chapter 1**](../ch1/index.md) covers the language basics. It gives you a
fairly complete coverage of all the basics that would be required to write
very simple programs.

[**Chapter 2**](../ch2/index.md) covers the more complex concepts such as
modules and classes. It will give you a good foundation for the syntax and
mechanics of these concepts without going too deep into how you can use them
(there are better books on the topic).

[**Appendices**](../appendices/index.md) will cover miscellaneous topics that
are outside of the scope of a *language* guide. These topics include editor
such things as building and testing Imba programs, and tips of those of you
who come from a JavaScript background.

## Conventions

### The global object

In code snippets, we will use `window` as the global object. Keep in mind that
on NodeJS, this object is called `global`.

### Compiler output

In the code examples, we will sometimes reference the compiled JavaScript
code. The result of the compilation will usually be presented in the same
line or the line below, and will be in the `#>> code...` format for brevity.

When the space does not permit, compiled code will be presented as a separate 
code block that includes the comment `/*** compiler output ***/` at the top.
