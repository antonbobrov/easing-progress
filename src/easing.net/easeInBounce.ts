import { TEasingFunction } from '../types';
import { EaseOutBounce } from './easeOutBounce';

export const EaseInBounce: TEasingFunction = (x) => 1 - EaseOutBounce(1 - x);
