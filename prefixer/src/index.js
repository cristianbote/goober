import { prefixProperty, prefixValue } from 'tiny-css-prefixer';

export const prefix = (prop, value) => {
    const base = `${prop}: ${value};`;
    value = prefixValue(prop, value);

    // Handle cases where value can have multiple definitions.
    if (typeof value === 'string' && value.indexOf(', ') !== -1)
        value = value.replace(/, /g, `; ${prop}: `);

    let css = `${prop}: ${value};`;
    const flag = prefixProperty(prop);
    if (flag & 0b001) css += `-ms-${base}`;
    if (flag & 0b010) css += `-moz-${base}`;
    if (flag & 0b100) css += `-webkit-${base}`;
    return css;
};
