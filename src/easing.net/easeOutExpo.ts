import { TEasingFunction } from '../types';

export const EaseOutExpo: TEasingFunction = (x) =>
  x === 1 ? 1 : 1 - 2 ** (-10 * x);
