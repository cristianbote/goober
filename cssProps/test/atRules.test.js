/* Do not modify this file.  This file is generated from ./cssProps/templates/atRules.test.mustache */
import * as cssAtRules from '../src/atRules/index';
import { color, maxWidth } from '../src/props/index';
import { css, extractCss } from 'goober';

describe('cssAtRules', () => {
    it('@charset type', () => {
        expect(typeof cssAtRules.charset).toEqual('function');
    });
    it('@charset', () => {
        const atRule = cssAtRules.charset('(param)');
        expect(atRule).toEqual('@charset (param)');
        css(atRule);
        expect(extractCss()).toEqual('@charset (param)');
    });

    it('@counter-style type', () => {
        expect(typeof cssAtRules.counterStyle).toEqual('function');
    });
    it('@counter-style', () => {
        const atRule = cssAtRules.counterStyle('(param)', [color('blue'), maxWidth('100px')]);
        expect(atRule).toEqual({ '@counter-style (param)': { color: 'blue', maxWidth: '100px' } });
        css(atRule);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '@counter-style (param){.go12345{color:blue;max-width:100px;}}'
        );
    });

    it('@font-face type', () => {
        expect(typeof cssAtRules.fontFace).toEqual('function');
    });
    it('@font-face', () => {
        const atRule = cssAtRules.fontFace([color('blue'), maxWidth('100px')]);
        expect(atRule).toEqual({ '@font-face': { color: 'blue', maxWidth: '100px' } });
        css(atRule);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '@font-face{.go12345{color:blue;max-width:100px;}}'
        );
    });

    it('@font-feature-values type', () => {
        expect(typeof cssAtRules.fontFeatureValues).toEqual('function');
    });
    it('@font-feature-values', () => {
        const atRule = cssAtRules.fontFeatureValues('(param)', [color('blue'), maxWidth('100px')]);
        expect(atRule).toEqual({
            '@font-feature-values (param)': { color: 'blue', maxWidth: '100px' }
        });
        css(atRule);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '@font-feature-values (param){.go12345{color:blue;max-width:100px;}}'
        );
    });

    it('@import type', () => {
        expect(typeof cssAtRules.atImport).toEqual('function');
    });
    it('@import', () => {
        const atRule = cssAtRules.atImport('(param)');
        expect(atRule).toEqual('@import (param)');
        css(atRule);
        expect(extractCss()).toEqual('@import (param)');
    });

    it('@keyframes type', () => {
        expect(typeof cssAtRules.keyframes).toEqual('function');
    });
    it('@keyframes', () => {
        const atRule = cssAtRules.keyframes('(param)', [color('blue'), maxWidth('100px')]);
        expect(atRule).toEqual({ '@keyframes (param)': { color: 'blue', maxWidth: '100px' } });
        css(atRule);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '@keyframes (param){color:blue;max-width:100px;}'
        );
    });

    it('@layer type', () => {
        expect(typeof cssAtRules.layer).toEqual('function');
    });
    it('@layer', () => {
        const atRule = cssAtRules.layer('(param)', [color('blue'), maxWidth('100px')]);
        expect(atRule).toEqual({ '@layer (param)': { color: 'blue', maxWidth: '100px' } });
        css(atRule);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '@layer (param){.go12345{color:blue;max-width:100px;}}'
        );
    });

    it('@media type', () => {
        expect(typeof cssAtRules.media).toEqual('function');
    });
    it('@media', () => {
        const atRule = cssAtRules.media('(param)', [color('blue'), maxWidth('100px')]);
        expect(atRule).toEqual({ '@media (param)': { color: 'blue', maxWidth: '100px' } });
        css(atRule);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '@media (param){.go12345{color:blue;max-width:100px;}}'
        );
    });

    it('@namespace type', () => {
        expect(typeof cssAtRules.namespace).toEqual('function');
    });
    it('@namespace', () => {
        const atRule = cssAtRules.namespace('(param)');
        expect(atRule).toEqual('@namespace (param)');
        css(atRule);
        expect(extractCss()).toEqual('@namespace (param)');
    });

    it('@page type', () => {
        expect(typeof cssAtRules.page).toEqual('function');
    });
    it('@page', () => {
        const atRule = cssAtRules.page('(param)', [color('blue'), maxWidth('100px')]);
        expect(atRule).toEqual({ '@page (param)': { color: 'blue', maxWidth: '100px' } });
        css(atRule);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '@page (param){.go12345{color:blue;max-width:100px;}}'
        );
    });

    it('@scroll-timeline type', () => {
        expect(typeof cssAtRules.scrollTimeline).toEqual('function');
    });
    it('@scroll-timeline', () => {
        const atRule = cssAtRules.scrollTimeline('(param)', [color('blue'), maxWidth('100px')]);
        expect(atRule).toEqual({
            '@scroll-timeline (param)': { color: 'blue', maxWidth: '100px' }
        });
        css(atRule);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '@scroll-timeline (param){.go12345{color:blue;max-width:100px;}}'
        );
    });

    it('@supports type', () => {
        expect(typeof cssAtRules.supports).toEqual('function');
    });
    it('@supports', () => {
        const atRule = cssAtRules.supports('(param)', [color('blue'), maxWidth('100px')]);
        expect(atRule).toEqual({ '@supports (param)': { color: 'blue', maxWidth: '100px' } });
        css(atRule);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '@supports (param){.go12345{color:blue;max-width:100px;}}'
        );
    });

    it('@viewport type', () => {
        expect(typeof cssAtRules.viewport).toEqual('function');
    });
    it('@viewport', () => {
        const atRule = cssAtRules.viewport([color('blue'), maxWidth('100px')]);
        expect(atRule).toEqual({ '@viewport': { color: 'blue', maxWidth: '100px' } });
        css(atRule);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '@viewport{.go12345{color:blue;max-width:100px;}}'
        );
    });
});
