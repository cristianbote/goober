const NEW_LINE = "\n";

// Parser rules
const NEW_LINES_SEL = /(\s{2,})/gm;
const AT_SEL = /@/gm;
const REGULAR_SEL = /^(\.|\*|&|\#)/gm;
const COMMA_SEL = /(,\n+)/gm;
const TRIM_RULE = /(\s|\n)/gim;

// Values
const SHEET_ID = "data-goober";

export {
    NEW_LINE,
    NEW_LINES_SEL,
    AT_SEL,
    REGULAR_SEL,
    COMMA_SEL,
    SHEET_ID,
    TRIM_RULE
}