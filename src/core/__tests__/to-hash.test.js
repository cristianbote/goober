import { toHash } from "../to-hash";

describe("to-hash", () => {
    it("regression", () => {
        const res = toHash("goober");

        expect(res).toEqual(".go646");
        expect(toHash("goober")).toEqual(".go646");
    });
});