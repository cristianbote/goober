import { toHash } from "../to-hash";

describe("to-hash", () => {
    it("regression", () => {
        const res = toHash("goober");

        expect(res).toEqual(".g0638");
        expect(toHash("goober")).toEqual(".g0638");
    });
});