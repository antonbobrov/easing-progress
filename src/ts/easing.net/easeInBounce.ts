import { easeOutBounce } from './easeOutBounce';

export function easeInBounce (x: number): number {
    return 1 - easeOutBounce(1 - x);
}
