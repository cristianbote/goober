import { update, extractCss } from "../update";

describe("update", () => {
    it("regression", () => {
        const t = { data: "" };
        
        update("css", t);

        expect(t.data).toEqual("css");
        // Using a target should not update the SSR cache
        expect(extractCss()).toEqual("");
    });

    it("regression: duplicate", () => {
        const t = { data: "" };
        
        update("css", t);
        update("foo", t);
        update("css", t);

        expect(t.data).toEqual("cssfoo");
    });

    it("regression: no target", () => {
        update("no target");
        expect(extractCss()).toEqual("no target");
    });

    it("regression: extract and flush", () => {
        update("filled");
        expect(extractCss()).toEqual("filled");
        expect(extractCss()).toEqual("");
    });
});