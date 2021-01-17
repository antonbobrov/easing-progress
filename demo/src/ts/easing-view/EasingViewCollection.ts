import {
    customElement, LitElement, property,
} from 'lit-element';
import { EasingView } from './EasingView';
import { Easing } from '../../../../src/ts/index';



const tagName = 'easing-view-collection';

function enumKeys<O extends Record<string, any>, K extends keyof O = keyof O> (obj: O): K[] {
    return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[];
}



@customElement(tagName)
export class EasingViewCollection extends LitElement {

    @property({
        attribute: 'easing-type',
    }) easingType: 'easing.net';



    createRenderRoot () {
        return this;
    }

    firstUpdated () {

        this.classList.add(tagName);

        if (this.easingType === 'easing.net') {

            for (const value of enumKeys(Easing)) {
                const view = new EasingView();
                view.easingNet = Easing[value];
                this.appendChild(view);
            }

        }

    }

}
