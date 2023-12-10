import { TEasingFunction } from '../types';

export const EaseInSine: TEasingFunction = (x) =>
  1 - Math.cos((x * Math.PI) / 2);
