import { toHash } from "../to-hash";

describe("to-hash", () => {
    it("regression", () => {
        const res = toHash("goober");

        expect(res).toEqual(".g01240249687");
        expect(toHash("goober")).toEqual(".g01240249687");
    });
});