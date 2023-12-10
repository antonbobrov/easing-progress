import { TEasingFunction } from '../types';

export const EaseOutCubic: TEasingFunction = (x) => 1 - (1 - x) ** 3;
