export function easeInOutQuart (x: number): number {
    return x < 0.5 ? 8 * x * x * x * x : 1 - ((-2 * x + 2) ** 4) / 2;
}
