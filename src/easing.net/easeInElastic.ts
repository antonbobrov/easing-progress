import { TEasingFunction } from '../types';

export const EaseInElastic: TEasingFunction = (x) => {
  const c4 = (2 * Math.PI) / 3;

  return x === 0
    ? 0
    : x === 1
      ? 1
      : -(2 ** (10 * x - 10)) * Math.sin((x * 10 - 10.75) * c4);
};
