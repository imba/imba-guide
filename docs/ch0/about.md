# About Imba

Imba is a multi-paradigm object-based language which transpiles to JavaScript.
It is primarily developed for web development, although it can be used to write
general purpose NodeJS programs.

Imba started as a private project to power the Scrimba.com service. It is
created and (as of this writing) maintained by Sindre Aarsaether 
([@somebee](https://github.com/somebee/)). The first commit to the Imba's
GitHub repository had been made on Mar 3, 2015.

## Relationship between Imba and JavaScript

Imba does not exist in isolation from the JavaScript ecosystem. It not only 
compiles to JavaScript, but can also import JavaScript modules and use any
global objects defined in the JavaScript runtime environment (e.g., `window` or 
`global`, `console.log`, and so on).

You can read more about the differences in [Imba vs JavaScript](javascript.md).

## Features

Notable features include:

- Full interoperability with the JavaScript ecosystem.
- First-class tags, a lightweight syntax for defining custom tags for use in 
  DOM node creation and manipulation.
- 'Everything is an expression' semantics found in languages like Ruby.
- Indentation based syntax with no block delimiters.
- Built-in extremely fast DOM reconciler for building fast-updating sites.