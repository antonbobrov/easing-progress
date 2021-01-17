export function easeInOutQuint (x: number): number {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - ((-2 * x + 2) ** 5) / 2;
}
