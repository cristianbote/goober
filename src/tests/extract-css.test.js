import { extractCss } from "../extract-css";
import { flush } from "../core/style/sheet";

jest.mock("../core/style/sheet", () => ({
    flush: jest.fn().mockReturnValue([ "flushed", "rule" ])
}));

describe("extract-css", () => {
    it("should call flush", () => {
        const tag = extractCss();

        expect(flush).toBeCalled();
        expect(tag).toEqual("<style data-goober>flushedrule</style>");
    });
});