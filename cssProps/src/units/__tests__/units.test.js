//Do not modify this file.  This file is generated from ./scripts/generateUnits.js
import * as cssUnits from '../index';
import { css, setup } from 'goober';

jest.mock('goober', () => ({
    css: jest.fn().mockReturnValue('css()')
}));

describe('cssUnits', () => {
    beforeEach(() => {
        css.mockClear();
    });

    it('ch type', () => {
        expect(typeof cssUnits.ch).toEqual('function');
    });

    it('ch', () => {
        expect(cssUnits.ch(5)).toEqual('5ch');
    });


    it('cm type', () => {
        expect(typeof cssUnits.cm).toEqual('function');
    });

    it('cm', () => {
        expect(cssUnits.cm(5)).toEqual('5cm');
    });


    it('deg type', () => {
        expect(typeof cssUnits.deg).toEqual('function');
    });

    it('deg', () => {
        expect(cssUnits.deg(5)).toEqual('5deg');
    });


    it('dpcm type', () => {
        expect(typeof cssUnits.dpcm).toEqual('function');
    });

    it('dpcm', () => {
        expect(cssUnits.dpcm(5)).toEqual('5dpcm');
    });


    it('dpi type', () => {
        expect(typeof cssUnits.dpi).toEqual('function');
    });

    it('dpi', () => {
        expect(cssUnits.dpi(5)).toEqual('5dpi');
    });


    it('dppx type', () => {
        expect(typeof cssUnits.dppx).toEqual('function');
    });

    it('dppx', () => {
        expect(cssUnits.dppx(5)).toEqual('5dppx');
    });


    it('em type', () => {
        expect(typeof cssUnits.em).toEqual('function');
    });

    it('em', () => {
        expect(cssUnits.em(5)).toEqual('5em');
    });


    it('ex type', () => {
        expect(typeof cssUnits.ex).toEqual('function');
    });

    it('ex', () => {
        expect(cssUnits.ex(5)).toEqual('5ex');
    });


    it('fr type', () => {
        expect(typeof cssUnits.fr).toEqual('function');
    });

    it('fr', () => {
        expect(cssUnits.fr(5)).toEqual('5fr');
    });


    it('grad type', () => {
        expect(typeof cssUnits.grad).toEqual('function');
    });

    it('grad', () => {
        expect(cssUnits.grad(5)).toEqual('5grad');
    });


    it('Hz type', () => {
        expect(typeof cssUnits.Hz).toEqual('function');
    });

    it('Hz', () => {
        expect(cssUnits.Hz(5)).toEqual('5Hz');
    });


    it('inch type', () => {
        expect(typeof cssUnits.inch).toEqual('function');
    });

    it('inch', () => {
        expect(cssUnits.inch(5)).toEqual('5inch');
    });


    it('kHz type', () => {
        expect(typeof cssUnits.kHz).toEqual('function');
    });

    it('kHz', () => {
        expect(cssUnits.kHz(5)).toEqual('5kHz');
    });


    it('mm type', () => {
        expect(typeof cssUnits.mm).toEqual('function');
    });

    it('mm', () => {
        expect(cssUnits.mm(5)).toEqual('5mm');
    });


    it('ms type', () => {
        expect(typeof cssUnits.ms).toEqual('function');
    });

    it('ms', () => {
        expect(cssUnits.ms(5)).toEqual('5ms');
    });


    it('pc type', () => {
        expect(typeof cssUnits.pc).toEqual('function');
    });

    it('pc', () => {
        expect(cssUnits.pc(5)).toEqual('5pc');
    });


    it('pt type', () => {
        expect(typeof cssUnits.pt).toEqual('function');
    });

    it('pt', () => {
        expect(cssUnits.pt(5)).toEqual('5pt');
    });


    it('px type', () => {
        expect(typeof cssUnits.px).toEqual('function');
    });

    it('px', () => {
        expect(cssUnits.px(5)).toEqual('5px');
    });


    it('Q type', () => {
        expect(typeof cssUnits.Q).toEqual('function');
    });

    it('Q', () => {
        expect(cssUnits.Q(5)).toEqual('5Q');
    });


    it('rad type', () => {
        expect(typeof cssUnits.rad).toEqual('function');
    });

    it('rad', () => {
        expect(cssUnits.rad(5)).toEqual('5rad');
    });


    it('rem type', () => {
        expect(typeof cssUnits.rem).toEqual('function');
    });

    it('rem', () => {
        expect(cssUnits.rem(5)).toEqual('5rem');
    });


    it('s type', () => {
        expect(typeof cssUnits.s).toEqual('function');
    });

    it('s', () => {
        expect(cssUnits.s(5)).toEqual('5s');
    });


    it('turn type', () => {
        expect(typeof cssUnits.turn).toEqual('function');
    });

    it('turn', () => {
        expect(cssUnits.turn(5)).toEqual('5turn');
    });


    it('vh type', () => {
        expect(typeof cssUnits.vh).toEqual('function');
    });

    it('vh', () => {
        expect(cssUnits.vh(5)).toEqual('5vh');
    });


    it('vmax type', () => {
        expect(typeof cssUnits.vmax).toEqual('function');
    });

    it('vmax', () => {
        expect(cssUnits.vmax(5)).toEqual('5vmax');
    });


    it('vmin type', () => {
        expect(typeof cssUnits.vmin).toEqual('function');
    });

    it('vmin', () => {
        expect(cssUnits.vmin(5)).toEqual('5vmin');
    });


    it('vw type', () => {
        expect(typeof cssUnits.vw).toEqual('function');
    });

    it('vw', () => {
        expect(cssUnits.vw(5)).toEqual('5vw');
    });


    it('x type', () => {
        expect(typeof cssUnits.x).toEqual('function');
    });

    it('x', () => {
        expect(cssUnits.x(5)).toEqual('5x');
    });

});