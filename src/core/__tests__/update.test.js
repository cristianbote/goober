import { update, extractCss } from "../update";
import { getSheet } from "../get-sheet";

describe("update", () => {
    it("regression", () => {
        const t = { data: "" };

        update("css", t);

        expect(t.data).toEqual("css");
    });

    it("regression: duplicate", () => {
        const t = { data: "" };

        update("css", t);
        update("foo", t);
        update("css", t);

        expect(t.data).toEqual("cssfoo");
    });

    it("regression: extract and flush", () => {
        update("filled", getSheet());
        expect(extractCss()).toEqual(" filled");
        expect(extractCss()).toEqual("");
    });

    it("regression: extract and flush without DOM", () => {
        const bkp = global.document;
        delete global.document;
        update("filled", getSheet());
        expect(extractCss()).toEqual("filled");
        expect(extractCss()).toEqual("");
        global.document = bkp;
    });

    it("regression: extract and flush from custom target", () => {
        update("filled", getSheet());
        update("filledbody", getSheet(global.document.body));
        expect(extractCss(global.document.body)).toEqual(" filledbody");
        expect(extractCss(global.document.body)).toEqual("");
    });
});
