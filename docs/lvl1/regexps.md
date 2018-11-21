# Regular expressions

Regular expression is a notation that represents patterns in strings. Different
languages have different flavors of this notation. Imba uses the JavaScript 
flavor, as regular expressions in Imba are implemented using JavaScript regular 
expressions.

Regular expressions in Imba use the same syntax as JavaScript regular
expressions, so we will not provide a full reference on the syntax. (See the
[MDN
article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
regular expressions.)

Single line regular expressions are written in the `/pattern/modifiers` form,
and the multi-line regular expressions are witten with triple-slashes.

In multi-line regular expressions, any unescaped whitespace is collapsed,
which is not the case with single-line expressions.

```imba
/reg exp/gi		# normal regexp

///				# multi-line regexp
(can use multi-line regexp
# Can add comments inside the regular expressions.
| that ignores whitespace
)?
/// # same as /(canusemulti-lineregexp|thatignoreswhitespace)?/
```
