//Do not modify this file.  This file is generated from ./scripts/generateUnits.js
import * as cssFunctions from '../index';
import { css, setup } from 'goober';

jest.mock('goober', () => ({
    css: jest.fn().mockReturnValue('css()')
}));

describe('cssFunctions', () => {
    beforeEach(() => {
        css.mockClear();
    });

    it('attr type', () => {
        expect(typeof cssFunctions.attr).toEqual('function');
    });

    it('attr', () => {
        expect(cssFunctions.attr(255,255)).toEqual('attr(255,255)');
    });


    it('blur type', () => {
        expect(typeof cssFunctions.blur).toEqual('function');
    });

    it('blur', () => {
        expect(cssFunctions.blur(255,255)).toEqual('blur(255,255)');
    });


    it('brightness type', () => {
        expect(typeof cssFunctions.brightness).toEqual('function');
    });

    it('brightness', () => {
        expect(cssFunctions.brightness(255,255)).toEqual('brightness(255,255)');
    });


    it('calc type', () => {
        expect(typeof cssFunctions.calc).toEqual('function');
    });

    it('calc', () => {
        expect(cssFunctions.calc(255,255)).toEqual('calc(255,255)');
    });


    it('circle type', () => {
        expect(typeof cssFunctions.circle).toEqual('function');
    });

    it('circle', () => {
        expect(cssFunctions.circle(255,255)).toEqual('circle(255,255)');
    });


    it('clamp type', () => {
        expect(typeof cssFunctions.clamp).toEqual('function');
    });

    it('clamp', () => {
        expect(cssFunctions.clamp(255,255)).toEqual('clamp(255,255)');
    });


    it('conicGradient type', () => {
        expect(typeof cssFunctions.conicGradient).toEqual('function');
    });

    it('conicGradient', () => {
        expect(cssFunctions.conicGradient(255,255)).toEqual('conicGradient(255,255)');
    });


    it('contrast type', () => {
        expect(typeof cssFunctions.contrast).toEqual('function');
    });

    it('contrast', () => {
        expect(cssFunctions.contrast(255,255)).toEqual('contrast(255,255)');
    });


    it('counter type', () => {
        expect(typeof cssFunctions.counter).toEqual('function');
    });

    it('counter', () => {
        expect(cssFunctions.counter(255,255)).toEqual('counter(255,255)');
    });


    it('counters type', () => {
        expect(typeof cssFunctions.counters).toEqual('function');
    });

    it('counters', () => {
        expect(cssFunctions.counters(255,255)).toEqual('counters(255,255)');
    });


    it('crossFade type', () => {
        expect(typeof cssFunctions.crossFade).toEqual('function');
    });

    it('crossFade', () => {
        expect(cssFunctions.crossFade(255,255)).toEqual('crossFade(255,255)');
    });


    it('dropShadow type', () => {
        expect(typeof cssFunctions.dropShadow).toEqual('function');
    });

    it('dropShadow', () => {
        expect(cssFunctions.dropShadow(255,255)).toEqual('dropShadow(255,255)');
    });


    it('element type', () => {
        expect(typeof cssFunctions.element).toEqual('function');
    });

    it('element', () => {
        expect(cssFunctions.element(255,255)).toEqual('element(255,255)');
    });


    it('ellipse type', () => {
        expect(typeof cssFunctions.ellipse).toEqual('function');
    });

    it('ellipse', () => {
        expect(cssFunctions.ellipse(255,255)).toEqual('ellipse(255,255)');
    });


    it('env type', () => {
        expect(typeof cssFunctions.env).toEqual('function');
    });

    it('env', () => {
        expect(cssFunctions.env(255,255)).toEqual('env(255,255)');
    });


    it('fitContent type', () => {
        expect(typeof cssFunctions.fitContent).toEqual('function');
    });

    it('fitContent', () => {
        expect(cssFunctions.fitContent(255,255)).toEqual('fitContent(255,255)');
    });


    it('grayscale type', () => {
        expect(typeof cssFunctions.grayscale).toEqual('function');
    });

    it('grayscale', () => {
        expect(cssFunctions.grayscale(255,255)).toEqual('grayscale(255,255)');
    });


    it('hsl type', () => {
        expect(typeof cssFunctions.hsl).toEqual('function');
    });

    it('hsl', () => {
        expect(cssFunctions.hsl(255,255)).toEqual('hsl(255,255)');
    });


    it('hsla type', () => {
        expect(typeof cssFunctions.hsla).toEqual('function');
    });

    it('hsla', () => {
        expect(cssFunctions.hsla(255,255)).toEqual('hsla(255,255)');
    });


    it('hueRotate type', () => {
        expect(typeof cssFunctions.hueRotate).toEqual('function');
    });

    it('hueRotate', () => {
        expect(cssFunctions.hueRotate(255,255)).toEqual('hueRotate(255,255)');
    });


    it('image type', () => {
        expect(typeof cssFunctions.image).toEqual('function');
    });

    it('image', () => {
        expect(cssFunctions.image(255,255)).toEqual('image(255,255)');
    });


    it('imageSet type', () => {
        expect(typeof cssFunctions.imageSet).toEqual('function');
    });

    it('imageSet', () => {
        expect(cssFunctions.imageSet(255,255)).toEqual('imageSet(255,255)');
    });


    it('inset type', () => {
        expect(typeof cssFunctions.inset).toEqual('function');
    });

    it('inset', () => {
        expect(cssFunctions.inset(255,255)).toEqual('inset(255,255)');
    });


    it('invert type', () => {
        expect(typeof cssFunctions.invert).toEqual('function');
    });

    it('invert', () => {
        expect(cssFunctions.invert(255,255)).toEqual('invert(255,255)');
    });


    it('leader type', () => {
        expect(typeof cssFunctions.leader).toEqual('function');
    });

    it('leader', () => {
        expect(cssFunctions.leader(255,255)).toEqual('leader(255,255)');
    });


    it('linearGradient type', () => {
        expect(typeof cssFunctions.linearGradient).toEqual('function');
    });

    it('linearGradient', () => {
        expect(cssFunctions.linearGradient(255,255)).toEqual('linearGradient(255,255)');
    });


    it('matrix type', () => {
        expect(typeof cssFunctions.matrix).toEqual('function');
    });

    it('matrix', () => {
        expect(cssFunctions.matrix(255,255)).toEqual('matrix(255,255)');
    });


    it('matrix3d type', () => {
        expect(typeof cssFunctions.matrix3d).toEqual('function');
    });

    it('matrix3d', () => {
        expect(cssFunctions.matrix3d(255,255)).toEqual('matrix3d(255,255)');
    });


    it('max type', () => {
        expect(typeof cssFunctions.max).toEqual('function');
    });

    it('max', () => {
        expect(cssFunctions.max(255,255)).toEqual('max(255,255)');
    });


    it('min type', () => {
        expect(typeof cssFunctions.min).toEqual('function');
    });

    it('min', () => {
        expect(cssFunctions.min(255,255)).toEqual('min(255,255)');
    });


    it('minmax type', () => {
        expect(typeof cssFunctions.minmax).toEqual('function');
    });

    it('minmax', () => {
        expect(cssFunctions.minmax(255,255)).toEqual('minmax(255,255)');
    });


    it('opacity type', () => {
        expect(typeof cssFunctions.opacity).toEqual('function');
    });

    it('opacity', () => {
        expect(cssFunctions.opacity(255,255)).toEqual('opacity(255,255)');
    });


    it('path type', () => {
        expect(typeof cssFunctions.path).toEqual('function');
    });

    it('path', () => {
        expect(cssFunctions.path(255,255)).toEqual('path(255,255)');
    });


    it('paint type', () => {
        expect(typeof cssFunctions.paint).toEqual('function');
    });

    it('paint', () => {
        expect(cssFunctions.paint(255,255)).toEqual('paint(255,255)');
    });


    it('perspective type', () => {
        expect(typeof cssFunctions.perspective).toEqual('function');
    });

    it('perspective', () => {
        expect(cssFunctions.perspective(255,255)).toEqual('perspective(255,255)');
    });


    it('polygon type', () => {
        expect(typeof cssFunctions.polygon).toEqual('function');
    });

    it('polygon', () => {
        expect(cssFunctions.polygon(255,255)).toEqual('polygon(255,255)');
    });


    it('radialGradient type', () => {
        expect(typeof cssFunctions.radialGradient).toEqual('function');
    });

    it('radialGradient', () => {
        expect(cssFunctions.radialGradient(255,255)).toEqual('radialGradient(255,255)');
    });


    it('repeatingLinearGradient type', () => {
        expect(typeof cssFunctions.repeatingLinearGradient).toEqual('function');
    });

    it('repeatingLinearGradient', () => {
        expect(cssFunctions.repeatingLinearGradient(255,255)).toEqual('repeatingLinearGradient(255,255)');
    });


    it('repeatingRadialGradient type', () => {
        expect(typeof cssFunctions.repeatingRadialGradient).toEqual('function');
    });

    it('repeatingRadialGradient', () => {
        expect(cssFunctions.repeatingRadialGradient(255,255)).toEqual('repeatingRadialGradient(255,255)');
    });


    it('rgb type', () => {
        expect(typeof cssFunctions.rgb).toEqual('function');
    });

    it('rgb', () => {
        expect(cssFunctions.rgb(255,255)).toEqual('rgb(255,255)');
    });


    it('rgba type', () => {
        expect(typeof cssFunctions.rgba).toEqual('function');
    });

    it('rgba', () => {
        expect(cssFunctions.rgba(255,255)).toEqual('rgba(255,255)');
    });


    it('rotate type', () => {
        expect(typeof cssFunctions.rotate).toEqual('function');
    });

    it('rotate', () => {
        expect(cssFunctions.rotate(255,255)).toEqual('rotate(255,255)');
    });


    it('rotate3d type', () => {
        expect(typeof cssFunctions.rotate3d).toEqual('function');
    });

    it('rotate3d', () => {
        expect(cssFunctions.rotate3d(255,255)).toEqual('rotate3d(255,255)');
    });


    it('rotateX type', () => {
        expect(typeof cssFunctions.rotateX).toEqual('function');
    });

    it('rotateX', () => {
        expect(cssFunctions.rotateX(255,255)).toEqual('rotateX(255,255)');
    });


    it('rotateY type', () => {
        expect(typeof cssFunctions.rotateY).toEqual('function');
    });

    it('rotateY', () => {
        expect(cssFunctions.rotateY(255,255)).toEqual('rotateY(255,255)');
    });


    it('rotateZ type', () => {
        expect(typeof cssFunctions.rotateZ).toEqual('function');
    });

    it('rotateZ', () => {
        expect(cssFunctions.rotateZ(255,255)).toEqual('rotateZ(255,255)');
    });


    it('saturate type', () => {
        expect(typeof cssFunctions.saturate).toEqual('function');
    });

    it('saturate', () => {
        expect(cssFunctions.saturate(255,255)).toEqual('saturate(255,255)');
    });


    it('scale type', () => {
        expect(typeof cssFunctions.scale).toEqual('function');
    });

    it('scale', () => {
        expect(cssFunctions.scale(255,255)).toEqual('scale(255,255)');
    });


    it('scale3d type', () => {
        expect(typeof cssFunctions.scale3d).toEqual('function');
    });

    it('scale3d', () => {
        expect(cssFunctions.scale3d(255,255)).toEqual('scale3d(255,255)');
    });


    it('scaleX type', () => {
        expect(typeof cssFunctions.scaleX).toEqual('function');
    });

    it('scaleX', () => {
        expect(cssFunctions.scaleX(255,255)).toEqual('scaleX(255,255)');
    });


    it('scaleY type', () => {
        expect(typeof cssFunctions.scaleY).toEqual('function');
    });

    it('scaleY', () => {
        expect(cssFunctions.scaleY(255,255)).toEqual('scaleY(255,255)');
    });


    it('scaleZ type', () => {
        expect(typeof cssFunctions.scaleZ).toEqual('function');
    });

    it('scaleZ', () => {
        expect(cssFunctions.scaleZ(255,255)).toEqual('scaleZ(255,255)');
    });


    it('skew type', () => {
        expect(typeof cssFunctions.skew).toEqual('function');
    });

    it('skew', () => {
        expect(cssFunctions.skew(255,255)).toEqual('skew(255,255)');
    });


    it('skewX type', () => {
        expect(typeof cssFunctions.skewX).toEqual('function');
    });

    it('skewX', () => {
        expect(cssFunctions.skewX(255,255)).toEqual('skewX(255,255)');
    });


    it('skewY type', () => {
        expect(typeof cssFunctions.skewY).toEqual('function');
    });

    it('skewY', () => {
        expect(cssFunctions.skewY(255,255)).toEqual('skewY(255,255)');
    });


    it('sepia type', () => {
        expect(typeof cssFunctions.sepia).toEqual('function');
    });

    it('sepia', () => {
        expect(cssFunctions.sepia(255,255)).toEqual('sepia(255,255)');
    });


    it('targetCounter type', () => {
        expect(typeof cssFunctions.targetCounter).toEqual('function');
    });

    it('targetCounter', () => {
        expect(cssFunctions.targetCounter(255,255)).toEqual('targetCounter(255,255)');
    });


    it('targetCounters type', () => {
        expect(typeof cssFunctions.targetCounters).toEqual('function');
    });

    it('targetCounters', () => {
        expect(cssFunctions.targetCounters(255,255)).toEqual('targetCounters(255,255)');
    });


    it('targetText type', () => {
        expect(typeof cssFunctions.targetText).toEqual('function');
    });

    it('targetText', () => {
        expect(cssFunctions.targetText(255,255)).toEqual('targetText(255,255)');
    });


    it('translate type', () => {
        expect(typeof cssFunctions.translate).toEqual('function');
    });

    it('translate', () => {
        expect(cssFunctions.translate(255,255)).toEqual('translate(255,255)');
    });


    it('translate3d type', () => {
        expect(typeof cssFunctions.translate3d).toEqual('function');
    });

    it('translate3d', () => {
        expect(cssFunctions.translate3d(255,255)).toEqual('translate3d(255,255)');
    });


    it('translateX type', () => {
        expect(typeof cssFunctions.translateX).toEqual('function');
    });

    it('translateX', () => {
        expect(cssFunctions.translateX(255,255)).toEqual('translateX(255,255)');
    });


    it('translateY type', () => {
        expect(typeof cssFunctions.translateY).toEqual('function');
    });

    it('translateY', () => {
        expect(cssFunctions.translateY(255,255)).toEqual('translateY(255,255)');
    });


    it('translateZ type', () => {
        expect(typeof cssFunctions.translateZ).toEqual('function');
    });

    it('translateZ', () => {
        expect(cssFunctions.translateZ(255,255)).toEqual('translateZ(255,255)');
    });


    it('variable type', () => {
        expect(typeof cssFunctions.variable).toEqual('function');
    });

    it('variable', () => {
        expect(cssFunctions.variable(255,255)).toEqual('variable(255,255)');
    });

});