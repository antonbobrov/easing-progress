export function easeInOutExpo (x: number): number {
    return x === 0
        ? 0
        : x === 1
            ? 1
            : x < 0.5 ? (2 ** (20 * x - 10)) / 2
                : (2 - (2 ** (-20 * x + 10))) / 2;
}
