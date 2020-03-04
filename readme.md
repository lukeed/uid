# uid [![build status](https://badgen.net/github/status/lukeed/uid)](https://github.com/lukeed/uid/actions) [![codecov](https://badgen.now.sh/codecov/c/github/lukeed/uid)](https://codecov.io/gh/lukeed/uid)

> A tiny (134B) and [fast](#benchmarks) utility to randomize unique IDs of fixed length

_**Fast object IDs.** Available for Node.js and the browser._<br>Generate randomized output strings of fixed length using lowercase alphanumeric characters (`a-z0-9`).

> **Notice:** Please note that this is not a cryptographically secure (CSPRNG) generator.

Additionally, this module is delivered as:

* **CommonJS**: [`dist/index.js`](https://unpkg.com/uid/dist/index.js)
* **ES Module**: [`dist/index.mjs`](https://unpkg.com/uid/dist/index.mjs)
* **UMD**: [`dist/index.min.js`](https://unpkg.com/uid/dist/index.min.js)

## Install

```
$ npm install --save uid
```


## Usage

```js
import uid from 'uid';

// length = 11 (default)
uid(); //=> 'fsm2vsgo1pr'
uid(); //=> 'gf34sezvoh6'

// customize length
uid(16); //=> 'zbb6cc3ay26omrdz'
uid(25); //=> 'lljjmo3f39rnjudsgqvzta1rb'
uid(32); //=> 'yrfiw88qlq1fgpm40lguz6u43gksfj4a'
```


## API

### uid(length?)
Returns: `String`

Creates a new random identifer of fixed length.

#### length
Type: `Number`<br>
Default: `11`

Then length of the output string.

> **Important:** Your risk of collisions decreases with longer strings!


## Benchmarks

> Running on Node.js v10.13.0

```
Validation (length = 11):
  ✔ hashids/fixed        (example: "QWjnegYbwZ1")
  ✔ nanoid/non-secure    (example: "o9SPLfEtDMB")
  ✔ nanoid               (example: "BbgkcjUV8fg")
  ✔ uid                  (example: "5j2t6tmjboz")
Benchmark (length = 11):
  hashids/fixed        x    358,452 ops/sec ±2.04% (95 runs sampled)
  nanoid/non-secure    x  4,855,107 ops/sec ±0.33% (96 runs sampled)
  nanoid               x    493,479 ops/sec ±0.42% (96 runs sampled)
  uid                  x  5,034,240 ops/sec ±0.24% (94 runs sampled)


Validation (length = 25):
  ✔ cuid                 (example: "ck7dod7qj0000ws7c5cmmh5mc")
  ✔ hashids/fixed        (example: "r9JOyLkQWjnegYbwZ1p0GDXNm")
  ✔ nanoid/non-secure    (example: "aIrSCUwGMsMSZ-1xnSB8myg0X")
  ✔ nanoid               (example: "51jS9SkdKG5lXW5Yg3L4juzuT")
  ✔ uid                  (example: "k0gd21k1p2y7qgwmgrgspo4uy")
Benchmark (length = 25):
  cuid                 x    160,075 ops/sec ±1.35% (90 runs sampled)
  hashids/fixed        x    337,598 ops/sec ±0.13% (98 runs sampled)
  nanoid/non-secure    x  2,246,032 ops/sec ±0.31% (96 runs sampled)
  nanoid               x    431,758 ops/sec ±0.71% (98 runs sampled)
  uid                  x  2,417,171 ops/sec ±0.33% (96 runs sampled)


Validation (length = 36):
  ✔ uuid/v1              (example: "e3304870-5e48-11ea-93a8-0d27db144950")
  ✔ uuid/v4              (example: "8f18bfb3-45f9-4c14-b949-87ed98cc41c1")
  ✔ hashids/fixed        (example: "EVq3Pr9JOyLkQWjnegYbwZ1p0GDXNmRBlAxg")
  ✔ @lukeed/uuid         (example: "c47bd63e-7975-47a6-96c2-ea6744c4e0c2")
  ✔ nanoid/non-secure    (example: "4yBHuV2LX1z6uYF2htLIq1dBK-Bqt4r-Il-Q")
  ✔ nanoid               (example: "I01YCalTULD9SorD6lWzDp30hL1_JbULU8UR")
  ✔ uid                  (example: "599tis8bq39vxc95vkfxxr80gwi1mnhuiorz")
Benchmark (length = 36):
  uuid/v1              x  1,485,783 ops/sec ±0.27% (97 runs sampled)
  uuid/v4              x    331,019 ops/sec ±0.86% (91 runs sampled)
  hashids/fixed        x    314,980 ops/sec ±2.07% (96 runs sampled)
  @lukeed/uuid         x  6,355,015 ops/sec ±0.43% (94 runs sampled)
  nanoid/non-secure    x  1,658,583 ops/sec ±0.23% (95 runs sampled)
  nanoid               x    402,224 ops/sec ±0.15% (97 runs sampled)
  uid                  x  1,719,753 ops/sec ±0.24% (95 runs sampled)
```


## Related

- [@lukeed/uuid](https://github.com/lukeed/uuid) - A tiny (230B), fast, and cryptographically secure UUID (V4) generator for Node and the browser

## Credits

Thank you [Matthew Mueller](https://github.com/matthewmueller) for gifting the `uid` name on npm.<br>
This module was previously known as `foid` (fast object IDs).

## License

MIT © [Luke Edwards](https://lukeed.com)
