import { EasingBezier } from './types';

export function easingByBezier (
    progress: number,
    bezier: EasingBezier,
) {

    const [x1, y1, x2, y2] = bezier;

    if (x1 === y1 && x2 === y2) {
        return progress;
    }

    const val = [];
    for (let i = 0; i < 11; ++i) {
        val[i] = bezierCalc(i * 0.1, x1, x2);
    }

    if (progress === 0) {
        return 0;
    }
    if (progress === 1) {
        return 1;
    }

    return bezierCalc(
        bezierX(bezier, progress, val), y1, y2,
    );

}



function bezierCalc (
    progress: number,
    x1: number,
    x2: number,
) {
    return ((bezierA(x1, x2) * progress + bezierB(x1, x2)) * progress + bezierC(x1)) * progress;
}

function bezierA (
    x1: number,
    x2: number,
) {
    return 1.0 - 3.0 * x2 + 3.0 * x1;
}

function bezierB (
    x1: number,
    x2: number,
) {
    return 3.0 * x2 - 6.0 * x1;
}

function bezierC (
    x1: number,
) {
    return 3.0 * x1;
}

function bezierX (
    bezier: number[],
    progress: number,
    val: number[],
) {

    // eslint-disable-next-line no-unused-vars
    const x1 = bezier[0];
    const x2 = bezier[2];

    let start = 0;
    let current = 1;

    for (; current !== 10 && val[current] <= progress; ++current) {
        start += 0.1;
    }
    --current;

    const dist = (progress - val[current]) / (val[current + 1] - val[current]);
    const guessForT = start + dist * 0.1;

    const initialSlope = bezierSlope(guessForT, x1, x2);
    if (initialSlope >= 0.001) {
        return bezierNewtonRaphsonIterate(progress, guessForT, x1, x2);
    }
    if (initialSlope === 0.0) {
        return guessForT;
    }

    return bezierBinarySubdivide(progress, start, start + 0.1, x1, x2);


}

function bezierSlope (
    progress: number,
    x1: number,
    x2: number,
) {
    return 3.0 * bezierA(x1, x2) * progress * progress + 2.0 * bezierB(x1, x2) * progress + bezierC(x1);
}

function bezierNewtonRaphsonIterate (
    progress: number,
    guessForT: number,
    x1: number,
    x2: number,
) {

    for (let i = 0; i < 4; ++i) {
        const currentSlope = bezierSlope(guessForT, x1, x2);
        if (currentSlope === 0.0) {
            return guessForT;
        }
        const currentX = bezierCalc(guessForT, x1, x2) - progress;
        guessForT -= currentX / currentSlope;
    }

    return guessForT;

}

function bezierBinarySubdivide (
    progress: number,
    a: number,
    b: number,
    x1: number,
    x2: number,
) {

    let currentX;
    let currentT;
    let i = 0;

    do {
        currentT = a + (b - a) / 2.0;
        currentX = bezierCalc(currentT, x1, x2) - progress;
        if (currentX > 0.0) {
            b = currentT;
        }
        else {
            a = currentT;
        }
    }

    while (Math.abs(currentX) > 0.0000001 && ++i < 10);

    return currentT;

}
