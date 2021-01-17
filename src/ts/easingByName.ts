import { easeInOutQuad } from './easing.net/easeInOutQuad';
import { easeInOutSine } from './easing.net/easeInOutSine';
import { easeInQuad } from './easing.net/easeInQuad';
import { easeInSine } from './easing.net/easeInSine';
import { easeOutQuad } from './easing.net/easeOutQuad';
import { easeOutSine } from './easing.net/easeOutSine';
import { easeInCubic } from './easing.net/easeInCubic';
import { Easing } from './types';
import { easeOutCubic } from './easing.net/easeOutCubic';
import { easeInOutCubic } from './easing.net/easeInOutCubic';
import { easeInQuart } from './easing.net/easeInQuart';
import { easeOutQuart } from './easing.net/easeOutQuart';
import { easeInOutQuart } from './easing.net/easeInOutQuart';
import { easeInQuint } from './easing.net/easeInQuint';
import { easeOutQuint } from './easing.net/easeOutQuint';
import { easeInOutQuint } from './easing.net/easeInOutQuint';
import { easeInExpo } from './easing.net/easeInExpo';
import { easeOutExpo } from './easing.net/easeOutExpo';
import { easeInOutExpo } from './easing.net/easeInOutExpo';
import { easeInCirc } from './easing.net/easeInCirc';
import { easeOutCirc } from './easing.net/easeOutCirc';
import { easeInOutCirc } from './easing.net/easeInOutCirc';
import { easeInBack } from './easing.net/easeInBack';
import { easeOutBack } from './easing.net/easeOutBack';
import { easeInOutBack } from './easing.net/easeInOutBack';
import { easeInElastic } from './easing.net/easeInElastic';
import { easeOutElastic } from './easing.net/easeOutElastic';
import { easeInOutElastic } from './easing.net/easeInOutElastic';
import { easeInBounce } from './easing.net/easeInBounce';
import { easeOutBounce } from './easing.net/easeOutBounce';
import { easeInOutBounce } from './easing.net/easeInOutBounce';



export default function easingByName (
    progress: number,
    name: Easing,
) {

    switch (name) {

    case Easing.easeInSine:
        return easeInSine(progress);

    case Easing.easeOutSine:
        return easeOutSine(progress);

    case Easing.easeInOutSine:
        return easeInOutSine(progress);

    case Easing.easeInQuad:
        return easeInQuad(progress);

    case Easing.easeOutQuad:
        return easeOutQuad(progress);

    case Easing.easeInOutQuad:
        return easeInOutQuad(progress);

    case Easing.easeInCubic:
        return easeInCubic(progress);

    case Easing.easeOutCubic:
        return easeOutCubic(progress);

    case Easing.easeInOutCubic:
        return easeInOutCubic(progress);

    case Easing.easeInQuart:
        return easeInQuart(progress);

    case Easing.easeOutQuart:
        return easeOutQuart(progress);

    case Easing.easeInOutQuart:
        return easeInOutQuart(progress);

    case Easing.easeInQuint:
        return easeInQuint(progress);

    case Easing.easeOutQuint:
        return easeOutQuint(progress);

    case Easing.easeInOutQuint:
        return easeInOutQuint(progress);

    case Easing.easeInExpo:
        return easeInExpo(progress);

    case Easing.easeOutExpo:
        return easeOutExpo(progress);

    case Easing.easeInOutExpo:
        return easeInOutExpo(progress);

    case Easing.easeInCirc:
        return easeInCirc(progress);

    case Easing.easeOutCirc:
        return easeOutCirc(progress);

    case Easing.easeInOutCirc:
        return easeInOutCirc(progress);

    case Easing.easeInBack:
        return easeInBack(progress);

    case Easing.easeOutBack:
        return easeOutBack(progress);

    case Easing.easeInOutBack:
        return easeInOutBack(progress);

    case Easing.easeInElastic:
        return easeInElastic(progress);

    case Easing.easeOutElastic:
        return easeOutElastic(progress);

    case Easing.easeInOutElastic:
        return easeInOutElastic(progress);

    case Easing.easeInBounce:
        return easeInBounce(progress);

    case Easing.easeOutBounce:
        return easeOutBounce(progress);

    case Easing.easeInOutBounce:
        return easeInOutBounce(progress);

    default:
        return progress;

    }

}
