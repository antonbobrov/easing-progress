export function easeOutExpo (x: number): number {
    return x === 1 ? 1 : 1 - (2 ** (-10 * x));
}
