export function easeOutQuint (x: number): number {
    return 1 - ((1 - x) ** 5);
}
