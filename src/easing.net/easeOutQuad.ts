import { TEasingFunction } from '../types';

export const EaseOutQuad: TEasingFunction = (x) => 1 - (1 - x) ** 2;
