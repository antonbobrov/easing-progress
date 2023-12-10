import { TEasingFunction } from '../types';

export const EaseOutQuart: TEasingFunction = (x) => 1 - (1 - x) ** 4;
