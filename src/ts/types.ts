export type EasingType = false | EasingBezier | EasingFunction | Easing;
export type EasingBezier = number[];
export type EasingFunction = (progress: number) => number;

export enum Easing {
    easeInSine = 'easeInSine',
    easeOutSine = 'easeOutSine',
    easeInOutSine = 'easeInOutSine',
    easeInQuad = 'easeInQuad',
    easeOutQuad = 'easeOutQuad',
    easeInOutQuad = 'easeInOutQuad',
    easeInCubic = 'easeInCubic',
    easeOutCubic = 'easeOutCubic',
    easeInOutCubic = 'easeInOutCubic',
    easeInQuart = 'easeInQuart',
    easeOutQuart = 'easeOutQuart',
    easeInOutQuart = 'easeInOutQuart',
    easeInQuint = 'easeInQuint',
    easeOutQuint = 'easeOutQuint',
    easeInOutQuint = 'easeInOutQuint',
    easeInExpo = 'easeInExpo',
    easeOutExpo = 'easeOutExpo',
    easeInOutExpo = 'easeInOutExpo',
    easeInCirc = 'easeInCirc',
    easeOutCirc = 'easeOutCirc',
    easeInOutCirc = 'easeInOutCirc',
    easeInBack = 'easeInBack',
    easeOutBack = 'easeOutBack',
    easeInOutBack = 'easeInOutBack',
    easeInElastic = 'easeInElastic',
    easeOutElastic = 'easeOutElastic',
    easeInOutElastic = 'easeInOutElastic',
    easeInBounce = 'easeInBounce',
    easeOutBounce = 'easeOutBounce',
    easeInOutBounce = 'easeInOutBounce'
}
