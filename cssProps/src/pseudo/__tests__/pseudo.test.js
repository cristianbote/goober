//Do not modify this file.  This file is generated from ./scripts/generatePseudo.js
import * as cssPseudo from '../index';
import { color, maxWidth } from '../../props/index'
import { css, setup } from 'goober';

jest.mock('goober', () => ({
    css: jest.fn().mockReturnValue('css()')
}));

describe('cssPseudo', () => {
    beforeEach(() => {
        css.mockClear();
    });

    it(':active type', () => {
        expect(typeof cssPseudo.active).toEqual('function');
    });

    it(':active', () => {
        expect(cssPseudo.active([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:active":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':any-link type', () => {
        expect(typeof cssPseudo.anyLink).toEqual('function');
    });

    it(':any-link', () => {
        expect(cssPseudo.anyLink([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:any-link":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':checked type', () => {
        expect(typeof cssPseudo.checked).toEqual('function');
    });

    it(':checked', () => {
        expect(cssPseudo.checked([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:checked":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':default type', () => {
        expect(typeof cssPseudo.defaultElement).toEqual('function');
    });

    it(':default', () => {
        expect(cssPseudo.defaultElement([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:default":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':dir type', () => {
        expect(typeof cssPseudo.dir).toEqual('function');
    });

    it(':dir', () => {
        expect(cssPseudo.dir([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:dir":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':disabled type', () => {
        expect(typeof cssPseudo.disabled).toEqual('function');
    });

    it(':disabled', () => {
        expect(cssPseudo.disabled([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:disabled":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':empty type', () => {
        expect(typeof cssPseudo.empty).toEqual('function');
    });

    it(':empty', () => {
        expect(cssPseudo.empty([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:empty":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':enabled type', () => {
        expect(typeof cssPseudo.enabled).toEqual('function');
    });

    it(':enabled', () => {
        expect(cssPseudo.enabled([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:enabled":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':first type', () => {
        expect(typeof cssPseudo.first).toEqual('function');
    });

    it(':first', () => {
        expect(cssPseudo.first([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:first":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':first-child type', () => {
        expect(typeof cssPseudo.firstChild).toEqual('function');
    });

    it(':first-child', () => {
        expect(cssPseudo.firstChild([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:first-child":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':first-of-type type', () => {
        expect(typeof cssPseudo.firstOfType).toEqual('function');
    });

    it(':first-of-type', () => {
        expect(cssPseudo.firstOfType([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:first-of-type":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':fullscreen type', () => {
        expect(typeof cssPseudo.fullscreen).toEqual('function');
    });

    it(':fullscreen', () => {
        expect(cssPseudo.fullscreen([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:fullscreen":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':future type', () => {
        expect(typeof cssPseudo.future).toEqual('function');
    });

    it(':future', () => {
        expect(cssPseudo.future([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:future":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':focus type', () => {
        expect(typeof cssPseudo.focus).toEqual('function');
    });

    it(':focus', () => {
        expect(cssPseudo.focus([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:focus":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':focus-visible type', () => {
        expect(typeof cssPseudo.focusVisible).toEqual('function');
    });

    it(':focus-visible', () => {
        expect(cssPseudo.focusVisible([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:focus-visible":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':focus-within type', () => {
        expect(typeof cssPseudo.focusWithin).toEqual('function');
    });

    it(':focus-within', () => {
        expect(cssPseudo.focusWithin([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:focus-within":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':hover type', () => {
        expect(typeof cssPseudo.hover).toEqual('function');
    });

    it(':hover', () => {
        expect(cssPseudo.hover([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:hover":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':indeterminate type', () => {
        expect(typeof cssPseudo.indeterminate).toEqual('function');
    });

    it(':indeterminate', () => {
        expect(cssPseudo.indeterminate([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:indeterminate":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':in-range type', () => {
        expect(typeof cssPseudo.inRange).toEqual('function');
    });

    it(':in-range', () => {
        expect(cssPseudo.inRange([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:in-range":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':invalid type', () => {
        expect(typeof cssPseudo.invalid).toEqual('function');
    });

    it(':invalid', () => {
        expect(cssPseudo.invalid([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:invalid":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':lang type', () => {
        expect(typeof cssPseudo.lang).toEqual('function');
    });

    it(':lang', () => {
        expect(cssPseudo.lang([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:lang":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':last-child type', () => {
        expect(typeof cssPseudo.lastChild).toEqual('function');
    });

    it(':last-child', () => {
        expect(cssPseudo.lastChild([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:last-child":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':last-of-type type', () => {
        expect(typeof cssPseudo.lastOfType).toEqual('function');
    });

    it(':last-of-type', () => {
        expect(cssPseudo.lastOfType([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:last-of-type":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':left type', () => {
        expect(typeof cssPseudo.left).toEqual('function');
    });

    it(':left', () => {
        expect(cssPseudo.left([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:left":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':link type', () => {
        expect(typeof cssPseudo.link).toEqual('function');
    });

    it(':link', () => {
        expect(cssPseudo.link([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:link":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':not type', () => {
        expect(typeof cssPseudo.not).toEqual('function');
    });

    it(':not', () => {
        expect(cssPseudo.not([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:not":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':nth-child type', () => {
        expect(typeof cssPseudo.nthChild).toEqual('function');
    });

    it(':nth-child', () => {
        expect(cssPseudo.nthChild([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:nth-child":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':nth-last-child type', () => {
        expect(typeof cssPseudo.nthLastChild).toEqual('function');
    });

    it(':nth-last-child', () => {
        expect(cssPseudo.nthLastChild([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:nth-last-child":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':nth-last-of-type type', () => {
        expect(typeof cssPseudo.nthLastOfType).toEqual('function');
    });

    it(':nth-last-of-type', () => {
        expect(cssPseudo.nthLastOfType([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:nth-last-of-type":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':nth-of-type type', () => {
        expect(typeof cssPseudo.nthOfType).toEqual('function');
    });

    it(':nth-of-type', () => {
        expect(cssPseudo.nthOfType([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:nth-of-type":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':only-child type', () => {
        expect(typeof cssPseudo.onlyChild).toEqual('function');
    });

    it(':only-child', () => {
        expect(cssPseudo.onlyChild([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:only-child":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':only-of-type type', () => {
        expect(typeof cssPseudo.onlyOfType).toEqual('function');
    });

    it(':only-of-type', () => {
        expect(cssPseudo.onlyOfType([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:only-of-type":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':optional type', () => {
        expect(typeof cssPseudo.optional).toEqual('function');
    });

    it(':optional', () => {
        expect(cssPseudo.optional([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:optional":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':out-of-range type', () => {
        expect(typeof cssPseudo.outOfRange).toEqual('function');
    });

    it(':out-of-range', () => {
        expect(cssPseudo.outOfRange([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:out-of-range":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':read-only type', () => {
        expect(typeof cssPseudo.readOnly).toEqual('function');
    });

    it(':read-only', () => {
        expect(cssPseudo.readOnly([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:read-only":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':read-write type', () => {
        expect(typeof cssPseudo.readWrite).toEqual('function');
    });

    it(':read-write', () => {
        expect(cssPseudo.readWrite([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:read-write":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':required type', () => {
        expect(typeof cssPseudo.required).toEqual('function');
    });

    it(':required', () => {
        expect(cssPseudo.required([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:required":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':right type', () => {
        expect(typeof cssPseudo.right).toEqual('function');
    });

    it(':right', () => {
        expect(cssPseudo.right([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:right":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':root type', () => {
        expect(typeof cssPseudo.root).toEqual('function');
    });

    it(':root', () => {
        expect(cssPseudo.root([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:root":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':scope type', () => {
        expect(typeof cssPseudo.scope).toEqual('function');
    });

    it(':scope', () => {
        expect(cssPseudo.scope([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:scope":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':target type', () => {
        expect(typeof cssPseudo.target).toEqual('function');
    });

    it(':target', () => {
        expect(cssPseudo.target([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:target":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':valid type', () => {
        expect(typeof cssPseudo.valid).toEqual('function');
    });

    it(':valid', () => {
        expect(cssPseudo.valid([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:valid":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it(':visited type', () => {
        expect(typeof cssPseudo.visited).toEqual('function');
    });

    it(':visited', () => {
        expect(cssPseudo.visited([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&:visited":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it('::after type', () => {
        expect(typeof cssPseudo.after).toEqual('function');
    });

    it('::after', () => {
        expect(cssPseudo.after([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&::after":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it('::backdrop type', () => {
        expect(typeof cssPseudo.backdrop).toEqual('function');
    });

    it('::backdrop', () => {
        expect(cssPseudo.backdrop([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&::backdrop":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it('::before type', () => {
        expect(typeof cssPseudo.before).toEqual('function');
    });

    it('::before', () => {
        expect(cssPseudo.before([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&::before":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it('::cue type', () => {
        expect(typeof cssPseudo.cue).toEqual('function');
    });

    it('::cue', () => {
        expect(cssPseudo.cue([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&::cue":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it('::cue-region type', () => {
        expect(typeof cssPseudo.cueRegion).toEqual('function');
    });

    it('::cue-region', () => {
        expect(cssPseudo.cueRegion([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&::cue-region":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it('::first-letter type', () => {
        expect(typeof cssPseudo.firstLetter).toEqual('function');
    });

    it('::first-letter', () => {
        expect(cssPseudo.firstLetter([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&::first-letter":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it('::first-line type', () => {
        expect(typeof cssPseudo.firstLine).toEqual('function');
    });

    it('::first-line', () => {
        expect(cssPseudo.firstLine([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&::first-line":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it('::marker type', () => {
        expect(typeof cssPseudo.marker).toEqual('function');
    });

    it('::marker', () => {
        expect(cssPseudo.marker([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&::marker":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it('::placeholder type', () => {
        expect(typeof cssPseudo.placeholder).toEqual('function');
    });

    it('::placeholder', () => {
        expect(cssPseudo.placeholder([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&::placeholder":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it('::selection type', () => {
        expect(typeof cssPseudo.selection).toEqual('function');
    });

    it('::selection', () => {
        expect(cssPseudo.selection([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&::selection":{
            color: "blue",
            maxWidth: "20px"
        }});
    });


    it('::slotted type', () => {
        expect(typeof cssPseudo.slotted).toEqual('function');
    });

    it('::slotted', () => {
        expect(cssPseudo.slotted([
            color("blue"),
            maxWidth("20px")
        ])).toEqual({"&::slotted":{
            color: "blue",
            maxWidth: "20px"
        }});
    });

});