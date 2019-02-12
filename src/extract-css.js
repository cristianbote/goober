import { flush } from "./core/style/sheet";

/**
 * Returns the `<style>` tag to be used on SSR.
 */
export const extractCss = () => "<style data-goober>" + flush() + "</style>";
