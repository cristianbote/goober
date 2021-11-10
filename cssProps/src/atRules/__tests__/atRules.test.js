//Do not modify this file.  This file is generated from ./scripts/generateAtRules.js
import * as cssAtRules from '../index';
import { color, maxWidth } from '../../props/index';
import { css, setup } from 'goober';

jest.mock('goober', () => ({
    css: jest.fn().mockReturnValue('css()')
}));

describe('cssAtRules', () => {
    beforeEach(() => {
        css.mockClear();
    });

    it('@charset type', () => {
        expect(typeof cssAtRules.charset).toEqual('function');
    });

    it('@charset', () => {
        expect(cssAtRules.charset("(param)", [
            color("blue"),
            maxWidth("100px")
        ])).toEqual({"@charset (param)": {"color": "blue", "maxWidth": "100px"}});
    });


    it('@counter-style type', () => {
        expect(typeof cssAtRules.counterStyle).toEqual('function');
    });

    it('@counter-style', () => {
        expect(cssAtRules.counterStyle("(param)", [
            color("blue"),
            maxWidth("100px")
        ])).toEqual({"@counter-style (param)": {"color": "blue", "maxWidth": "100px"}});
    });


    it('@font-face type', () => {
        expect(typeof cssAtRules.fontFace).toEqual('function');
    });

    it('@font-face', () => {
        expect(cssAtRules.fontFace("(param)", [
            color("blue"),
            maxWidth("100px")
        ])).toEqual({"@font-face (param)": {"color": "blue", "maxWidth": "100px"}});
    });


    it('@font-feature-values type', () => {
        expect(typeof cssAtRules.fontFeatureValues).toEqual('function');
    });

    it('@font-feature-values', () => {
        expect(cssAtRules.fontFeatureValues("(param)", [
            color("blue"),
            maxWidth("100px")
        ])).toEqual({"@font-feature-values (param)": {"color": "blue", "maxWidth": "100px"}});
    });


    it('@import type', () => {
        expect(typeof cssAtRules.import).toEqual('function');
    });

    it('@import', () => {
        expect(cssAtRules.import("(param)", [
            color("blue"),
            maxWidth("100px")
        ])).toEqual({"@import (param)": {"color": "blue", "maxWidth": "100px"}});
    });


    it('@keyframes type', () => {
        expect(typeof cssAtRules.keyframes).toEqual('function');
    });

    it('@keyframes', () => {
        expect(cssAtRules.keyframes("(param)", [
            color("blue"),
            maxWidth("100px")
        ])).toEqual({"@keyframes (param)": {"color": "blue", "maxWidth": "100px"}});
    });


    it('@media type', () => {
        expect(typeof cssAtRules.media).toEqual('function');
    });

    it('@media', () => {
        expect(cssAtRules.media("(param)", [
            color("blue"),
            maxWidth("100px")
        ])).toEqual({"@media (param)": {"color": "blue", "maxWidth": "100px"}});
    });


    it('@namespace type', () => {
        expect(typeof cssAtRules.namespace).toEqual('function');
    });

    it('@namespace', () => {
        expect(cssAtRules.namespace("(param)", [
            color("blue"),
            maxWidth("100px")
        ])).toEqual({"@namespace (param)": {"color": "blue", "maxWidth": "100px"}});
    });


    it('@page type', () => {
        expect(typeof cssAtRules.page).toEqual('function');
    });

    it('@page', () => {
        expect(cssAtRules.page("(param)", [
            color("blue"),
            maxWidth("100px")
        ])).toEqual({"@page (param)": {"color": "blue", "maxWidth": "100px"}});
    });


    it('@supports type', () => {
        expect(typeof cssAtRules.supports).toEqual('function');
    });

    it('@supports', () => {
        expect(cssAtRules.supports("(param)", [
            color("blue"),
            maxWidth("100px")
        ])).toEqual({"@supports (param)": {"color": "blue", "maxWidth": "100px"}});
    });


    it('@viewport type', () => {
        expect(typeof cssAtRules.viewport).toEqual('function');
    });

    it('@viewport', () => {
        expect(cssAtRules.viewport("(param)", [
            color("blue"),
            maxWidth("100px")
        ])).toEqual({"@viewport (param)": {"color": "blue", "maxWidth": "100px"}});
    });

});