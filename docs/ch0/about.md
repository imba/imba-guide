# About Imba

Imba is a multi-paradigm object-based language which transpiles to performant
JavaScript. It is primarily developed for web development, although it can be
used to write general purpose NodeJS programs. Imba has first-class tags, a
declarative syntax for creating and updating DOM nodes similar to components
in modern web frameworks.

## Short history of the project

Imba started around 2010 by Sindre Aarsaether
([@somebee](https://github.com/somebee/)) as a private project to port Ruby
to browsers. As time progressed, the project morphed into an effort to create
an optimal platform for front end development. 

Even though the speed was not one of the original goals, the implementation
of the Imba's DOM reconciler, also known as ['memoized
DOM'](../appendices/memoized.md), has stood the test of time, and is, to date,
one of the fastest implementations of DOM reconciler on the market.

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
