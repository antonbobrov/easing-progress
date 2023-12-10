import { TEasingFunction } from '../types';

export const EaseOutQuint: TEasingFunction = (x) => 1 - (1 - x) ** 5;
