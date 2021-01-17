export function easeInCirc (x: number): number {
    return 1 - Math.sqrt(1 - x ** 2);
}
