export type TEasingFunction = (x: number) => number;

export type TEasingBezier = number[];

export type TEasingType = false | TEasingBezier | TEasingFunction;
