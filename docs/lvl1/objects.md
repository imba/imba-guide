# Objects

Objects are simple collections of properties. Once created, objects can be
freely modified by reassigning values to existing properties, adding new
properties or removing properties. Due to their lightweight syntax, Objects
in JavaScript can be used as simple associative arrays, hashmaps, or dicts
found in other languages.

!!! warning
    Objects created using native Imba classes are different than objects 
    created using JavaScript constructors. Classes are covered [in level
    2](../lvl2/classes.md).

## Cheats

- Objects behave the same way as in JavaScript but with differences in syntax.
- Syntactically valid JavaScript object literal is valid in Imba.
- Commas `,` are not needed when properties are listed vertically.
- Braces are optional if objects are used as arguments.
- Braces are optional when nested under properties in object literals.
- Properties are accessed with `x:key`.
- Methods are called with `x.key` (parentheses are optional even with no
  arguments).
- Property access on a potentially nullable object is done with `x?:key`.
- Method call on a potentially nullable object is done with `x?:key`.
- Computed member access `x[expr]` works like in JavaScript.
- Can assign default value to properties with `x:key ?= y`.
- Object properties can be iterated with `for key of obj` or 
  `for key, val of obj`

## Object literals

The simplest way to create an object is the object literal syntax. This may 
come as a surprise to programmers coming from object-oriented languages where
objects must be instantiated using classes. 

While objects in Imba can also be instantiated using classes, there is very
little difference between such objects and objects created using the object
literal syntax.

```imba
var player = {
    score: 0
    lives: 3
    ammo: 100
}
```

An object literal is surrounded by a set of curly braces `{ }`. Inside the
curly braces, zero or more key-value pairs are listed. These are known as
object properties. Each property consists of a key name, a colon `:`, and a
value. If a key is present, it must have a value.

!!! warning
    If you are used to JavaScript objects, please note that commas are 
    optional when listing object keys vertically.

A key is always a string, and values are of any type.

When multiple properties are written on the same line, they are separated by
commas:

```imba
var gun = { type: 'ranged', power: 120, durability: 0.2 }
```

An empty object literal is simply a pair of curly braces with no content.

```imba
var dead = {}
```

Object literals can sometimes be written without curly braces. This is the
case in the following situations:

- When nesting objects inside other object literals.
- Used as an argument to a method or a function.

In the following example, `hotspot` property is an object with properties `x`
and `y`.

```imba
var level2 = {
    order: 2
    exists: 2
    hotspot:
        x: 12.1
        y: 44.2
}
```

In the next example, we are calling a method `startGame` with a single object
that has properties `level` and `player`.

```imba
startGame level: level2, player: player
```

!!! warning
    Please note that, unlike JavaScript, there is no shorthand for the cases
    where keys have the same name as a variable that is used as the value.

Properties on objects can be methods or functions (including `do` blocks).

```imba
var game = {
    level: level2,
    player: player,

    def start screen
        screen.setLevel self:level
        screen.setPlayer self:player
}
```

## Accessing the properties

Properties of an object are referenced by its key. There are three ways to 
access the properties.

- `:` - property access
- `.` - method access
- `[ ]` - computed access

The property access operator `:` is used to access the value of a property.

```imba
level2:order  # evaluates to 2
```

The method access operator `.` is used to call a method on an object.

```imba
game.start screen
```

In the above example, the `start` method on the `game` object is called with 
`sreen` as an argument.

The computed member access allows us to use any valid expression to calculate
the key of an object. This includes keys that cannot be used with the usual 
property and method access operators (e.g., names that contain spaces).

```imba
game['play' + 'er']

var key = 'level'
game[key]
```

If a key does not exist on an object, there is no error. Instead, the accessed
property will simply evaluate to `undefined`. Attempting to access properties
on `undefined` or `null` *is* an error, however.

Imba provides two operators to safely access properties on nullable objects (`undefined` and `null`):

```imba
var possiblyNull = null

possiblyNull?:lives         # `null` (the value of the object itself)
possiblyNull?.go 12, 33     # nothing happens
```

## Manipulating objects

Properties can be added to objects at any time by simply assigning to them.

```imba
var nightShadow = {
    type: 'skill'
    magic: no
    stealth: yes
    effect: 'invisibility'
}

nightShadow:effectDuration = 2

nightShadow:effectDuration  # 2
```

It is also possible to only assign the default value (that is, only assign a
value to a property that does not exist or is nullable).

```imba
nightShadow:effectDuration ?= 4

nightShadow:effectDuration  # still 2
```

To delete a property from an object, a `delete` operator can be used:

```imba
delete nightShadow:effectDuration

nightShadow:effectDuration  # undefined
```

## Iterating over object properties

We can iterate (loop) over object properties using the `for of` block.
We can either iterate just the keys or both keys and values.

```imba
var dragon = {
    health: 2000
    damage: 500
    hp: 240
}

for key of dragon
    console.log key     # logs 'health', 'damage', 'hp'

for key, val of dragon
    dragon[key] = val - 100

dragon:health   # 1900
dragon:hp       # 140
```

In the next example, we will merge an object into another one by iterating
over properties:

```imba
var snail = {
    speed: 2
    hp: 1
}

var poisonVomit = {
    damage: 200
    specialAbility: 'resist poison'
}

for key, val of poisonVomit
    snail[key] = val

snail:damage            # 200
snail:specialAbility    # 'resist poison'
```

You can read more about the `for of` block in the [Control
structures](./controls.md) section.

## Mutability and passing by reference

Objects are mutable. This means that when they are passed to methods and do
blocks, they are passed by reference and any changes made to them are visible
both to the method body and the caller.

```imba

var player = {
    score: 0
    lives: 3
    health: 100
}

def hit dmg, player
    player.health -= dmg

hit 30, player

console.log player:health  # logs 70
```

The `hit` method, instead of returning a copy of the `player` object that
is different from the one given to it, changes the `player` object in place.
This is called a 'mutation'.

In the example above, the player object was passed to the `hit` method, and
was mutated (changed) within it. However, because it is the same object as
the one defined outside the method, we are able to see the effects of the 
mutation from outside the `hit` method. This is known as a 'side effect'.

It is possible to prevent mutation of objects by using the `Object.freeze` 
function. This locks the object so that any attempt to mutate it will result
in an error.

```imba
Object.freeze player

player:score += 100     # error
```

## Object identity

Two objects are only compared equal if they are the exact same object. In
this context 'sameness' does not mean the the contents of the two objects,
but whether they point to the same thing in memory.

Consider the following examples:

```imba
var player1 = {
    score: 0
    lives: 3
    health: 100
}

var player2 = {
    score: 0
    lives: 3
    health: 100
}

var player3 = player1;

player1 is player2      # no
player1 is player3      # yes
```

Comparing two objects for equality by value requires inspection of individual
properties.

```imba
def equalObj x, y
    if x is y  # optimization in case two objects are identical
        yes
    else
        for key, val in x
            if val isnt y[key]
                return no
        yes

equalObj player1, player2   # yes
equalObj player1, player3   # yes
```

!!! note
    The reason this kind of object comparison is not provided out of the box
    is that it is (a) expensive, and (b) objects can be arbitrarily nested,
    in which case it becomes even more complex and expensive.

## Object types and classes

All objects have a type 'object' regardless of a class or constructor. To
determine whether some object is an instance of a class, we use the `isa`
operator.

If we create an object using a `Date` constructor from the standard
JavaScript API, we are able to tell it is a `Date` object.

```imba
var d = Date.new
var notDate = {}

d isa Date          # yes
notDate isa Date    # no
```

Note that all objects are ultimately of the class `Object` because any class
or constructor inherits from this class.

```imba
d isa Object        # yes
```

Inheritance will be discussed in more detail in level 2, when we talk about
[classes](../lvl2/classes.md).
