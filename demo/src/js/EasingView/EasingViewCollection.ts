import { customElement, LitElement, property } from 'lit-element';
import * as EasingNetCollection from '../../../../src/easing.net';
import { EasingView } from './EasingView';

export const tagName = 'easing-view-collection';

@customElement(tagName)
export class EasingViewCollection extends LitElement {
  @property({
    attribute: 'easing-type',
  })
  easingType?: 'easing.net';

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    this.classList.add(tagName);

    if (this.easingType === 'easing.net') {
      const keys: (keyof typeof EasingNetCollection)[] = [
        'EaseInSine',
        'EaseOutSine',
        'EaseInOutSine',
        'EaseInQuad',
        'EaseOutQuad',
        'EaseInOutQuad',
        'EaseInCubic',
        'EaseOutCubic',
        'EaseInOutCubic',
        'EaseInQuart',
        'EaseOutQuart',
        'EaseInOutQuart',
        'EaseInQuint',
        'EaseOutQuint',
        'EaseInOutQuint',
        'EaseInExpo',
        'EaseOutExpo',
        'EaseInOutExpo',
        'EaseInCirc',
        'EaseOutCirc',
        'EaseInOutCirc',
        'EaseInBack',
        'EaseOutBack',
        'EaseInOutBack',
        'EaseInElastic',
        'EaseOutElastic',
        'EaseInOutElastic',
        'EaseInBounce',
        'EaseOutBounce',
        'EaseInOutBounce',
      ];

      keys.forEach((key) => {
        const view = new EasingView();
        view.easingNet = EasingNetCollection[key];
        view.easingName = key;
        this.appendChild(view);
      });
    }
  }
}
