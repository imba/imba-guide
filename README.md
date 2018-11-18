# Imba guide

This is a short guide to the [Imba](http://imba.io/) language and web 
development platform.

Imba is a general purpose programming language that compiles to JavaScript and 
is optimized for writing performant front end web applications.

## Requirements

System packages:

- [Python](https://www.python.org/downloads/) (for documentation generator)
- [NodeJS](https://nodejs.org/en/) (for the playground)

Install the dependencies for the Sphinx documentation generator:

- Go into the repository directory
- Run `pip install -r requirements.txt`

Install the dependencies for the playground:

- Go into the repository directory
- Run `npm install`

## Quick start

To build the documentation, go to the project directory and run `make`.

The compiled documentation should be present in `build/html/index.html`. Open 
that file in your browser.

You can also read the source Markdown files [directly](docs/index.md).

## Using the playground

The playground is a simple Imba module that is set up to compile using Webpack.
The idea is to open the compiled code and the source side-by-side and compare
the source to the output.

To start the automatic compilation, run `npm run watch`.

The compiled JavaScript will appear in `dist/client.js`.

## Directory structure

- `docs/` - documentation source (`index.md` is the starting point)
- `build/` - generated HTML for the documentation (appears after running `make`)
- `code/` - playground code
- `dist/` - compiled JavaScript for the playground
