import { toHash } from "../to-hash";

describe("to-hash", () => {
    it("regression", () => {
        const res = toHash("goober");

        expect(res).toEqual(".g0706");
        expect(toHash("goober")).toEqual(".g0706");
    });

    it("object", () => {
        const res = toHash({ foo: 1 });

        expect(res).toEqual(".g0747");
        expect(toHash({ foo: 1 })).toEqual(".g0747");
    });

});