import { prefixProperty, prefixValue } from 'tiny-css-prefixer';

export const prefix = (prop, value) => {
    const base = `${prop}: ${value};\n`;
    value = prefixValue(prop, value);
    let css = `${prop}: ${value};\n`;
    const flag = prefixProperty(prop);
    if (flag & 0b001) css += `-ms-${base}`;
    if (flag & 0b010) css += `-moz-${base}`;
    if (flag & 0b100) css += `-webkit-${base}`;
    return css;
};
