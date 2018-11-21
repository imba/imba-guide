# Operators

Operators are used as part of expressions to express operations on one or
more values. 

Some operators will work on one type, while others may work on any type.

Some operators operate on a single value (unary operators), while others 
operate on values on the either side (binary operators).

In the 'usage' column, we will use `a` and `b` to mean values or expressions.
In the 'Assignment operators' section, `a` is either a variable or a property
on an object. If either `a` or `b` is written with a capital letter (`A` and
`B`), then it is a class.

!!! note
    We use the term 'nullable' to refer to values that could be either `null`
    or `undefined`.

## Cheats

- Most JavaScript operators work in Imba.
- Ternary operator is `if cond then x else y`.
- `===` can be written as `x is y` (also `x isnt y` for negation).
- Negation can be written as `not x`.
- `instanceof` can be written as `x isa Ctor`.
- Conditional assignment when not nullable using `x ?= y`.
- Conditional member access when not nullable using `x?:key` and `x?.key`.
- `new` operator is written as a static method `Ctor.new`.
- There are no `yield` and `**` operators.

## List of operators

### Arithmetic operators

op.  | usage     | description
---- | --------- | --------------------------------------------
`-`  | `-a`      | negative `a`
`+`  | `+a`      | plus `a`, or just `a`
`+`  | `a + b`   | add `a` to `b`
`-`  | `a - b`   | subtract `b` from `a` 
`*`  | `a * b`   | multiply `a` by `b`
`/`  | `a / b`   | divide `a` by `b`
`%`  | `a % b`   | remainder of division of `a` by `b`
`++` | `a++`     | increment then evaluate
`++` | `++a`     | evaluate then increment
`--` | `a--`     | decrement then evaluate
`--` | `--a`     | evaluate then decrement

### Comparison operators

op.    | usage       | description
------ | ----------- | --------------------------------------------
`is`   | `a is b`    | `a` is identical to `b` (are same)
`isnt` | `a isnt b`  | `a` is not identical to `b` (aren't same)
`==`   | `a == b`    | `a` equals `b` (but not identical)
`!=`   | `a != b`    | `a` does not equal `b`
`===`  | `a === b`   | same as `a is b`
`!==`  | `a !== b`   | same as `a isnt b`
`>`    | `a > b`     | `a` is greater than `b`
`>=`   | `a >= b`    | `a` is greater than or equals `b`
`<`    | `a < b`     | `a` is less than `b`
`<=`   | `a <= b`    | `a` is less than or equals `b`

### Bitwise operators

 op.  | usage      | description
----- | ---------- | --------------------------------------------
`~`   | `~a`       | bitwise not `a`
`&`   | `a & b`    | bitwise `a` AND `b`
`|`   | `a | b`    | bitwise `a` OR `b`
`^`   | `a ^ b`    | bitwise `a` XOR `b`
`>>`  | `a >> b`   | bitwise signed right shift `a` by `b` positions
`>>>` | `a >>> b`  | bitwise unsigned right shift `a` by `b` positions
`<<`  | `a << b`   | bitwise left shift `a` by `b` positions

### Logical operators

op.    | usage      | description
------ | ---------- | -------------------------------------------------------
`not`  | `not a`    | logical not `a`
`!`    | `!a`       | same as `not a`
`and`  | `a and b`  | logical `a` AND `b`
`&&`   | `a && b`   | same as `a and b`
`or`   | `a or b`   | logical `a` OR `b` (`b` evaluated when `a` is falsy)
`||`   | `a || b`   | same as `a or b`

### Relational operators

op.          | usage             | description
------------ | ----------------- | ------------------------------------------
`in`         | `a in b`          | whether value `a` exists in array `b`
`isa`        | `a isa B`         | whether a is an instance of class `B`
`instanceof` | `a instanceof B`  | same as `a isa b`

### Assignment operators

op.     | usage        | description
------- | ------------ | ------------------------------------------------------
`=`     | `a = b`      | assign value `b` to variable `a`
`?=`    | `a ?= b`     | assign value `b` to `a` if `a` is nullable
`+=`    | `a += b`     | add `b` to `a` and assign to `a`
`-=`    | `a -= b`     | subtract `b` from `a` and assign to `a`
`*=`    | `a *= b`     | multiply `a` by `b` and assign to `a`
`/=`    | `a /= b`     | divide `a` by `b` and assign to `a`
`%=`    | `a %= b`     | divide `a` by `b` and assign the remainder to `a`
`&=`    | `a &= b`     | bitwise AND `a` and `b` and assign to `a`
`|=`    | `a |= b`     | bitwise OR `a` and `b` and assign to `a`
`^=`    | `b ^= b`     | bitwise XOR `a` and `b` and assign to `a`
`>>=`   | `a >>= b`    | bitwise sig. right shift `a` by `b` and assign to `a`
`>>>=`  | `a >>>= b`   | bitwise uns. right shift `a` by `b` and assign to `a`
`<<=`   | `a <<= b`    | bitwise left shift `a` by `b` and assign to `a`

### Comma operator

op.     | usage             | description
------- | ----------------- | -------------------------------------------------
`,`     | `a, b`            | evaluate `a` then `b`, evaluate everything as `b`

### Grouping operator

op.     | usage             | description
------- | ----------------- | -------------------------------------------------
`(...)` | `(a)`             | evaluate `a` with priority

### Member access

op.     | usage             | description
------- | ----------------- | -------------------------------------------------
`[ ]`   | `a[b]`            | computed member `b` of an object/array `a`
`:`     | `a:b`             | member `b` of an object `a`
`?:`    | `a?:b`            | member `b` of an object `a` if `a` isn't nullable
`.`     | `a.b`             | invoke method `b` of object `a`
`?.`    | `a?.b`            | invoke method `b` object `a` if `a` isn't nullable

### Other operators

op.       | usage           | description
--------- | --------------- | -------------------------------------------------
`.new`    | `A.new b`       | create an instance of class `A` with argument `b`
`delete`  | `delete a:b`    | delete property `b` of object `a`
`typeof`  | `typeof a`      | the type of value `a`
`await`   | `await a`       | suspend an async function until `a` resolves

### Ternary operator

op.       | usage                  | description
--------- | ---------------------- | ------------------------------------------
`if-then` | `if a then b else c`   | if `a` is truthy, then `b` otherwise `c`


## Operator precedence

Not all operators have equal importance when an expression consists of multiple
operators. 

The order in which operators are evaluated depends on whether an
operator is left- or right-associative.

Left-associative means that for a given operator `X`, `a X b X c` is treated
as `(a X b) X c`: from left to right.

Right-associative means that for a given operator `X`, an expression `a X b X
c` will evaluate as `a X (b X c)`: from right to left.

All binary Imba operators are left-associative.

Some operators are also generally more important regardless of associativity.
As in mathematics, multiplication and division are more important than
addition and subtraction, for example. 

The following is a list of all the operators ordered by importance. The
'score' column is there to provide an indication of what operators have the
same importance.

score   | op.
------- | ------------------------------------------
20      | `(...)`
        |
19      | all member access operators
        | function calls
        | `in`
        |
18      | postfix increment and decrement
        |
17      | `.new`
        |
16      | logical and bitwise NOT
        | unary arithmetic operators
        | unary logical operators
        | unary bitwise operators
        | `typeof`
        | `delete`
        | `await`
        |
15      | (left blank for future use)
        |
14      | `*`, `/`, `%`
        |
13      | `+`, `-`
        |
12      | bitwise shift operators
        |
11      | `>`, `>=`, `<`, `<=`
        | `isa`, `instanceof`
        |
10      | `is`, `==`, `===`, `isnt`, `!==`
        |
9       | `&`
8       | `^`
7       | `|`
        |
6       | `and`, `&&`
5       | `or`, `||`
        |
4       | ternary operator
        | `?:`, `?.`
        |
3       | all assignment operators
        |
2       | (left blank for future use)
        |
1       | `,`

