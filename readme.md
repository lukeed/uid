# foid [![build status](https://badgen.net/github/status/lukeed/foid)](https://github.com/lukeed/foid/actions) [![codecov](https://badgen.now.sh/codecov/c/github/lukeed/foid)](https://codecov.io/gh/lukeed/foid)

> A tiny (133B) and [fast](#benchmarks) utility to generate random IDs of fixed length

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

// length = 8 (default)
foid(); //=> 'mrizobl6'
foid(); //=> 'kedrecv4'

// customize length
foid(11); //=> 'fsm2vsgo1pr'
foid(16); //=> 'zbb6cc3ay26omrdz'
foid(25); //=> 'lljjmo3f39rnjudsgqvzta1rb'
```


## API

### foid(length?)
Returns: `String`

Creates a new random identifer of fixed length.

#### length
Type: `Number`<br>
Default: `8`

Then length of the output string.

> **Important:** Your risk of collisions decreases with longer strings!


## Benchmarks

> Running on Node.js v10.13.0

```
Validation (length = 16):
  ✔ hashids/fixed    (example: "LkQWjnegYbwZ1p0G")
  ✔ nanoid           (example: "jJBdWxGRNQTG6v5R")
  ✔ foid             (example: "lsytt7o8vzzf0hv3")

Benchmark (length = 16):
  hashids/fixed    x   344,442 ops/sec ±1.98% (97 runs sampled)
  nanoid           x   456,787 ops/sec ±0.24% (94 runs sampled)
  foid             x 3,468,928 ops/sec ±0.37% (93 runs sampled)


Validation (length = 25):
  ✔ cuid             (example: "ck7bkrpai0000h57c92gga7di")
  ✔ hashids/fixed    (example: "r9JOyLkQWjnegYbwZ1p0GDXNm")
  ✔ nanoid           (example: "NvNGOwgSW47nnCtH97Imcwe2m")
  ✔ foid             (example: "grgh8xbpklnyse1x5foak5r7i")

Benchmark (length = 25):
  cuid             x   161,450 ops/sec ±1.29% (89 runs sampled)
  hashids/fixed    x   338,993 ops/sec ±2.76% (96 runs sampled)
  nanoid           x   435,988 ops/sec ±0.24% (93 runs sampled)
  foid             x 2,431,974 ops/sec ±0.34% (95 runs sampled)


Validation (length = 36):
  ✔ uuid/v1          (example: "3d062be0-5d21-11ea-9c7e-2d6e477e4e0c")
  ✔ uuid/v4          (example: "2cc6b1de-4564-469c-8bc9-02f1e090a4e5")
  ✔ hashids/fixed    (example: "EVq3Pr9JOyLkQWjnegYbwZ1p0GDXNmRBlAxg")
  ✔ @lukeed/uuid     (example: "8e2929d4-0374-467d-a6a7-d9a969c78c8d")
  ✔ nanoid           (example: "Z-6-Rk8QtOM6iAaZ46THD0-_HqigXnnIbso1")
  ✔ foid             (example: "lfehy3buzytmv6dgt208upz1ytniti5do2ko")

Benchmark (length = 36):
  uuid/v1          x 1,503,104 ops/sec ±0.28% (93 runs sampled)
  uuid/v4          x   338,516 ops/sec ±0.72% (88 runs sampled)
  hashids/fixed    x   321,259 ops/sec ±2.13% (96 runs sampled)
  @lukeed/uuid     x 6,112,373 ops/sec ±0.28% (95 runs sampled)
  nanoid           x   403,658 ops/sec ±0.30% (96 runs sampled)
  foid             x 1,768,750 ops/sec ±0.21% (95 runs sampled)
```

## Related

- [@lukeed/uuid](https://github.com/lukeed/uuid) - A tiny (230B), fast, and cryptographically secure UUID (V4) generator for Node and the browser

## License

MIT © [Luke Edwards](https://lukeed.com)
