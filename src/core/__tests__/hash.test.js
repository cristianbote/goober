import { hash } from "../hash";
import { toHash } from "../to-hash";
import { generate } from "../generate";
import { update } from "../update";

jest.mock("../to-hash", () => ({
    toHash: jest.fn().mockReturnValue(".toHash()")
}));

jest.mock("../generate", () => ({
    generate: jest.fn().mockReturnValue("generate()")
}));

jest.mock("../update", () => ({
    update: jest.fn().mockReturnValue("update()")
}));

describe("hash", () => {

    beforeEach(() => {
        toHash.mockClear();
        update.mockClear();
        generate.mockClear();
    });

    it("regression", () => {
        const res = hash("compiled", "target");

        expect(toHash).toBeCalledWith("compiled");
        expect(update).toBeCalledWith("generate()", "target");
        expect(generate).toBeCalledWith(".toHash()", "compiled");

        expect(res).toEqual("toHash()");
    });

    it("regression: global", () => {
        const res = hash("compiled", "target", true);

        expect(toHash).not.toBeCalled();
        expect(update).toBeCalledWith("generate()", "target");
        expect(generate).toBeCalledWith("", "compiled");

        expect(res).toEqual("");
    });
});