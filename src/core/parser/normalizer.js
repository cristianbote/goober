import {
    NEW_LINE,
    NEW_LINES_SEL,
    REGULAR_SEL,
    COMMA_SEL
} from "../constants";

/**
 * Normalizes the input
 * @param {String} input
 */
export const normalizer = input =>
    input
        .replace(NEW_LINES_SEL, NEW_LINE)
        .replace(REGULAR_SEL, NEW_LINE + "$&")
        .replace(COMMA_SEL, "$1" + NEW_LINE)