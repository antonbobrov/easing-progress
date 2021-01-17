export function easeOutQuart (x: number): number {
    return 1 - ((1 - x) ** 4);
}
