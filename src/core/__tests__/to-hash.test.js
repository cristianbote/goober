import { toHash } from "../to-hash";

describe("to-hash", () => {
    it("regression", () => {
        const res = toHash("goober");

        expect(res).toEqual(".go670");
        expect(toHash("goober")).toEqual(".go670");
    });
});