export function easeInSine (x: number): number {
    return 1 - Math.cos((x * Math.PI) / 2);
}
