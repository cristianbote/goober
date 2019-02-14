const NEW_LINE = "\n";

// Parser rules
const TRIM_RULE = /(\s|\n)/gim;
const NEW_LINES_SEL = /(\s{2,})/gm;
const REGULAR_SEL = /^(\.|@|\*|&|#|[a-z]+\s{)+/gm;
const COMMA_SEL = /([{|,|;])\n{2,}/gm;

// Values
const SHEET_ID = "data-goober";

export {
    NEW_LINE,
    NEW_LINES_SEL,
    REGULAR_SEL,
    COMMA_SEL,
    SHEET_ID,
    TRIM_RULE
}