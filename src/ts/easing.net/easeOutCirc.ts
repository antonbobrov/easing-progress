export function easeOutCirc (x: number): number {
    return Math.sqrt(1 - ((x - 1) ** 2));
}
