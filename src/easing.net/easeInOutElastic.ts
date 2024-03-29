import { TEasingFunction } from '../types';

export const EaseInOutElastic: TEasingFunction = (x) => {
  const c5 = (2 * Math.PI) / 4.5;

  return x === 0
    ? 0
    : x === 1
      ? 1
      : x < 0.5
        ? -(2 ** (20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
        : (2 ** (-20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
};
