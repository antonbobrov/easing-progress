# easing-progress - a JavaScript library of easing functions

Easing progress using easings.net functions and cubic bezier

<br>

### Demo: https://antonbobrov.github.io/easing-progress/
### Documentation: https://antonbobrov.github.io/easing-progress/docs/

<br>



## How to start with NPM
```sh
npm install easing-progress
```

## How to start with CDN
```html
<script src="https://cdn.jsdelivr.net/npm/easing-progress/dist/cdn/index.min.js"></script>
```

## Usage
```ts
import easingProgress, { Easing } from 'easing-progress';

const myProgress1 = easingProgress(0.75, Easing.easeOutCubic);
const myProgress1 = easingProgress(0.75, 'easeOutCubic');
const myProgress2 = easingProgress(0.32, 'easeInOutCirc');
const myProgress3 = easingProgress(0.32, [0.52, -0.41, 0, 1.43]);
const myProgress4 = easingProgress(0.32, (x) => {
    return Math.sin(x * Math.PI / 2);
});
```

## Supported easing functions
* Custom Function
* Custom cubic bezier
* Easing.net
    * easeInSine
    * easeOutSine
    * easeInOutSine
    * easeInQuad
    * easeOutQuad
    * easeInOutQuad
    * easeInCubic
    * easeOutCubic
    * easeInOutCubic
    * easeInQuart
    * easeOutQuart
    * easeInOutQuart
    * easeInQuint
    * easeOutQuint
    * easeInOutQuint
    * easeInExpo
    * easeOutExpo
    * easeInOutExpo
    * easeInCirc
    * easeOutCirc
    * easeInOutCirc
    * easeInBack
    * easeOutBack
    * easeInOutBack
    * easeInElastic
    * easeOutElastic
    * easeInOutElastic
    * easeInBounce
    * easeOutBounce
    * easeInOutBounce