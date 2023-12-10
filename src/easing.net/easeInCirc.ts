import { TEasingFunction } from '../types';

export const EaseInCirc: TEasingFunction = (x) => 1 - Math.sqrt(1 - x ** 2);
