import { TEasingFunction } from '../types';

export const EaseInExpo: TEasingFunction = (x) =>
  x === 0 ? 0 : 2 ** (10 * x - 10);
