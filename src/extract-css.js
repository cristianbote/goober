import { getValues } from "./core/style";

/**
 * Returns the `<style>` tag to be used on SSR.
 */
const extractCss = () => "<style data-goober>" + getValues() + "</style>";

export { extractCss }
