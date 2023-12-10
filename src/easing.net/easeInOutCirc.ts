import { TEasingFunction } from '../types';

export const EaseInOutCirc: TEasingFunction = (x) =>
  x < 0.5
    ? (1 - Math.sqrt(1 - (2 * x) ** 2)) / 2
    : (Math.sqrt(1 - (-2 * x + 2) ** 2) + 1) / 2;
