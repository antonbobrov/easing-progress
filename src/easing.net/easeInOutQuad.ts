import { TEasingFunction } from '../types';

export const EaseInOutQuad: TEasingFunction = (x) =>
  x < 0.5 ? 2 * x * x : 1 - (-2 * x + 2) ** 2 / 2;
