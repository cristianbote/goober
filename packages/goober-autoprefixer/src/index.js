import { prefixproperty, prefixValue } from 'tiny-css-prefixer';
import { opts } from 'goober';

opts.p = (prop, value) => {
    let css = prefixValue(prop, value) + ';\n';
    const flag = prefixproperty(prop);
    if (flag & 0b001) css += `-ms-${css}`;
    if (flag & 0b010) css += `-moz-${css}`;
    if (flag & 0b100) css += `-webkit-${css}`;
    return css;
};
