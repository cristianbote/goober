import { hush } from "../hush";

describe("hush", () => {
    it("should generate the same hash from the same value", () => {
        const val = "goober";

        expect(hush(val)).toEqual(-1230359288);
        expect(hush(val)).toEqual(-1230359288);
    });

});