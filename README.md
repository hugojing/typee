# typee

A Javascript library for type checking.

## Installation

Use Yarn or npm:

```bash
$ yarn add typee
```

```bash
$ npm i typee --save
```

## Module Loading

It's an UMD module, so you can:

```js
// ECMAScript 2015+ (via Babel)
import typee from 'typee'
```

```js
// CommonJS
const typee = require('typee')
```

```html
<!-- browser globals -->
<script src="YOUR_PATH_TO/node-modules/typee/dist/typee-umd-compiled.min.js" />
```

## Usage

```js
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
