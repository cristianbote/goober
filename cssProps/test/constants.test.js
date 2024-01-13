/* Do not modify this file.  This file is generated from ./cssProps/templates/constants.test.mustache */
import * as constants from '../src/constants/index';
import { color } from '../src/props/index';
import { css, extractCss } from 'goober';

describe('cssAtRules', () => {
    it('_INFINITY type', () => {
        expect(typeof constants._INFINITY).toEqual('string');
    });
    it('_INFINITY', () => {
        css([color(constants._INFINITY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:-infinity;}');
    });

    it('A3 type', () => {
        expect(typeof constants.A3).toEqual('string');
    });
    it('A3', () => {
        css([color(constants.A3)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:A3;}');
    });

    it('A4 type', () => {
        expect(typeof constants.A4).toEqual('string');
    });
    it('A4', () => {
        css([color(constants.A4)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:A4;}');
    });

    it('A5 type', () => {
        expect(typeof constants.A5).toEqual('string');
    });
    it('A5', () => {
        css([color(constants.A5)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:A5;}');
    });

    it('B4 type', () => {
        expect(typeof constants.B4).toEqual('string');
    });
    it('B4', () => {
        css([color(constants.B4)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:B4;}');
    });

    it('B5 type', () => {
        expect(typeof constants.B5).toEqual('string');
    });
    it('B5', () => {
        css([color(constants.B5)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:B5;}');
    });

    it('JIS_B4 type', () => {
        expect(typeof constants.JIS_B4).toEqual('string');
    });
    it('JIS_B4', () => {
        css([color(constants.JIS_B4)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:JIS-B4;}');
    });

    it('JIS_B5 type', () => {
        expect(typeof constants.JIS_B5).toEqual('string');
    });
    it('JIS_B5', () => {
        css([color(constants.JIS_B5)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:JIS-B5;}');
    });

    it('NAN type', () => {
        expect(typeof constants.NAN).toEqual('string');
    });
    it('NAN', () => {
        css([color(constants.NAN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:NaN;}');
    });

    it('ADD type', () => {
        expect(typeof constants.ADD).toEqual('string');
    });
    it('ADD', () => {
        css([color(constants.ADD)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:add;}');
    });

    it('AFTER type', () => {
        expect(typeof constants.AFTER).toEqual('string');
    });
    it('AFTER', () => {
        css([color(constants.AFTER)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:after;}');
    });

    it('ALICEBLUE type', () => {
        expect(typeof constants.ALICEBLUE).toEqual('string');
    });
    it('ALICEBLUE', () => {
        css([color(constants.ALICEBLUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:aliceblue;}');
    });

    it('ALL type', () => {
        expect(typeof constants.ALL).toEqual('string');
    });
    it('ALL', () => {
        css([color(constants.ALL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:all;}');
    });

    it('ALPHA type', () => {
        expect(typeof constants.ALPHA).toEqual('string');
    });
    it('ALPHA', () => {
        css([color(constants.ALPHA)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:alpha;}');
    });

    it('ALTERNATE type', () => {
        expect(typeof constants.ALTERNATE).toEqual('string');
    });
    it('ALTERNATE', () => {
        css([color(constants.ALTERNATE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:alternate;}');
    });

    it('ALTERNATE_REVERSE type', () => {
        expect(typeof constants.ALTERNATE_REVERSE).toEqual('string');
    });
    it('ALTERNATE_REVERSE', () => {
        css([color(constants.ALTERNATE_REVERSE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:alternate-reverse;}'
        );
    });

    it('AND type', () => {
        expect(typeof constants.AND).toEqual('string');
    });
    it('AND', () => {
        css([color(constants.AND)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:and;}');
    });

    it('ANTIQUEWHITE type', () => {
        expect(typeof constants.ANTIQUEWHITE).toEqual('string');
    });
    it('ANTIQUEWHITE', () => {
        css([color(constants.ANTIQUEWHITE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:antiquewhite;}');
    });

    it('AQUA type', () => {
        expect(typeof constants.AQUA).toEqual('string');
    });
    it('AQUA', () => {
        css([color(constants.AQUA)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:aqua;}');
    });

    it('AQUAMARINE type', () => {
        expect(typeof constants.AQUAMARINE).toEqual('string');
    });
    it('AQUAMARINE', () => {
        css([color(constants.AQUAMARINE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:aquamarine;}');
    });

    it('AT type', () => {
        expect(typeof constants.AT).toEqual('string');
    });
    it('AT', () => {
        css([color(constants.AT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:at;}');
    });

    it('AUTO type', () => {
        expect(typeof constants.AUTO).toEqual('string');
    });
    it('AUTO', () => {
        css([color(constants.AUTO)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:auto;}');
    });

    it('AUTO_FILL type', () => {
        expect(typeof constants.AUTO_FILL).toEqual('string');
    });
    it('AUTO_FILL', () => {
        css([color(constants.AUTO_FILL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:auto-fill;}');
    });

    it('AUTO_FIT type', () => {
        expect(typeof constants.AUTO_FIT).toEqual('string');
    });
    it('AUTO_FIT', () => {
        css([color(constants.AUTO_FIT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:auto-fit;}');
    });

    it('AZURE type', () => {
        expect(typeof constants.AZURE).toEqual('string');
    });
    it('AZURE', () => {
        css([color(constants.AZURE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:azure;}');
    });

    it('BACKWARDS type', () => {
        expect(typeof constants.BACKWARDS).toEqual('string');
    });
    it('BACKWARDS', () => {
        css([color(constants.BACKWARDS)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:backwards;}');
    });

    it('BASELINE type', () => {
        expect(typeof constants.BASELINE).toEqual('string');
    });
    it('BASELINE', () => {
        css([color(constants.BASELINE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:baseline;}');
    });

    it('BEFORE type', () => {
        expect(typeof constants.BEFORE).toEqual('string');
    });
    it('BEFORE', () => {
        css([color(constants.BEFORE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:before;}');
    });

    it('BEIGE type', () => {
        expect(typeof constants.BEIGE).toEqual('string');
    });
    it('BEIGE', () => {
        css([color(constants.BEIGE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:beige;}');
    });

    it('BISQUE type', () => {
        expect(typeof constants.BISQUE).toEqual('string');
    });
    it('BISQUE', () => {
        css([color(constants.BISQUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:bisque;}');
    });

    it('BLACK type', () => {
        expect(typeof constants.BLACK).toEqual('string');
    });
    it('BLACK', () => {
        css([color(constants.BLACK)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:black;}');
    });

    it('BLANCHEDALMOND type', () => {
        expect(typeof constants.BLANCHEDALMOND).toEqual('string');
    });
    it('BLANCHEDALMOND', () => {
        css([color(constants.BLANCHEDALMOND)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:blanchedalmond;}');
    });

    it('BLANK type', () => {
        expect(typeof constants.BLANK).toEqual('string');
    });
    it('BLANK', () => {
        css([color(constants.BLANK)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:blank;}');
    });

    it('BLOCK type', () => {
        expect(typeof constants.BLOCK).toEqual('string');
    });
    it('BLOCK', () => {
        css([color(constants.BLOCK)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:block;}');
    });

    it('BLUE type', () => {
        expect(typeof constants.BLUE).toEqual('string');
    });
    it('BLUE', () => {
        css([color(constants.BLUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:blue;}');
    });

    it('BLUEVIOLET type', () => {
        expect(typeof constants.BLUEVIOLET).toEqual('string');
    });
    it('BLUEVIOLET', () => {
        css([color(constants.BLUEVIOLET)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:blueviolet;}');
    });

    it('BOLD type', () => {
        expect(typeof constants.BOLD).toEqual('string');
    });
    it('BOLD', () => {
        css([color(constants.BOLD)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:bold;}');
    });

    it('BORDER_BOX type', () => {
        expect(typeof constants.BORDER_BOX).toEqual('string');
    });
    it('BORDER_BOX', () => {
        css([color(constants.BORDER_BOX)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:border-box;}');
    });

    it('BOTH type', () => {
        expect(typeof constants.BOTH).toEqual('string');
    });
    it('BOTH', () => {
        css([color(constants.BOTH)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:both;}');
    });

    it('BOTTOM type', () => {
        expect(typeof constants.BOTTOM).toEqual('string');
    });
    it('BOTTOM', () => {
        css([color(constants.BOTTOM)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:bottom;}');
    });

    it('BROWN type', () => {
        expect(typeof constants.BROWN).toEqual('string');
    });
    it('BROWN', () => {
        css([color(constants.BROWN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:brown;}');
    });

    it('BURLYWOOD type', () => {
        expect(typeof constants.BURLYWOOD).toEqual('string');
    });
    it('BURLYWOOD', () => {
        css([color(constants.BURLYWOOD)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:burlywood;}');
    });

    it('BUTTON type', () => {
        expect(typeof constants.BUTTON).toEqual('string');
    });
    it('BUTTON', () => {
        css([color(constants.BUTTON)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:button;}');
    });

    it('CADETBLUE type', () => {
        expect(typeof constants.CADETBLUE).toEqual('string');
    });
    it('CADETBLUE', () => {
        css([color(constants.CADETBLUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:cadetblue;}');
    });

    it('CENTER type', () => {
        expect(typeof constants.CENTER).toEqual('string');
    });
    it('CENTER', () => {
        css([color(constants.CENTER)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:center;}');
    });

    it('CHARTREUSE type', () => {
        expect(typeof constants.CHARTREUSE).toEqual('string');
    });
    it('CHARTREUSE', () => {
        css([color(constants.CHARTREUSE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:chartreuse;}');
    });

    it('CHECKBOX type', () => {
        expect(typeof constants.CHECKBOX).toEqual('string');
    });
    it('CHECKBOX', () => {
        css([color(constants.CHECKBOX)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:checkbox;}');
    });

    it('CHOCOLATE type', () => {
        expect(typeof constants.CHOCOLATE).toEqual('string');
    });
    it('CHOCOLATE', () => {
        css([color(constants.CHOCOLATE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:chocolate;}');
    });

    it('CIRCLE type', () => {
        expect(typeof constants.CIRCLE).toEqual('string');
    });
    it('CIRCLE', () => {
        css([color(constants.CIRCLE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:circle;}');
    });

    it('CLEAR type', () => {
        expect(typeof constants.CLEAR).toEqual('string');
    });
    it('CLEAR', () => {
        css([color(constants.CLEAR)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:clear;}');
    });

    it('CLOSE_QUOTE type', () => {
        expect(typeof constants.CLOSE_QUOTE).toEqual('string');
    });
    it('CLOSE_QUOTE', () => {
        css([color(constants.CLOSE_QUOTE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:close-quote;}');
    });

    it('CLOSEST_CORNER type', () => {
        expect(typeof constants.CLOSEST_CORNER).toEqual('string');
    });
    it('CLOSEST_CORNER', () => {
        css([color(constants.CLOSEST_CORNER)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:closest-corner;}');
    });

    it('CLOSEST_SIDE type', () => {
        expect(typeof constants.CLOSEST_SIDE).toEqual('string');
    });
    it('CLOSEST_SIDE', () => {
        css([color(constants.CLOSEST_SIDE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:closest-side;}');
    });

    it('COLOR type', () => {
        expect(typeof constants.COLOR).toEqual('string');
    });
    it('COLOR', () => {
        css([color(constants.COLOR)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:color;}');
    });

    it('COLOR_BURN type', () => {
        expect(typeof constants.COLOR_BURN).toEqual('string');
    });
    it('COLOR_BURN', () => {
        css([color(constants.COLOR_BURN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:color-burn;}');
    });

    it('COLOR_DODGE type', () => {
        expect(typeof constants.COLOR_DODGE).toEqual('string');
    });
    it('COLOR_DODGE', () => {
        css([color(constants.COLOR_DODGE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:color-dodge;}');
    });

    it('COMMON_LIGATURES type', () => {
        expect(typeof constants.COMMON_LIGATURES).toEqual('string');
    });
    it('COMMON_LIGATURES', () => {
        css([color(constants.COMMON_LIGATURES)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:common-ligatures;}'
        );
    });

    it('CONDENSED type', () => {
        expect(typeof constants.CONDENSED).toEqual('string');
    });
    it('CONDENSED', () => {
        css([color(constants.CONDENSED)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:condensed;}');
    });

    it('CONTAIN type', () => {
        expect(typeof constants.CONTAIN).toEqual('string');
    });
    it('CONTAIN', () => {
        css([color(constants.CONTAIN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:contain;}');
    });

    it('CONTENT type', () => {
        expect(typeof constants.CONTENT).toEqual('string');
    });
    it('CONTENT', () => {
        css([color(constants.CONTENT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:content;}');
    });

    it('CONTENT_BOX type', () => {
        expect(typeof constants.CONTENT_BOX).toEqual('string');
    });
    it('CONTENT_BOX', () => {
        css([color(constants.CONTENT_BOX)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:content-box;}');
    });

    it('CONTENTS type', () => {
        expect(typeof constants.CONTENTS).toEqual('string');
    });
    it('CONTENTS', () => {
        css([color(constants.CONTENTS)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:contents;}');
    });

    it('CONTEXTUAL type', () => {
        expect(typeof constants.CONTEXTUAL).toEqual('string');
    });
    it('CONTEXTUAL', () => {
        css([color(constants.CONTEXTUAL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:contextual;}');
    });

    it('COPY type', () => {
        expect(typeof constants.COPY).toEqual('string');
    });
    it('COPY', () => {
        css([color(constants.COPY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:copy;}');
    });

    it('CORAL type', () => {
        expect(typeof constants.CORAL).toEqual('string');
    });
    it('CORAL', () => {
        css([color(constants.CORAL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:coral;}');
    });

    it('CORNFLOWERBLUE type', () => {
        expect(typeof constants.CORNFLOWERBLUE).toEqual('string');
    });
    it('CORNFLOWERBLUE', () => {
        css([color(constants.CORNFLOWERBLUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:cornflowerblue;}');
    });

    it('CORNSILK type', () => {
        expect(typeof constants.CORNSILK).toEqual('string');
    });
    it('CORNSILK', () => {
        css([color(constants.CORNSILK)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:cornsilk;}');
    });

    it('COVER type', () => {
        expect(typeof constants.COVER).toEqual('string');
    });
    it('COVER', () => {
        css([color(constants.COVER)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:cover;}');
    });

    it('CRIMSON type', () => {
        expect(typeof constants.CRIMSON).toEqual('string');
    });
    it('CRIMSON', () => {
        css([color(constants.CRIMSON)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:crimson;}');
    });

    it('CURRENTCOLOR type', () => {
        expect(typeof constants.CURRENTCOLOR).toEqual('string');
    });
    it('CURRENTCOLOR', () => {
        css([color(constants.CURRENTCOLOR)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:currentcolor;}');
    });

    it('CURSIVE type', () => {
        expect(typeof constants.CURSIVE).toEqual('string');
    });
    it('CURSIVE', () => {
        css([color(constants.CURSIVE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:cursive;}');
    });

    it('CYAN type', () => {
        expect(typeof constants.CYAN).toEqual('string');
    });
    it('CYAN', () => {
        css([color(constants.CYAN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:cyan;}');
    });

    it('DARKBLUE type', () => {
        expect(typeof constants.DARKBLUE).toEqual('string');
    });
    it('DARKBLUE', () => {
        css([color(constants.DARKBLUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:darkblue;}');
    });

    it('DARKCYAN type', () => {
        expect(typeof constants.DARKCYAN).toEqual('string');
    });
    it('DARKCYAN', () => {
        css([color(constants.DARKCYAN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:darkcyan;}');
    });

    it('DARKEN type', () => {
        expect(typeof constants.DARKEN).toEqual('string');
    });
    it('DARKEN', () => {
        css([color(constants.DARKEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:darken;}');
    });

    it('DARKGOLDENROD type', () => {
        expect(typeof constants.DARKGOLDENROD).toEqual('string');
    });
    it('DARKGOLDENROD', () => {
        css([color(constants.DARKGOLDENROD)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:darkgoldenrod;}');
    });

    it('DARKGRAY type', () => {
        expect(typeof constants.DARKGRAY).toEqual('string');
    });
    it('DARKGRAY', () => {
        css([color(constants.DARKGRAY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:darkgray;}');
    });

    it('DARKGREEN type', () => {
        expect(typeof constants.DARKGREEN).toEqual('string');
    });
    it('DARKGREEN', () => {
        css([color(constants.DARKGREEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:darkgreen;}');
    });

    it('DARKGREY type', () => {
        expect(typeof constants.DARKGREY).toEqual('string');
    });
    it('DARKGREY', () => {
        css([color(constants.DARKGREY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:darkgrey;}');
    });

    it('DARKKHAKI type', () => {
        expect(typeof constants.DARKKHAKI).toEqual('string');
    });
    it('DARKKHAKI', () => {
        css([color(constants.DARKKHAKI)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:darkkhaki;}');
    });

    it('DARKMAGENTA type', () => {
        expect(typeof constants.DARKMAGENTA).toEqual('string');
    });
    it('DARKMAGENTA', () => {
        css([color(constants.DARKMAGENTA)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:darkmagenta;}');
    });

    it('DARKOLIVEGREEN type', () => {
        expect(typeof constants.DARKOLIVEGREEN).toEqual('string');
    });
    it('DARKOLIVEGREEN', () => {
        css([color(constants.DARKOLIVEGREEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:darkolivegreen;}');
    });

    it('DARKORANGE type', () => {
        expect(typeof constants.DARKORANGE).toEqual('string');
    });
    it('DARKORANGE', () => {
        css([color(constants.DARKORANGE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:darkorange;}');
    });

    it('DARKORCHID type', () => {
        expect(typeof constants.DARKORCHID).toEqual('string');
    });
    it('DARKORCHID', () => {
        css([color(constants.DARKORCHID)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:darkorchid;}');
    });

    it('DARKRED type', () => {
        expect(typeof constants.DARKRED).toEqual('string');
    });
    it('DARKRED', () => {
        css([color(constants.DARKRED)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:darkred;}');
    });

    it('DARKSALMON type', () => {
        expect(typeof constants.DARKSALMON).toEqual('string');
    });
    it('DARKSALMON', () => {
        css([color(constants.DARKSALMON)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:darksalmon;}');
    });

    it('DARKSEAGREEN type', () => {
        expect(typeof constants.DARKSEAGREEN).toEqual('string');
    });
    it('DARKSEAGREEN', () => {
        css([color(constants.DARKSEAGREEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:darkseagreen;}');
    });

    it('DARKSLATEBLUE type', () => {
        expect(typeof constants.DARKSLATEBLUE).toEqual('string');
    });
    it('DARKSLATEBLUE', () => {
        css([color(constants.DARKSLATEBLUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:darkslateblue;}');
    });

    it('DARKSLATEGRAY type', () => {
        expect(typeof constants.DARKSLATEGRAY).toEqual('string');
    });
    it('DARKSLATEGRAY', () => {
        css([color(constants.DARKSLATEGRAY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:darkslategray;}');
    });

    it('DARKSLATEGREY type', () => {
        expect(typeof constants.DARKSLATEGREY).toEqual('string');
    });
    it('DARKSLATEGREY', () => {
        css([color(constants.DARKSLATEGREY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:darkslategrey;}');
    });

    it('DARKTURQUOISE type', () => {
        expect(typeof constants.DARKTURQUOISE).toEqual('string');
    });
    it('DARKTURQUOISE', () => {
        css([color(constants.DARKTURQUOISE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:darkturquoise;}');
    });

    it('DARKVIOLET type', () => {
        expect(typeof constants.DARKVIOLET).toEqual('string');
    });
    it('DARKVIOLET', () => {
        css([color(constants.DARKVIOLET)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:darkviolet;}');
    });

    it('DASHED type', () => {
        expect(typeof constants.DASHED).toEqual('string');
    });
    it('DASHED', () => {
        css([color(constants.DASHED)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:dashed;}');
    });

    it('DEEPPINK type', () => {
        expect(typeof constants.DEEPPINK).toEqual('string');
    });
    it('DEEPPINK', () => {
        css([color(constants.DEEPPINK)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:deeppink;}');
    });

    it('DEEPSKYBLUE type', () => {
        expect(typeof constants.DEEPSKYBLUE).toEqual('string');
    });
    it('DEEPSKYBLUE', () => {
        css([color(constants.DEEPSKYBLUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:deepskyblue;}');
    });

    it('DESTINATION_ATOP type', () => {
        expect(typeof constants.DESTINATION_ATOP).toEqual('string');
    });
    it('DESTINATION_ATOP', () => {
        css([color(constants.DESTINATION_ATOP)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:destination-atop;}'
        );
    });

    it('DESTINATION_IN type', () => {
        expect(typeof constants.DESTINATION_IN).toEqual('string');
    });
    it('DESTINATION_IN', () => {
        css([color(constants.DESTINATION_IN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:destination-in;}');
    });

    it('DESTINATION_OUT type', () => {
        expect(typeof constants.DESTINATION_OUT).toEqual('string');
    });
    it('DESTINATION_OUT', () => {
        css([color(constants.DESTINATION_OUT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:destination-out;}'
        );
    });

    it('DESTINATION_OVER type', () => {
        expect(typeof constants.DESTINATION_OVER).toEqual('string');
    });
    it('DESTINATION_OVER', () => {
        css([color(constants.DESTINATION_OVER)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:destination-over;}'
        );
    });

    it('DIAGONAL_FRACTIONS type', () => {
        expect(typeof constants.DIAGONAL_FRACTIONS).toEqual('string');
    });
    it('DIAGONAL_FRACTIONS', () => {
        css([color(constants.DIAGONAL_FRACTIONS)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:diagonal-fractions;}'
        );
    });

    it('DIFFERENCE type', () => {
        expect(typeof constants.DIFFERENCE).toEqual('string');
    });
    it('DIFFERENCE', () => {
        css([color(constants.DIFFERENCE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:difference;}');
    });

    it('DIMGRAY type', () => {
        expect(typeof constants.DIMGRAY).toEqual('string');
    });
    it('DIMGRAY', () => {
        css([color(constants.DIMGRAY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:dimgray;}');
    });

    it('DIMGREY type', () => {
        expect(typeof constants.DIMGREY).toEqual('string');
    });
    it('DIMGREY', () => {
        css([color(constants.DIMGREY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:dimgrey;}');
    });

    it('DISCRETIONARY_LIGATURES type', () => {
        expect(typeof constants.DISCRETIONARY_LIGATURES).toEqual('string');
    });
    it('DISCRETIONARY_LIGATURES', () => {
        css([color(constants.DISCRETIONARY_LIGATURES)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:discretionary-ligatures;}'
        );
    });

    it('DODGERBLUE type', () => {
        expect(typeof constants.DODGERBLUE).toEqual('string');
    });
    it('DODGERBLUE', () => {
        css([color(constants.DODGERBLUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:dodgerblue;}');
    });

    it('DOTTED type', () => {
        expect(typeof constants.DOTTED).toEqual('string');
    });
    it('DOTTED', () => {
        css([color(constants.DOTTED)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:dotted;}');
    });

    it('DOUBLE type', () => {
        expect(typeof constants.DOUBLE).toEqual('string');
    });
    it('DOUBLE', () => {
        css([color(constants.DOUBLE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:double;}');
    });

    it('DOWN type', () => {
        expect(typeof constants.DOWN).toEqual('string');
    });
    it('DOWN', () => {
        css([color(constants.DOWN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:down;}');
    });

    it('E type', () => {
        expect(typeof constants.E).toEqual('string');
    });
    it('E', () => {
        css([color(constants.E)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:e;}');
    });

    it('EASE type', () => {
        expect(typeof constants.EASE).toEqual('string');
    });
    it('EASE', () => {
        css([color(constants.EASE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:ease;}');
    });

    it('EASE_IN type', () => {
        expect(typeof constants.EASE_IN).toEqual('string');
    });
    it('EASE_IN', () => {
        css([color(constants.EASE_IN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:ease-in;}');
    });

    it('EASE_IN_OUT type', () => {
        expect(typeof constants.EASE_IN_OUT).toEqual('string');
    });
    it('EASE_IN_OUT', () => {
        css([color(constants.EASE_IN_OUT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:ease-in-out;}');
    });

    it('EASE_OUT type', () => {
        expect(typeof constants.EASE_OUT).toEqual('string');
    });
    it('EASE_OUT', () => {
        css([color(constants.EASE_OUT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:ease-out;}');
    });

    it('ELLIPSE type', () => {
        expect(typeof constants.ELLIPSE).toEqual('string');
    });
    it('ELLIPSE', () => {
        css([color(constants.ELLIPSE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:ellipse;}');
    });

    it('END type', () => {
        expect(typeof constants.END).toEqual('string');
    });
    it('END', () => {
        css([color(constants.END)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:end;}');
    });

    it('EVEN type', () => {
        expect(typeof constants.EVEN).toEqual('string');
    });
    it('EVEN', () => {
        css([color(constants.EVEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:even;}');
    });

    it('EVENODD type', () => {
        expect(typeof constants.EVENODD).toEqual('string');
    });
    it('EVENODD', () => {
        css([color(constants.EVENODD)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:evenodd;}');
    });

    it('EXCLUDE type', () => {
        expect(typeof constants.EXCLUDE).toEqual('string');
    });
    it('EXCLUDE', () => {
        css([color(constants.EXCLUDE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:exclude;}');
    });

    it('EXCLUSION type', () => {
        expect(typeof constants.EXCLUSION).toEqual('string');
    });
    it('EXCLUSION', () => {
        css([color(constants.EXCLUSION)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:exclusion;}');
    });

    it('EXPANDED type', () => {
        expect(typeof constants.EXPANDED).toEqual('string');
    });
    it('EXPANDED', () => {
        css([color(constants.EXPANDED)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:expanded;}');
    });

    it('EXTRA_CONDENSED type', () => {
        expect(typeof constants.EXTRA_CONDENSED).toEqual('string');
    });
    it('EXTRA_CONDENSED', () => {
        css([color(constants.EXTRA_CONDENSED)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:extra-condensed;}'
        );
    });

    it('EXTRA_EXPANDED type', () => {
        expect(typeof constants.EXTRA_EXPANDED).toEqual('string');
    });
    it('EXTRA_EXPANDED', () => {
        css([color(constants.EXTRA_EXPANDED)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:extra-expanded;}');
    });

    it('FANTASY type', () => {
        expect(typeof constants.FANTASY).toEqual('string');
    });
    it('FANTASY', () => {
        css([color(constants.FANTASY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:fantasy;}');
    });

    it('FARTHEST_CORNER type', () => {
        expect(typeof constants.FARTHEST_CORNER).toEqual('string');
    });
    it('FARTHEST_CORNER', () => {
        css([color(constants.FARTHEST_CORNER)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:farthest-corner;}'
        );
    });

    it('FARTHEST_SIDE type', () => {
        expect(typeof constants.FARTHEST_SIDE).toEqual('string');
    });
    it('FARTHEST_SIDE', () => {
        css([color(constants.FARTHEST_SIDE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:farthest-side;}');
    });

    it('FILL_BOX type', () => {
        expect(typeof constants.FILL_BOX).toEqual('string');
    });
    it('FILL_BOX', () => {
        css([color(constants.FILL_BOX)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:fill-box;}');
    });

    it('FIREBRICK type', () => {
        expect(typeof constants.FIREBRICK).toEqual('string');
    });
    it('FIREBRICK', () => {
        css([color(constants.FIREBRICK)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:firebrick;}');
    });

    it('FIRST type', () => {
        expect(typeof constants.FIRST).toEqual('string');
    });
    it('FIRST', () => {
        css([color(constants.FIRST)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:first;}');
    });

    it('FIRST_LETTER type', () => {
        expect(typeof constants.FIRST_LETTER).toEqual('string');
    });
    it('FIRST_LETTER', () => {
        css([color(constants.FIRST_LETTER)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:first-letter;}');
    });

    it('FIXED type', () => {
        expect(typeof constants.FIXED).toEqual('string');
    });
    it('FIXED', () => {
        css([color(constants.FIXED)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:fixed;}');
    });

    it('FLEX type', () => {
        expect(typeof constants.FLEX).toEqual('string');
    });
    it('FLEX', () => {
        css([color(constants.FLEX)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:flex;}');
    });

    it('FLEX_END type', () => {
        expect(typeof constants.FLEX_END).toEqual('string');
    });
    it('FLEX_END', () => {
        css([color(constants.FLEX_END)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:flex-end;}');
    });

    it('FLEX_START type', () => {
        expect(typeof constants.FLEX_START).toEqual('string');
    });
    it('FLEX_START', () => {
        css([color(constants.FLEX_START)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:flex-start;}');
    });

    it('FLORALWHITE type', () => {
        expect(typeof constants.FLORALWHITE).toEqual('string');
    });
    it('FLORALWHITE', () => {
        css([color(constants.FLORALWHITE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:floralwhite;}');
    });

    it('FLOW type', () => {
        expect(typeof constants.FLOW).toEqual('string');
    });
    it('FLOW', () => {
        css([color(constants.FLOW)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:flow;}');
    });

    it('FLOW_ROOT type', () => {
        expect(typeof constants.FLOW_ROOT).toEqual('string');
    });
    it('FLOW_ROOT', () => {
        css([color(constants.FLOW_ROOT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:flow-root;}');
    });

    it('FORESTGREEN type', () => {
        expect(typeof constants.FORESTGREEN).toEqual('string');
    });
    it('FORESTGREEN', () => {
        css([color(constants.FORESTGREEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:forestgreen;}');
    });

    it('FORWARDS type', () => {
        expect(typeof constants.FORWARDS).toEqual('string');
    });
    it('FORWARDS', () => {
        css([color(constants.FORWARDS)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:forwards;}');
    });

    it('FROM type', () => {
        expect(typeof constants.FROM).toEqual('string');
    });
    it('FROM', () => {
        css([color(constants.FROM)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:from;}');
    });

    it('FUCHSIA type', () => {
        expect(typeof constants.FUCHSIA).toEqual('string');
    });
    it('FUCHSIA', () => {
        css([color(constants.FUCHSIA)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:fuchsia;}');
    });

    it('FULL_WIDTH type', () => {
        expect(typeof constants.FULL_WIDTH).toEqual('string');
    });
    it('FULL_WIDTH', () => {
        css([color(constants.FULL_WIDTH)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:full-width;}');
    });

    it('GAINSBORO type', () => {
        expect(typeof constants.GAINSBORO).toEqual('string');
    });
    it('GAINSBORO', () => {
        css([color(constants.GAINSBORO)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:gainsboro;}');
    });

    it('GHOSTWHITE type', () => {
        expect(typeof constants.GHOSTWHITE).toEqual('string');
    });
    it('GHOSTWHITE', () => {
        css([color(constants.GHOSTWHITE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:ghostwhite;}');
    });

    it('GOLD type', () => {
        expect(typeof constants.GOLD).toEqual('string');
    });
    it('GOLD', () => {
        css([color(constants.GOLD)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:gold;}');
    });

    it('GOLDENROD type', () => {
        expect(typeof constants.GOLDENROD).toEqual('string');
    });
    it('GOLDENROD', () => {
        css([color(constants.GOLDENROD)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:goldenrod;}');
    });

    it('GRAY type', () => {
        expect(typeof constants.GRAY).toEqual('string');
    });
    it('GRAY', () => {
        css([color(constants.GRAY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:gray;}');
    });

    it('GREEN type', () => {
        expect(typeof constants.GREEN).toEqual('string');
    });
    it('GREEN', () => {
        css([color(constants.GREEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:green;}');
    });

    it('GREENYELLOW type', () => {
        expect(typeof constants.GREENYELLOW).toEqual('string');
    });
    it('GREENYELLOW', () => {
        css([color(constants.GREENYELLOW)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:greenyellow;}');
    });

    it('GREY type', () => {
        expect(typeof constants.GREY).toEqual('string');
    });
    it('GREY', () => {
        css([color(constants.GREY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:grey;}');
    });

    it('GRID type', () => {
        expect(typeof constants.GRID).toEqual('string');
    });
    it('GRID', () => {
        css([color(constants.GRID)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:grid;}');
    });

    it('GROOVE type', () => {
        expect(typeof constants.GROOVE).toEqual('string');
    });
    it('GROOVE', () => {
        css([color(constants.GROOVE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:groove;}');
    });

    it('HARD_LIGHT type', () => {
        expect(typeof constants.HARD_LIGHT).toEqual('string');
    });
    it('HARD_LIGHT', () => {
        css([color(constants.HARD_LIGHT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:hard-light;}');
    });

    it('HIDDEN type', () => {
        expect(typeof constants.HIDDEN).toEqual('string');
    });
    it('HIDDEN', () => {
        css([color(constants.HIDDEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:hidden;}');
    });

    it('HISTORICAL_LIGATURES type', () => {
        expect(typeof constants.HISTORICAL_LIGATURES).toEqual('string');
    });
    it('HISTORICAL_LIGATURES', () => {
        css([color(constants.HISTORICAL_LIGATURES)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:historical-ligatures;}'
        );
    });

    it('HONEYDEW type', () => {
        expect(typeof constants.HONEYDEW).toEqual('string');
    });
    it('HONEYDEW', () => {
        css([color(constants.HONEYDEW)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:honeydew;}');
    });

    it('HORIZONTAL type', () => {
        expect(typeof constants.HORIZONTAL).toEqual('string');
    });
    it('HORIZONTAL', () => {
        css([color(constants.HORIZONTAL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:horizontal;}');
    });

    it('HOTPINK type', () => {
        expect(typeof constants.HOTPINK).toEqual('string');
    });
    it('HOTPINK', () => {
        css([color(constants.HOTPINK)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:hotpink;}');
    });

    it('HUE type', () => {
        expect(typeof constants.HUE).toEqual('string');
    });
    it('HUE', () => {
        css([color(constants.HUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:hue;}');
    });

    it('I type', () => {
        expect(typeof constants.I).toEqual('string');
    });
    it('I', () => {
        css([color(constants.I)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:i;}');
    });

    it('INDIANRED type', () => {
        expect(typeof constants.INDIANRED).toEqual('string');
    });
    it('INDIANRED', () => {
        css([color(constants.INDIANRED)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:indianred;}');
    });

    it('INDIGO type', () => {
        expect(typeof constants.INDIGO).toEqual('string');
    });
    it('INDIGO', () => {
        css([color(constants.INDIGO)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:indigo;}');
    });

    it('INFINITE type', () => {
        expect(typeof constants.INFINITE).toEqual('string');
    });
    it('INFINITE', () => {
        css([color(constants.INFINITE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:infinite;}');
    });

    it('INFINITY type', () => {
        expect(typeof constants.INFINITY).toEqual('string');
    });
    it('INFINITY', () => {
        css([color(constants.INFINITY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:infinity;}');
    });

    it('INLINE type', () => {
        expect(typeof constants.INLINE).toEqual('string');
    });
    it('INLINE', () => {
        css([color(constants.INLINE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:inline;}');
    });

    it('INLINE_BLOCK type', () => {
        expect(typeof constants.INLINE_BLOCK).toEqual('string');
    });
    it('INLINE_BLOCK', () => {
        css([color(constants.INLINE_BLOCK)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:inline-block;}');
    });

    it('INLINE_FLEX type', () => {
        expect(typeof constants.INLINE_FLEX).toEqual('string');
    });
    it('INLINE_FLEX', () => {
        css([color(constants.INLINE_FLEX)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:inline-flex;}');
    });

    it('INLINE_GRID type', () => {
        expect(typeof constants.INLINE_GRID).toEqual('string');
    });
    it('INLINE_GRID', () => {
        css([color(constants.INLINE_GRID)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:inline-grid;}');
    });

    it('INLINE_LIST_ITEM type', () => {
        expect(typeof constants.INLINE_LIST_ITEM).toEqual('string');
    });
    it('INLINE_LIST_ITEM', () => {
        css([color(constants.INLINE_LIST_ITEM)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:inline-list-item;}'
        );
    });

    it('INLINE_TABLE type', () => {
        expect(typeof constants.INLINE_TABLE).toEqual('string');
    });
    it('INLINE_TABLE', () => {
        css([color(constants.INLINE_TABLE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:inline-table;}');
    });

    it('INSET type', () => {
        expect(typeof constants.INSET).toEqual('string');
    });
    it('INSET', () => {
        css([color(constants.INSET)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:inset;}');
    });

    it('INTERSECT type', () => {
        expect(typeof constants.INTERSECT).toEqual('string');
    });
    it('INTERSECT', () => {
        css([color(constants.INTERSECT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:intersect;}');
    });

    it('IVORY type', () => {
        expect(typeof constants.IVORY).toEqual('string');
    });
    it('IVORY', () => {
        css([color(constants.IVORY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:ivory;}');
    });

    it('JIS04 type', () => {
        expect(typeof constants.JIS04).toEqual('string');
    });
    it('JIS04', () => {
        css([color(constants.JIS04)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:jis04;}');
    });

    it('JIS78 type', () => {
        expect(typeof constants.JIS78).toEqual('string');
    });
    it('JIS78', () => {
        css([color(constants.JIS78)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:jis78;}');
    });

    it('JIS83 type', () => {
        expect(typeof constants.JIS83).toEqual('string');
    });
    it('JIS83', () => {
        css([color(constants.JIS83)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:jis83;}');
    });

    it('JIS90 type', () => {
        expect(typeof constants.JIS90).toEqual('string');
    });
    it('JIS90', () => {
        css([color(constants.JIS90)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:jis90;}');
    });

    it('JUMP_BOTH type', () => {
        expect(typeof constants.JUMP_BOTH).toEqual('string');
    });
    it('JUMP_BOTH', () => {
        css([color(constants.JUMP_BOTH)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:jump-both;}');
    });

    it('JUMP_END type', () => {
        expect(typeof constants.JUMP_END).toEqual('string');
    });
    it('JUMP_END', () => {
        css([color(constants.JUMP_END)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:jump-end;}');
    });

    it('JUMP_NONE type', () => {
        expect(typeof constants.JUMP_NONE).toEqual('string');
    });
    it('JUMP_NONE', () => {
        css([color(constants.JUMP_NONE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:jump-none;}');
    });

    it('JUMP_START type', () => {
        expect(typeof constants.JUMP_START).toEqual('string');
    });
    it('JUMP_START', () => {
        css([color(constants.JUMP_START)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:jump-start;}');
    });

    it('KHAKI type', () => {
        expect(typeof constants.KHAKI).toEqual('string');
    });
    it('KHAKI', () => {
        css([color(constants.KHAKI)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:khaki;}');
    });

    it('LARGE type', () => {
        expect(typeof constants.LARGE).toEqual('string');
    });
    it('LARGE', () => {
        css([color(constants.LARGE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:large;}');
    });

    it('LARGER type', () => {
        expect(typeof constants.LARGER).toEqual('string');
    });
    it('LARGER', () => {
        css([color(constants.LARGER)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:larger;}');
    });

    it('LAST type', () => {
        expect(typeof constants.LAST).toEqual('string');
    });
    it('LAST', () => {
        css([color(constants.LAST)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:last;}');
    });

    it('LAVENDER type', () => {
        expect(typeof constants.LAVENDER).toEqual('string');
    });
    it('LAVENDER', () => {
        css([color(constants.LAVENDER)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lavender;}');
    });

    it('LAVENDERBLUSH type', () => {
        expect(typeof constants.LAVENDERBLUSH).toEqual('string');
    });
    it('LAVENDERBLUSH', () => {
        css([color(constants.LAVENDERBLUSH)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lavenderblush;}');
    });

    it('LAWNGREEN type', () => {
        expect(typeof constants.LAWNGREEN).toEqual('string');
    });
    it('LAWNGREEN', () => {
        css([color(constants.LAWNGREEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lawngreen;}');
    });

    it('LEDGER type', () => {
        expect(typeof constants.LEDGER).toEqual('string');
    });
    it('LEDGER', () => {
        css([color(constants.LEDGER)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:ledger;}');
    });

    it('LEFT type', () => {
        expect(typeof constants.LEFT).toEqual('string');
    });
    it('LEFT', () => {
        css([color(constants.LEFT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:left;}');
    });

    it('LEGAL type', () => {
        expect(typeof constants.LEGAL).toEqual('string');
    });
    it('LEGAL', () => {
        css([color(constants.LEGAL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:legal;}');
    });

    it('LEMONCHIFFON type', () => {
        expect(typeof constants.LEMONCHIFFON).toEqual('string');
    });
    it('LEMONCHIFFON', () => {
        css([color(constants.LEMONCHIFFON)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lemonchiffon;}');
    });

    it('LETTER type', () => {
        expect(typeof constants.LETTER).toEqual('string');
    });
    it('LETTER', () => {
        css([color(constants.LETTER)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:letter;}');
    });

    it('LIGHTBLUE type', () => {
        expect(typeof constants.LIGHTBLUE).toEqual('string');
    });
    it('LIGHTBLUE', () => {
        css([color(constants.LIGHTBLUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lightblue;}');
    });

    it('LIGHTCORAL type', () => {
        expect(typeof constants.LIGHTCORAL).toEqual('string');
    });
    it('LIGHTCORAL', () => {
        css([color(constants.LIGHTCORAL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lightcoral;}');
    });

    it('LIGHTCYAN type', () => {
        expect(typeof constants.LIGHTCYAN).toEqual('string');
    });
    it('LIGHTCYAN', () => {
        css([color(constants.LIGHTCYAN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lightcyan;}');
    });

    it('LIGHTEN type', () => {
        expect(typeof constants.LIGHTEN).toEqual('string');
    });
    it('LIGHTEN', () => {
        css([color(constants.LIGHTEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lighten;}');
    });

    it('LIGHTGOLDENRODYELLOW type', () => {
        expect(typeof constants.LIGHTGOLDENRODYELLOW).toEqual('string');
    });
    it('LIGHTGOLDENRODYELLOW', () => {
        css([color(constants.LIGHTGOLDENRODYELLOW)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:lightgoldenrodyellow;}'
        );
    });

    it('LIGHTGRAY type', () => {
        expect(typeof constants.LIGHTGRAY).toEqual('string');
    });
    it('LIGHTGRAY', () => {
        css([color(constants.LIGHTGRAY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lightgray;}');
    });

    it('LIGHTGREEN type', () => {
        expect(typeof constants.LIGHTGREEN).toEqual('string');
    });
    it('LIGHTGREEN', () => {
        css([color(constants.LIGHTGREEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lightgreen;}');
    });

    it('LIGHTGREY type', () => {
        expect(typeof constants.LIGHTGREY).toEqual('string');
    });
    it('LIGHTGREY', () => {
        css([color(constants.LIGHTGREY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lightgrey;}');
    });

    it('LIGHTPINK type', () => {
        expect(typeof constants.LIGHTPINK).toEqual('string');
    });
    it('LIGHTPINK', () => {
        css([color(constants.LIGHTPINK)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lightpink;}');
    });

    it('LIGHTSALMON type', () => {
        expect(typeof constants.LIGHTSALMON).toEqual('string');
    });
    it('LIGHTSALMON', () => {
        css([color(constants.LIGHTSALMON)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lightsalmon;}');
    });

    it('LIGHTSEAGREEN type', () => {
        expect(typeof constants.LIGHTSEAGREEN).toEqual('string');
    });
    it('LIGHTSEAGREEN', () => {
        css([color(constants.LIGHTSEAGREEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lightseagreen;}');
    });

    it('LIGHTSKYBLUE type', () => {
        expect(typeof constants.LIGHTSKYBLUE).toEqual('string');
    });
    it('LIGHTSKYBLUE', () => {
        css([color(constants.LIGHTSKYBLUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lightskyblue;}');
    });

    it('LIGHTSLATEGRAY type', () => {
        expect(typeof constants.LIGHTSLATEGRAY).toEqual('string');
    });
    it('LIGHTSLATEGRAY', () => {
        css([color(constants.LIGHTSLATEGRAY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lightslategray;}');
    });

    it('LIGHTSLATEGREY type', () => {
        expect(typeof constants.LIGHTSLATEGREY).toEqual('string');
    });
    it('LIGHTSLATEGREY', () => {
        css([color(constants.LIGHTSLATEGREY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lightslategrey;}');
    });

    it('LIGHTSTEELBLUE type', () => {
        expect(typeof constants.LIGHTSTEELBLUE).toEqual('string');
    });
    it('LIGHTSTEELBLUE', () => {
        css([color(constants.LIGHTSTEELBLUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lightsteelblue;}');
    });

    it('LIGHTYELLOW type', () => {
        expect(typeof constants.LIGHTYELLOW).toEqual('string');
    });
    it('LIGHTYELLOW', () => {
        css([color(constants.LIGHTYELLOW)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lightyellow;}');
    });

    it('LIME type', () => {
        expect(typeof constants.LIME).toEqual('string');
    });
    it('LIME', () => {
        css([color(constants.LIME)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lime;}');
    });

    it('LIMEGREEN type', () => {
        expect(typeof constants.LIMEGREEN).toEqual('string');
    });
    it('LIMEGREEN', () => {
        css([color(constants.LIMEGREEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:limegreen;}');
    });

    it('LINEAR type', () => {
        expect(typeof constants.LINEAR).toEqual('string');
    });
    it('LINEAR', () => {
        css([color(constants.LINEAR)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:linear;}');
    });

    it('LINEN type', () => {
        expect(typeof constants.LINEN).toEqual('string');
    });
    it('LINEN', () => {
        css([color(constants.LINEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:linen;}');
    });

    it('LINING_NUMS type', () => {
        expect(typeof constants.LINING_NUMS).toEqual('string');
    });
    it('LINING_NUMS', () => {
        css([color(constants.LINING_NUMS)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:lining-nums;}');
    });

    it('LIST_ITEM type', () => {
        expect(typeof constants.LIST_ITEM).toEqual('string');
    });
    it('LIST_ITEM', () => {
        css([color(constants.LIST_ITEM)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:list-item;}');
    });

    it('LISTBOX type', () => {
        expect(typeof constants.LISTBOX).toEqual('string');
    });
    it('LISTBOX', () => {
        css([color(constants.LISTBOX)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:listbox;}');
    });

    it('LOCAL type', () => {
        expect(typeof constants.LOCAL).toEqual('string');
    });
    it('LOCAL', () => {
        css([color(constants.LOCAL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:local;}');
    });

    it('LTR type', () => {
        expect(typeof constants.LTR).toEqual('string');
    });
    it('LTR', () => {
        css([color(constants.LTR)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:ltr;}');
    });

    it('LUMINANCE type', () => {
        expect(typeof constants.LUMINANCE).toEqual('string');
    });
    it('LUMINANCE', () => {
        css([color(constants.LUMINANCE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:luminance;}');
    });

    it('LUMINOSITY type', () => {
        expect(typeof constants.LUMINOSITY).toEqual('string');
    });
    it('LUMINOSITY', () => {
        css([color(constants.LUMINOSITY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:luminosity;}');
    });

    it('MAGENTA type', () => {
        expect(typeof constants.MAGENTA).toEqual('string');
    });
    it('MAGENTA', () => {
        css([color(constants.MAGENTA)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:magenta;}');
    });

    it('MARGIN_BOX type', () => {
        expect(typeof constants.MARGIN_BOX).toEqual('string');
    });
    it('MARGIN_BOX', () => {
        css([color(constants.MARGIN_BOX)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:margin-box;}');
    });

    it('MAROON type', () => {
        expect(typeof constants.MAROON).toEqual('string');
    });
    it('MAROON', () => {
        css([color(constants.MAROON)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:maroon;}');
    });

    it('MATCH_SOURCE type', () => {
        expect(typeof constants.MATCH_SOURCE).toEqual('string');
    });
    it('MATCH_SOURCE', () => {
        css([color(constants.MATCH_SOURCE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:match-source;}');
    });

    it('MAX_CONTENT type', () => {
        expect(typeof constants.MAX_CONTENT).toEqual('string');
    });
    it('MAX_CONTENT', () => {
        css([color(constants.MAX_CONTENT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:max-content;}');
    });

    it('MEDIUM type', () => {
        expect(typeof constants.MEDIUM).toEqual('string');
    });
    it('MEDIUM', () => {
        css([color(constants.MEDIUM)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:medium;}');
    });

    it('MEDIUMAQUAMARINE type', () => {
        expect(typeof constants.MEDIUMAQUAMARINE).toEqual('string');
    });
    it('MEDIUMAQUAMARINE', () => {
        css([color(constants.MEDIUMAQUAMARINE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:mediumaquamarine;}'
        );
    });

    it('MEDIUMBLUE type', () => {
        expect(typeof constants.MEDIUMBLUE).toEqual('string');
    });
    it('MEDIUMBLUE', () => {
        css([color(constants.MEDIUMBLUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:mediumblue;}');
    });

    it('MEDIUMORCHID type', () => {
        expect(typeof constants.MEDIUMORCHID).toEqual('string');
    });
    it('MEDIUMORCHID', () => {
        css([color(constants.MEDIUMORCHID)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:mediumorchid;}');
    });

    it('MEDIUMPURPLE type', () => {
        expect(typeof constants.MEDIUMPURPLE).toEqual('string');
    });
    it('MEDIUMPURPLE', () => {
        css([color(constants.MEDIUMPURPLE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:mediumpurple;}');
    });

    it('MEDIUMSEAGREEN type', () => {
        expect(typeof constants.MEDIUMSEAGREEN).toEqual('string');
    });
    it('MEDIUMSEAGREEN', () => {
        css([color(constants.MEDIUMSEAGREEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:mediumseagreen;}');
    });

    it('MEDIUMSLATEBLUE type', () => {
        expect(typeof constants.MEDIUMSLATEBLUE).toEqual('string');
    });
    it('MEDIUMSLATEBLUE', () => {
        css([color(constants.MEDIUMSLATEBLUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:mediumslateblue;}'
        );
    });

    it('MEDIUMSPRINGGREEN type', () => {
        expect(typeof constants.MEDIUMSPRINGGREEN).toEqual('string');
    });
    it('MEDIUMSPRINGGREEN', () => {
        css([color(constants.MEDIUMSPRINGGREEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:mediumspringgreen;}'
        );
    });

    it('MEDIUMTURQUOISE type', () => {
        expect(typeof constants.MEDIUMTURQUOISE).toEqual('string');
    });
    it('MEDIUMTURQUOISE', () => {
        css([color(constants.MEDIUMTURQUOISE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:mediumturquoise;}'
        );
    });

    it('MEDIUMVIOLETRED type', () => {
        expect(typeof constants.MEDIUMVIOLETRED).toEqual('string');
    });
    it('MEDIUMVIOLETRED', () => {
        css([color(constants.MEDIUMVIOLETRED)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:mediumvioletred;}'
        );
    });

    it('MENULIST type', () => {
        expect(typeof constants.MENULIST).toEqual('string');
    });
    it('MENULIST', () => {
        css([color(constants.MENULIST)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:menulist;}');
    });

    it('METER type', () => {
        expect(typeof constants.METER).toEqual('string');
    });
    it('METER', () => {
        css([color(constants.METER)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:meter;}');
    });

    it('MIDNIGHTBLUE type', () => {
        expect(typeof constants.MIDNIGHTBLUE).toEqual('string');
    });
    it('MIDNIGHTBLUE', () => {
        css([color(constants.MIDNIGHTBLUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:midnightblue;}');
    });

    it('MIN_CONTENT type', () => {
        expect(typeof constants.MIN_CONTENT).toEqual('string');
    });
    it('MIN_CONTENT', () => {
        css([color(constants.MIN_CONTENT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:min-content;}');
    });

    it('MINTCREAM type', () => {
        expect(typeof constants.MINTCREAM).toEqual('string');
    });
    it('MINTCREAM', () => {
        css([color(constants.MINTCREAM)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:mintcream;}');
    });

    it('MISTYROSE type', () => {
        expect(typeof constants.MISTYROSE).toEqual('string');
    });
    it('MISTYROSE', () => {
        css([color(constants.MISTYROSE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:mistyrose;}');
    });

    it('MOCCASIN type', () => {
        expect(typeof constants.MOCCASIN).toEqual('string');
    });
    it('MOCCASIN', () => {
        css([color(constants.MOCCASIN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:moccasin;}');
    });

    it('MONOSPACE type', () => {
        expect(typeof constants.MONOSPACE).toEqual('string');
    });
    it('MONOSPACE', () => {
        css([color(constants.MONOSPACE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:monospace;}');
    });

    it('MULTIPLY type', () => {
        expect(typeof constants.MULTIPLY).toEqual('string');
    });
    it('MULTIPLY', () => {
        css([color(constants.MULTIPLY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:multiply;}');
    });

    it('NAVAJOWHITE type', () => {
        expect(typeof constants.NAVAJOWHITE).toEqual('string');
    });
    it('NAVAJOWHITE', () => {
        css([color(constants.NAVAJOWHITE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:navajowhite;}');
    });

    it('NAVY type', () => {
        expect(typeof constants.NAVY).toEqual('string');
    });
    it('NAVY', () => {
        css([color(constants.NAVY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:navy;}');
    });

    it('NEAREST type', () => {
        expect(typeof constants.NEAREST).toEqual('string');
    });
    it('NEAREST', () => {
        css([color(constants.NEAREST)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:nearest;}');
    });

    it('NO_CLIP type', () => {
        expect(typeof constants.NO_CLIP).toEqual('string');
    });
    it('NO_CLIP', () => {
        css([color(constants.NO_CLIP)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:no-clip;}');
    });

    it('NO_CLOSE_QUOTE type', () => {
        expect(typeof constants.NO_CLOSE_QUOTE).toEqual('string');
    });
    it('NO_CLOSE_QUOTE', () => {
        css([color(constants.NO_CLOSE_QUOTE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:no-close-quote;}');
    });

    it('NO_COMMON_LIGATURES type', () => {
        expect(typeof constants.NO_COMMON_LIGATURES).toEqual('string');
    });
    it('NO_COMMON_LIGATURES', () => {
        css([color(constants.NO_COMMON_LIGATURES)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:no-common-ligatures;}'
        );
    });

    it('NO_CONTEXTUAL type', () => {
        expect(typeof constants.NO_CONTEXTUAL).toEqual('string');
    });
    it('NO_CONTEXTUAL', () => {
        css([color(constants.NO_CONTEXTUAL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:no-contextual;}');
    });

    it('NO_DISCRETIONARY_LIGATURES type', () => {
        expect(typeof constants.NO_DISCRETIONARY_LIGATURES).toEqual('string');
    });
    it('NO_DISCRETIONARY_LIGATURES', () => {
        css([color(constants.NO_DISCRETIONARY_LIGATURES)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:no-discretionary-ligatures;}'
        );
    });

    it('NO_HISTORICAL_LIGATURES type', () => {
        expect(typeof constants.NO_HISTORICAL_LIGATURES).toEqual('string');
    });
    it('NO_HISTORICAL_LIGATURES', () => {
        css([color(constants.NO_HISTORICAL_LIGATURES)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:no-historical-ligatures;}'
        );
    });

    it('NO_OPEN_QUOTE type', () => {
        expect(typeof constants.NO_OPEN_QUOTE).toEqual('string');
    });
    it('NO_OPEN_QUOTE', () => {
        css([color(constants.NO_OPEN_QUOTE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:no-open-quote;}');
    });

    it('NO_REPEAT type', () => {
        expect(typeof constants.NO_REPEAT).toEqual('string');
    });
    it('NO_REPEAT', () => {
        css([color(constants.NO_REPEAT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:no-repeat;}');
    });

    it('NONE type', () => {
        expect(typeof constants.NONE).toEqual('string');
    });
    it('NONE', () => {
        css([color(constants.NONE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:none;}');
    });

    it('NONZERO type', () => {
        expect(typeof constants.NONZERO).toEqual('string');
    });
    it('NONZERO', () => {
        css([color(constants.NONZERO)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:nonzero;}');
    });

    it('NORMAL type', () => {
        expect(typeof constants.NORMAL).toEqual('string');
    });
    it('NORMAL', () => {
        css([color(constants.NORMAL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:normal;}');
    });

    it('NOT type', () => {
        expect(typeof constants.NOT).toEqual('string');
    });
    it('NOT', () => {
        css([color(constants.NOT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:not;}');
    });

    it('ODD type', () => {
        expect(typeof constants.ODD).toEqual('string');
    });
    it('ODD', () => {
        css([color(constants.ODD)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:odd;}');
    });

    it('OFF type', () => {
        expect(typeof constants.OFF).toEqual('string');
    });
    it('OFF', () => {
        css([color(constants.OFF)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:off;}');
    });

    it('OLDLACE type', () => {
        expect(typeof constants.OLDLACE).toEqual('string');
    });
    it('OLDLACE', () => {
        css([color(constants.OLDLACE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:oldlace;}');
    });

    it('OLDSTYLE_NUMS type', () => {
        expect(typeof constants.OLDSTYLE_NUMS).toEqual('string');
    });
    it('OLDSTYLE_NUMS', () => {
        css([color(constants.OLDSTYLE_NUMS)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:oldstyle-nums;}');
    });

    it('OLIVE type', () => {
        expect(typeof constants.OLIVE).toEqual('string');
    });
    it('OLIVE', () => {
        css([color(constants.OLIVE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:olive;}');
    });

    it('OLIVEDRAB type', () => {
        expect(typeof constants.OLIVEDRAB).toEqual('string');
    });
    it('OLIVEDRAB', () => {
        css([color(constants.OLIVEDRAB)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:olivedrab;}');
    });

    it('ON type', () => {
        expect(typeof constants.ON).toEqual('string');
    });
    it('ON', () => {
        css([color(constants.ON)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:on;}');
    });

    it('ONLY type', () => {
        expect(typeof constants.ONLY).toEqual('string');
    });
    it('ONLY', () => {
        css([color(constants.ONLY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:only;}');
    });

    it('OPEN_QUOTE type', () => {
        expect(typeof constants.OPEN_QUOTE).toEqual('string');
    });
    it('OPEN_QUOTE', () => {
        css([color(constants.OPEN_QUOTE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:open-quote;}');
    });

    it('OR type', () => {
        expect(typeof constants.OR).toEqual('string');
    });
    it('OR', () => {
        css([color(constants.OR)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:or;}');
    });

    it('ORANGE type', () => {
        expect(typeof constants.ORANGE).toEqual('string');
    });
    it('ORANGE', () => {
        css([color(constants.ORANGE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:orange;}');
    });

    it('ORANGERED type', () => {
        expect(typeof constants.ORANGERED).toEqual('string');
    });
    it('ORANGERED', () => {
        css([color(constants.ORANGERED)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:orangered;}');
    });

    it('ORCHID type', () => {
        expect(typeof constants.ORCHID).toEqual('string');
    });
    it('ORCHID', () => {
        css([color(constants.ORCHID)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:orchid;}');
    });

    it('OUTSET type', () => {
        expect(typeof constants.OUTSET).toEqual('string');
    });
    it('OUTSET', () => {
        css([color(constants.OUTSET)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:outset;}');
    });

    it('OVERLAY type', () => {
        expect(typeof constants.OVERLAY).toEqual('string');
    });
    it('OVERLAY', () => {
        css([color(constants.OVERLAY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:overlay;}');
    });

    it('PADDING_BOX type', () => {
        expect(typeof constants.PADDING_BOX).toEqual('string');
    });
    it('PADDING_BOX', () => {
        css([color(constants.PADDING_BOX)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:padding-box;}');
    });

    it('PALEGOLDENROD type', () => {
        expect(typeof constants.PALEGOLDENROD).toEqual('string');
    });
    it('PALEGOLDENROD', () => {
        css([color(constants.PALEGOLDENROD)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:palegoldenrod;}');
    });

    it('PALEGREEN type', () => {
        expect(typeof constants.PALEGREEN).toEqual('string');
    });
    it('PALEGREEN', () => {
        css([color(constants.PALEGREEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:palegreen;}');
    });

    it('PALETURQUOISE type', () => {
        expect(typeof constants.PALETURQUOISE).toEqual('string');
    });
    it('PALETURQUOISE', () => {
        css([color(constants.PALETURQUOISE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:paleturquoise;}');
    });

    it('PALEVIOLETRED type', () => {
        expect(typeof constants.PALEVIOLETRED).toEqual('string');
    });
    it('PALEVIOLETRED', () => {
        css([color(constants.PALEVIOLETRED)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:palevioletred;}');
    });

    it('PAPAYAWHIP type', () => {
        expect(typeof constants.PAPAYAWHIP).toEqual('string');
    });
    it('PAPAYAWHIP', () => {
        css([color(constants.PAPAYAWHIP)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:papayawhip;}');
    });

    it('PAUSED type', () => {
        expect(typeof constants.PAUSED).toEqual('string');
    });
    it('PAUSED', () => {
        css([color(constants.PAUSED)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:paused;}');
    });

    it('PEACHPUFF type', () => {
        expect(typeof constants.PEACHPUFF).toEqual('string');
    });
    it('PEACHPUFF', () => {
        css([color(constants.PEACHPUFF)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:peachpuff;}');
    });

    it('PERU type', () => {
        expect(typeof constants.PERU).toEqual('string');
    });
    it('PERU', () => {
        css([color(constants.PERU)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:peru;}');
    });

    it('PI type', () => {
        expect(typeof constants.PI).toEqual('string');
    });
    it('PI', () => {
        css([color(constants.PI)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:pi;}');
    });

    it('PINK type', () => {
        expect(typeof constants.PINK).toEqual('string');
    });
    it('PINK', () => {
        css([color(constants.PINK)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:pink;}');
    });

    it('PLUM type', () => {
        expect(typeof constants.PLUM).toEqual('string');
    });
    it('PLUM', () => {
        css([color(constants.PLUM)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:plum;}');
    });

    it('POWDERBLUE type', () => {
        expect(typeof constants.POWDERBLUE).toEqual('string');
    });
    it('POWDERBLUE', () => {
        css([color(constants.POWDERBLUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:powderblue;}');
    });

    it('PROGRESS_BAR type', () => {
        expect(typeof constants.PROGRESS_BAR).toEqual('string');
    });
    it('PROGRESS_BAR', () => {
        css([color(constants.PROGRESS_BAR)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:progress-bar;}');
    });

    it('PROPORTIONAL_NUMS type', () => {
        expect(typeof constants.PROPORTIONAL_NUMS).toEqual('string');
    });
    it('PROPORTIONAL_NUMS', () => {
        css([color(constants.PROPORTIONAL_NUMS)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:proportional-nums;}'
        );
    });

    it('PROPORTIONAL_WIDTH type', () => {
        expect(typeof constants.PROPORTIONAL_WIDTH).toEqual('string');
    });
    it('PROPORTIONAL_WIDTH', () => {
        css([color(constants.PROPORTIONAL_WIDTH)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:proportional-width;}'
        );
    });

    it('PURPLE type', () => {
        expect(typeof constants.PURPLE).toEqual('string');
    });
    it('PURPLE', () => {
        css([color(constants.PURPLE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:purple;}');
    });

    it('PUSH_BUTTON type', () => {
        expect(typeof constants.PUSH_BUTTON).toEqual('string');
    });
    it('PUSH_BUTTON', () => {
        css([color(constants.PUSH_BUTTON)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:push-button;}');
    });

    it('RADIO type', () => {
        expect(typeof constants.RADIO).toEqual('string');
    });
    it('RADIO', () => {
        css([color(constants.RADIO)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:radio;}');
    });

    it('REBECCAPURPLE type', () => {
        expect(typeof constants.REBECCAPURPLE).toEqual('string');
    });
    it('REBECCAPURPLE', () => {
        css([color(constants.REBECCAPURPLE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:rebeccapurple;}');
    });

    it('RED type', () => {
        expect(typeof constants.RED).toEqual('string');
    });
    it('RED', () => {
        css([color(constants.RED)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:red;}');
    });

    it('REPEAT type', () => {
        expect(typeof constants.REPEAT).toEqual('string');
    });
    it('REPEAT', () => {
        css([color(constants.REPEAT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:repeat;}');
    });

    it('REPEAT_X type', () => {
        expect(typeof constants.REPEAT_X).toEqual('string');
    });
    it('REPEAT_X', () => {
        css([color(constants.REPEAT_X)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:repeat-x;}');
    });

    it('REPEAT_Y type', () => {
        expect(typeof constants.REPEAT_Y).toEqual('string');
    });
    it('REPEAT_Y', () => {
        css([color(constants.REPEAT_Y)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:repeat-y;}');
    });

    it('REVERSE type', () => {
        expect(typeof constants.REVERSE).toEqual('string');
    });
    it('REVERSE', () => {
        css([color(constants.REVERSE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:reverse;}');
    });

    it('RIDGE type', () => {
        expect(typeof constants.RIDGE).toEqual('string');
    });
    it('RIDGE', () => {
        css([color(constants.RIDGE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:ridge;}');
    });

    it('RIGHT type', () => {
        expect(typeof constants.RIGHT).toEqual('string');
    });
    it('RIGHT', () => {
        css([color(constants.RIGHT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:right;}');
    });

    it('ROOT type', () => {
        expect(typeof constants.ROOT).toEqual('string');
    });
    it('ROOT', () => {
        css([color(constants.ROOT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:root;}');
    });

    it('ROSYBROWN type', () => {
        expect(typeof constants.ROSYBROWN).toEqual('string');
    });
    it('ROSYBROWN', () => {
        css([color(constants.ROSYBROWN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:rosybrown;}');
    });

    it('ROUND type', () => {
        expect(typeof constants.ROUND).toEqual('string');
    });
    it('ROUND', () => {
        css([color(constants.ROUND)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:round;}');
    });

    it('ROYALBLUE type', () => {
        expect(typeof constants.ROYALBLUE).toEqual('string');
    });
    it('ROYALBLUE', () => {
        css([color(constants.ROYALBLUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:royalblue;}');
    });

    it('RTL type', () => {
        expect(typeof constants.RTL).toEqual('string');
    });
    it('RTL', () => {
        css([color(constants.RTL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:rtl;}');
    });

    it('RUBY type', () => {
        expect(typeof constants.RUBY).toEqual('string');
    });
    it('RUBY', () => {
        css([color(constants.RUBY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:ruby;}');
    });

    it('RUBY_BASE type', () => {
        expect(typeof constants.RUBY_BASE).toEqual('string');
    });
    it('RUBY_BASE', () => {
        css([color(constants.RUBY_BASE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:ruby-base;}');
    });

    it('RUBY_BASE_CONTAINER type', () => {
        expect(typeof constants.RUBY_BASE_CONTAINER).toEqual('string');
    });
    it('RUBY_BASE_CONTAINER', () => {
        css([color(constants.RUBY_BASE_CONTAINER)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:ruby-base-container;}'
        );
    });

    it('RUBY_TEXT type', () => {
        expect(typeof constants.RUBY_TEXT).toEqual('string');
    });
    it('RUBY_TEXT', () => {
        css([color(constants.RUBY_TEXT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:ruby-text;}');
    });

    it('RUBY_TEXT_CONTAINER type', () => {
        expect(typeof constants.RUBY_TEXT_CONTAINER).toEqual('string');
    });
    it('RUBY_TEXT_CONTAINER', () => {
        css([color(constants.RUBY_TEXT_CONTAINER)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:ruby-text-container;}'
        );
    });

    it('RUN_IN type', () => {
        expect(typeof constants.RUN_IN).toEqual('string');
    });
    it('RUN_IN', () => {
        css([color(constants.RUN_IN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:run-in;}');
    });

    it('RUNNING type', () => {
        expect(typeof constants.RUNNING).toEqual('string');
    });
    it('RUNNING', () => {
        css([color(constants.RUNNING)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:running;}');
    });

    it('S type', () => {
        expect(typeof constants.S).toEqual('string');
    });
    it('S', () => {
        css([color(constants.S)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:s;}');
    });

    it('SADDLEBROWN type', () => {
        expect(typeof constants.SADDLEBROWN).toEqual('string');
    });
    it('SADDLEBROWN', () => {
        css([color(constants.SADDLEBROWN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:saddlebrown;}');
    });

    it('SAFE type', () => {
        expect(typeof constants.SAFE).toEqual('string');
    });
    it('SAFE', () => {
        css([color(constants.SAFE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:safe;}');
    });

    it('SALMON type', () => {
        expect(typeof constants.SALMON).toEqual('string');
    });
    it('SALMON', () => {
        css([color(constants.SALMON)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:salmon;}');
    });

    it('SANDYBROWN type', () => {
        expect(typeof constants.SANDYBROWN).toEqual('string');
    });
    it('SANDYBROWN', () => {
        css([color(constants.SANDYBROWN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:sandybrown;}');
    });

    it('SANS_SERIF type', () => {
        expect(typeof constants.SANS_SERIF).toEqual('string');
    });
    it('SANS_SERIF', () => {
        css([color(constants.SANS_SERIF)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:sans-serif;}');
    });

    it('SATURATION type', () => {
        expect(typeof constants.SATURATION).toEqual('string');
    });
    it('SATURATION', () => {
        css([color(constants.SATURATION)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:saturation;}');
    });

    it('SCREEN type', () => {
        expect(typeof constants.SCREEN).toEqual('string');
    });
    it('SCREEN', () => {
        css([color(constants.SCREEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:screen;}');
    });

    it('SCROLL type', () => {
        expect(typeof constants.SCROLL).toEqual('string');
    });
    it('SCROLL', () => {
        css([color(constants.SCROLL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:scroll;}');
    });

    it('SCROLL_POSITION type', () => {
        expect(typeof constants.SCROLL_POSITION).toEqual('string');
    });
    it('SCROLL_POSITION', () => {
        css([color(constants.SCROLL_POSITION)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:scroll-position;}'
        );
    });

    it('SEAGREEN type', () => {
        expect(typeof constants.SEAGREEN).toEqual('string');
    });
    it('SEAGREEN', () => {
        css([color(constants.SEAGREEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:seagreen;}');
    });

    it('SEARCHFIELD type', () => {
        expect(typeof constants.SEARCHFIELD).toEqual('string');
    });
    it('SEARCHFIELD', () => {
        css([color(constants.SEARCHFIELD)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:searchfield;}');
    });

    it('SEASHELL type', () => {
        expect(typeof constants.SEASHELL).toEqual('string');
    });
    it('SEASHELL', () => {
        css([color(constants.SEASHELL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:seashell;}');
    });

    it('SELF_END type', () => {
        expect(typeof constants.SELF_END).toEqual('string');
    });
    it('SELF_END', () => {
        css([color(constants.SELF_END)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:self-end;}');
    });

    it('SELF_START type', () => {
        expect(typeof constants.SELF_START).toEqual('string');
    });
    it('SELF_START', () => {
        css([color(constants.SELF_START)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:self-start;}');
    });

    it('SEMI_CONDENSED type', () => {
        expect(typeof constants.SEMI_CONDENSED).toEqual('string');
    });
    it('SEMI_CONDENSED', () => {
        css([color(constants.SEMI_CONDENSED)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:semi-condensed;}');
    });

    it('SEMI_EXPANDED type', () => {
        expect(typeof constants.SEMI_EXPANDED).toEqual('string');
    });
    it('SEMI_EXPANDED', () => {
        css([color(constants.SEMI_EXPANDED)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:semi-expanded;}');
    });

    it('SERIF type', () => {
        expect(typeof constants.SERIF).toEqual('string');
    });
    it('SERIF', () => {
        css([color(constants.SERIF)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:serif;}');
    });

    it('SIENNA type', () => {
        expect(typeof constants.SIENNA).toEqual('string');
    });
    it('SIENNA', () => {
        css([color(constants.SIENNA)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:sienna;}');
    });

    it('SILVER type', () => {
        expect(typeof constants.SILVER).toEqual('string');
    });
    it('SILVER', () => {
        css([color(constants.SILVER)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:silver;}');
    });

    it('SIMPLIFIED type', () => {
        expect(typeof constants.SIMPLIFIED).toEqual('string');
    });
    it('SIMPLIFIED', () => {
        css([color(constants.SIMPLIFIED)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:simplified;}');
    });

    it('SKYBLUE type', () => {
        expect(typeof constants.SKYBLUE).toEqual('string');
    });
    it('SKYBLUE', () => {
        css([color(constants.SKYBLUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:skyblue;}');
    });

    it('SLATEBLUE type', () => {
        expect(typeof constants.SLATEBLUE).toEqual('string');
    });
    it('SLATEBLUE', () => {
        css([color(constants.SLATEBLUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:slateblue;}');
    });

    it('SLATEGRAY type', () => {
        expect(typeof constants.SLATEGRAY).toEqual('string');
    });
    it('SLATEGRAY', () => {
        css([color(constants.SLATEGRAY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:slategray;}');
    });

    it('SLATEGREY type', () => {
        expect(typeof constants.SLATEGREY).toEqual('string');
    });
    it('SLATEGREY', () => {
        css([color(constants.SLATEGREY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:slategrey;}');
    });

    it('SLIDER_HORIZONTAL type', () => {
        expect(typeof constants.SLIDER_HORIZONTAL).toEqual('string');
    });
    it('SLIDER_HORIZONTAL', () => {
        css([color(constants.SLIDER_HORIZONTAL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:slider-horizontal;}'
        );
    });

    it('SMALL type', () => {
        expect(typeof constants.SMALL).toEqual('string');
    });
    it('SMALL', () => {
        css([color(constants.SMALL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:small;}');
    });

    it('SMALL_CAPS type', () => {
        expect(typeof constants.SMALL_CAPS).toEqual('string');
    });
    it('SMALL_CAPS', () => {
        css([color(constants.SMALL_CAPS)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:small-caps;}');
    });

    it('SMALLER type', () => {
        expect(typeof constants.SMALLER).toEqual('string');
    });
    it('SMALLER', () => {
        css([color(constants.SMALLER)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:smaller;}');
    });

    it('SNOW type', () => {
        expect(typeof constants.SNOW).toEqual('string');
    });
    it('SNOW', () => {
        css([color(constants.SNOW)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:snow;}');
    });

    it('SOFT_LIGHT type', () => {
        expect(typeof constants.SOFT_LIGHT).toEqual('string');
    });
    it('SOFT_LIGHT', () => {
        css([color(constants.SOFT_LIGHT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:soft-light;}');
    });

    it('SOLID type', () => {
        expect(typeof constants.SOLID).toEqual('string');
    });
    it('SOLID', () => {
        css([color(constants.SOLID)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:solid;}');
    });

    it('SOURCE_ATOP type', () => {
        expect(typeof constants.SOURCE_ATOP).toEqual('string');
    });
    it('SOURCE_ATOP', () => {
        css([color(constants.SOURCE_ATOP)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:source-atop;}');
    });

    it('SOURCE_IN type', () => {
        expect(typeof constants.SOURCE_IN).toEqual('string');
    });
    it('SOURCE_IN', () => {
        css([color(constants.SOURCE_IN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:source-in;}');
    });

    it('SOURCE_OUT type', () => {
        expect(typeof constants.SOURCE_OUT).toEqual('string');
    });
    it('SOURCE_OUT', () => {
        css([color(constants.SOURCE_OUT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:source-out;}');
    });

    it('SOURCE_OVER type', () => {
        expect(typeof constants.SOURCE_OVER).toEqual('string');
    });
    it('SOURCE_OVER', () => {
        css([color(constants.SOURCE_OVER)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:source-over;}');
    });

    it('SPACE type', () => {
        expect(typeof constants.SPACE).toEqual('string');
    });
    it('SPACE', () => {
        css([color(constants.SPACE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:space;}');
    });

    it('SPACE_AROUND type', () => {
        expect(typeof constants.SPACE_AROUND).toEqual('string');
    });
    it('SPACE_AROUND', () => {
        css([color(constants.SPACE_AROUND)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:space-around;}');
    });

    it('SPACE_BETWEEN type', () => {
        expect(typeof constants.SPACE_BETWEEN).toEqual('string');
    });
    it('SPACE_BETWEEN', () => {
        css([color(constants.SPACE_BETWEEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:space-between;}');
    });

    it('SPACE_EVENLY type', () => {
        expect(typeof constants.SPACE_EVENLY).toEqual('string');
    });
    it('SPACE_EVENLY', () => {
        css([color(constants.SPACE_EVENLY)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:space-evenly;}');
    });

    it('SPAN type', () => {
        expect(typeof constants.SPAN).toEqual('string');
    });
    it('SPAN', () => {
        css([color(constants.SPAN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:span;}');
    });

    it('SPRINGGREEN type', () => {
        expect(typeof constants.SPRINGGREEN).toEqual('string');
    });
    it('SPRINGGREEN', () => {
        css([color(constants.SPRINGGREEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:springgreen;}');
    });

    it('SQUARE_BUTTON type', () => {
        expect(typeof constants.SQUARE_BUTTON).toEqual('string');
    });
    it('SQUARE_BUTTON', () => {
        css([color(constants.SQUARE_BUTTON)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:square-button;}');
    });

    it('STACKED_FRACTIONS type', () => {
        expect(typeof constants.STACKED_FRACTIONS).toEqual('string');
    });
    it('STACKED_FRACTIONS', () => {
        css([color(constants.STACKED_FRACTIONS)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:stacked-fractions;}'
        );
    });

    it('START type', () => {
        expect(typeof constants.START).toEqual('string');
    });
    it('START', () => {
        css([color(constants.START)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:start;}');
    });

    it('STEELBLUE type', () => {
        expect(typeof constants.STEELBLUE).toEqual('string');
    });
    it('STEELBLUE', () => {
        css([color(constants.STEELBLUE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:steelblue;}');
    });

    it('STEP_END type', () => {
        expect(typeof constants.STEP_END).toEqual('string');
    });
    it('STEP_END', () => {
        css([color(constants.STEP_END)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:step-end;}');
    });

    it('STEP_START type', () => {
        expect(typeof constants.STEP_START).toEqual('string');
    });
    it('STEP_START', () => {
        css([color(constants.STEP_START)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:step-start;}');
    });

    it('STRETCH type', () => {
        expect(typeof constants.STRETCH).toEqual('string');
    });
    it('STRETCH', () => {
        css([color(constants.STRETCH)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:stretch;}');
    });

    it('STROKE_BOX type', () => {
        expect(typeof constants.STROKE_BOX).toEqual('string');
    });
    it('STROKE_BOX', () => {
        css([color(constants.STROKE_BOX)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:stroke-box;}');
    });

    it('SUBTRACT type', () => {
        expect(typeof constants.SUBTRACT).toEqual('string');
    });
    it('SUBTRACT', () => {
        css([color(constants.SUBTRACT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:subtract;}');
    });

    it('TABLE type', () => {
        expect(typeof constants.TABLE).toEqual('string');
    });
    it('TABLE', () => {
        css([color(constants.TABLE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:table;}');
    });

    it('TABLE_CAPTION type', () => {
        expect(typeof constants.TABLE_CAPTION).toEqual('string');
    });
    it('TABLE_CAPTION', () => {
        css([color(constants.TABLE_CAPTION)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:table-caption;}');
    });

    it('TABLE_CELL type', () => {
        expect(typeof constants.TABLE_CELL).toEqual('string');
    });
    it('TABLE_CELL', () => {
        css([color(constants.TABLE_CELL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:table-cell;}');
    });

    it('TABLE_COLUMN type', () => {
        expect(typeof constants.TABLE_COLUMN).toEqual('string');
    });
    it('TABLE_COLUMN', () => {
        css([color(constants.TABLE_COLUMN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:table-column;}');
    });

    it('TABLE_COLUMN_GROUP type', () => {
        expect(typeof constants.TABLE_COLUMN_GROUP).toEqual('string');
    });
    it('TABLE_COLUMN_GROUP', () => {
        css([color(constants.TABLE_COLUMN_GROUP)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:table-column-group;}'
        );
    });

    it('TABLE_FOOTER_GROUP type', () => {
        expect(typeof constants.TABLE_FOOTER_GROUP).toEqual('string');
    });
    it('TABLE_FOOTER_GROUP', () => {
        css([color(constants.TABLE_FOOTER_GROUP)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:table-footer-group;}'
        );
    });

    it('TABLE_HEADER_GROUP type', () => {
        expect(typeof constants.TABLE_HEADER_GROUP).toEqual('string');
    });
    it('TABLE_HEADER_GROUP', () => {
        css([color(constants.TABLE_HEADER_GROUP)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:table-header-group;}'
        );
    });

    it('TABLE_ROW type', () => {
        expect(typeof constants.TABLE_ROW).toEqual('string');
    });
    it('TABLE_ROW', () => {
        css([color(constants.TABLE_ROW)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:table-row;}');
    });

    it('TABLE_ROW_GROUP type', () => {
        expect(typeof constants.TABLE_ROW_GROUP).toEqual('string');
    });
    it('TABLE_ROW_GROUP', () => {
        css([color(constants.TABLE_ROW_GROUP)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:table-row-group;}'
        );
    });

    it('TABULAR_NUMS type', () => {
        expect(typeof constants.TABULAR_NUMS).toEqual('string');
    });
    it('TABULAR_NUMS', () => {
        css([color(constants.TABULAR_NUMS)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:tabular-nums;}');
    });

    it('TAN type', () => {
        expect(typeof constants.TAN).toEqual('string');
    });
    it('TAN', () => {
        css([color(constants.TAN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:tan;}');
    });

    it('TEAL type', () => {
        expect(typeof constants.TEAL).toEqual('string');
    });
    it('TEAL', () => {
        css([color(constants.TEAL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:teal;}');
    });

    it('TEXTAREA type', () => {
        expect(typeof constants.TEXTAREA).toEqual('string');
    });
    it('TEXTAREA', () => {
        css([color(constants.TEXTAREA)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:textarea;}');
    });

    it('THICK type', () => {
        expect(typeof constants.THICK).toEqual('string');
    });
    it('THICK', () => {
        css([color(constants.THICK)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:thick;}');
    });

    it('THIN type', () => {
        expect(typeof constants.THIN).toEqual('string');
    });
    it('THIN', () => {
        css([color(constants.THIN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:thin;}');
    });

    it('THISTLE type', () => {
        expect(typeof constants.THISTLE).toEqual('string');
    });
    it('THISTLE', () => {
        css([color(constants.THISTLE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:thistle;}');
    });

    it('TO type', () => {
        expect(typeof constants.TO).toEqual('string');
    });
    it('TO', () => {
        css([color(constants.TO)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:to;}');
    });

    it('TO_ZERO type', () => {
        expect(typeof constants.TO_ZERO).toEqual('string');
    });
    it('TO_ZERO', () => {
        css([color(constants.TO_ZERO)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:to-zero;}');
    });

    it('TOMATO type', () => {
        expect(typeof constants.TOMATO).toEqual('string');
    });
    it('TOMATO', () => {
        css([color(constants.TOMATO)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:tomato;}');
    });

    it('TOP type', () => {
        expect(typeof constants.TOP).toEqual('string');
    });
    it('TOP', () => {
        css([color(constants.TOP)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:top;}');
    });

    it('TRADITIONAL type', () => {
        expect(typeof constants.TRADITIONAL).toEqual('string');
    });
    it('TRADITIONAL', () => {
        css([color(constants.TRADITIONAL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:traditional;}');
    });

    it('TRANSPARENT type', () => {
        expect(typeof constants.TRANSPARENT).toEqual('string');
    });
    it('TRANSPARENT', () => {
        css([color(constants.TRANSPARENT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:transparent;}');
    });

    it('TURQUOISE type', () => {
        expect(typeof constants.TURQUOISE).toEqual('string');
    });
    it('TURQUOISE', () => {
        css([color(constants.TURQUOISE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:turquoise;}');
    });

    it('ULTRA_CONDENSED type', () => {
        expect(typeof constants.ULTRA_CONDENSED).toEqual('string');
    });
    it('ULTRA_CONDENSED', () => {
        css([color(constants.ULTRA_CONDENSED)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual(
            '.go12345{color:ultra-condensed;}'
        );
    });

    it('ULTRA_EXPANDED type', () => {
        expect(typeof constants.ULTRA_EXPANDED).toEqual('string');
    });
    it('ULTRA_EXPANDED', () => {
        css([color(constants.ULTRA_EXPANDED)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:ultra-expanded;}');
    });

    it('UNSAFE type', () => {
        expect(typeof constants.UNSAFE).toEqual('string');
    });
    it('UNSAFE', () => {
        css([color(constants.UNSAFE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:unsafe;}');
    });

    it('UP type', () => {
        expect(typeof constants.UP).toEqual('string');
    });
    it('UP', () => {
        css([color(constants.UP)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:up;}');
    });

    it('VERTICAL type', () => {
        expect(typeof constants.VERTICAL).toEqual('string');
    });
    it('VERTICAL', () => {
        css([color(constants.VERTICAL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:vertical;}');
    });

    it('VIEW_BOX type', () => {
        expect(typeof constants.VIEW_BOX).toEqual('string');
    });
    it('VIEW_BOX', () => {
        css([color(constants.VIEW_BOX)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:view-box;}');
    });

    it('VIOLET type', () => {
        expect(typeof constants.VIOLET).toEqual('string');
    });
    it('VIOLET', () => {
        css([color(constants.VIOLET)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:violet;}');
    });

    it('WHEAT type', () => {
        expect(typeof constants.WHEAT).toEqual('string');
    });
    it('WHEAT', () => {
        css([color(constants.WHEAT)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:wheat;}');
    });

    it('WHITE type', () => {
        expect(typeof constants.WHITE).toEqual('string');
    });
    it('WHITE', () => {
        css([color(constants.WHITE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:white;}');
    });

    it('WHITESMOKE type', () => {
        expect(typeof constants.WHITESMOKE).toEqual('string');
    });
    it('WHITESMOKE', () => {
        css([color(constants.WHITESMOKE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:whitesmoke;}');
    });

    it('X_LARGE type', () => {
        expect(typeof constants.X_LARGE).toEqual('string');
    });
    it('X_LARGE', () => {
        css([color(constants.X_LARGE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:x-large;}');
    });

    it('X_SMALL type', () => {
        expect(typeof constants.X_SMALL).toEqual('string');
    });
    it('X_SMALL', () => {
        css([color(constants.X_SMALL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:x-small;}');
    });

    it('XOR type', () => {
        expect(typeof constants.XOR).toEqual('string');
    });
    it('XOR', () => {
        css([color(constants.XOR)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:xor;}');
    });

    it('XX_LARGE type', () => {
        expect(typeof constants.XX_LARGE).toEqual('string');
    });
    it('XX_LARGE', () => {
        css([color(constants.XX_LARGE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:xx-large;}');
    });

    it('XX_SMALL type', () => {
        expect(typeof constants.XX_SMALL).toEqual('string');
    });
    it('XX_SMALL', () => {
        css([color(constants.XX_SMALL)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:xx-small;}');
    });

    it('XXX_LARGE type', () => {
        expect(typeof constants.XXX_LARGE).toEqual('string');
    });
    it('XXX_LARGE', () => {
        css([color(constants.XXX_LARGE)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:xxx-large;}');
    });

    it('YELLOW type', () => {
        expect(typeof constants.YELLOW).toEqual('string');
    });
    it('YELLOW', () => {
        css([color(constants.YELLOW)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:yellow;}');
    });

    it('YELLOWGREEN type', () => {
        expect(typeof constants.YELLOWGREEN).toEqual('string');
    });
    it('YELLOWGREEN', () => {
        css([color(constants.YELLOWGREEN)]);
        expect(extractCss().replace(/go\d+/, 'go12345')).toEqual('.go12345{color:yellowgreen;}');
    });
});
