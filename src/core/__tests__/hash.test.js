import { hash } from "../hash";
import { toHash } from "../to-hash";
import { update } from "../update";
import { parse } from "../parse";
import { astish } from "../astish";

jest.mock("../astish", () => ({
    astish: jest.fn().mockReturnValue("astish()")
}));

jest.mock("../parse", () => ({
    parse: jest.fn().mockReturnValue("parse()")
}));

jest.mock("../to-hash", () => ({
    toHash: jest.fn().mockReturnValue(".toHash()")
}));

jest.mock("../update", () => ({
    update: jest.fn().mockReturnValue("update()")
}));

jest.mock("../astish", () => ({
    astish: jest.fn().mockReturnValue("astish()")
}));

jest.mock("../parse", () => ({
    parse: jest.fn().mockReturnValue("parse()")
}));

describe("hash", () => {

    beforeEach(() => {
        toHash.mockClear();
        update.mockClear();
        parse.mockClear();
        astish.mockClear();
    });

    it("regression", () => {
        const res = hash("compiled", "target");

        expect(toHash).toBeCalledWith("compiled");
        expect(update).toBeCalledWith("parse()", "target");
        expect(astish).toBeCalledWith("compiled");
        expect(parse).toBeCalledWith("astish()", ".toHash()");

        expect(res).toEqual("toHash()");
    });

    it("regression: cache", () => {
        const res = hash("compiled", "target");

        expect(toHash).not.toBeCalled();
        expect(astish).not.toBeCalled();
        expect(parse).not.toBeCalled();
        expect(update).toBeCalledWith("parse()", "target");

        expect(res).toEqual("toHash()");
    });

    it("regression: global", () => {
        const res = hash("global", "target", true);

        expect(toHash).not.toBeCalled();
        expect(astish).toBeCalledWith("global");
        expect(parse).toBeCalledWith("astish()", "");
        expect(update).toBeCalledWith("parse()", "target");

        expect(res).toEqual("");
    });

    it("regression: object", () => {
        const className = Math.random() + "unique";
        toHash.mockReturnValue(className);

        const res = hash({ baz: 1 }, "target");

        expect(toHash).toBeCalledWith({ baz: 1 });
        expect(astish).not.toBeCalled();
        expect(parse).toBeCalledWith({ baz: 1 }, className);
        expect(update).toBeCalledWith("parse()", "target");

        expect(res).toEqual(className.substr(1));

        const className2 = Math.random() + "unique";
        toHash.mockReturnValue(className2);

        const res2 = hash({ foo: 2 }, "target");

        expect(toHash).toBeCalledWith({ foo: 2 });
        expect(astish).not.toBeCalled();
        expect(parse).toBeCalledWith({ foo: 2 }, className2);
        expect(update).toBeCalledWith("parse()", "target");

        expect(res2).toEqual(className2.substr(1));
        expect(res).not.toEqual(res2);
    })
});
