import { flush, SHEET_ID } from "./core/style/sheet";

/**
 * Returns the `<style>` tag to be used on SSR.
 */
export const extractCss = () =>
  "<style " + SHEET_ID + ">" + flush() + "</style>";
