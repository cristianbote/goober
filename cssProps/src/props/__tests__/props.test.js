//Do not modify this file.  This file is generated from ./scripts/generateProps.js
import * as cssProps from '../index';
import { css, setup } from 'goober';

jest.mock('goober', () => ({
    css: jest.fn().mockReturnValue('css()')
}));

describe('cssProps', () => {
    beforeEach(() => {
        css.mockClear();
    });

    it('WebkitLineClamp type', () => {
        expect(typeof cssProps.WebkitLineClamp).toEqual('function');
    });

    it('WebkitLineClamp', () => {
        expect(cssProps.WebkitLineClamp("value")).toEqual({WebkitLineClamp:'value'});
    });


    it('accentColor type', () => {
        expect(typeof cssProps.accentColor).toEqual('function');
    });

    it('accentColor', () => {
        expect(cssProps.accentColor("value")).toEqual({accentColor:'value'});
    });


    it('alignContent type', () => {
        expect(typeof cssProps.alignContent).toEqual('function');
    });

    it('alignContent', () => {
        expect(cssProps.alignContent("value")).toEqual({alignContent:'value'});
    });


    it('alignItems type', () => {
        expect(typeof cssProps.alignItems).toEqual('function');
    });

    it('alignItems', () => {
        expect(cssProps.alignItems("value")).toEqual({alignItems:'value'});
    });


    it('alignSelf type', () => {
        expect(typeof cssProps.alignSelf).toEqual('function');
    });

    it('alignSelf', () => {
        expect(cssProps.alignSelf("value")).toEqual({alignSelf:'value'});
    });


    it('all type', () => {
        expect(typeof cssProps.all).toEqual('function');
    });

    it('all', () => {
        expect(cssProps.all("value")).toEqual({all:'value'});
    });


    it('animation type', () => {
        expect(typeof cssProps.animation).toEqual('function');
    });

    it('animation', () => {
        expect(cssProps.animation("value")).toEqual({animation:'value'});
    });


    it('animationDelay type', () => {
        expect(typeof cssProps.animationDelay).toEqual('function');
    });

    it('animationDelay', () => {
        expect(cssProps.animationDelay("value")).toEqual({animationDelay:'value'});
    });


    it('animationDirection type', () => {
        expect(typeof cssProps.animationDirection).toEqual('function');
    });

    it('animationDirection', () => {
        expect(cssProps.animationDirection("value")).toEqual({animationDirection:'value'});
    });


    it('animationDuration type', () => {
        expect(typeof cssProps.animationDuration).toEqual('function');
    });

    it('animationDuration', () => {
        expect(cssProps.animationDuration("value")).toEqual({animationDuration:'value'});
    });


    it('animationFillMode type', () => {
        expect(typeof cssProps.animationFillMode).toEqual('function');
    });

    it('animationFillMode', () => {
        expect(cssProps.animationFillMode("value")).toEqual({animationFillMode:'value'});
    });


    it('animationIterationCount type', () => {
        expect(typeof cssProps.animationIterationCount).toEqual('function');
    });

    it('animationIterationCount', () => {
        expect(cssProps.animationIterationCount("value")).toEqual({animationIterationCount:'value'});
    });


    it('animationName type', () => {
        expect(typeof cssProps.animationName).toEqual('function');
    });

    it('animationName', () => {
        expect(cssProps.animationName("value")).toEqual({animationName:'value'});
    });


    it('animationPlayState type', () => {
        expect(typeof cssProps.animationPlayState).toEqual('function');
    });

    it('animationPlayState', () => {
        expect(cssProps.animationPlayState("value")).toEqual({animationPlayState:'value'});
    });


    it('animationTimingFunction type', () => {
        expect(typeof cssProps.animationTimingFunction).toEqual('function');
    });

    it('animationTimingFunction', () => {
        expect(cssProps.animationTimingFunction("value")).toEqual({animationTimingFunction:'value'});
    });


    it('backdropFilter type', () => {
        expect(typeof cssProps.backdropFilter).toEqual('function');
    });

    it('backdropFilter', () => {
        expect(cssProps.backdropFilter("value")).toEqual({backdropFilter:'value'});
    });


    it('backfaceVisibility type', () => {
        expect(typeof cssProps.backfaceVisibility).toEqual('function');
    });

    it('backfaceVisibility', () => {
        expect(cssProps.backfaceVisibility("value")).toEqual({backfaceVisibility:'value'});
    });


    it('background type', () => {
        expect(typeof cssProps.background).toEqual('function');
    });

    it('background', () => {
        expect(cssProps.background("value")).toEqual({background:'value'});
    });


    it('backgroundAttachment type', () => {
        expect(typeof cssProps.backgroundAttachment).toEqual('function');
    });

    it('backgroundAttachment', () => {
        expect(cssProps.backgroundAttachment("value")).toEqual({backgroundAttachment:'value'});
    });


    it('backgroundBlendMode type', () => {
        expect(typeof cssProps.backgroundBlendMode).toEqual('function');
    });

    it('backgroundBlendMode', () => {
        expect(cssProps.backgroundBlendMode("value")).toEqual({backgroundBlendMode:'value'});
    });


    it('backgroundClip type', () => {
        expect(typeof cssProps.backgroundClip).toEqual('function');
    });

    it('backgroundClip', () => {
        expect(cssProps.backgroundClip("value")).toEqual({backgroundClip:'value'});
    });


    it('backgroundColor type', () => {
        expect(typeof cssProps.backgroundColor).toEqual('function');
    });

    it('backgroundColor', () => {
        expect(cssProps.backgroundColor("value")).toEqual({backgroundColor:'value'});
    });


    it('backgroundImage type', () => {
        expect(typeof cssProps.backgroundImage).toEqual('function');
    });

    it('backgroundImage', () => {
        expect(cssProps.backgroundImage("value")).toEqual({backgroundImage:'value'});
    });


    it('backgroundOrigin type', () => {
        expect(typeof cssProps.backgroundOrigin).toEqual('function');
    });

    it('backgroundOrigin', () => {
        expect(cssProps.backgroundOrigin("value")).toEqual({backgroundOrigin:'value'});
    });


    it('backgroundPosition type', () => {
        expect(typeof cssProps.backgroundPosition).toEqual('function');
    });

    it('backgroundPosition', () => {
        expect(cssProps.backgroundPosition("value")).toEqual({backgroundPosition:'value'});
    });


    it('backgroundRepeat type', () => {
        expect(typeof cssProps.backgroundRepeat).toEqual('function');
    });

    it('backgroundRepeat', () => {
        expect(cssProps.backgroundRepeat("value")).toEqual({backgroundRepeat:'value'});
    });


    it('backgroundSize type', () => {
        expect(typeof cssProps.backgroundSize).toEqual('function');
    });

    it('backgroundSize', () => {
        expect(cssProps.backgroundSize("value")).toEqual({backgroundSize:'value'});
    });


    it('blockSize type', () => {
        expect(typeof cssProps.blockSize).toEqual('function');
    });

    it('blockSize', () => {
        expect(cssProps.blockSize("value")).toEqual({blockSize:'value'});
    });


    it('border type', () => {
        expect(typeof cssProps.border).toEqual('function');
    });

    it('border', () => {
        expect(cssProps.border("value")).toEqual({border:'value'});
    });


    it('borderBlock type', () => {
        expect(typeof cssProps.borderBlock).toEqual('function');
    });

    it('borderBlock', () => {
        expect(cssProps.borderBlock("value")).toEqual({borderBlock:'value'});
    });


    it('borderBlockColor type', () => {
        expect(typeof cssProps.borderBlockColor).toEqual('function');
    });

    it('borderBlockColor', () => {
        expect(cssProps.borderBlockColor("value")).toEqual({borderBlockColor:'value'});
    });


    it('borderBlockStyle type', () => {
        expect(typeof cssProps.borderBlockStyle).toEqual('function');
    });

    it('borderBlockStyle', () => {
        expect(cssProps.borderBlockStyle("value")).toEqual({borderBlockStyle:'value'});
    });


    it('borderBlockWidth type', () => {
        expect(typeof cssProps.borderBlockWidth).toEqual('function');
    });

    it('borderBlockWidth', () => {
        expect(cssProps.borderBlockWidth("value")).toEqual({borderBlockWidth:'value'});
    });


    it('borderBlockEnd type', () => {
        expect(typeof cssProps.borderBlockEnd).toEqual('function');
    });

    it('borderBlockEnd', () => {
        expect(cssProps.borderBlockEnd("value")).toEqual({borderBlockEnd:'value'});
    });


    it('borderBlockEndColor type', () => {
        expect(typeof cssProps.borderBlockEndColor).toEqual('function');
    });

    it('borderBlockEndColor', () => {
        expect(cssProps.borderBlockEndColor("value")).toEqual({borderBlockEndColor:'value'});
    });


    it('borderBlockEndStyle type', () => {
        expect(typeof cssProps.borderBlockEndStyle).toEqual('function');
    });

    it('borderBlockEndStyle', () => {
        expect(cssProps.borderBlockEndStyle("value")).toEqual({borderBlockEndStyle:'value'});
    });


    it('borderBlockEndWidth type', () => {
        expect(typeof cssProps.borderBlockEndWidth).toEqual('function');
    });

    it('borderBlockEndWidth', () => {
        expect(cssProps.borderBlockEndWidth("value")).toEqual({borderBlockEndWidth:'value'});
    });


    it('borderBlockStart type', () => {
        expect(typeof cssProps.borderBlockStart).toEqual('function');
    });

    it('borderBlockStart', () => {
        expect(cssProps.borderBlockStart("value")).toEqual({borderBlockStart:'value'});
    });


    it('borderBlockStartColor type', () => {
        expect(typeof cssProps.borderBlockStartColor).toEqual('function');
    });

    it('borderBlockStartColor', () => {
        expect(cssProps.borderBlockStartColor("value")).toEqual({borderBlockStartColor:'value'});
    });


    it('borderBlockStartStyle type', () => {
        expect(typeof cssProps.borderBlockStartStyle).toEqual('function');
    });

    it('borderBlockStartStyle', () => {
        expect(cssProps.borderBlockStartStyle("value")).toEqual({borderBlockStartStyle:'value'});
    });


    it('borderBlockStartWidth type', () => {
        expect(typeof cssProps.borderBlockStartWidth).toEqual('function');
    });

    it('borderBlockStartWidth', () => {
        expect(cssProps.borderBlockStartWidth("value")).toEqual({borderBlockStartWidth:'value'});
    });


    it('borderBottom type', () => {
        expect(typeof cssProps.borderBottom).toEqual('function');
    });

    it('borderBottom', () => {
        expect(cssProps.borderBottom("value")).toEqual({borderBottom:'value'});
    });


    it('borderBottomColor type', () => {
        expect(typeof cssProps.borderBottomColor).toEqual('function');
    });

    it('borderBottomColor', () => {
        expect(cssProps.borderBottomColor("value")).toEqual({borderBottomColor:'value'});
    });


    it('borderBottomLeftRadius type', () => {
        expect(typeof cssProps.borderBottomLeftRadius).toEqual('function');
    });

    it('borderBottomLeftRadius', () => {
        expect(cssProps.borderBottomLeftRadius("value")).toEqual({borderBottomLeftRadius:'value'});
    });


    it('borderBottomRightRadius type', () => {
        expect(typeof cssProps.borderBottomRightRadius).toEqual('function');
    });

    it('borderBottomRightRadius', () => {
        expect(cssProps.borderBottomRightRadius("value")).toEqual({borderBottomRightRadius:'value'});
    });


    it('borderBottomStyle type', () => {
        expect(typeof cssProps.borderBottomStyle).toEqual('function');
    });

    it('borderBottomStyle', () => {
        expect(cssProps.borderBottomStyle("value")).toEqual({borderBottomStyle:'value'});
    });


    it('borderBottomWidth type', () => {
        expect(typeof cssProps.borderBottomWidth).toEqual('function');
    });

    it('borderBottomWidth', () => {
        expect(cssProps.borderBottomWidth("value")).toEqual({borderBottomWidth:'value'});
    });


    it('borderCollapse type', () => {
        expect(typeof cssProps.borderCollapse).toEqual('function');
    });

    it('borderCollapse', () => {
        expect(cssProps.borderCollapse("value")).toEqual({borderCollapse:'value'});
    });


    it('borderColor type', () => {
        expect(typeof cssProps.borderColor).toEqual('function');
    });

    it('borderColor', () => {
        expect(cssProps.borderColor("value")).toEqual({borderColor:'value'});
    });


    it('borderEndEndRadius type', () => {
        expect(typeof cssProps.borderEndEndRadius).toEqual('function');
    });

    it('borderEndEndRadius', () => {
        expect(cssProps.borderEndEndRadius("value")).toEqual({borderEndEndRadius:'value'});
    });


    it('borderEndStartRadius type', () => {
        expect(typeof cssProps.borderEndStartRadius).toEqual('function');
    });

    it('borderEndStartRadius', () => {
        expect(cssProps.borderEndStartRadius("value")).toEqual({borderEndStartRadius:'value'});
    });


    it('borderImage type', () => {
        expect(typeof cssProps.borderImage).toEqual('function');
    });

    it('borderImage', () => {
        expect(cssProps.borderImage("value")).toEqual({borderImage:'value'});
    });


    it('borderImageOutset type', () => {
        expect(typeof cssProps.borderImageOutset).toEqual('function');
    });

    it('borderImageOutset', () => {
        expect(cssProps.borderImageOutset("value")).toEqual({borderImageOutset:'value'});
    });


    it('borderImageRepeat type', () => {
        expect(typeof cssProps.borderImageRepeat).toEqual('function');
    });

    it('borderImageRepeat', () => {
        expect(cssProps.borderImageRepeat("value")).toEqual({borderImageRepeat:'value'});
    });


    it('borderImageSlice type', () => {
        expect(typeof cssProps.borderImageSlice).toEqual('function');
    });

    it('borderImageSlice', () => {
        expect(cssProps.borderImageSlice("value")).toEqual({borderImageSlice:'value'});
    });


    it('borderImageSource type', () => {
        expect(typeof cssProps.borderImageSource).toEqual('function');
    });

    it('borderImageSource', () => {
        expect(cssProps.borderImageSource("value")).toEqual({borderImageSource:'value'});
    });


    it('borderImageWidth type', () => {
        expect(typeof cssProps.borderImageWidth).toEqual('function');
    });

    it('borderImageWidth', () => {
        expect(cssProps.borderImageWidth("value")).toEqual({borderImageWidth:'value'});
    });


    it('borderInline type', () => {
        expect(typeof cssProps.borderInline).toEqual('function');
    });

    it('borderInline', () => {
        expect(cssProps.borderInline("value")).toEqual({borderInline:'value'});
    });


    it('borderInlineEnd type', () => {
        expect(typeof cssProps.borderInlineEnd).toEqual('function');
    });

    it('borderInlineEnd', () => {
        expect(cssProps.borderInlineEnd("value")).toEqual({borderInlineEnd:'value'});
    });


    it('borderInlineColor type', () => {
        expect(typeof cssProps.borderInlineColor).toEqual('function');
    });

    it('borderInlineColor', () => {
        expect(cssProps.borderInlineColor("value")).toEqual({borderInlineColor:'value'});
    });


    it('borderInlineStyle type', () => {
        expect(typeof cssProps.borderInlineStyle).toEqual('function');
    });

    it('borderInlineStyle', () => {
        expect(cssProps.borderInlineStyle("value")).toEqual({borderInlineStyle:'value'});
    });


    it('borderInlineWidth type', () => {
        expect(typeof cssProps.borderInlineWidth).toEqual('function');
    });

    it('borderInlineWidth', () => {
        expect(cssProps.borderInlineWidth("value")).toEqual({borderInlineWidth:'value'});
    });


    it('borderInlineEndColor type', () => {
        expect(typeof cssProps.borderInlineEndColor).toEqual('function');
    });

    it('borderInlineEndColor', () => {
        expect(cssProps.borderInlineEndColor("value")).toEqual({borderInlineEndColor:'value'});
    });


    it('borderInlineEndStyle type', () => {
        expect(typeof cssProps.borderInlineEndStyle).toEqual('function');
    });

    it('borderInlineEndStyle', () => {
        expect(cssProps.borderInlineEndStyle("value")).toEqual({borderInlineEndStyle:'value'});
    });


    it('borderInlineEndWidth type', () => {
        expect(typeof cssProps.borderInlineEndWidth).toEqual('function');
    });

    it('borderInlineEndWidth', () => {
        expect(cssProps.borderInlineEndWidth("value")).toEqual({borderInlineEndWidth:'value'});
    });


    it('borderInlineStart type', () => {
        expect(typeof cssProps.borderInlineStart).toEqual('function');
    });

    it('borderInlineStart', () => {
        expect(cssProps.borderInlineStart("value")).toEqual({borderInlineStart:'value'});
    });


    it('borderInlineStartColor type', () => {
        expect(typeof cssProps.borderInlineStartColor).toEqual('function');
    });

    it('borderInlineStartColor', () => {
        expect(cssProps.borderInlineStartColor("value")).toEqual({borderInlineStartColor:'value'});
    });


    it('borderInlineStartStyle type', () => {
        expect(typeof cssProps.borderInlineStartStyle).toEqual('function');
    });

    it('borderInlineStartStyle', () => {
        expect(cssProps.borderInlineStartStyle("value")).toEqual({borderInlineStartStyle:'value'});
    });


    it('borderInlineStartWidth type', () => {
        expect(typeof cssProps.borderInlineStartWidth).toEqual('function');
    });

    it('borderInlineStartWidth', () => {
        expect(cssProps.borderInlineStartWidth("value")).toEqual({borderInlineStartWidth:'value'});
    });


    it('borderLeft type', () => {
        expect(typeof cssProps.borderLeft).toEqual('function');
    });

    it('borderLeft', () => {
        expect(cssProps.borderLeft("value")).toEqual({borderLeft:'value'});
    });


    it('borderLeftColor type', () => {
        expect(typeof cssProps.borderLeftColor).toEqual('function');
    });

    it('borderLeftColor', () => {
        expect(cssProps.borderLeftColor("value")).toEqual({borderLeftColor:'value'});
    });


    it('borderLeftStyle type', () => {
        expect(typeof cssProps.borderLeftStyle).toEqual('function');
    });

    it('borderLeftStyle', () => {
        expect(cssProps.borderLeftStyle("value")).toEqual({borderLeftStyle:'value'});
    });


    it('borderLeftWidth type', () => {
        expect(typeof cssProps.borderLeftWidth).toEqual('function');
    });

    it('borderLeftWidth', () => {
        expect(cssProps.borderLeftWidth("value")).toEqual({borderLeftWidth:'value'});
    });


    it('borderRadius type', () => {
        expect(typeof cssProps.borderRadius).toEqual('function');
    });

    it('borderRadius', () => {
        expect(cssProps.borderRadius("value")).toEqual({borderRadius:'value'});
    });


    it('borderRight type', () => {
        expect(typeof cssProps.borderRight).toEqual('function');
    });

    it('borderRight', () => {
        expect(cssProps.borderRight("value")).toEqual({borderRight:'value'});
    });


    it('borderRightColor type', () => {
        expect(typeof cssProps.borderRightColor).toEqual('function');
    });

    it('borderRightColor', () => {
        expect(cssProps.borderRightColor("value")).toEqual({borderRightColor:'value'});
    });


    it('borderRightStyle type', () => {
        expect(typeof cssProps.borderRightStyle).toEqual('function');
    });

    it('borderRightStyle', () => {
        expect(cssProps.borderRightStyle("value")).toEqual({borderRightStyle:'value'});
    });


    it('borderRightWidth type', () => {
        expect(typeof cssProps.borderRightWidth).toEqual('function');
    });

    it('borderRightWidth', () => {
        expect(cssProps.borderRightWidth("value")).toEqual({borderRightWidth:'value'});
    });


    it('borderSpacing type', () => {
        expect(typeof cssProps.borderSpacing).toEqual('function');
    });

    it('borderSpacing', () => {
        expect(cssProps.borderSpacing("value")).toEqual({borderSpacing:'value'});
    });


    it('borderStartEndRadius type', () => {
        expect(typeof cssProps.borderStartEndRadius).toEqual('function');
    });

    it('borderStartEndRadius', () => {
        expect(cssProps.borderStartEndRadius("value")).toEqual({borderStartEndRadius:'value'});
    });


    it('borderStartStartRadius type', () => {
        expect(typeof cssProps.borderStartStartRadius).toEqual('function');
    });

    it('borderStartStartRadius', () => {
        expect(cssProps.borderStartStartRadius("value")).toEqual({borderStartStartRadius:'value'});
    });


    it('borderStyle type', () => {
        expect(typeof cssProps.borderStyle).toEqual('function');
    });

    it('borderStyle', () => {
        expect(cssProps.borderStyle("value")).toEqual({borderStyle:'value'});
    });


    it('borderTop type', () => {
        expect(typeof cssProps.borderTop).toEqual('function');
    });

    it('borderTop', () => {
        expect(cssProps.borderTop("value")).toEqual({borderTop:'value'});
    });


    it('borderTopColor type', () => {
        expect(typeof cssProps.borderTopColor).toEqual('function');
    });

    it('borderTopColor', () => {
        expect(cssProps.borderTopColor("value")).toEqual({borderTopColor:'value'});
    });


    it('borderTopLeftRadius type', () => {
        expect(typeof cssProps.borderTopLeftRadius).toEqual('function');
    });

    it('borderTopLeftRadius', () => {
        expect(cssProps.borderTopLeftRadius("value")).toEqual({borderTopLeftRadius:'value'});
    });


    it('borderTopRightRadius type', () => {
        expect(typeof cssProps.borderTopRightRadius).toEqual('function');
    });

    it('borderTopRightRadius', () => {
        expect(cssProps.borderTopRightRadius("value")).toEqual({borderTopRightRadius:'value'});
    });


    it('borderTopStyle type', () => {
        expect(typeof cssProps.borderTopStyle).toEqual('function');
    });

    it('borderTopStyle', () => {
        expect(cssProps.borderTopStyle("value")).toEqual({borderTopStyle:'value'});
    });


    it('borderTopWidth type', () => {
        expect(typeof cssProps.borderTopWidth).toEqual('function');
    });

    it('borderTopWidth', () => {
        expect(cssProps.borderTopWidth("value")).toEqual({borderTopWidth:'value'});
    });


    it('borderWidth type', () => {
        expect(typeof cssProps.borderWidth).toEqual('function');
    });

    it('borderWidth', () => {
        expect(cssProps.borderWidth("value")).toEqual({borderWidth:'value'});
    });


    it('bottom type', () => {
        expect(typeof cssProps.bottom).toEqual('function');
    });

    it('bottom', () => {
        expect(cssProps.bottom("value")).toEqual({bottom:'value'});
    });


    it('boxDecorationBreak type', () => {
        expect(typeof cssProps.boxDecorationBreak).toEqual('function');
    });

    it('boxDecorationBreak', () => {
        expect(cssProps.boxDecorationBreak("value")).toEqual({boxDecorationBreak:'value'});
    });


    it('boxShadow type', () => {
        expect(typeof cssProps.boxShadow).toEqual('function');
    });

    it('boxShadow', () => {
        expect(cssProps.boxShadow("value")).toEqual({boxShadow:'value'});
    });


    it('boxSizing type', () => {
        expect(typeof cssProps.boxSizing).toEqual('function');
    });

    it('boxSizing', () => {
        expect(cssProps.boxSizing("value")).toEqual({boxSizing:'value'});
    });


    it('breakAfter type', () => {
        expect(typeof cssProps.breakAfter).toEqual('function');
    });

    it('breakAfter', () => {
        expect(cssProps.breakAfter("value")).toEqual({breakAfter:'value'});
    });


    it('breakBefore type', () => {
        expect(typeof cssProps.breakBefore).toEqual('function');
    });

    it('breakBefore', () => {
        expect(cssProps.breakBefore("value")).toEqual({breakBefore:'value'});
    });


    it('breakInside type', () => {
        expect(typeof cssProps.breakInside).toEqual('function');
    });

    it('breakInside', () => {
        expect(cssProps.breakInside("value")).toEqual({breakInside:'value'});
    });


    it('captionSide type', () => {
        expect(typeof cssProps.captionSide).toEqual('function');
    });

    it('captionSide', () => {
        expect(cssProps.captionSide("value")).toEqual({captionSide:'value'});
    });


    it('caretColor type', () => {
        expect(typeof cssProps.caretColor).toEqual('function');
    });

    it('caretColor', () => {
        expect(cssProps.caretColor("value")).toEqual({caretColor:'value'});
    });


    it('clear type', () => {
        expect(typeof cssProps.clear).toEqual('function');
    });

    it('clear', () => {
        expect(cssProps.clear("value")).toEqual({clear:'value'});
    });


    it('clip type', () => {
        expect(typeof cssProps.clip).toEqual('function');
    });

    it('clip', () => {
        expect(cssProps.clip("value")).toEqual({clip:'value'});
    });


    it('clipPath type', () => {
        expect(typeof cssProps.clipPath).toEqual('function');
    });

    it('clipPath', () => {
        expect(cssProps.clipPath("value")).toEqual({clipPath:'value'});
    });


    it('color type', () => {
        expect(typeof cssProps.color).toEqual('function');
    });

    it('color', () => {
        expect(cssProps.color("value")).toEqual({color:'value'});
    });


    it('colorAdjust type', () => {
        expect(typeof cssProps.colorAdjust).toEqual('function');
    });

    it('colorAdjust', () => {
        expect(cssProps.colorAdjust("value")).toEqual({colorAdjust:'value'});
    });


    it('colorScheme type', () => {
        expect(typeof cssProps.colorScheme).toEqual('function');
    });

    it('colorScheme', () => {
        expect(cssProps.colorScheme("value")).toEqual({colorScheme:'value'});
    });


    it('columnCount type', () => {
        expect(typeof cssProps.columnCount).toEqual('function');
    });

    it('columnCount', () => {
        expect(cssProps.columnCount("value")).toEqual({columnCount:'value'});
    });


    it('columnFill type', () => {
        expect(typeof cssProps.columnFill).toEqual('function');
    });

    it('columnFill', () => {
        expect(cssProps.columnFill("value")).toEqual({columnFill:'value'});
    });


    it('columnGap type', () => {
        expect(typeof cssProps.columnGap).toEqual('function');
    });

    it('columnGap', () => {
        expect(cssProps.columnGap("value")).toEqual({columnGap:'value'});
    });


    it('columnRule type', () => {
        expect(typeof cssProps.columnRule).toEqual('function');
    });

    it('columnRule', () => {
        expect(cssProps.columnRule("value")).toEqual({columnRule:'value'});
    });


    it('columnRuleColor type', () => {
        expect(typeof cssProps.columnRuleColor).toEqual('function');
    });

    it('columnRuleColor', () => {
        expect(cssProps.columnRuleColor("value")).toEqual({columnRuleColor:'value'});
    });


    it('columnRuleStyle type', () => {
        expect(typeof cssProps.columnRuleStyle).toEqual('function');
    });

    it('columnRuleStyle', () => {
        expect(cssProps.columnRuleStyle("value")).toEqual({columnRuleStyle:'value'});
    });


    it('columnRuleWidth type', () => {
        expect(typeof cssProps.columnRuleWidth).toEqual('function');
    });

    it('columnRuleWidth', () => {
        expect(cssProps.columnRuleWidth("value")).toEqual({columnRuleWidth:'value'});
    });


    it('columnSpan type', () => {
        expect(typeof cssProps.columnSpan).toEqual('function');
    });

    it('columnSpan', () => {
        expect(cssProps.columnSpan("value")).toEqual({columnSpan:'value'});
    });


    it('columnWidth type', () => {
        expect(typeof cssProps.columnWidth).toEqual('function');
    });

    it('columnWidth', () => {
        expect(cssProps.columnWidth("value")).toEqual({columnWidth:'value'});
    });


    it('columns type', () => {
        expect(typeof cssProps.columns).toEqual('function');
    });

    it('columns', () => {
        expect(cssProps.columns("value")).toEqual({columns:'value'});
    });


    it('contain type', () => {
        expect(typeof cssProps.contain).toEqual('function');
    });

    it('contain', () => {
        expect(cssProps.contain("value")).toEqual({contain:'value'});
    });


    it('content type', () => {
        expect(typeof cssProps.content).toEqual('function');
    });

    it('content', () => {
        expect(cssProps.content("value")).toEqual({content:'value'});
    });


    it('contentVisibility type', () => {
        expect(typeof cssProps.contentVisibility).toEqual('function');
    });

    it('contentVisibility', () => {
        expect(cssProps.contentVisibility("value")).toEqual({contentVisibility:'value'});
    });


    it('counterIncrement type', () => {
        expect(typeof cssProps.counterIncrement).toEqual('function');
    });

    it('counterIncrement', () => {
        expect(cssProps.counterIncrement("value")).toEqual({counterIncrement:'value'});
    });


    it('counterReset type', () => {
        expect(typeof cssProps.counterReset).toEqual('function');
    });

    it('counterReset', () => {
        expect(cssProps.counterReset("value")).toEqual({counterReset:'value'});
    });


    it('counterSet type', () => {
        expect(typeof cssProps.counterSet).toEqual('function');
    });

    it('counterSet', () => {
        expect(cssProps.counterSet("value")).toEqual({counterSet:'value'});
    });


    it('cursor type', () => {
        expect(typeof cssProps.cursor).toEqual('function');
    });

    it('cursor', () => {
        expect(cssProps.cursor("value")).toEqual({cursor:'value'});
    });


    it('direction type', () => {
        expect(typeof cssProps.direction).toEqual('function');
    });

    it('direction', () => {
        expect(cssProps.direction("value")).toEqual({direction:'value'});
    });


    it('display type', () => {
        expect(typeof cssProps.display).toEqual('function');
    });

    it('display', () => {
        expect(cssProps.display("value")).toEqual({display:'value'});
    });


    it('emptyCells type', () => {
        expect(typeof cssProps.emptyCells).toEqual('function');
    });

    it('emptyCells', () => {
        expect(cssProps.emptyCells("value")).toEqual({emptyCells:'value'});
    });


    it('filter type', () => {
        expect(typeof cssProps.filter).toEqual('function');
    });

    it('filter', () => {
        expect(cssProps.filter("value")).toEqual({filter:'value'});
    });


    it('flex type', () => {
        expect(typeof cssProps.flex).toEqual('function');
    });

    it('flex', () => {
        expect(cssProps.flex("value")).toEqual({flex:'value'});
    });


    it('flexBasis type', () => {
        expect(typeof cssProps.flexBasis).toEqual('function');
    });

    it('flexBasis', () => {
        expect(cssProps.flexBasis("value")).toEqual({flexBasis:'value'});
    });


    it('flexDirection type', () => {
        expect(typeof cssProps.flexDirection).toEqual('function');
    });

    it('flexDirection', () => {
        expect(cssProps.flexDirection("value")).toEqual({flexDirection:'value'});
    });


    it('flexFlow type', () => {
        expect(typeof cssProps.flexFlow).toEqual('function');
    });

    it('flexFlow', () => {
        expect(cssProps.flexFlow("value")).toEqual({flexFlow:'value'});
    });


    it('flexGrow type', () => {
        expect(typeof cssProps.flexGrow).toEqual('function');
    });

    it('flexGrow', () => {
        expect(cssProps.flexGrow("value")).toEqual({flexGrow:'value'});
    });


    it('flexShrink type', () => {
        expect(typeof cssProps.flexShrink).toEqual('function');
    });

    it('flexShrink', () => {
        expect(cssProps.flexShrink("value")).toEqual({flexShrink:'value'});
    });


    it('flexWrap type', () => {
        expect(typeof cssProps.flexWrap).toEqual('function');
    });

    it('flexWrap', () => {
        expect(cssProps.flexWrap("value")).toEqual({flexWrap:'value'});
    });


    it('float type', () => {
        expect(typeof cssProps.float).toEqual('function');
    });

    it('float', () => {
        expect(cssProps.float("value")).toEqual({float:'value'});
    });


    it('font type', () => {
        expect(typeof cssProps.font).toEqual('function');
    });

    it('font', () => {
        expect(cssProps.font("value")).toEqual({font:'value'});
    });


    it('fontFamily type', () => {
        expect(typeof cssProps.fontFamily).toEqual('function');
    });

    it('fontFamily', () => {
        expect(cssProps.fontFamily("value")).toEqual({fontFamily:'value'});
    });


    it('fontFeatureSettings type', () => {
        expect(typeof cssProps.fontFeatureSettings).toEqual('function');
    });

    it('fontFeatureSettings', () => {
        expect(cssProps.fontFeatureSettings("value")).toEqual({fontFeatureSettings:'value'});
    });


    it('fontKerning type', () => {
        expect(typeof cssProps.fontKerning).toEqual('function');
    });

    it('fontKerning', () => {
        expect(cssProps.fontKerning("value")).toEqual({fontKerning:'value'});
    });


    it('fontLanguageOverride type', () => {
        expect(typeof cssProps.fontLanguageOverride).toEqual('function');
    });

    it('fontLanguageOverride', () => {
        expect(cssProps.fontLanguageOverride("value")).toEqual({fontLanguageOverride:'value'});
    });


    it('fontOpticalSizing type', () => {
        expect(typeof cssProps.fontOpticalSizing).toEqual('function');
    });

    it('fontOpticalSizing', () => {
        expect(cssProps.fontOpticalSizing("value")).toEqual({fontOpticalSizing:'value'});
    });


    it('fontVariationSettings type', () => {
        expect(typeof cssProps.fontVariationSettings).toEqual('function');
    });

    it('fontVariationSettings', () => {
        expect(cssProps.fontVariationSettings("value")).toEqual({fontVariationSettings:'value'});
    });


    it('fontSize type', () => {
        expect(typeof cssProps.fontSize).toEqual('function');
    });

    it('fontSize', () => {
        expect(cssProps.fontSize("value")).toEqual({fontSize:'value'});
    });


    it('fontSizeAdjust type', () => {
        expect(typeof cssProps.fontSizeAdjust).toEqual('function');
    });

    it('fontSizeAdjust', () => {
        expect(cssProps.fontSizeAdjust("value")).toEqual({fontSizeAdjust:'value'});
    });


    it('fontStretch type', () => {
        expect(typeof cssProps.fontStretch).toEqual('function');
    });

    it('fontStretch', () => {
        expect(cssProps.fontStretch("value")).toEqual({fontStretch:'value'});
    });


    it('fontStyle type', () => {
        expect(typeof cssProps.fontStyle).toEqual('function');
    });

    it('fontStyle', () => {
        expect(cssProps.fontStyle("value")).toEqual({fontStyle:'value'});
    });


    it('fontSynthesis type', () => {
        expect(typeof cssProps.fontSynthesis).toEqual('function');
    });

    it('fontSynthesis', () => {
        expect(cssProps.fontSynthesis("value")).toEqual({fontSynthesis:'value'});
    });


    it('fontVariant type', () => {
        expect(typeof cssProps.fontVariant).toEqual('function');
    });

    it('fontVariant', () => {
        expect(cssProps.fontVariant("value")).toEqual({fontVariant:'value'});
    });


    it('fontVariantAlternates type', () => {
        expect(typeof cssProps.fontVariantAlternates).toEqual('function');
    });

    it('fontVariantAlternates', () => {
        expect(cssProps.fontVariantAlternates("value")).toEqual({fontVariantAlternates:'value'});
    });


    it('fontVariantCaps type', () => {
        expect(typeof cssProps.fontVariantCaps).toEqual('function');
    });

    it('fontVariantCaps', () => {
        expect(cssProps.fontVariantCaps("value")).toEqual({fontVariantCaps:'value'});
    });


    it('fontVariantEastAsian type', () => {
        expect(typeof cssProps.fontVariantEastAsian).toEqual('function');
    });

    it('fontVariantEastAsian', () => {
        expect(cssProps.fontVariantEastAsian("value")).toEqual({fontVariantEastAsian:'value'});
    });


    it('fontVariantLigatures type', () => {
        expect(typeof cssProps.fontVariantLigatures).toEqual('function');
    });

    it('fontVariantLigatures', () => {
        expect(cssProps.fontVariantLigatures("value")).toEqual({fontVariantLigatures:'value'});
    });


    it('fontVariantNumeric type', () => {
        expect(typeof cssProps.fontVariantNumeric).toEqual('function');
    });

    it('fontVariantNumeric', () => {
        expect(cssProps.fontVariantNumeric("value")).toEqual({fontVariantNumeric:'value'});
    });


    it('fontVariantPosition type', () => {
        expect(typeof cssProps.fontVariantPosition).toEqual('function');
    });

    it('fontVariantPosition', () => {
        expect(cssProps.fontVariantPosition("value")).toEqual({fontVariantPosition:'value'});
    });


    it('fontWeight type', () => {
        expect(typeof cssProps.fontWeight).toEqual('function');
    });

    it('fontWeight', () => {
        expect(cssProps.fontWeight("value")).toEqual({fontWeight:'value'});
    });


    it('gap type', () => {
        expect(typeof cssProps.gap).toEqual('function');
    });

    it('gap', () => {
        expect(cssProps.gap("value")).toEqual({gap:'value'});
    });


    it('grid type', () => {
        expect(typeof cssProps.grid).toEqual('function');
    });

    it('grid', () => {
        expect(cssProps.grid("value")).toEqual({grid:'value'});
    });


    it('gridArea type', () => {
        expect(typeof cssProps.gridArea).toEqual('function');
    });

    it('gridArea', () => {
        expect(cssProps.gridArea("value")).toEqual({gridArea:'value'});
    });


    it('gridAutoColumns type', () => {
        expect(typeof cssProps.gridAutoColumns).toEqual('function');
    });

    it('gridAutoColumns', () => {
        expect(cssProps.gridAutoColumns("value")).toEqual({gridAutoColumns:'value'});
    });


    it('gridAutoFlow type', () => {
        expect(typeof cssProps.gridAutoFlow).toEqual('function');
    });

    it('gridAutoFlow', () => {
        expect(cssProps.gridAutoFlow("value")).toEqual({gridAutoFlow:'value'});
    });


    it('gridAutoRows type', () => {
        expect(typeof cssProps.gridAutoRows).toEqual('function');
    });

    it('gridAutoRows', () => {
        expect(cssProps.gridAutoRows("value")).toEqual({gridAutoRows:'value'});
    });


    it('gridColumn type', () => {
        expect(typeof cssProps.gridColumn).toEqual('function');
    });

    it('gridColumn', () => {
        expect(cssProps.gridColumn("value")).toEqual({gridColumn:'value'});
    });


    it('gridColumnEnd type', () => {
        expect(typeof cssProps.gridColumnEnd).toEqual('function');
    });

    it('gridColumnEnd', () => {
        expect(cssProps.gridColumnEnd("value")).toEqual({gridColumnEnd:'value'});
    });


    it('gridColumnStart type', () => {
        expect(typeof cssProps.gridColumnStart).toEqual('function');
    });

    it('gridColumnStart', () => {
        expect(cssProps.gridColumnStart("value")).toEqual({gridColumnStart:'value'});
    });


    it('gridRow type', () => {
        expect(typeof cssProps.gridRow).toEqual('function');
    });

    it('gridRow', () => {
        expect(cssProps.gridRow("value")).toEqual({gridRow:'value'});
    });


    it('gridRowEnd type', () => {
        expect(typeof cssProps.gridRowEnd).toEqual('function');
    });

    it('gridRowEnd', () => {
        expect(cssProps.gridRowEnd("value")).toEqual({gridRowEnd:'value'});
    });


    it('gridRowStart type', () => {
        expect(typeof cssProps.gridRowStart).toEqual('function');
    });

    it('gridRowStart', () => {
        expect(cssProps.gridRowStart("value")).toEqual({gridRowStart:'value'});
    });


    it('gridTemplate type', () => {
        expect(typeof cssProps.gridTemplate).toEqual('function');
    });

    it('gridTemplate', () => {
        expect(cssProps.gridTemplate("value")).toEqual({gridTemplate:'value'});
    });


    it('gridTemplateAreas type', () => {
        expect(typeof cssProps.gridTemplateAreas).toEqual('function');
    });

    it('gridTemplateAreas', () => {
        expect(cssProps.gridTemplateAreas("value")).toEqual({gridTemplateAreas:'value'});
    });


    it('gridTemplateColumns type', () => {
        expect(typeof cssProps.gridTemplateColumns).toEqual('function');
    });

    it('gridTemplateColumns', () => {
        expect(cssProps.gridTemplateColumns("value")).toEqual({gridTemplateColumns:'value'});
    });


    it('gridTemplateRows type', () => {
        expect(typeof cssProps.gridTemplateRows).toEqual('function');
    });

    it('gridTemplateRows', () => {
        expect(cssProps.gridTemplateRows("value")).toEqual({gridTemplateRows:'value'});
    });


    it('hangingPunctuation type', () => {
        expect(typeof cssProps.hangingPunctuation).toEqual('function');
    });

    it('hangingPunctuation', () => {
        expect(cssProps.hangingPunctuation("value")).toEqual({hangingPunctuation:'value'});
    });


    it('height type', () => {
        expect(typeof cssProps.height).toEqual('function');
    });

    it('height', () => {
        expect(cssProps.height("value")).toEqual({height:'value'});
    });


    it('hyphens type', () => {
        expect(typeof cssProps.hyphens).toEqual('function');
    });

    it('hyphens', () => {
        expect(cssProps.hyphens("value")).toEqual({hyphens:'value'});
    });


    it('imageOrientation type', () => {
        expect(typeof cssProps.imageOrientation).toEqual('function');
    });

    it('imageOrientation', () => {
        expect(cssProps.imageOrientation("value")).toEqual({imageOrientation:'value'});
    });


    it('imageRendering type', () => {
        expect(typeof cssProps.imageRendering).toEqual('function');
    });

    it('imageRendering', () => {
        expect(cssProps.imageRendering("value")).toEqual({imageRendering:'value'});
    });


    it('inlineSize type', () => {
        expect(typeof cssProps.inlineSize).toEqual('function');
    });

    it('inlineSize', () => {
        expect(cssProps.inlineSize("value")).toEqual({inlineSize:'value'});
    });


    it('inset type', () => {
        expect(typeof cssProps.inset).toEqual('function');
    });

    it('inset', () => {
        expect(cssProps.inset("value")).toEqual({inset:'value'});
    });


    it('insetBlock type', () => {
        expect(typeof cssProps.insetBlock).toEqual('function');
    });

    it('insetBlock', () => {
        expect(cssProps.insetBlock("value")).toEqual({insetBlock:'value'});
    });


    it('insetBlockEnd type', () => {
        expect(typeof cssProps.insetBlockEnd).toEqual('function');
    });

    it('insetBlockEnd', () => {
        expect(cssProps.insetBlockEnd("value")).toEqual({insetBlockEnd:'value'});
    });


    it('insetBlockStart type', () => {
        expect(typeof cssProps.insetBlockStart).toEqual('function');
    });

    it('insetBlockStart', () => {
        expect(cssProps.insetBlockStart("value")).toEqual({insetBlockStart:'value'});
    });


    it('insetInline type', () => {
        expect(typeof cssProps.insetInline).toEqual('function');
    });

    it('insetInline', () => {
        expect(cssProps.insetInline("value")).toEqual({insetInline:'value'});
    });


    it('insetInlineEnd type', () => {
        expect(typeof cssProps.insetInlineEnd).toEqual('function');
    });

    it('insetInlineEnd', () => {
        expect(cssProps.insetInlineEnd("value")).toEqual({insetInlineEnd:'value'});
    });


    it('insetInlineStart type', () => {
        expect(typeof cssProps.insetInlineStart).toEqual('function');
    });

    it('insetInlineStart', () => {
        expect(cssProps.insetInlineStart("value")).toEqual({insetInlineStart:'value'});
    });


    it('isolation type', () => {
        expect(typeof cssProps.isolation).toEqual('function');
    });

    it('isolation', () => {
        expect(cssProps.isolation("value")).toEqual({isolation:'value'});
    });


    it('justifyContent type', () => {
        expect(typeof cssProps.justifyContent).toEqual('function');
    });

    it('justifyContent', () => {
        expect(cssProps.justifyContent("value")).toEqual({justifyContent:'value'});
    });


    it('justifyItems type', () => {
        expect(typeof cssProps.justifyItems).toEqual('function');
    });

    it('justifyItems', () => {
        expect(cssProps.justifyItems("value")).toEqual({justifyItems:'value'});
    });


    it('justifySelf type', () => {
        expect(typeof cssProps.justifySelf).toEqual('function');
    });

    it('justifySelf', () => {
        expect(cssProps.justifySelf("value")).toEqual({justifySelf:'value'});
    });


    it('left type', () => {
        expect(typeof cssProps.left).toEqual('function');
    });

    it('left', () => {
        expect(cssProps.left("value")).toEqual({left:'value'});
    });


    it('letterSpacing type', () => {
        expect(typeof cssProps.letterSpacing).toEqual('function');
    });

    it('letterSpacing', () => {
        expect(cssProps.letterSpacing("value")).toEqual({letterSpacing:'value'});
    });


    it('lineBreak type', () => {
        expect(typeof cssProps.lineBreak).toEqual('function');
    });

    it('lineBreak', () => {
        expect(cssProps.lineBreak("value")).toEqual({lineBreak:'value'});
    });


    it('lineHeight type', () => {
        expect(typeof cssProps.lineHeight).toEqual('function');
    });

    it('lineHeight', () => {
        expect(cssProps.lineHeight("value")).toEqual({lineHeight:'value'});
    });


    it('listStyle type', () => {
        expect(typeof cssProps.listStyle).toEqual('function');
    });

    it('listStyle', () => {
        expect(cssProps.listStyle("value")).toEqual({listStyle:'value'});
    });


    it('listStyleImage type', () => {
        expect(typeof cssProps.listStyleImage).toEqual('function');
    });

    it('listStyleImage', () => {
        expect(cssProps.listStyleImage("value")).toEqual({listStyleImage:'value'});
    });


    it('listStylePosition type', () => {
        expect(typeof cssProps.listStylePosition).toEqual('function');
    });

    it('listStylePosition', () => {
        expect(cssProps.listStylePosition("value")).toEqual({listStylePosition:'value'});
    });


    it('listStyleType type', () => {
        expect(typeof cssProps.listStyleType).toEqual('function');
    });

    it('listStyleType', () => {
        expect(cssProps.listStyleType("value")).toEqual({listStyleType:'value'});
    });


    it('margin type', () => {
        expect(typeof cssProps.margin).toEqual('function');
    });

    it('margin', () => {
        expect(cssProps.margin("value")).toEqual({margin:'value'});
    });


    it('marginBlock type', () => {
        expect(typeof cssProps.marginBlock).toEqual('function');
    });

    it('marginBlock', () => {
        expect(cssProps.marginBlock("value")).toEqual({marginBlock:'value'});
    });


    it('marginBlockEnd type', () => {
        expect(typeof cssProps.marginBlockEnd).toEqual('function');
    });

    it('marginBlockEnd', () => {
        expect(cssProps.marginBlockEnd("value")).toEqual({marginBlockEnd:'value'});
    });


    it('marginBlockStart type', () => {
        expect(typeof cssProps.marginBlockStart).toEqual('function');
    });

    it('marginBlockStart', () => {
        expect(cssProps.marginBlockStart("value")).toEqual({marginBlockStart:'value'});
    });


    it('marginBottom type', () => {
        expect(typeof cssProps.marginBottom).toEqual('function');
    });

    it('marginBottom', () => {
        expect(cssProps.marginBottom("value")).toEqual({marginBottom:'value'});
    });


    it('marginInline type', () => {
        expect(typeof cssProps.marginInline).toEqual('function');
    });

    it('marginInline', () => {
        expect(cssProps.marginInline("value")).toEqual({marginInline:'value'});
    });


    it('marginInlineEnd type', () => {
        expect(typeof cssProps.marginInlineEnd).toEqual('function');
    });

    it('marginInlineEnd', () => {
        expect(cssProps.marginInlineEnd("value")).toEqual({marginInlineEnd:'value'});
    });


    it('marginInlineStart type', () => {
        expect(typeof cssProps.marginInlineStart).toEqual('function');
    });

    it('marginInlineStart', () => {
        expect(cssProps.marginInlineStart("value")).toEqual({marginInlineStart:'value'});
    });


    it('marginLeft type', () => {
        expect(typeof cssProps.marginLeft).toEqual('function');
    });

    it('marginLeft', () => {
        expect(cssProps.marginLeft("value")).toEqual({marginLeft:'value'});
    });


    it('marginRight type', () => {
        expect(typeof cssProps.marginRight).toEqual('function');
    });

    it('marginRight', () => {
        expect(cssProps.marginRight("value")).toEqual({marginRight:'value'});
    });


    it('marginTop type', () => {
        expect(typeof cssProps.marginTop).toEqual('function');
    });

    it('marginTop', () => {
        expect(cssProps.marginTop("value")).toEqual({marginTop:'value'});
    });


    it('mask type', () => {
        expect(typeof cssProps.mask).toEqual('function');
    });

    it('mask', () => {
        expect(cssProps.mask("value")).toEqual({mask:'value'});
    });


    it('maskBorder type', () => {
        expect(typeof cssProps.maskBorder).toEqual('function');
    });

    it('maskBorder', () => {
        expect(cssProps.maskBorder("value")).toEqual({maskBorder:'value'});
    });


    it('maskBorderMode type', () => {
        expect(typeof cssProps.maskBorderMode).toEqual('function');
    });

    it('maskBorderMode', () => {
        expect(cssProps.maskBorderMode("value")).toEqual({maskBorderMode:'value'});
    });


    it('maskBorderOutset type', () => {
        expect(typeof cssProps.maskBorderOutset).toEqual('function');
    });

    it('maskBorderOutset', () => {
        expect(cssProps.maskBorderOutset("value")).toEqual({maskBorderOutset:'value'});
    });


    it('maskBorderRepeat type', () => {
        expect(typeof cssProps.maskBorderRepeat).toEqual('function');
    });

    it('maskBorderRepeat', () => {
        expect(cssProps.maskBorderRepeat("value")).toEqual({maskBorderRepeat:'value'});
    });


    it('maskBorderSlice type', () => {
        expect(typeof cssProps.maskBorderSlice).toEqual('function');
    });

    it('maskBorderSlice', () => {
        expect(cssProps.maskBorderSlice("value")).toEqual({maskBorderSlice:'value'});
    });


    it('maskBorderSource type', () => {
        expect(typeof cssProps.maskBorderSource).toEqual('function');
    });

    it('maskBorderSource', () => {
        expect(cssProps.maskBorderSource("value")).toEqual({maskBorderSource:'value'});
    });


    it('maskBorderWidth type', () => {
        expect(typeof cssProps.maskBorderWidth).toEqual('function');
    });

    it('maskBorderWidth', () => {
        expect(cssProps.maskBorderWidth("value")).toEqual({maskBorderWidth:'value'});
    });


    it('maskClip type', () => {
        expect(typeof cssProps.maskClip).toEqual('function');
    });

    it('maskClip', () => {
        expect(cssProps.maskClip("value")).toEqual({maskClip:'value'});
    });


    it('maskComposite type', () => {
        expect(typeof cssProps.maskComposite).toEqual('function');
    });

    it('maskComposite', () => {
        expect(cssProps.maskComposite("value")).toEqual({maskComposite:'value'});
    });


    it('maskImage type', () => {
        expect(typeof cssProps.maskImage).toEqual('function');
    });

    it('maskImage', () => {
        expect(cssProps.maskImage("value")).toEqual({maskImage:'value'});
    });


    it('maskMode type', () => {
        expect(typeof cssProps.maskMode).toEqual('function');
    });

    it('maskMode', () => {
        expect(cssProps.maskMode("value")).toEqual({maskMode:'value'});
    });


    it('maskOrigin type', () => {
        expect(typeof cssProps.maskOrigin).toEqual('function');
    });

    it('maskOrigin', () => {
        expect(cssProps.maskOrigin("value")).toEqual({maskOrigin:'value'});
    });


    it('maskPosition type', () => {
        expect(typeof cssProps.maskPosition).toEqual('function');
    });

    it('maskPosition', () => {
        expect(cssProps.maskPosition("value")).toEqual({maskPosition:'value'});
    });


    it('maskRepeat type', () => {
        expect(typeof cssProps.maskRepeat).toEqual('function');
    });

    it('maskRepeat', () => {
        expect(cssProps.maskRepeat("value")).toEqual({maskRepeat:'value'});
    });


    it('maskSize type', () => {
        expect(typeof cssProps.maskSize).toEqual('function');
    });

    it('maskSize', () => {
        expect(cssProps.maskSize("value")).toEqual({maskSize:'value'});
    });


    it('maskType type', () => {
        expect(typeof cssProps.maskType).toEqual('function');
    });

    it('maskType', () => {
        expect(cssProps.maskType("value")).toEqual({maskType:'value'});
    });


    it('mathStyle type', () => {
        expect(typeof cssProps.mathStyle).toEqual('function');
    });

    it('mathStyle', () => {
        expect(cssProps.mathStyle("value")).toEqual({mathStyle:'value'});
    });


    it('maxBlockSize type', () => {
        expect(typeof cssProps.maxBlockSize).toEqual('function');
    });

    it('maxBlockSize', () => {
        expect(cssProps.maxBlockSize("value")).toEqual({maxBlockSize:'value'});
    });


    it('maxHeight type', () => {
        expect(typeof cssProps.maxHeight).toEqual('function');
    });

    it('maxHeight', () => {
        expect(cssProps.maxHeight("value")).toEqual({maxHeight:'value'});
    });


    it('maxInlineSize type', () => {
        expect(typeof cssProps.maxInlineSize).toEqual('function');
    });

    it('maxInlineSize', () => {
        expect(cssProps.maxInlineSize("value")).toEqual({maxInlineSize:'value'});
    });


    it('maxWidth type', () => {
        expect(typeof cssProps.maxWidth).toEqual('function');
    });

    it('maxWidth', () => {
        expect(cssProps.maxWidth("value")).toEqual({maxWidth:'value'});
    });


    it('minBlockSize type', () => {
        expect(typeof cssProps.minBlockSize).toEqual('function');
    });

    it('minBlockSize', () => {
        expect(cssProps.minBlockSize("value")).toEqual({minBlockSize:'value'});
    });


    it('minHeight type', () => {
        expect(typeof cssProps.minHeight).toEqual('function');
    });

    it('minHeight', () => {
        expect(cssProps.minHeight("value")).toEqual({minHeight:'value'});
    });


    it('minInlineSize type', () => {
        expect(typeof cssProps.minInlineSize).toEqual('function');
    });

    it('minInlineSize', () => {
        expect(cssProps.minInlineSize("value")).toEqual({minInlineSize:'value'});
    });


    it('minWidth type', () => {
        expect(typeof cssProps.minWidth).toEqual('function');
    });

    it('minWidth', () => {
        expect(cssProps.minWidth("value")).toEqual({minWidth:'value'});
    });


    it('mixBlendMode type', () => {
        expect(typeof cssProps.mixBlendMode).toEqual('function');
    });

    it('mixBlendMode', () => {
        expect(cssProps.mixBlendMode("value")).toEqual({mixBlendMode:'value'});
    });


    it('objectFit type', () => {
        expect(typeof cssProps.objectFit).toEqual('function');
    });

    it('objectFit', () => {
        expect(cssProps.objectFit("value")).toEqual({objectFit:'value'});
    });


    it('objectPosition type', () => {
        expect(typeof cssProps.objectPosition).toEqual('function');
    });

    it('objectPosition', () => {
        expect(cssProps.objectPosition("value")).toEqual({objectPosition:'value'});
    });


    it('offset type', () => {
        expect(typeof cssProps.offset).toEqual('function');
    });

    it('offset', () => {
        expect(cssProps.offset("value")).toEqual({offset:'value'});
    });


    it('offsetAnchor type', () => {
        expect(typeof cssProps.offsetAnchor).toEqual('function');
    });

    it('offsetAnchor', () => {
        expect(cssProps.offsetAnchor("value")).toEqual({offsetAnchor:'value'});
    });


    it('offsetDistance type', () => {
        expect(typeof cssProps.offsetDistance).toEqual('function');
    });

    it('offsetDistance', () => {
        expect(cssProps.offsetDistance("value")).toEqual({offsetDistance:'value'});
    });


    it('offsetPath type', () => {
        expect(typeof cssProps.offsetPath).toEqual('function');
    });

    it('offsetPath', () => {
        expect(cssProps.offsetPath("value")).toEqual({offsetPath:'value'});
    });


    it('offsetRotate type', () => {
        expect(typeof cssProps.offsetRotate).toEqual('function');
    });

    it('offsetRotate', () => {
        expect(cssProps.offsetRotate("value")).toEqual({offsetRotate:'value'});
    });


    it('opacity type', () => {
        expect(typeof cssProps.opacity).toEqual('function');
    });

    it('opacity', () => {
        expect(cssProps.opacity("value")).toEqual({opacity:'value'});
    });


    it('order type', () => {
        expect(typeof cssProps.order).toEqual('function');
    });

    it('order', () => {
        expect(cssProps.order("value")).toEqual({order:'value'});
    });


    it('orphans type', () => {
        expect(typeof cssProps.orphans).toEqual('function');
    });

    it('orphans', () => {
        expect(cssProps.orphans("value")).toEqual({orphans:'value'});
    });


    it('outline type', () => {
        expect(typeof cssProps.outline).toEqual('function');
    });

    it('outline', () => {
        expect(cssProps.outline("value")).toEqual({outline:'value'});
    });


    it('outlineColor type', () => {
        expect(typeof cssProps.outlineColor).toEqual('function');
    });

    it('outlineColor', () => {
        expect(cssProps.outlineColor("value")).toEqual({outlineColor:'value'});
    });


    it('outlineOffset type', () => {
        expect(typeof cssProps.outlineOffset).toEqual('function');
    });

    it('outlineOffset', () => {
        expect(cssProps.outlineOffset("value")).toEqual({outlineOffset:'value'});
    });


    it('outlineStyle type', () => {
        expect(typeof cssProps.outlineStyle).toEqual('function');
    });

    it('outlineStyle', () => {
        expect(cssProps.outlineStyle("value")).toEqual({outlineStyle:'value'});
    });


    it('outlineWidth type', () => {
        expect(typeof cssProps.outlineWidth).toEqual('function');
    });

    it('outlineWidth', () => {
        expect(cssProps.outlineWidth("value")).toEqual({outlineWidth:'value'});
    });


    it('overflow type', () => {
        expect(typeof cssProps.overflow).toEqual('function');
    });

    it('overflow', () => {
        expect(cssProps.overflow("value")).toEqual({overflow:'value'});
    });


    it('overflowAnchor type', () => {
        expect(typeof cssProps.overflowAnchor).toEqual('function');
    });

    it('overflowAnchor', () => {
        expect(cssProps.overflowAnchor("value")).toEqual({overflowAnchor:'value'});
    });


    it('overflowBlock type', () => {
        expect(typeof cssProps.overflowBlock).toEqual('function');
    });

    it('overflowBlock', () => {
        expect(cssProps.overflowBlock("value")).toEqual({overflowBlock:'value'});
    });


    it('overflowClipMargin type', () => {
        expect(typeof cssProps.overflowClipMargin).toEqual('function');
    });

    it('overflowClipMargin', () => {
        expect(cssProps.overflowClipMargin("value")).toEqual({overflowClipMargin:'value'});
    });


    it('overflowInline type', () => {
        expect(typeof cssProps.overflowInline).toEqual('function');
    });

    it('overflowInline', () => {
        expect(cssProps.overflowInline("value")).toEqual({overflowInline:'value'});
    });


    it('overflowWrap type', () => {
        expect(typeof cssProps.overflowWrap).toEqual('function');
    });

    it('overflowWrap', () => {
        expect(cssProps.overflowWrap("value")).toEqual({overflowWrap:'value'});
    });


    it('overflowX type', () => {
        expect(typeof cssProps.overflowX).toEqual('function');
    });

    it('overflowX', () => {
        expect(cssProps.overflowX("value")).toEqual({overflowX:'value'});
    });


    it('overflowY type', () => {
        expect(typeof cssProps.overflowY).toEqual('function');
    });

    it('overflowY', () => {
        expect(cssProps.overflowY("value")).toEqual({overflowY:'value'});
    });


    it('overscrollBehavior type', () => {
        expect(typeof cssProps.overscrollBehavior).toEqual('function');
    });

    it('overscrollBehavior', () => {
        expect(cssProps.overscrollBehavior("value")).toEqual({overscrollBehavior:'value'});
    });


    it('overscrollBehaviorBlock type', () => {
        expect(typeof cssProps.overscrollBehaviorBlock).toEqual('function');
    });

    it('overscrollBehaviorBlock', () => {
        expect(cssProps.overscrollBehaviorBlock("value")).toEqual({overscrollBehaviorBlock:'value'});
    });


    it('overscrollBehaviorInline type', () => {
        expect(typeof cssProps.overscrollBehaviorInline).toEqual('function');
    });

    it('overscrollBehaviorInline', () => {
        expect(cssProps.overscrollBehaviorInline("value")).toEqual({overscrollBehaviorInline:'value'});
    });


    it('overscrollBehaviorX type', () => {
        expect(typeof cssProps.overscrollBehaviorX).toEqual('function');
    });

    it('overscrollBehaviorX', () => {
        expect(cssProps.overscrollBehaviorX("value")).toEqual({overscrollBehaviorX:'value'});
    });


    it('overscrollBehaviorY type', () => {
        expect(typeof cssProps.overscrollBehaviorY).toEqual('function');
    });

    it('overscrollBehaviorY', () => {
        expect(cssProps.overscrollBehaviorY("value")).toEqual({overscrollBehaviorY:'value'});
    });


    it('padding type', () => {
        expect(typeof cssProps.padding).toEqual('function');
    });

    it('padding', () => {
        expect(cssProps.padding("value")).toEqual({padding:'value'});
    });


    it('paddingBlock type', () => {
        expect(typeof cssProps.paddingBlock).toEqual('function');
    });

    it('paddingBlock', () => {
        expect(cssProps.paddingBlock("value")).toEqual({paddingBlock:'value'});
    });


    it('paddingBlockEnd type', () => {
        expect(typeof cssProps.paddingBlockEnd).toEqual('function');
    });

    it('paddingBlockEnd', () => {
        expect(cssProps.paddingBlockEnd("value")).toEqual({paddingBlockEnd:'value'});
    });


    it('paddingBlockStart type', () => {
        expect(typeof cssProps.paddingBlockStart).toEqual('function');
    });

    it('paddingBlockStart', () => {
        expect(cssProps.paddingBlockStart("value")).toEqual({paddingBlockStart:'value'});
    });


    it('paddingBottom type', () => {
        expect(typeof cssProps.paddingBottom).toEqual('function');
    });

    it('paddingBottom', () => {
        expect(cssProps.paddingBottom("value")).toEqual({paddingBottom:'value'});
    });


    it('paddingInline type', () => {
        expect(typeof cssProps.paddingInline).toEqual('function');
    });

    it('paddingInline', () => {
        expect(cssProps.paddingInline("value")).toEqual({paddingInline:'value'});
    });


    it('paddingInlineEnd type', () => {
        expect(typeof cssProps.paddingInlineEnd).toEqual('function');
    });

    it('paddingInlineEnd', () => {
        expect(cssProps.paddingInlineEnd("value")).toEqual({paddingInlineEnd:'value'});
    });


    it('paddingInlineStart type', () => {
        expect(typeof cssProps.paddingInlineStart).toEqual('function');
    });

    it('paddingInlineStart', () => {
        expect(cssProps.paddingInlineStart("value")).toEqual({paddingInlineStart:'value'});
    });


    it('paddingLeft type', () => {
        expect(typeof cssProps.paddingLeft).toEqual('function');
    });

    it('paddingLeft', () => {
        expect(cssProps.paddingLeft("value")).toEqual({paddingLeft:'value'});
    });


    it('paddingRight type', () => {
        expect(typeof cssProps.paddingRight).toEqual('function');
    });

    it('paddingRight', () => {
        expect(cssProps.paddingRight("value")).toEqual({paddingRight:'value'});
    });


    it('paddingTop type', () => {
        expect(typeof cssProps.paddingTop).toEqual('function');
    });

    it('paddingTop', () => {
        expect(cssProps.paddingTop("value")).toEqual({paddingTop:'value'});
    });


    it('pageBreakAfter type', () => {
        expect(typeof cssProps.pageBreakAfter).toEqual('function');
    });

    it('pageBreakAfter', () => {
        expect(cssProps.pageBreakAfter("value")).toEqual({pageBreakAfter:'value'});
    });


    it('pageBreakBefore type', () => {
        expect(typeof cssProps.pageBreakBefore).toEqual('function');
    });

    it('pageBreakBefore', () => {
        expect(cssProps.pageBreakBefore("value")).toEqual({pageBreakBefore:'value'});
    });


    it('pageBreakInside type', () => {
        expect(typeof cssProps.pageBreakInside).toEqual('function');
    });

    it('pageBreakInside', () => {
        expect(cssProps.pageBreakInside("value")).toEqual({pageBreakInside:'value'});
    });


    it('paintOrder type', () => {
        expect(typeof cssProps.paintOrder).toEqual('function');
    });

    it('paintOrder', () => {
        expect(cssProps.paintOrder("value")).toEqual({paintOrder:'value'});
    });


    it('perspective type', () => {
        expect(typeof cssProps.perspective).toEqual('function');
    });

    it('perspective', () => {
        expect(cssProps.perspective("value")).toEqual({perspective:'value'});
    });


    it('perspectiveOrigin type', () => {
        expect(typeof cssProps.perspectiveOrigin).toEqual('function');
    });

    it('perspectiveOrigin', () => {
        expect(cssProps.perspectiveOrigin("value")).toEqual({perspectiveOrigin:'value'});
    });


    it('placeContent type', () => {
        expect(typeof cssProps.placeContent).toEqual('function');
    });

    it('placeContent', () => {
        expect(cssProps.placeContent("value")).toEqual({placeContent:'value'});
    });


    it('placeItems type', () => {
        expect(typeof cssProps.placeItems).toEqual('function');
    });

    it('placeItems', () => {
        expect(cssProps.placeItems("value")).toEqual({placeItems:'value'});
    });


    it('placeSelf type', () => {
        expect(typeof cssProps.placeSelf).toEqual('function');
    });

    it('placeSelf', () => {
        expect(cssProps.placeSelf("value")).toEqual({placeSelf:'value'});
    });


    it('pointerEvents type', () => {
        expect(typeof cssProps.pointerEvents).toEqual('function');
    });

    it('pointerEvents', () => {
        expect(cssProps.pointerEvents("value")).toEqual({pointerEvents:'value'});
    });


    it('position type', () => {
        expect(typeof cssProps.position).toEqual('function');
    });

    it('position', () => {
        expect(cssProps.position("value")).toEqual({position:'value'});
    });


    it('quotes type', () => {
        expect(typeof cssProps.quotes).toEqual('function');
    });

    it('quotes', () => {
        expect(cssProps.quotes("value")).toEqual({quotes:'value'});
    });


    it('resize type', () => {
        expect(typeof cssProps.resize).toEqual('function');
    });

    it('resize', () => {
        expect(cssProps.resize("value")).toEqual({resize:'value'});
    });


    it('right type', () => {
        expect(typeof cssProps.right).toEqual('function');
    });

    it('right', () => {
        expect(cssProps.right("value")).toEqual({right:'value'});
    });


    it('rotate type', () => {
        expect(typeof cssProps.rotate).toEqual('function');
    });

    it('rotate', () => {
        expect(cssProps.rotate("value")).toEqual({rotate:'value'});
    });


    it('rowGap type', () => {
        expect(typeof cssProps.rowGap).toEqual('function');
    });

    it('rowGap', () => {
        expect(cssProps.rowGap("value")).toEqual({rowGap:'value'});
    });


    it('scale type', () => {
        expect(typeof cssProps.scale).toEqual('function');
    });

    it('scale', () => {
        expect(cssProps.scale("value")).toEqual({scale:'value'});
    });


    it('scrollbarColor type', () => {
        expect(typeof cssProps.scrollbarColor).toEqual('function');
    });

    it('scrollbarColor', () => {
        expect(cssProps.scrollbarColor("value")).toEqual({scrollbarColor:'value'});
    });


    it('scrollbarGutter type', () => {
        expect(typeof cssProps.scrollbarGutter).toEqual('function');
    });

    it('scrollbarGutter', () => {
        expect(cssProps.scrollbarGutter("value")).toEqual({scrollbarGutter:'value'});
    });


    it('scrollbarWidth type', () => {
        expect(typeof cssProps.scrollbarWidth).toEqual('function');
    });

    it('scrollbarWidth', () => {
        expect(cssProps.scrollbarWidth("value")).toEqual({scrollbarWidth:'value'});
    });


    it('scrollBehavior type', () => {
        expect(typeof cssProps.scrollBehavior).toEqual('function');
    });

    it('scrollBehavior', () => {
        expect(cssProps.scrollBehavior("value")).toEqual({scrollBehavior:'value'});
    });


    it('scrollMargin type', () => {
        expect(typeof cssProps.scrollMargin).toEqual('function');
    });

    it('scrollMargin', () => {
        expect(cssProps.scrollMargin("value")).toEqual({scrollMargin:'value'});
    });


    it('scrollMarginBlock type', () => {
        expect(typeof cssProps.scrollMarginBlock).toEqual('function');
    });

    it('scrollMarginBlock', () => {
        expect(cssProps.scrollMarginBlock("value")).toEqual({scrollMarginBlock:'value'});
    });


    it('scrollMarginBlockStart type', () => {
        expect(typeof cssProps.scrollMarginBlockStart).toEqual('function');
    });

    it('scrollMarginBlockStart', () => {
        expect(cssProps.scrollMarginBlockStart("value")).toEqual({scrollMarginBlockStart:'value'});
    });


    it('scrollMarginBlockEnd type', () => {
        expect(typeof cssProps.scrollMarginBlockEnd).toEqual('function');
    });

    it('scrollMarginBlockEnd', () => {
        expect(cssProps.scrollMarginBlockEnd("value")).toEqual({scrollMarginBlockEnd:'value'});
    });


    it('scrollMarginBottom type', () => {
        expect(typeof cssProps.scrollMarginBottom).toEqual('function');
    });

    it('scrollMarginBottom', () => {
        expect(cssProps.scrollMarginBottom("value")).toEqual({scrollMarginBottom:'value'});
    });


    it('scrollMarginInline type', () => {
        expect(typeof cssProps.scrollMarginInline).toEqual('function');
    });

    it('scrollMarginInline', () => {
        expect(cssProps.scrollMarginInline("value")).toEqual({scrollMarginInline:'value'});
    });


    it('scrollMarginInlineStart type', () => {
        expect(typeof cssProps.scrollMarginInlineStart).toEqual('function');
    });

    it('scrollMarginInlineStart', () => {
        expect(cssProps.scrollMarginInlineStart("value")).toEqual({scrollMarginInlineStart:'value'});
    });


    it('scrollMarginInlineEnd type', () => {
        expect(typeof cssProps.scrollMarginInlineEnd).toEqual('function');
    });

    it('scrollMarginInlineEnd', () => {
        expect(cssProps.scrollMarginInlineEnd("value")).toEqual({scrollMarginInlineEnd:'value'});
    });


    it('scrollMarginLeft type', () => {
        expect(typeof cssProps.scrollMarginLeft).toEqual('function');
    });

    it('scrollMarginLeft', () => {
        expect(cssProps.scrollMarginLeft("value")).toEqual({scrollMarginLeft:'value'});
    });


    it('scrollMarginRight type', () => {
        expect(typeof cssProps.scrollMarginRight).toEqual('function');
    });

    it('scrollMarginRight', () => {
        expect(cssProps.scrollMarginRight("value")).toEqual({scrollMarginRight:'value'});
    });


    it('scrollMarginTop type', () => {
        expect(typeof cssProps.scrollMarginTop).toEqual('function');
    });

    it('scrollMarginTop', () => {
        expect(cssProps.scrollMarginTop("value")).toEqual({scrollMarginTop:'value'});
    });


    it('scrollPadding type', () => {
        expect(typeof cssProps.scrollPadding).toEqual('function');
    });

    it('scrollPadding', () => {
        expect(cssProps.scrollPadding("value")).toEqual({scrollPadding:'value'});
    });


    it('scrollPaddingBlock type', () => {
        expect(typeof cssProps.scrollPaddingBlock).toEqual('function');
    });

    it('scrollPaddingBlock', () => {
        expect(cssProps.scrollPaddingBlock("value")).toEqual({scrollPaddingBlock:'value'});
    });


    it('scrollPaddingBlockStart type', () => {
        expect(typeof cssProps.scrollPaddingBlockStart).toEqual('function');
    });

    it('scrollPaddingBlockStart', () => {
        expect(cssProps.scrollPaddingBlockStart("value")).toEqual({scrollPaddingBlockStart:'value'});
    });


    it('scrollPaddingBlockEnd type', () => {
        expect(typeof cssProps.scrollPaddingBlockEnd).toEqual('function');
    });

    it('scrollPaddingBlockEnd', () => {
        expect(cssProps.scrollPaddingBlockEnd("value")).toEqual({scrollPaddingBlockEnd:'value'});
    });


    it('scrollPaddingBottom type', () => {
        expect(typeof cssProps.scrollPaddingBottom).toEqual('function');
    });

    it('scrollPaddingBottom', () => {
        expect(cssProps.scrollPaddingBottom("value")).toEqual({scrollPaddingBottom:'value'});
    });


    it('scrollPaddingInline type', () => {
        expect(typeof cssProps.scrollPaddingInline).toEqual('function');
    });

    it('scrollPaddingInline', () => {
        expect(cssProps.scrollPaddingInline("value")).toEqual({scrollPaddingInline:'value'});
    });


    it('scrollPaddingInlineStart type', () => {
        expect(typeof cssProps.scrollPaddingInlineStart).toEqual('function');
    });

    it('scrollPaddingInlineStart', () => {
        expect(cssProps.scrollPaddingInlineStart("value")).toEqual({scrollPaddingInlineStart:'value'});
    });


    it('scrollPaddingInlineEnd type', () => {
        expect(typeof cssProps.scrollPaddingInlineEnd).toEqual('function');
    });

    it('scrollPaddingInlineEnd', () => {
        expect(cssProps.scrollPaddingInlineEnd("value")).toEqual({scrollPaddingInlineEnd:'value'});
    });


    it('scrollPaddingLeft type', () => {
        expect(typeof cssProps.scrollPaddingLeft).toEqual('function');
    });

    it('scrollPaddingLeft', () => {
        expect(cssProps.scrollPaddingLeft("value")).toEqual({scrollPaddingLeft:'value'});
    });


    it('scrollPaddingRight type', () => {
        expect(typeof cssProps.scrollPaddingRight).toEqual('function');
    });

    it('scrollPaddingRight', () => {
        expect(cssProps.scrollPaddingRight("value")).toEqual({scrollPaddingRight:'value'});
    });


    it('scrollPaddingTop type', () => {
        expect(typeof cssProps.scrollPaddingTop).toEqual('function');
    });

    it('scrollPaddingTop', () => {
        expect(cssProps.scrollPaddingTop("value")).toEqual({scrollPaddingTop:'value'});
    });


    it('scrollSnapAlign type', () => {
        expect(typeof cssProps.scrollSnapAlign).toEqual('function');
    });

    it('scrollSnapAlign', () => {
        expect(cssProps.scrollSnapAlign("value")).toEqual({scrollSnapAlign:'value'});
    });


    it('scrollSnapStop type', () => {
        expect(typeof cssProps.scrollSnapStop).toEqual('function');
    });

    it('scrollSnapStop', () => {
        expect(cssProps.scrollSnapStop("value")).toEqual({scrollSnapStop:'value'});
    });


    it('scrollSnapType type', () => {
        expect(typeof cssProps.scrollSnapType).toEqual('function');
    });

    it('scrollSnapType', () => {
        expect(cssProps.scrollSnapType("value")).toEqual({scrollSnapType:'value'});
    });


    it('shapeImageThreshold type', () => {
        expect(typeof cssProps.shapeImageThreshold).toEqual('function');
    });

    it('shapeImageThreshold', () => {
        expect(cssProps.shapeImageThreshold("value")).toEqual({shapeImageThreshold:'value'});
    });


    it('shapeMargin type', () => {
        expect(typeof cssProps.shapeMargin).toEqual('function');
    });

    it('shapeMargin', () => {
        expect(cssProps.shapeMargin("value")).toEqual({shapeMargin:'value'});
    });


    it('shapeOutside type', () => {
        expect(typeof cssProps.shapeOutside).toEqual('function');
    });

    it('shapeOutside', () => {
        expect(cssProps.shapeOutside("value")).toEqual({shapeOutside:'value'});
    });


    it('tabSize type', () => {
        expect(typeof cssProps.tabSize).toEqual('function');
    });

    it('tabSize', () => {
        expect(cssProps.tabSize("value")).toEqual({tabSize:'value'});
    });


    it('tableLayout type', () => {
        expect(typeof cssProps.tableLayout).toEqual('function');
    });

    it('tableLayout', () => {
        expect(cssProps.tableLayout("value")).toEqual({tableLayout:'value'});
    });


    it('textAlign type', () => {
        expect(typeof cssProps.textAlign).toEqual('function');
    });

    it('textAlign', () => {
        expect(cssProps.textAlign("value")).toEqual({textAlign:'value'});
    });


    it('textAlignLast type', () => {
        expect(typeof cssProps.textAlignLast).toEqual('function');
    });

    it('textAlignLast', () => {
        expect(cssProps.textAlignLast("value")).toEqual({textAlignLast:'value'});
    });


    it('textCombineUpright type', () => {
        expect(typeof cssProps.textCombineUpright).toEqual('function');
    });

    it('textCombineUpright', () => {
        expect(cssProps.textCombineUpright("value")).toEqual({textCombineUpright:'value'});
    });


    it('textDecoration type', () => {
        expect(typeof cssProps.textDecoration).toEqual('function');
    });

    it('textDecoration', () => {
        expect(cssProps.textDecoration("value")).toEqual({textDecoration:'value'});
    });


    it('textDecorationColor type', () => {
        expect(typeof cssProps.textDecorationColor).toEqual('function');
    });

    it('textDecorationColor', () => {
        expect(cssProps.textDecorationColor("value")).toEqual({textDecorationColor:'value'});
    });


    it('textDecorationLine type', () => {
        expect(typeof cssProps.textDecorationLine).toEqual('function');
    });

    it('textDecorationLine', () => {
        expect(cssProps.textDecorationLine("value")).toEqual({textDecorationLine:'value'});
    });


    it('textDecorationSkipInk type', () => {
        expect(typeof cssProps.textDecorationSkipInk).toEqual('function');
    });

    it('textDecorationSkipInk', () => {
        expect(cssProps.textDecorationSkipInk("value")).toEqual({textDecorationSkipInk:'value'});
    });


    it('textDecorationStyle type', () => {
        expect(typeof cssProps.textDecorationStyle).toEqual('function');
    });

    it('textDecorationStyle', () => {
        expect(cssProps.textDecorationStyle("value")).toEqual({textDecorationStyle:'value'});
    });


    it('textDecorationThickness type', () => {
        expect(typeof cssProps.textDecorationThickness).toEqual('function');
    });

    it('textDecorationThickness', () => {
        expect(cssProps.textDecorationThickness("value")).toEqual({textDecorationThickness:'value'});
    });


    it('textEmphasis type', () => {
        expect(typeof cssProps.textEmphasis).toEqual('function');
    });

    it('textEmphasis', () => {
        expect(cssProps.textEmphasis("value")).toEqual({textEmphasis:'value'});
    });


    it('textEmphasisColor type', () => {
        expect(typeof cssProps.textEmphasisColor).toEqual('function');
    });

    it('textEmphasisColor', () => {
        expect(cssProps.textEmphasisColor("value")).toEqual({textEmphasisColor:'value'});
    });


    it('textEmphasisPosition type', () => {
        expect(typeof cssProps.textEmphasisPosition).toEqual('function');
    });

    it('textEmphasisPosition', () => {
        expect(cssProps.textEmphasisPosition("value")).toEqual({textEmphasisPosition:'value'});
    });


    it('textEmphasisStyle type', () => {
        expect(typeof cssProps.textEmphasisStyle).toEqual('function');
    });

    it('textEmphasisStyle', () => {
        expect(cssProps.textEmphasisStyle("value")).toEqual({textEmphasisStyle:'value'});
    });


    it('textIndent type', () => {
        expect(typeof cssProps.textIndent).toEqual('function');
    });

    it('textIndent', () => {
        expect(cssProps.textIndent("value")).toEqual({textIndent:'value'});
    });


    it('textJustify type', () => {
        expect(typeof cssProps.textJustify).toEqual('function');
    });

    it('textJustify', () => {
        expect(cssProps.textJustify("value")).toEqual({textJustify:'value'});
    });


    it('textOrientation type', () => {
        expect(typeof cssProps.textOrientation).toEqual('function');
    });

    it('textOrientation', () => {
        expect(cssProps.textOrientation("value")).toEqual({textOrientation:'value'});
    });


    it('textOverflow type', () => {
        expect(typeof cssProps.textOverflow).toEqual('function');
    });

    it('textOverflow', () => {
        expect(cssProps.textOverflow("value")).toEqual({textOverflow:'value'});
    });


    it('textRendering type', () => {
        expect(typeof cssProps.textRendering).toEqual('function');
    });

    it('textRendering', () => {
        expect(cssProps.textRendering("value")).toEqual({textRendering:'value'});
    });


    it('textShadow type', () => {
        expect(typeof cssProps.textShadow).toEqual('function');
    });

    it('textShadow', () => {
        expect(cssProps.textShadow("value")).toEqual({textShadow:'value'});
    });


    it('textTransform type', () => {
        expect(typeof cssProps.textTransform).toEqual('function');
    });

    it('textTransform', () => {
        expect(cssProps.textTransform("value")).toEqual({textTransform:'value'});
    });


    it('textUnderlineOffset type', () => {
        expect(typeof cssProps.textUnderlineOffset).toEqual('function');
    });

    it('textUnderlineOffset', () => {
        expect(cssProps.textUnderlineOffset("value")).toEqual({textUnderlineOffset:'value'});
    });


    it('textUnderlinePosition type', () => {
        expect(typeof cssProps.textUnderlinePosition).toEqual('function');
    });

    it('textUnderlinePosition', () => {
        expect(cssProps.textUnderlinePosition("value")).toEqual({textUnderlinePosition:'value'});
    });


    it('top type', () => {
        expect(typeof cssProps.top).toEqual('function');
    });

    it('top', () => {
        expect(cssProps.top("value")).toEqual({top:'value'});
    });


    it('touchAction type', () => {
        expect(typeof cssProps.touchAction).toEqual('function');
    });

    it('touchAction', () => {
        expect(cssProps.touchAction("value")).toEqual({touchAction:'value'});
    });


    it('transform type', () => {
        expect(typeof cssProps.transform).toEqual('function');
    });

    it('transform', () => {
        expect(cssProps.transform("value")).toEqual({transform:'value'});
    });


    it('transformBox type', () => {
        expect(typeof cssProps.transformBox).toEqual('function');
    });

    it('transformBox', () => {
        expect(cssProps.transformBox("value")).toEqual({transformBox:'value'});
    });


    it('transformOrigin type', () => {
        expect(typeof cssProps.transformOrigin).toEqual('function');
    });

    it('transformOrigin', () => {
        expect(cssProps.transformOrigin("value")).toEqual({transformOrigin:'value'});
    });


    it('transformStyle type', () => {
        expect(typeof cssProps.transformStyle).toEqual('function');
    });

    it('transformStyle', () => {
        expect(cssProps.transformStyle("value")).toEqual({transformStyle:'value'});
    });


    it('transition type', () => {
        expect(typeof cssProps.transition).toEqual('function');
    });

    it('transition', () => {
        expect(cssProps.transition("value")).toEqual({transition:'value'});
    });


    it('transitionDelay type', () => {
        expect(typeof cssProps.transitionDelay).toEqual('function');
    });

    it('transitionDelay', () => {
        expect(cssProps.transitionDelay("value")).toEqual({transitionDelay:'value'});
    });


    it('transitionDuration type', () => {
        expect(typeof cssProps.transitionDuration).toEqual('function');
    });

    it('transitionDuration', () => {
        expect(cssProps.transitionDuration("value")).toEqual({transitionDuration:'value'});
    });


    it('transitionProperty type', () => {
        expect(typeof cssProps.transitionProperty).toEqual('function');
    });

    it('transitionProperty', () => {
        expect(cssProps.transitionProperty("value")).toEqual({transitionProperty:'value'});
    });


    it('transitionTimingFunction type', () => {
        expect(typeof cssProps.transitionTimingFunction).toEqual('function');
    });

    it('transitionTimingFunction', () => {
        expect(cssProps.transitionTimingFunction("value")).toEqual({transitionTimingFunction:'value'});
    });


    it('translate type', () => {
        expect(typeof cssProps.translate).toEqual('function');
    });

    it('translate', () => {
        expect(cssProps.translate("value")).toEqual({translate:'value'});
    });


    it('unicodeBidi type', () => {
        expect(typeof cssProps.unicodeBidi).toEqual('function');
    });

    it('unicodeBidi', () => {
        expect(cssProps.unicodeBidi("value")).toEqual({unicodeBidi:'value'});
    });


    it('userSelect type', () => {
        expect(typeof cssProps.userSelect).toEqual('function');
    });

    it('userSelect', () => {
        expect(cssProps.userSelect("value")).toEqual({userSelect:'value'});
    });


    it('verticalAlign type', () => {
        expect(typeof cssProps.verticalAlign).toEqual('function');
    });

    it('verticalAlign', () => {
        expect(cssProps.verticalAlign("value")).toEqual({verticalAlign:'value'});
    });


    it('visibility type', () => {
        expect(typeof cssProps.visibility).toEqual('function');
    });

    it('visibility', () => {
        expect(cssProps.visibility("value")).toEqual({visibility:'value'});
    });


    it('whiteSpace type', () => {
        expect(typeof cssProps.whiteSpace).toEqual('function');
    });

    it('whiteSpace', () => {
        expect(cssProps.whiteSpace("value")).toEqual({whiteSpace:'value'});
    });


    it('widows type', () => {
        expect(typeof cssProps.widows).toEqual('function');
    });

    it('widows', () => {
        expect(cssProps.widows("value")).toEqual({widows:'value'});
    });


    it('width type', () => {
        expect(typeof cssProps.width).toEqual('function');
    });

    it('width', () => {
        expect(cssProps.width("value")).toEqual({width:'value'});
    });


    it('willChange type', () => {
        expect(typeof cssProps.willChange).toEqual('function');
    });

    it('willChange', () => {
        expect(cssProps.willChange("value")).toEqual({willChange:'value'});
    });


    it('wordBreak type', () => {
        expect(typeof cssProps.wordBreak).toEqual('function');
    });

    it('wordBreak', () => {
        expect(cssProps.wordBreak("value")).toEqual({wordBreak:'value'});
    });


    it('wordSpacing type', () => {
        expect(typeof cssProps.wordSpacing).toEqual('function');
    });

    it('wordSpacing', () => {
        expect(cssProps.wordSpacing("value")).toEqual({wordSpacing:'value'});
    });


    it('wordWrap type', () => {
        expect(typeof cssProps.wordWrap).toEqual('function');
    });

    it('wordWrap', () => {
        expect(cssProps.wordWrap("value")).toEqual({wordWrap:'value'});
    });


    it('writingMode type', () => {
        expect(typeof cssProps.writingMode).toEqual('function');
    });

    it('writingMode', () => {
        expect(cssProps.writingMode("value")).toEqual({writingMode:'value'});
    });


    it('zIndex type', () => {
        expect(typeof cssProps.zIndex).toEqual('function');
    });

    it('zIndex', () => {
        expect(cssProps.zIndex("value")).toEqual({zIndex:'value'});
    });

});