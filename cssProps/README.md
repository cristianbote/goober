** Do not modify this file. This file is generated from ./cssProps/templates/README.mustache **

# CssProps

CssProps is a set of utility functions to make it easier to write CSS in JS.

```javascript
import {
    minWidth,
    color,
    background,
    fontSize,
    rgb,
    hover,
    media,
    px,
    em,
    fr,
    string
} from '@goober/css';

const MIN_WIDTH = 900;
const StyledContainer = styled('div')((props) => [
    minWidth(px(20)),
    hover([color(rgb(0, 0, 0)), background(props.theme.color)]),
    grid([string('a'), px(100), string('b'), fr(1)].join(' ')),
    media(`screen and (min-width: ${px(MIN_WIDTH)})`, [fontSize(em(5))])
]);
```

**All the JavaScript code and documentation in cssProps is automatically generated from Mustache files in the templates directory**

The functions are arranged in the following category

-   at rules - `@import`
-   constants - `AQUA, CENTER`
-   functions - `rgb(0, 0, 0)`
-   properties - `backgroundSize(px(15))`
-   pseudos - `hover([color(BLUE)])`
-   units - `em(10)`
-   util - `string(BLUE) //Outputs "blue" with double quotes`

# At Rules

## hello

# Constants

# Functions

# Properties

# Pseudos

# Units

# Util
