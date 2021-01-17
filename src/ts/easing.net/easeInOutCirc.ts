export function easeInOutCirc (x: number): number {
    return x < 0.5
        ? (1 - Math.sqrt(1 - ((2 * x) ** 2))) / 2
        : (Math.sqrt(1 - ((-2 * x + 2) ** 2)) + 1) / 2;
}
