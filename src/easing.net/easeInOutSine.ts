import { TEasingFunction } from '../types';

export const EaseInOutSine: TEasingFunction = (x) =>
  -(Math.cos(Math.PI * x) - 1) / 2;
