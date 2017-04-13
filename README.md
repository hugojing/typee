# typee

A Javascript library for type checking.

Only support ES2015+ modules now.

## Usage

```js
import typee from 'typee'

typee(null) // "Null"

typee(1) // "Number"

typee([1, 2, 3]) // "Array"

typee({k: 'v'}) // "Object"

typee(new Date()) // "Date"

typee(new Map()) // "Map"

typee(new Error()) // "Error"

typee(new Event('evt')) // "Event"

typee(async function() {}) // "AsyncFunction"

typee(new Promise(resolve => resolve(1))) // "Promise"

```
