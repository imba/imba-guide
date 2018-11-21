# Alternative type detection

Because of quirks in in JavaScript type system, some programmers resort to 
using `({}):toString.call`.

Here is an example:

```imba
def realType x
    ({}):toString.call(x)  # this line would return '[object Somethng]'
        .split(' ')[1]   # take the second half
        .slice 0, -1     # remove the trailing ']'

realType 'string'   # 'String'
realType 1          # 'Number'
realType null       # 'Null'
realType Date.new   # 'Date'
```

While this technique is not generally used, it can become useful when
building frameworks and libraries.

!!! note
    The `realType` function in the example is able to detect both the types
    and constructor names of (some) objects.
