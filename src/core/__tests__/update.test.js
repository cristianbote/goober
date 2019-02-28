import { update, extractCss } from "../update";

describe("update", () => {
    it("regression", () => {
        const t = { data: "" };
        
        update("css", t);

        expect(t.data).toEqual("css");
        expect(extractCss()).toEqual(t.data);
    });

    it("regression: duplicate", () => {
        const t = { data: "" };
        
        update("css", t);
        update("foo", t);
        update("css", t);

        expect(t.data).toEqual("cssfoo");
        expect(extractCss()).toEqual(t.data);
    });

    it("regression: no target", () => {
        update("no target");
        expect(extractCss()).toEqual("no target");
    });

    it("regression: second extract call should be empty", () => {
        update("filled");
        expect(extractCss()).toEqual("filled");
        expect(extractCss()).toEqual("");
    });
});