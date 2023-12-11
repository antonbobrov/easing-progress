# easing-progress is a JavaScript library of easing functions

![Language](https://img.shields.io/github/languages/top/antonbobrov/easing-progress)
![gzip](https://img.shields.io/bundlejs/size/easing-progress)

* [See Demo](https://antonbobrov.github.io/easing-progress/)
* [See Documentation](https://antonbobrov.github.io/easing-progress/docs/)

## Dev Config
* node v20.2.0
* npm v9.6.6

## How to start with NPM
```sh
npm install easing-progress
```

## Example
```ts
import { easing, EaseOutCubic, EaseInOutCirc } from 'easing-progress';

const myProgress1 = easing(0.75, EaseOutCubic); // => 0.984375
const myProgress2 = easing(0.32, EaseInOutCirc); // => 0.11581254575402905
const myProgress3 = easing(0.32, [0.52, -0.41, 0, 1.43]); // => 0.5075000000000001
const myProgress4 = easing(0.32, (x) => {
  return Math.sin(x * Math.PI / 2);
}); // => 0.4817536741017153
```