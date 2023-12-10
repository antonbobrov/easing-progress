import { TEasingFunction } from '../types';

export const EaseOutCirc: TEasingFunction = (x) => Math.sqrt(1 - (x - 1) ** 2);
