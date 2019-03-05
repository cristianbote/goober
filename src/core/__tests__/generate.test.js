import { generate } from "../generate";
import { parse } from "../parse";
import { astish } from "../astish";

jest.mock("../astish", () => ({
    astish: jest.fn().mockReturnValue("astish()")
}));

jest.mock("../parse", () => ({
    parse: jest.fn().mockReturnValue("parse()")
}));

describe("generate", () => {

    beforeEach(() => {
        parse.mockClear();
        astish.mockClear();
    });

    it("compiled: string", () => {
        const res = generate("className", "string");
        
        expect(res).toEqual("parse()");
        expect(parse).toBeCalledWith("astish()", "className");
        expect(astish).toBeCalledWith("string");
    });

    it("compiled: object", () => {
        const res = generate("className", { foo: 1 });
        
        expect(res).toEqual("parse()");
        expect(parse).toBeCalledWith({ foo: 1 }, "className");
        expect(astish).not.toBeCalled();
    });
});