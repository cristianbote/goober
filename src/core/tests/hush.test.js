import { hush } from "../hush";

describe("hush", () => {
    it("should generate the same hash from the same value", () => {
        const val = "goober";

        expect(hush(val)).toEqual(638);
        expect(hush(val)).toEqual(638);
    });

});