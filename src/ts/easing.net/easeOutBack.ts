export function easeOutBack (x: number): number {
    const c1 = 1.70158;
    const c3 = c1 + 1;

    return 1 + c3 * ((x - 1) ** 3) + c1 * ((x - 1) ** 2);
}
