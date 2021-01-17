export function easeInOutCubic (x: number): number {
    return x < 0.5 ? 4 * x * x * x : 1 - ((-2 * x + 2) ** 3) / 2;
}
