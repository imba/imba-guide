# "Hello, World" example

Here is a small "Hello, World" application as a quick glance at Imba.

## The code

```imba
var state = {
  name: 'World'
}

tag App
  def render
    <self> 
      <p> "Hello, {data:name}"
      <p>
        <input[data:name]>


Imba.mount <App[state]>
```

You can see the code in a live sandbox [at
Scrimba](https://scrimba.com/c/cZem7tB).

## Breakdown

The state [variable](../lvl1/vars.md) is an [object](../lvl1/objects.md) that 
contains the application state. In our case, it only has one property, `name`,
which starts off as a [string](../lvl1/primitives.md#string) `'World'`.

A custom [tag](../lvl2/tags.md), `App`, contains the `render` method that
renders the application. The special `<self>` tag stands for the DOM element
for the custom tag itself, and tags below it represent the child elements.
The string `"Hello, {data:name}"` uses interpolation to insert the value of
`data:name`. `data` is a special property on tags that points to values bound
to the tags.

The `<input[data:name]>` creates an input element with `data:name` bound to it.
This is two-way data binding where changes to the input element will update the
`data:name` and vice-versa.

Finally, with `Imba.mount` we mount the application into `document.body`, and
bind the `state` object to the `App` tag.
