export function easeInExpo (x: number): number {
    return x === 0 ? 0 : (2 ** (10 * x - 10));
}
