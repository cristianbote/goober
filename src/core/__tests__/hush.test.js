import { hush } from "../hush";

describe("hush", () => {
    it("should generate the same hash from the same value", () => {
        const val = "goober";

        expect(hush(val)).toEqual("g0638");
        expect(hush(val)).toEqual("g0638");
    });

    it("object", () => {
        const val = { foo: 1 };

        expect(hush(val)).toEqual("g0747");
        expect(hush(val)).toEqual("g0747");
    });

});