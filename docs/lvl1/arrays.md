# Arrays

Arrays are objects containing an ordered and indexed list of values. Just like
[objects](objects.md), arrays can be modified after creation, by adding or
removing values.

## Cheats

- Arrays work in Imba the same way as in JavaScript.
- Commas `,` are optional when listing values vertically.
- Arrays can be looped over with `for val in arr` and `for val, idx in arr`.

## Creating arrays

Arrays can be created either using the literal syntax, or by evaluating
`for`, `while`, or `until` loops (more on those in [Control
structure](./controls.md)).

Array literals are written using a pair of square brackets `[ ]` containing
a list of comma-separated values.

```imba
var moves = [3, 2, 4]
```

When values are listed vertically, commas are optional.

```imba
var achievements = [
    'level up',
    'collect 100 gold',
    'triple combo',
]
```

Arrays can also be values in other arrays.

```imba
var L = [
    [0, 1, 0]
    [0, 1, 0]
    [0, 1, 1]
]
```

Empty arrays are written as just a pair of brackets.

```imba
var yourProblems = []
```

## Accessing array elements

Array elements are accessed using computed member access operator `[ ]`. 
Indices of array members start at 0, so the first element in the array has
an index 0, the next one is 1, then 2, and so on. The last index in an array
is always one less than the array's length.

```imba
var scores = [100, 200, 400, 500]
scores[0]   # 100
scores[2]   # 400
```

Array length is obtained through the `:length` property.

```imba
scores:length   #4
var lastItem = scores[scores:length - 1]
```

As can be seen from the last example, we can use arbitrary expression inside
the square brackets, so long as they evaluate to a number.

Accessing an array index that is larger than its maximum index will evaluate
to `undefined` and will not result in an error.

```imba
scores[40]  # undefined
```

## Iterating over array members

Array members can be iterated (looped) over using the `for in` block. We can
either iterate over the values only, or both values and indices.

```imba
var colors = ['black', 'blue', 'red', 'green', 'white']

for color in colors
    console.log color 
    # 'black'
    # 'blue'
    # 'red'
    # 'green'
    # 'white'

for color, i in colors
    console.log i, color
    # 0 'black'
    # 1 'blue'
    # 2 'red'
    # 3 'green'
    # 4 'white'

var colorIndex = {}

for color, i in colors
    colorIndex[color] = i

colorIndex:red    # 2
```

You can read more about the `for in` block in the [Control
structures](./controls.md) section.

## Manipulating arrays

Arrays can be manipulated by assigning values to array indices, adding or 
removing members from them, or reversing them.

Values at an existing index can be changed by simply assigning to that
member.

```imba
var classes = ['rogue', 'wizard', 'knight', 'paladin']

classes[0] = 'thief'

classes[0]  # 'thief'
```

Non-existent indices should not be used when assigning. While it may seem
to work, it will result in strange behavior.

```imba
classes[6] = 'programmer'

classes:length  # 7

for cls in classes
    console.log cls 
    # 'thief'
    # 'wizard'
    # 'knight'
    # 'paladin',
    # undefined
    # undefined
    # 'programmer'

classes
# ['thief', 'wizard', 'knight', 'paladin', <2 empty slots>, 'programmer']
```

For simply iterating over the array using `for in`, it would seem as if nothing
is wrong, but the two `undefined` members that were logged are actually not 
real members. They are called 'empty slots', and affect the behavior of 
different array methods we will discuss later.

The only exception to the above recommendation is the index following the
last one. The index after the last one is also the value of the `:length`
property.

```imba
var classes = ['rogue', 'wizard', 'knight', 'paladin']
classes[classes:length] = 'programmer'

for cls in classes
    console.log cls 
    # 'rogue'
    # 'wizard'
    # 'knight'
    # 'paladin',
    # 'programmer'
```

## Useful methods and properties

- [`:length`](https://mzl.la/2P1v4wS)
- [`.concat`](https://mzl.la/2OZBjRU)
- [`.every`](https://mzl.la/2OZTeYv)
- [`.fill`](https://mzl.la/2OYwVmc)
- [`.filter`](https://mzl.la/2P1uQ90)
- [`.find](https://mzl.la/2OYD69N)
- [`.findIndex`](https://mzl.la/2OZDBR0)
- [`.forEach`](https://mzl.la/2OYL0Qg)
- [`.includes`](https://mzl.la/2OVZXTq)
- [`.indexOf`](https://mzl.la/2OW0eWs)
- [`.join`](https://mzl.la/2OZDOng)
- [`.map`](https://mzl.la/2OXrzHH)
- [`.pop`](https://mzl.la/2OXdpq3)
- [`.push`](https://mzl.la/2OZwXtM)
- [`.reduce`](https://mzl.la/2OZDVzc)
- [`.reduceRight`](https://mzl.la/2P0r1AL)
- [`.reverse`](https://mzl.la/2OVWyUt)
- [`.shift`](https://mzl.la/2P1vIui)
- [`.slice`](https://mzl.la/2OYYCel)
- [`.some`](https://mzl.la/2OZE4Tg)
- [`.sort`](https://mzl.la/2OTOHXH)
- [`.splice`](https://mzl.la/2OZEVDs)
- [`.unshift`](https://mzl.la/2P1qBds)
