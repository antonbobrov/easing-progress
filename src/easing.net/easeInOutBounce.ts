import { TEasingFunction } from '../types';
import { EaseOutBounce } from './easeOutBounce';

export const EaseInOutBounce: TEasingFunction = (x) =>
  x < 0.5
    ? (1 - EaseOutBounce(1 - 2 * x)) / 2
    : (1 + EaseOutBounce(2 * x - 1)) / 2;
