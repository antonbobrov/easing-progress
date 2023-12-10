import { TEasingFunction } from '../types';

export const EaseInOutQuint: TEasingFunction = (x) =>
  x < 0.5 ? 16 * x * x * x * x * x : 1 - (-2 * x + 2) ** 5 / 2;
