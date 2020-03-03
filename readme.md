# foid [![build status](https://badgen.net/github/status/lukeed/foid)](https://github.com/lukeed/foid/actions) [![codecov](https://badgen.now.sh/codecov/c/github/lukeed/foid)](https://codecov.io/gh/lukeed/foid)

> A tiny (134B) and [fast](#benchmarks) utility to generate random IDs of fixed length

_**Fast object IDs.** Available for Node.js and the browser._<br>Generate randomized output strings of fixed length using lowercase alphanumeric characters (`a-z0-9`).

> **Notice:** Please note that this is not a cryptographically secure (CSPRNG) generator.

Additionally, this module is delivered as:

* **CommonJS**: [`dist/index.js`](https://unpkg.com/foid/dist/index.js)
* **ES Module**: [`dist/index.mjs`](https://unpkg.com/foid/dist/index.mjs)
* **UMD**: [`dist/index.min.js`](https://unpkg.com/foid/dist/index.min.js)

## Install

```
$ npm install --save foid
```


## Usage

```js
import foid from 'foid';

// length = 11 (default)
foid(); //=> 'fsm2vsgo1pr'
foid(); //=> 'gf34sezvoh6'

// customize length
foid(16); //=> 'zbb6cc3ay26omrdz'
foid(25); //=> 'lljjmo3f39rnjudsgqvzta1rb'
foid(32); //=> 'yrfiw88qlq1fgpm40lguz6u43gksfj4a'
```


## API

### foid(length?)
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
  ✔ hashids/fixed    (example: "QWjnegYbwZ1")
  ✔ nanoid           (example: "bg7EJCm_Nqr")
  ✔ foid             (example: "20075xrt1pu")
Benchmark (length = 11):
  hashids/fixed    x   358,492 ops/sec ±2.03% (98 runs sampled)
  nanoid           x   455,771 ops/sec ±0.23% (98 runs sampled)
  foid             x 4,917,033 ops/sec ±0.44% (93 runs sampled)


Validation (length = 16):
  ✔ hashids/fixed    (example: "LkQWjnegYbwZ1p0G")
  ✔ nanoid           (example: "AAT4FkNDn-aHq85-")
  ✔ foid             (example: "o35hr3fodrvl08wd")
Benchmark (length = 16):
  hashids/fixed    x   359,151 ops/sec ±0.20% (97 runs sampled)
  nanoid           x   475,616 ops/sec ±0.22% (95 runs sampled)
  foid             x 3,622,540 ops/sec ±0.16% (91 runs sampled)


Validation (length = 25):
  ✔ cuid             (example: "ck7bmh0fy0000ig7c516i9dx3")
  ✔ hashids/fixed    (example: "r9JOyLkQWjnegYbwZ1p0GDXNm")
  ✔ nanoid           (example: "xzNUa5jeWSUFAB9jzmaZpCMaV")
  ✔ foid             (example: "3q87leuz1iiu4easjqsrgcj5i")
Benchmark (length = 25):
  cuid             x   158,939 ops/sec ±0.61% (93 runs sampled)
  hashids/fixed    x   330,830 ops/sec ±2.90% (96 runs sampled)
  nanoid           x   433,802 ops/sec ±0.34% (93 runs sampled)
  foid             x 2,446,284 ops/sec ±0.39% (97 runs sampled)


Validation (length = 36):
  ✔ uuid/v1          (example: "9dbdc9b0-5d27-11ea-a6bf-3be13a6bca5a")
  ✔ uuid/v4          (example: "d1846c4b-6794-4c1e-89ea-30ed21e24c40")
  ✔ hashids/fixed    (example: "EVq3Pr9JOyLkQWjnegYbwZ1p0GDXNmRBlAxg")
  ✔ @lukeed/uuid     (example: "eb9fac31-53af-4699-9205-9b1d23474b6b")
  ✔ nanoid           (example: "wf9fq-M_-1SCrSBQEBOtFhLgGm2LLTeuiJKl")
  ✔ foid             (example: "k98vi4c6lf77oc8ngerrkv3xtr0nvtkup1mg")
Benchmark (length = 36):
  uuid/v1          x 1,509,781 ops/sec ±0.16% (98 runs sampled)
  uuid/v4          x   335,638 ops/sec ±1.02% (91 runs sampled)
  hashids/fixed    x   322,714 ops/sec ±0.20% (97 runs sampled)
  @lukeed/uuid     x 6,368,185 ops/sec ±0.23% (96 runs sampled)
  nanoid           x   399,746 ops/sec ±0.26% (96 runs sampled)
  foid             x 1,772,239 ops/sec ±0.18% (97 runs sampled)
```

## Related

- [@lukeed/uuid](https://github.com/lukeed/uuid) - A tiny (230B), fast, and cryptographically secure UUID (V4) generator for Node and the browser

## License

MIT © [Luke Edwards](https://lukeed.com)
