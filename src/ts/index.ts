import { easingByBezier } from './easingByBezier';
import easingByName from './easingByName';
import {
    EasingType, Easing, EasingBezier, EasingFunction,
} from './types';

export {
    EasingType, Easing, EasingBezier, EasingFunction,
};

/**
 * Calculate easing progress
 */
export default function easingProgress (
    progress: number,
    easing: EasingType = false,
): number {

    if (!easing) {
        return progress;
    }
    if (Array.isArray(easing)) {
        return easingByBezier(progress, easing);
    }
    if (typeof easing === 'function') {
        return easing(progress);
    }

    return easingByName(progress, easing);

}
