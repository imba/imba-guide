# About Imba

Imba is a dynamically typed multi-paradigm object-based language which
transpiles to performant JavaScript. 

## Features

Imba is primarily developed for web development, although it can be used to
write general purpose NodeJS programs. This is enabled by the following two 
features:

- **First-class tags** - declarative syntax for creating and updating DOM
  nodes similar to web components.
- **Memoized DOM** - a built-in high-performance DOM reconciler.

The language itself also offers interesting features that makes programming a
lot more fun:

- **Fully interoperable with JavaScript** - which allows progressive migration
  and gives us the ability to leverage existing tools.
- **Block expressions** - `if`, `try`, `while`, `until` and `for` loops are
  expressions that can be assigned and passed as arguments.
- **Implicit return** - last expression in a method is its return value.
- **Significant whitespace** - using whitespace to delimit blocks reduces
  the amount of punctuation and improves readability.
- **Multi-line strings and regexps** - improves code readability by not 
  requiring programmers to do crazy things just to do something as obvious as 
  this.

## Short history of the project

Imba was created around 2010 by Sindre Aarsaether
([@somebee](https://github.com/somebee/)) as a private project to port Ruby
to browsers. As time progressed, the project morphed into an effort to create
an optimal platform for end-to-end end web development.

Even though the speed was not one of the original goals, the implementation
of the Imba's DOM reconciler, also known as ['Memoized
DOM'](../bonus/memoized.md), has stood the test of time, and is, to date, one
of the fastest DOM reconciler designs on the market. Many of today's
high-performance designs use the same or similar techniques.

## About the name

The name Imba comes from the term 'imba' commonly used in the gaming world
to point to a character or an item that is overpowered and therefore causes 
the gameplay to become imbalanced.

## Relationship between Imba and JavaScript

Imba does not exist in isolation from the JavaScript ecosystem. It not only 
compiles to JavaScript, but can also import JavaScript modules and use any
global objects defined in the JavaScript runtime environment (e.g., `window` or 
`global`, `console.log`, and so on).

You can read more about the differences in [Imba vs JavaScript](javascript.md).
