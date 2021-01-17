import {
    customElement, html, LitElement, property,
} from 'lit-element';
import easingProgress, { Easing } from '../../../../src/ts/index';
import { createEasingViewCanvas, EasingViewCanvas } from './createEasingViewCanvas';

const tagName = 'easing-view';


@customElement(tagName)
export class EasingView extends LitElement {

    @property({
        attribute: 'easing-net',
    }) easingNet: Easing;

    @property({
        attribute: 'easing-bezier',
    }) easingBezier: string;

    @property() linearProgress = 0;

    protected _canvas: EasingViewCanvas;



    createRenderRoot () {
        return this;
    }



    connectedCallback () {

        super.connectedCallback();

        this.classList.add(tagName);

    }

    disconnectedCallback () {

        super.disconnectedCallback();

        if (this._canvas) {
            this._canvas.destroy();
        }

    }



    render () {
        return html`
            <div class="${tagName}__canvas">
                <canvas>
            </div>
            <div class="${tagName}__name">${this._getEasingTypeString()}</div>
            <div class="${tagName}__progress">
                progress = ${this.linearProgress.toFixed(2)}
            </div>
            <div class="${tagName}__progress">
                easing = ${easingProgress(this.linearProgress, this._getEasingType()).toFixed(2)}
            </div>
        `;
    }

    updated () {

        if (!this._canvas) {
            this._canvas = createEasingViewCanvas(this, this._getEasingType());
        }

    }



    protected _getEasingType () {

        if (this.easingNet) {
            return this.easingNet;
        }
        if (this.easingBezier) {
            const bezierStrArr = this.easingBezier.split(',');
            const bezierNumArr: number[] = [];
            bezierStrArr.forEach((str) => {
                bezierNumArr.push(parseFloat(str));
            });
            return bezierNumArr;
        }

        return false;

    }
    protected _getEasingTypeString () {

        const type = this._getEasingType();
        if (type) {
            if (Array.isArray(type)) {
                return `[${type.join(', ')}]`;
            }
            return type;
        }

        return type;

    }

}
