import { easeOutBounce } from './easeOutBounce';

export function easeInOutBounce (x: number): number {
    return x < 0.5
        ? (1 - easeOutBounce(1 - 2 * x)) / 2
        : (1 + easeOutBounce(2 * x - 1)) / 2;
}
