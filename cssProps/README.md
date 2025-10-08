# CssProps

CssProps is a set of utility functions to make it easier to write CSS in JS. **Do not modify this file. This file is generated from ./cssProps/templates/README.mustache**

```javascript
import { minWidth, color, background, fontSize } from 'goober/CssProps';
import { rgb } from 'goober/functions';
import { hover } from 'goober/pseudo';
import { media } from 'goober/atRules';
import { px, em, fr } from 'goober/units';
import { string } from 'goober/util';

const MIN_WIDTH = 900;

const StyledContainer = styled('div')((props) => [
    minWidth(px(20)),
    hover([color(rgb(0, 0, 0)), background(props.theme.color)]),
    grid([string('a'), px(100), string('b'), fr(1)].join(' ')),
    media(SCREEN, AND, `(min-width: ${px(MIN_WIDTH)})`, [fontSize(em(5))])
]);
```

## All the JavaScript code and documentation in cssProps directory is automatically generated from Mustache files in the templates directory

The functions are arranged in the following category

-   at rules - `@media (args) { properties }`
-   constants - `AQUA, CENTER`
-   functions - `rgb(0, 0, 0)`
-   properties - `backgroundSize(px(15))`
-   pseudos - `hover([color(BLUE)])`
-   units - `em(10)`
-   util - `string(BLUE) //Outputs "blue" with double quotes`

## Special Cases

In some instances, the css property or @rule might conflict with a Javascript keyword.
Here is a list of values that had to be renamed to prevent conflicts:

## At Rules

@rules have one or two arguments depending on the syntax of the rule.
The string followed by the @rule is the parameters argument.
The array or object after the parameters are the css properties for the @rule.

```javascript
css([media([NOT, ALL, AND, '(hover: hover)'].join(' '), [color(BLUE), fontSize(px(30))])]);
```

-   @charset - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;@charset#syntax
-   @counter-style - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;@counter-style#syntax
-   @font-face - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;@font-face#syntax
-   @font-feature-values - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;@font-feature-values#syntax
-   @import - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;@import#syntax
-   @keyframes - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;@keyframes#syntax
-   @layer - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;@layer#syntax
-   @media - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;@media#syntax
-   @namespace - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;@namespace#syntax
-   @page - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;@page#syntax
-   @scroll-timeline - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;@scroll-timeline#syntax
-   @supports - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;@supports#syntax
-   @viewport - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;@viewport#syntax

## Constants

-INFINITY,
A3,
A4,
A5,
B4,
B5,
JIS-B4,
JIS-B5,
NAN,
ADD,
AFTER,
ALICEBLUE,
ALL,
ALPHA,
ALTERNATE,
ALTERNATE-REVERSE,
AND,
ANTIQUEWHITE,
AQUA,
AQUAMARINE,
AT,
AUTO,
AUTO-FILL,
AUTO-FIT,
AZURE,
BACKWARDS,
BASELINE,
BEFORE,
BEIGE,
BISQUE,
BLACK,
BLANCHEDALMOND,
BLANK,
BLOCK,
BLUE,
BLUEVIOLET,
BOLD,
BORDER-BOX,
BOTH,
BOTTOM,
BROWN,
BURLYWOOD,
BUTTON,
CADETBLUE,
CENTER,
CHARTREUSE,
CHECKBOX,
CHOCOLATE,
CIRCLE,
CLEAR,
CLOSE-QUOTE,
CLOSEST-CORNER,
CLOSEST-SIDE,
COLOR,
COLOR-BURN,
COLOR-DODGE,
COMMON-LIGATURES,
CONDENSED,
CONTAIN,
CONTENT,
CONTENT-BOX,
CONTENTS,
CONTEXTUAL,
COPY,
CORAL,
CORNFLOWERBLUE,
CORNSILK,
COVER,
CRIMSON,
CURRENTCOLOR,
CURSIVE,
CYAN,
DARKBLUE,
DARKCYAN,
DARKEN,
DARKGOLDENROD,
DARKGRAY,
DARKGREEN,
DARKGREY,
DARKKHAKI,
DARKMAGENTA,
DARKOLIVEGREEN,
DARKORANGE,
DARKORCHID,
DARKRED,
DARKSALMON,
DARKSEAGREEN,
DARKSLATEBLUE,
DARKSLATEGRAY,
DARKSLATEGREY,
DARKTURQUOISE,
DARKVIOLET,
DASHED,
DEEPPINK,
DEEPSKYBLUE,
DESTINATION-ATOP,
DESTINATION-IN,
DESTINATION-OUT,
DESTINATION-OVER,
DIAGONAL-FRACTIONS,
DIFFERENCE,
DIMGRAY,
DIMGREY,
DISCRETIONARY-LIGATURES,
DODGERBLUE,
DOTTED,
DOUBLE,
DOWN,
E,
EASE,
EASE-IN,
EASE-IN-OUT,
EASE-OUT,
ELLIPSE,
END,
EVEN,
EVENODD,
EXCLUDE,
EXCLUSION,
EXPANDED,
EXTRA-CONDENSED,
EXTRA-EXPANDED,
FANTASY,
FARTHEST-CORNER,
FARTHEST-SIDE,
FILL-BOX,
FIREBRICK,
FIRST,
FIRST-LETTER,
FIXED,
FLEX,
FLEX-END,
FLEX-START,
FLORALWHITE,
FLOW,
FLOW-ROOT,
FORESTGREEN,
FORWARDS,
FROM,
FUCHSIA,
FULL-WIDTH,
GAINSBORO,
GHOSTWHITE,
GOLD,
GOLDENROD,
GRAY,
GREEN,
GREENYELLOW,
GREY,
GRID,
GROOVE,
HARD-LIGHT,
HIDDEN,
HISTORICAL-LIGATURES,
HONEYDEW,
HORIZONTAL,
HOTPINK,
HUE,
I,
INDIANRED,
INDIGO,
INFINITE,
INFINITY,
INLINE,
INLINE-BLOCK,
INLINE-FLEX,
INLINE-GRID,
INLINE-LIST-ITEM,
INLINE-TABLE,
INSET,
INTERSECT,
IVORY,
JIS04,
JIS78,
JIS83,
JIS90,
JUMP-BOTH,
JUMP-END,
JUMP-NONE,
JUMP-START,
KHAKI,
LARGE,
LARGER,
LAST,
LAVENDER,
LAVENDERBLUSH,
LAWNGREEN,
LEDGER,
LEFT,
LEGAL,
LEMONCHIFFON,
LETTER,
LIGHTBLUE,
LIGHTCORAL,
LIGHTCYAN,
LIGHTEN,
LIGHTGOLDENRODYELLOW,
LIGHTGRAY,
LIGHTGREEN,
LIGHTGREY,
LIGHTPINK,
LIGHTSALMON,
LIGHTSEAGREEN,
LIGHTSKYBLUE,
LIGHTSLATEGRAY,
LIGHTSLATEGREY,
LIGHTSTEELBLUE,
LIGHTYELLOW,
LIME,
LIMEGREEN,
LINEAR,
LINEN,
LINING-NUMS,
LIST-ITEM,
LISTBOX,
LOCAL,
LTR,
LUMINANCE,
LUMINOSITY,
MAGENTA,
MARGIN-BOX,
MAROON,
MATCH-SOURCE,
MAX-CONTENT,
MEDIUM,
MEDIUMAQUAMARINE,
MEDIUMBLUE,
MEDIUMORCHID,
MEDIUMPURPLE,
MEDIUMSEAGREEN,
MEDIUMSLATEBLUE,
MEDIUMSPRINGGREEN,
MEDIUMTURQUOISE,
MEDIUMVIOLETRED,
MENULIST,
METER,
MIDNIGHTBLUE,
MIN-CONTENT,
MINTCREAM,
MISTYROSE,
MOCCASIN,
MONOSPACE,
MULTIPLY,
NAVAJOWHITE,
NAVY,
NEAREST,
NO-CLIP,
NO-CLOSE-QUOTE,
NO-COMMON-LIGATURES,
NO-CONTEXTUAL,
NO-DISCRETIONARY-LIGATURES,
NO-HISTORICAL-LIGATURES,
NO-OPEN-QUOTE,
NO-REPEAT,
NONE,
NONZERO,
NORMAL,
NOT,
ODD,
OFF,
OLDLACE,
OLDSTYLE-NUMS,
OLIVE,
OLIVEDRAB,
ON,
ONLY,
OPEN-QUOTE,
OR,
ORANGE,
ORANGERED,
ORCHID,
OUTSET,
OVERLAY,
PADDING-BOX,
PALEGOLDENROD,
PALEGREEN,
PALETURQUOISE,
PALEVIOLETRED,
PAPAYAWHIP,
PAUSED,
PEACHPUFF,
PERU,
PI,
PINK,
PLUM,
POWDERBLUE,
PROGRESS-BAR,
PROPORTIONAL-NUMS,
PROPORTIONAL-WIDTH,
PURPLE,
PUSH-BUTTON,
RADIO,
REBECCAPURPLE,
RED,
REPEAT,
REPEAT-X,
REPEAT-Y,
REVERSE,
RIDGE,
RIGHT,
ROOT,
ROSYBROWN,
ROUND,
ROYALBLUE,
RTL,
RUBY,
RUBY-BASE,
RUBY-BASE-CONTAINER,
RUBY-TEXT,
RUBY-TEXT-CONTAINER,
RUN-IN,
RUNNING,
S,
SADDLEBROWN,
SAFE,
SALMON,
SANDYBROWN,
SANS-SERIF,
SATURATION,
SCREEN,
SCROLL,
SCROLL-POSITION,
SEAGREEN,
SEARCHFIELD,
SEASHELL,
SELF-END,
SELF-START,
SEMI-CONDENSED,
SEMI-EXPANDED,
SERIF,
SIENNA,
SILVER,
SIMPLIFIED,
SKYBLUE,
SLATEBLUE,
SLATEGRAY,
SLATEGREY,
SLIDER-HORIZONTAL,
SMALL,
SMALL-CAPS,
SMALLER,
SNOW,
SOFT-LIGHT,
SOLID,
SOURCE-ATOP,
SOURCE-IN,
SOURCE-OUT,
SOURCE-OVER,
SPACE,
SPACE-AROUND,
SPACE-BETWEEN,
SPACE-EVENLY,
SPAN,
SPRINGGREEN,
SQUARE-BUTTON,
STACKED-FRACTIONS,
START,
STEELBLUE,
STEP-END,
STEP-START,
STRETCH,
STROKE-BOX,
SUBTRACT,
TABLE,
TABLE-CAPTION,
TABLE-CELL,
TABLE-COLUMN,
TABLE-COLUMN-GROUP,
TABLE-FOOTER-GROUP,
TABLE-HEADER-GROUP,
TABLE-ROW,
TABLE-ROW-GROUP,
TABULAR-NUMS,
TAN,
TEAL,
TEXTAREA,
THICK,
THIN,
THISTLE,
TO,
TO-ZERO,
TOMATO,
TOP,
TRADITIONAL,
TRANSPARENT,
TURQUOISE,
ULTRA-CONDENSED,
ULTRA-EXPANDED,
UNSAFE,
UP,
VERTICAL,
VIEW-BOX,
VIOLET,
WHEAT,
WHITE,
WHITESMOKE,
X-LARGE,
X-SMALL,
XOR,
XX-LARGE,
XX-SMALL,
XXX-LARGE,
YELLOW,
YELLOWGREEN,

## Functions

CSS Functions that can be used within a CSS property. rgb() for example.

```javascript
css([color(rgb(0, 0, 255))]);
```

-   attr() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;attr#syntax
-   blur() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;filter-function&#x2F;blur#syntax
-   brightness() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;filter-function&#x2F;brightness#syntax
-   calc() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;calc#syntax
-   circle() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;basic-shape&#x2F;circle#syntax
-   clamp() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;clamp#syntax
-   conic-gradient() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;gradient&#x2F;conic-gradient#syntax
-   contrast() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;filter-function&#x2F;contrast#syntax
-   counter() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;counter#syntax
-   counters() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;counters#syntax
-   cross-fade() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;cross-fade#syntax
-   drop-shadow() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;filter-function&#x2F;drop-shadow#syntax
-   element() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;element#syntax
-   ellipse() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;basic-shape&#x2F;ellipse#syntax
-   env() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;env#syntax
-   fit-content() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;fit-content#syntax
-   grayscale() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;filter-function&#x2F;grayscale#syntax
-   hsl() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;color_value&#x2F;hsl#syntax
-   hsla() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;color_value&#x2F;hsla#syntax
-   hue-rotate() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;filter-function&#x2F;hue-rotate#syntax
-   image() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;image&#x2F;image#syntax
-   image-set() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;image&#x2F;image-set#syntax
-   inset() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;basic-shape&#x2F;inset#syntax
-   invert() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;filter-function&#x2F;invert#syntax
-   leader() - undefined#syntax
-   linear-gradient() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;gradient&#x2F;linear-gradient#syntax
-   matrix() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;matrix#syntax
-   matrix3d() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;matrix3d#syntax
-   max() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;max#syntax
-   min() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;min#syntax
-   minmax() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;minmax#syntax
-   opacity() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;filter-function&#x2F;opacity#syntax
-   path() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;path#syntax
-   paint() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;image&#x2F;paint#syntax
-   perspective() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;perspective#syntax
-   polygon() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;basic-shape&#x2F;polygon#syntax
-   radial-gradient() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;gradient&#x2F;radial-gradient#syntax
-   repeating-linear-gradient() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;repeating-linear-gradient#syntax
-   repeating-radial-gradient() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;gradient&#x2F;repeating-linear-gradient#syntax
-   rgb() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;color_value&#x2F;rgb#syntax
-   rgba() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;color_value&#x2F;rgba#syntax
-   rotate() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;rotate#syntax
-   rotate3d() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;rotate3d#syntax
-   rotateX() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;rotateX#syntax
-   rotateY() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;rotateY#syntax
-   rotateZ() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;rotateZ#syntax
-   saturate() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;filter-function&#x2F;saturate#syntax
-   scale() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;scale#syntax
-   scale3d() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;scale3d#syntax
-   scaleX() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;scaleX#syntax
-   scaleY() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;scaleY#syntax
-   scaleZ() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;scaleZ#syntax
-   skew() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;skew#syntax
-   skewX() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;skewX#syntax
-   skewY() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;skewY#syntax
-   sepia() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;filter-function&#x2F;sepia#syntax
-   target-counter() - undefined#syntax
-   target-counters() - undefined#syntax
-   target-text() - undefined#syntax
-   translate() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;translate#syntax
-   translate3d() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;translate3d#syntax
-   translateX() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;translateX#syntax
-   translateY() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;translateY#syntax
-   translateZ() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-function&#x2F;translateZ#syntax
-   var() - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;var#syntax

## Properties

CSS property methods are delimited by spaces.

```javascript
css([margin(rem(5), 0)]);
```

-   -webkit-line-clamp - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;-webkit-line-clamp#syntax
-   accent-color - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;accent-color#syntax
-   align-content - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;align-content#syntax
-   align-items - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;align-items#syntax
-   align-self - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;align-self#syntax
-   all - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;all#syntax
-   animation - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;animation#syntax
-   animation-delay - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;animation-delay#syntax
-   animation-direction - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;animation-direction#syntax
-   animation-duration - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;animation-duration#syntax
-   animation-fill-mode - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;animation-fill-mode#syntax
-   animation-iteration-count - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;animation-iteration-count#syntax
-   animation-name - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;animation-name#syntax
-   animation-play-state - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;animation-play-state#syntax
-   animation-timing-function - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;animation-timing-function#syntax
-   backdrop-filter - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;backdrop-filter#syntax
-   backface-visibility - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;backface-visibility#syntax
-   background - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;background#syntax
-   background-attachment - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;background-attachment#syntax
-   background-blend-mode - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;background-blend-mode#syntax
-   background-clip - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;background-clip#syntax
-   background-color - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;background-color#syntax
-   background-image - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;background-image#syntax
-   background-origin - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;background-origin#syntax
-   background-position - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;background-position#syntax
-   background-repeat - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;background-repeat#syntax
-   background-size - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;background-size#syntax
-   block-size - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;block-size#syntax
-   border - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border#syntax
-   border-block - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-block#syntax
-   border-block-color - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-block-color#syntax
-   border-block-style - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-block-style#syntax
-   border-block-width - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-block-width#syntax
-   border-block-end - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-block-end#syntax
-   border-block-end-color - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-block-end-color#syntax
-   border-block-end-style - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-block-end-style#syntax
-   border-block-end-width - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-block-end-width#syntax
-   border-block-start - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-block-start#syntax
-   border-block-start-color - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-block-start-color#syntax
-   border-block-start-style - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-block-start-style#syntax
-   border-block-start-width - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-block-start-width#syntax
-   border-bottom - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-bottom#syntax
-   border-bottom-color - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-bottom-color#syntax
-   border-bottom-left-radius - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-bottom-left-radius#syntax
-   border-bottom-right-radius - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-bottom-right-radius#syntax
-   border-bottom-style - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-bottom-style#syntax
-   border-bottom-width - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-bottom-width#syntax
-   border-collapse - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-collapse#syntax
-   border-color - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-color#syntax
-   border-end-end-radius - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-end-end-radius#syntax
-   border-end-start-radius - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-end-start-radius#syntax
-   border-image - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-image#syntax
-   border-image-outset - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-image-outset#syntax
-   border-image-repeat - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-image-repeat#syntax
-   border-image-slice - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-image-slice#syntax
-   border-image-source - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-image-source#syntax
-   border-image-width - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-image-width#syntax
-   border-inline - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-inline#syntax
-   border-inline-end - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-inline-end#syntax
-   border-inline-color - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-inline-color#syntax
-   border-inline-style - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-inline-style#syntax
-   border-inline-width - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-inline-width#syntax
-   border-inline-end-color - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-inline-end-color#syntax
-   border-inline-end-style - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-inline-end-style#syntax
-   border-inline-end-width - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-inline-end-width#syntax
-   border-inline-start - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-inline-start#syntax
-   border-inline-start-color - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-inline-start-color#syntax
-   border-inline-start-style - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-inline-start-style#syntax
-   border-inline-start-width - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-inline-start-width#syntax
-   border-left - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-left#syntax
-   border-left-color - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-left-color#syntax
-   border-left-style - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-left-style#syntax
-   border-left-width - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-left-width#syntax
-   border-radius - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-radius#syntax
-   border-right - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-right#syntax
-   border-right-color - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-right-color#syntax
-   border-right-style - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-right-style#syntax
-   border-right-width - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-right-width#syntax
-   border-spacing - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-spacing#syntax
-   border-start-end-radius - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-start-end-radius#syntax
-   border-start-start-radius - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-start-start-radius#syntax
-   border-style - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-style#syntax
-   border-top - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-top#syntax
-   border-top-color - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-top-color#syntax
-   border-top-left-radius - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-top-left-radius#syntax
-   border-top-right-radius - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-top-right-radius#syntax
-   border-top-style - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-top-style#syntax
-   border-top-width - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-top-width#syntax
-   border-width - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;border-width#syntax
-   bottom - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;bottom#syntax
-   box-decoration-break - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;box-decoration-break#syntax
-   box-shadow - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;box-shadow#syntax
-   box-sizing - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;box-sizing#syntax
-   break-after - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;break-after#syntax
-   break-before - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;break-before#syntax
-   break-inside - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;break-inside#syntax
-   caption-side - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;caption-side#syntax
-   caret - undefined#syntax
-   caret-color - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;caret-color#syntax
-   caret-shape - undefined#syntax
-   clear - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;clear#syntax
-   clip - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;clip#syntax
-   clip-path - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;clip-path#syntax
-   color - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;color#syntax
-   print-color-adjust - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;print-color-adjust#syntax
-   color-scheme - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;color-scheme#syntax
-   column-count - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;column-count#syntax
-   column-fill - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;column-fill#syntax
-   column-gap - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;column-gap#syntax
-   column-rule - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;column-rule#syntax
-   column-rule-color - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;column-rule-color#syntax
-   column-rule-style - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;column-rule-style#syntax
-   column-rule-width - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;column-rule-width#syntax
-   column-span - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;column-span#syntax
-   column-width - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;column-width#syntax
-   columns - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;columns#syntax
-   contain - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;contain#syntax
-   content - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;content#syntax
-   content-visibility - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;content-visibility#syntax
-   counter-increment - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;counter-increment#syntax
-   counter-reset - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;counter-reset#syntax
-   counter-set - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;counter-set#syntax
-   cursor - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;cursor#syntax
-   direction - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;direction#syntax
-   display - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;display#syntax
-   empty-cells - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;empty-cells#syntax
-   filter - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;filter#syntax
-   flex - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;flex#syntax
-   flex-basis - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;flex-basis#syntax
-   flex-direction - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;flex-direction#syntax
-   flex-flow - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;flex-flow#syntax
-   flex-grow - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;flex-grow#syntax
-   flex-shrink - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;flex-shrink#syntax
-   flex-wrap - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;flex-wrap#syntax
-   float - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;float#syntax
-   font - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;font#syntax
-   font-family - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;font-family#syntax
-   font-feature-settings - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;font-feature-settings#syntax
-   font-kerning - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;font-kerning#syntax
-   font-language-override - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;font-language-override#syntax
-   font-optical-sizing - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;font-optical-sizing#syntax
-   font-variation-settings - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;font-variation-settings#syntax
-   font-size - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;font-size#syntax
-   font-size-adjust - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;font-size-adjust#syntax
-   font-stretch - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;font-stretch#syntax
-   font-style - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;font-style#syntax
-   font-synthesis - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;font-synthesis#syntax
-   font-variant - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;font-variant#syntax
-   font-variant-alternates - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;font-variant-alternates#syntax
-   font-variant-caps - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;font-variant-caps#syntax
-   font-variant-east-asian - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;font-variant-east-asian#syntax
-   font-variant-ligatures - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;font-variant-ligatures#syntax
-   font-variant-numeric - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;font-variant-numeric#syntax
-   font-variant-position - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;font-variant-position#syntax
-   font-weight - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;font-weight#syntax
-   gap - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;gap#syntax
-   grid - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;grid#syntax
-   grid-area - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;grid-area#syntax
-   grid-auto-columns - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;grid-auto-columns#syntax
-   grid-auto-flow - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;grid-auto-flow#syntax
-   grid-auto-rows - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;grid-auto-rows#syntax
-   grid-column - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;grid-column#syntax
-   grid-column-end - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;grid-column-end#syntax
-   grid-column-start - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;grid-column-start#syntax
-   grid-row - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;grid-row#syntax
-   grid-row-end - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;grid-row-end#syntax
-   grid-row-start - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;grid-row-start#syntax
-   grid-template - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;grid-template#syntax
-   grid-template-areas - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;grid-template-areas#syntax
-   grid-template-columns - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;grid-template-columns#syntax
-   grid-template-rows - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;grid-template-rows#syntax
-   hanging-punctuation - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;hanging-punctuation#syntax
-   height - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;height#syntax
-   hyphenate-character - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;hyphenate-character#syntax
-   hyphenate-limit-chars - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;hyphenate-limit-chars#syntax
-   hyphens - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;hyphens#syntax
-   image-orientation - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;image-orientation#syntax
-   image-rendering - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;image-rendering#syntax
-   inline-size - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;inline-size#syntax
-   input-security - undefined#syntax
-   inset - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;inset#syntax
-   inset-block - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;inset-block#syntax
-   inset-block-end - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;inset-block-end#syntax
-   inset-block-start - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;inset-block-start#syntax
-   inset-inline - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;inset-inline#syntax
-   inset-inline-end - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;inset-inline-end#syntax
-   inset-inline-start - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;inset-inline-start#syntax
-   isolation - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;isolation#syntax
-   justify-content - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;justify-content#syntax
-   justify-items - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;justify-items#syntax
-   justify-self - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;justify-self#syntax
-   left - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;left#syntax
-   letter-spacing - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;letter-spacing#syntax
-   line-break - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;line-break#syntax
-   line-height - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;line-height#syntax
-   list-style - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;list-style#syntax
-   list-style-image - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;list-style-image#syntax
-   list-style-position - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;list-style-position#syntax
-   list-style-type - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;list-style-type#syntax
-   margin - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;margin#syntax
-   margin-block - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;margin-block#syntax
-   margin-block-end - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;margin-block-end#syntax
-   margin-block-start - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;margin-block-start#syntax
-   margin-bottom - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;margin-bottom#syntax
-   margin-inline - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;margin-inline#syntax
-   margin-inline-end - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;margin-inline-end#syntax
-   margin-inline-start - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;margin-inline-start#syntax
-   margin-left - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;margin-left#syntax
-   margin-right - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;margin-right#syntax
-   margin-top - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;margin-top#syntax
-   mask - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;mask#syntax
-   mask-border - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;mask-border#syntax
-   mask-border-mode - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;mask-border-mode#syntax
-   mask-border-outset - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;mask-border-outset#syntax
-   mask-border-repeat - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;mask-border-repeat#syntax
-   mask-border-slice - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;mask-border-slice#syntax
-   mask-border-source - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;mask-border-source#syntax
-   mask-border-width - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;mask-border-width#syntax
-   mask-clip - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;mask-clip#syntax
-   mask-composite - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;mask-composite#syntax
-   mask-image - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;mask-image#syntax
-   mask-mode - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;mask-mode#syntax
-   mask-origin - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;mask-origin#syntax
-   mask-position - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;mask-position#syntax
-   mask-repeat - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;mask-repeat#syntax
-   mask-size - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;mask-size#syntax
-   mask-type - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;mask-type#syntax
-   math-depth - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;math-depth#syntax
-   math-shift - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;math-shift#syntax
-   math-style - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;math-style#syntax
-   max-block-size - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;max-block-size#syntax
-   max-height - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;max-height#syntax
-   max-inline-size - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;max-inline-size#syntax
-   max-width - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;max-width#syntax
-   min-block-size - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;min-block-size#syntax
-   min-height - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;min-height#syntax
-   min-inline-size - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;min-inline-size#syntax
-   min-width - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;min-width#syntax
-   mix-blend-mode - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;mix-blend-mode#syntax
-   object-fit - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;object-fit#syntax
-   object-position - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;object-position#syntax
-   offset - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;offset#syntax
-   offset-anchor - undefined#syntax
-   offset-distance - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;offset-distance#syntax
-   offset-path - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;offset-path#syntax
-   offset-rotate - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;offset-rotate#syntax
-   opacity - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;opacity#syntax
-   order - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;order#syntax
-   orphans - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;orphans#syntax
-   outline - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;outline#syntax
-   outline-color - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;outline-color#syntax
-   outline-offset - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;outline-offset#syntax
-   outline-style - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;outline-style#syntax
-   outline-width - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;outline-width#syntax
-   overflow - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;overflow#syntax
-   overflow-anchor - undefined#syntax
-   overflow-block - undefined#syntax
-   overflow-clip-margin - undefined#syntax
-   overflow-inline - undefined#syntax
-   overflow-wrap - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;overflow-wrap#syntax
-   overflow-x - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;overflow-x#syntax
-   overflow-y - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;overflow-y#syntax
-   overscroll-behavior - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;overscroll-behavior#syntax
-   overscroll-behavior-block - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;overscroll-behavior-block#syntax
-   overscroll-behavior-inline - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;overscroll-behavior-inline#syntax
-   overscroll-behavior-x - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;overscroll-behavior-x#syntax
-   overscroll-behavior-y - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;overscroll-behavior-y#syntax
-   padding - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;padding#syntax
-   padding-block - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;padding-block#syntax
-   padding-block-end - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;padding-block-end#syntax
-   padding-block-start - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;padding-block-start#syntax
-   padding-bottom - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;padding-bottom#syntax
-   padding-inline - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;padding-inline#syntax
-   padding-inline-end - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;padding-inline-end#syntax
-   padding-inline-start - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;padding-inline-start#syntax
-   padding-left - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;padding-left#syntax
-   padding-right - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;padding-right#syntax
-   padding-top - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;padding-top#syntax
-   page-break-after - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;page-break-after#syntax
-   page-break-before - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;page-break-before#syntax
-   page-break-inside - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;page-break-inside#syntax
-   paint-order - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;paint-order#syntax
-   perspective - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;perspective#syntax
-   perspective-origin - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;perspective-origin#syntax
-   place-content - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;place-content#syntax
-   place-items - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;place-items#syntax
-   place-self - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;place-self#syntax
-   pointer-events - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;pointer-events#syntax
-   position - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;position#syntax
-   quotes - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;quotes#syntax
-   resize - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;resize#syntax
-   right - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;right#syntax
-   rotate - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;rotate#syntax
-   row-gap - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;row-gap#syntax
-   scale - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scale#syntax
-   scrollbar-color - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scrollbar-color#syntax
-   scrollbar-gutter - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scrollbar-gutter#syntax
-   scrollbar-width - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scrollbar-width#syntax
-   scroll-behavior - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-behavior#syntax
-   scroll-margin - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-margin#syntax
-   scroll-margin-block - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-margin-block#syntax
-   scroll-margin-block-start - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-margin-block-start#syntax
-   scroll-margin-block-end - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-margin-block-end#syntax
-   scroll-margin-bottom - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-margin-bottom#syntax
-   scroll-margin-inline - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-margin-inline#syntax
-   scroll-margin-inline-start - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-margin-inline-start#syntax
-   scroll-margin-inline-end - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-margin-inline-end#syntax
-   scroll-margin-left - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-margin-left#syntax
-   scroll-margin-right - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-margin-right#syntax
-   scroll-margin-top - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-margin-top#syntax
-   scroll-padding - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-padding#syntax
-   scroll-padding-block - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-padding-block#syntax
-   scroll-padding-block-start - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-padding-block-start#syntax
-   scroll-padding-block-end - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-padding-block-end#syntax
-   scroll-padding-bottom - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-padding-bottom#syntax
-   scroll-padding-inline - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-padding-inline#syntax
-   scroll-padding-inline-start - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-padding-inline-start#syntax
-   scroll-padding-inline-end - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-padding-inline-end#syntax
-   scroll-padding-left - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-padding-left#syntax
-   scroll-padding-right - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-padding-right#syntax
-   scroll-padding-top - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-padding-top#syntax
-   scroll-snap-align - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-snap-align#syntax
-   scroll-snap-stop - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-snap-stop#syntax
-   scroll-snap-type - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;scroll-snap-type#syntax
-   shape-image-threshold - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;shape-image-threshold#syntax
-   shape-margin - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;shape-margin#syntax
-   shape-outside - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;shape-outside#syntax
-   tab-size - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;tab-size#syntax
-   table-layout - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;table-layout#syntax
-   text-align - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-align#syntax
-   text-align-last - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-align-last#syntax
-   text-combine-upright - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-combine-upright#syntax
-   text-decoration - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-decoration#syntax
-   text-decoration-color - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-decoration-color#syntax
-   text-decoration-line - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-decoration-line#syntax
-   text-decoration-skip-ink - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-decoration-skip-ink#syntax
-   text-decoration-style - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-decoration-style#syntax
-   text-decoration-thickness - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-decoration-thickness#syntax
-   text-emphasis - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-emphasis#syntax
-   text-emphasis-color - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-emphasis-color#syntax
-   text-emphasis-position - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-emphasis-position#syntax
-   text-emphasis-style - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-emphasis-style#syntax
-   text-indent - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-indent#syntax
-   text-justify - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-justify#syntax
-   text-orientation - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-orientation#syntax
-   text-overflow - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-overflow#syntax
-   text-rendering - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-rendering#syntax
-   text-shadow - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-shadow#syntax
-   text-transform - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-transform#syntax
-   text-underline-offset - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-underline-offset#syntax
-   text-underline-position - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;text-underline-position#syntax
-   top - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;top#syntax
-   touch-action - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;touch-action#syntax
-   transform - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform#syntax
-   transform-box - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-box#syntax
-   transform-origin - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-origin#syntax
-   transform-style - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transform-style#syntax
-   transition - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transition#syntax
-   transition-delay - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transition-delay#syntax
-   transition-duration - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transition-duration#syntax
-   transition-property - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transition-property#syntax
-   transition-timing-function - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;transition-timing-function#syntax
-   translate - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;translate#syntax
-   unicode-bidi - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;unicode-bidi#syntax
-   user-select - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;user-select#syntax
-   vertical-align - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;vertical-align#syntax
-   visibility - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;visibility#syntax
-   white-space - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;white-space#syntax
-   widows - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;widows#syntax
-   width - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;width#syntax
-   will-change - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;will-change#syntax
-   word-break - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;word-break#syntax
-   word-spacing - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;word-spacing#syntax
-   word-wrap - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;overflow-wrap#syntax
-   writing-mode - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;writing-mode#syntax
-   z-index - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;z-index#syntax

## Pseudos

Pseudo selectors have one argument which is the CSS properties object or array.

```javascript
css([hover([color(YELLOW)])]);
```

-   :active - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:active#syntax
-   :any-link - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:any-link#syntax
-   :checked - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:checked#syntax
-   :default - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:default#syntax
-   :dir - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:dir#syntax
-   :disabled - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:disabled#syntax
-   :empty - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:empty#syntax
-   :enabled - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:enabled#syntax
-   :first - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:first#syntax
-   :first-child - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:first-child#syntax
-   :first-of-type - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:first-of-type#syntax
-   :fullscreen - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:fullscreen#syntax
-   :future - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:future#syntax
-   :focus - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:focus#syntax
-   :focus-visible - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:focus-visible#syntax
-   :focus-within - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:focus-within#syntax
-   :hover - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:hover#syntax
-   :indeterminate - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:indeterminate#syntax
-   :in-range - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:in-range#syntax
-   :invalid - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:invalid#syntax
-   :lang - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:lang#syntax
-   :last-child - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:last-child#syntax
-   :last-of-type - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:last-of-type#syntax
-   :left - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:left#syntax
-   :link - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:link#syntax
-   :not - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:not#syntax
-   :nth-child - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:nth-child#syntax
-   :nth-last-child - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:nth-last-child#syntax
-   :nth-last-of-type - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:nth-last-of-type#syntax
-   :nth-of-type - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:nth-of-type#syntax
-   :only-child - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:only-child#syntax
-   :only-of-type - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:only-of-type#syntax
-   :optional - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:optional#syntax
-   :out-of-range - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:out-of-range#syntax
-   :read-only - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:read-only#syntax
-   :read-write - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:read-write#syntax
-   :required - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:required#syntax
-   :right - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:right#syntax
-   :root - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:root#syntax
-   :scope - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:scope#syntax
-   :target - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:target#syntax
-   :valid - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:valid#syntax
-   :visited - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;:visited#syntax
-   ::after - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;::after#syntax
-   ::backdrop - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;::backdrop#syntax
-   ::before - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;::before#syntax
-   ::cue - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;::cue#syntax
-   ::cue-region - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;::cue-region#syntax
-   ::first-letter - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;::first-letter#syntax
-   ::first-line - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;::first-line#syntax
-   ::marker - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;::marker#syntax
-   ::placeholder - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;::placeholder#syntax
-   ::selection - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;::selection#syntax
-   ::slotted - https:&#x2F;&#x2F;developer.mozilla.org&#x2F;docs&#x2F;Web&#x2F;CSS&#x2F;::slotted#syntax

## Units

cap,
ch,
cm,
deg,
dpcm,
dpi,
dppx,
em,
ex,
fr,
grad,
Hz,
ic,
in,
kHz,
mm,
ms,
pc,
pt,
px,
Q,
rad,
rem,
s,
turn,
vh,
vmax,
vmin,
vw,
x,

## Util

-   flatten - Converts array of objects containing css properties into a single object
-   string - wrap a string in quotations. `string(BLUE)` returns "BLUE" including double quotes. Only applies to CSS properties that must have a string literal
