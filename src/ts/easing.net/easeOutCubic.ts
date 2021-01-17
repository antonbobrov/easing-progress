export function easeOutCubic (x: number): number {
    return 1 - ((1 - x) ** 3);
}
