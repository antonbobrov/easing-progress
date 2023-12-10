import { TEasingFunction } from '../types';

export const EaseOutSine: TEasingFunction = (x) => Math.sin((x * Math.PI) / 2);
