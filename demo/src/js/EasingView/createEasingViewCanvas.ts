/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { addEventListener, selectOne } from 'vevet-dom';
import { TEasingType, easing } from '../../../../src';
import { EasingView } from './EasingView';

export interface IEasingViewCanvas {
  destroy: () => void;
}

export function createEasingViewCanvas(
  parentProp: EasingView,
  easingType: TEasingType,
): IEasingViewCanvas {
  const parent = parentProp;

  // create a canvas
  const canvas = selectOne('canvas', parent);
  const ctx = canvas.getContext('2d')!;

  // sizes
  const dpr = window.devicePixelRatio;
  let width = 0;
  let height = 0;
  let boundWidth = 0;
  let boundHeight = 0;
  const padding = 30 * dpr;

  // animation
  let animationFrame: any = false;
  let isHovered = false;
  let animationProgress = 0;
  let animationAxisProgress = 0;

  // set sizes for the first time
  setSize();
  const loadEvent = addEventListener(window, 'load', () => setSize());
  const resizeEvent = addEventListener(window, 'resize', () => setSize());

  const mouseEnterEvent = addEventListener(parent, 'mouseenter', () =>
    handleMouseEnter(),
  );
  const mouseLeaveEvent = addEventListener(parent, 'mouseleave', () =>
    handleMouseLeave(),
  );

  /**
   * Update canvas sizes
   */
  function setSize() {
    width = canvas.clientWidth * dpr;
    height = canvas.clientHeight * dpr;

    boundWidth = width - padding * 2;
    boundHeight = height - padding * 2;

    canvas.width = width;
    canvas.height = height;

    render();
  }

  /**
   * Render the scene
   */
  function render() {
    // clear the canvas
    ctx.clearRect(0, 0, width, height);

    // render elements
    renderAxis();
    renderLine();
  }

  /**
   * Render axis
   */
  function renderAxis() {
    ctx.save();
    ctx.clearRect(0, 0, width, height);

    ctx.globalAlpha = animationAxisProgress;

    // draw x
    ctx.beginPath();
    ctx.moveTo(padding, padding + boundHeight);
    ctx.lineTo(padding + boundWidth, padding + boundHeight);
    ctx.lineWidth = 1 * dpr;
    ctx.strokeStyle = '#ddd';
    ctx.stroke();
    ctx.closePath();

    // draw y
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, padding + boundHeight);
    ctx.lineWidth = 1 * dpr;
    ctx.strokeStyle = '#ddd';
    ctx.stroke();
    ctx.closePath();

    ctx.restore();
  }

  /**
   * Render the easing line
   */
  function renderLine() {
    ctx.beginPath();
    ctx.moveTo(padding, boundHeight + padding);

    for (let x = 0; x < boundWidth; x += 1) {
      const xProgress = x / boundWidth;
      const y = (1 - easing(xProgress, easingType)) * boundHeight;
      ctx.lineTo(x + padding, y + padding);
    }
    ctx.lineWidth = 2 * dpr;
    ctx.strokeStyle = '#007bff';
    ctx.stroke();
    ctx.closePath();

    // draw highlight progress
    const highlightCoords = {
      x: padding + boundWidth * animationProgress,
      y: padding + (1 - easing(animationProgress, easingType)) * boundHeight,
    };
    ctx.beginPath();
    ctx.arc(highlightCoords.x, highlightCoords.y, 2 * dpr, 0, Math.PI * 2);
    ctx.fillStyle = '#e83e8c';
    ctx.fill();
    ctx.closePath();

    // draw visualization
    const visualizationCoords = {
      x: padding + boundWidth,
      y: highlightCoords.y,
    };
    ctx.beginPath();
    ctx.arc(
      visualizationCoords.x,
      visualizationCoords.y,
      3 * dpr,
      0,
      Math.PI * 2,
    );
    ctx.fillStyle = '#000';
    ctx.fill();
    ctx.closePath();

    // draw connection
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(highlightCoords.x, highlightCoords.y);
    ctx.lineTo(visualizationCoords.x, visualizationCoords.y);
    ctx.setLineDash([1, 2]);
    ctx.strokeStyle = '#aaa';
    ctx.lineWidth = 1 * dpr;
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }

  /**
   * On mouse enter
   */
  function handleMouseEnter() {
    isHovered = true;

    if (!animationFrame) {
      animationFrame = window.requestAnimationFrame(() => animate());
    }
  }

  /**
   * On mouse leave
   */
  function handleMouseLeave() {
    isHovered = false;

    if (!animationFrame) {
      animationFrame = window.requestAnimationFrame(() => animate());
    }
  }

  /**
   * Animate
   */
  function animate() {
    animationFrame = window.requestAnimationFrame(() => animate());

    // iterate axis progress
    animationAxisProgress += isHovered ? 0.05 : -0.05;
    if (animationAxisProgress > 1) {
      animationAxisProgress = 1;
    } else if (animationAxisProgress < 0) {
      animationAxisProgress = 0;
    }

    // iterate animation progress
    animationProgress += isHovered ? 0.005 : -0.005;
    if (animationProgress > 1) {
      animationProgress = 1;
    } else if (animationProgress < 0) {
      animationProgress = 0;
    }

    // render the scene
    render();

    // update progress in the parent component
    parent.linearProgress = animationProgress;

    // and cancel all on end
    if (
      (isHovered && animationAxisProgress === 1 && animationProgress === 1) ||
      (!isHovered && animationAxisProgress === 0 && animationProgress === 0)
    ) {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = false;
    }
  }

  /**
   * Destroy the scene
   */
  function destroy() {
    loadEvent.remove();
    resizeEvent.remove();
    mouseEnterEvent.remove();
    mouseLeaveEvent.remove();
  }

  return {
    destroy,
  };
}
