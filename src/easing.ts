import { easingByBezier } from './bezier';
import { TEasingType } from './types';

/**
 * Calculate easing value
 */
export function easing(
  progress: number,
  easingType: TEasingType = false,
): number {
  if (Array.isArray(easingType)) {
    return easingByBezier(progress, easingType);
  }

  if (typeof easingType === 'function') {
    return easingType(progress);
  }

  return progress;
}
