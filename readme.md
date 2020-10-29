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

You can run the benchmark(s) yourself via the [`/bench`](/bench) directory.

All items listed pass a validation step for length and uniqueness. <br>
Items marked with a `†` are cryptographically secure (via CSPRNG).


> Running on Node.js v12.18.4

```
Benchmark (length = 11):
  hashids/fixed        x   387,306 ops/sec ±1.03% (92 runs sampled)
  nanoid/non-secure    x  5,338,433 ops/sec ±0.20% (95 runs sampled)
† nanoid               x  2,705,158 ops/sec ±0.31% (95 runs sampled)
† uid/secure           x  9,648,755 ops/sec ±0.18% (96 runs sampled)
  uid/single           x  4,843,529 ops/sec ±0.19% (96 runs sampled)
  uid                  x 21,276,788 ops/sec ±0.37% (94 runs sampled)

Benchmark (length = 16):
  hashids/fixed        x    409,228 ops/sec ±0.36% (98 runs sampled)
  nanoid/non-secure    x  3,643,896 ops/sec ±1.27% (96 runs sampled)
† nanoid               x  2,273,555 ops/sec ±0.15% (95 runs sampled)
† uid/secure           x  9,167,545 ops/sec ±0.32% (95 runs sampled)
  uid/single           x  3,624,579 ops/sec ±0.29% (95 runs sampled)
  uid                  x 24,770,463 ops/sec ±0.41% (97 runs sampled)

Benchmark (length = 25):
  cuid                 x    177,241 ops/sec ±1.38% (91 runs sampled)
  hashids/fixed        x    396,013 ops/sec ±0.21% (98 runs sampled)
  nanoid/non-secure    x  2,477,463 ops/sec ±0.37% (96 runs sampled)
† nanoid               x  1,794,062 ops/sec ±0.18% (97 runs sampled)
† uid/secure           x  3,778,663 ops/sec ±0.16% (95 runs sampled)
  uid/single           x  2,428,167 ops/sec ±0.27% (96 runs sampled)
  uid                  x 24,580,091 ops/sec ±0.31% (96 runs sampled)

Benchmark (length = 36):
  uuid/v1              x  1,738,574 ops/sec ±0.36% (97 runs sampled)
  uuid/v4              x  1,276,888 ops/sec ±0.26% (94 runs sampled)
  hashids/fixed        x    374,294 ops/sec ±0.14% (98 runs sampled)
  nanoid/non-secure    x  1,816,630 ops/sec ±0.31% (97 runs sampled)
† nanoid               x  1,364,928 ops/sec ±0.18% (95 runs sampled)
† @lukeed/uuid/secure  x  5,144,752 ops/sec ±0.28% (93 runs sampled)
  @lukeed/uuid         x  5,950,932 ops/sec ±0.53% (95 runs sampled)
† uid/secure           x  5,163,209 ops/sec ±0.32% (96 runs sampled)
  uid/single           x  1,755,748 ops/sec ±0.24% (99 runs sampled)
  uid                  x 20,166,119 ops/sec ±0.66% (94 runs sampled)
```

> Running on Chrome 85.0.4183.121

```
Benchmark (length = 11):
  hashids/fixed        x    369,393 ops/sec ±1.04% (67 runs sampled)
  nanoid/non-secure    x  4,741,795 ops/sec ±0.67% (68 runs sampled)
† nanoid               x    176,138 ops/sec ±7.17% (57 runs sampled)
† uid/secure           x  2,061,703 ops/sec ±3.95% (65 runs sampled)
  uid/single           x  4,547,527 ops/sec ±0.29% (67 runs sampled)
  uid                  x 21,073,518 ops/sec ±0.60% (67 runs sampled)

Benchmark (length = 16):
  hashids/fixed        x    362,882 ops/sec ±0.25% (67 runs sampled)
  nanoid/non-secure    x  3,245,036 ops/sec ±1.05% (67 runs sampled)
† nanoid               x    165,535 ops/sec ±5.21% (59 runs sampled)
† uid/secure           x  1,676,705 ops/sec ±0.25% (68 runs sampled)
  uid/single           x  3,322,695 ops/sec ±0.49% (67 runs sampled)
  uid                  x 24,074,441 ops/sec ±0.35% (67 runs sampled)

Benchmark (length = 25):
  cuid                 x     99,011 ops/sec ±6.09% (57 runs sampled)
  hashids/fixed        x    349,187 ops/sec ±0.21% (68 runs sampled)
  nanoid/non-secure    x  2,245,251 ops/sec ±1.21% (61 runs sampled)
† nanoid               x    143,529 ops/sec ±4.53% (62 runs sampled)
† uid/secure           x    936,133 ops/sec ±2.14% (67 runs sampled)
  uid/single           x  2,276,265 ops/sec ±1.17% (66 runs sampled)
  uid                  x 23,409,912 ops/sec ±1.81% (67 runs sampled)

Benchmark (length = 36):
  uuid/v1              x  1,695,352 ops/sec ±0.26% (67 runs sampled)
  uuid/v4              x    294,032 ops/sec ±1.75% (63 runs sampled)
  hashids/fixed        x    340,402 ops/sec ±0.37% (50 runs sampled)
  nanoid/non-secure    x  1,611,905 ops/sec ±0.45% (66 runs sampled)
† nanoid               x    118,006 ops/sec ±6.31% (52 runs sampled)
† @lukeed/uuid/secure  x    859,592 ops/sec ±0.54% (67 runs sampled)
  @lukeed/uuid         x  6,041,873 ops/sec ±0.33% (66 runs sampled)
† uid/secure           x    776,658 ops/sec ±0.31% (56 runs sampled)
  uid/single           x  1,646,199 ops/sec ±1.17% (66 runs sampled)
  uid                  x 22,779,817 ops/sec ±0.66% (67 runs sampled)
```


## Related

- [hexoid](https://github.com/lukeed/hexoid) - A slightly larger (190B) but extremely fast variant of this module with a different API
- [@lukeed/uuid](https://github.com/lukeed/uuid) - A tiny (230B), fast, and cryptographically secure UUID (V4) generator for Node and the browser

## Credits

Thank you [Matthew Mueller](https://github.com/matthewmueller) for gifting the `uid` name on npm.<br>
This module was previously known as `foid` (fast object IDs).

## License

MIT © [Luke Edwards](https://lukeed.com)
