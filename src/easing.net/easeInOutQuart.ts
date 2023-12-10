import { TEasingFunction } from '../types';

export const EaseInOutQuart: TEasingFunction = (x) =>
  x < 0.5 ? 8 * x * x * x * x : 1 - (-2 * x + 2) ** 4 / 2;
