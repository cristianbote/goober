import { getClassNameForCss } from "../get-class-name";
import { add } from "../sheet";
import { hush } from "../../hush";
import { parse } from "../../parser/parse";

jest.mock("../sheet", () => ({
    add: jest.fn()
}));

jest.mock("../../parser/parse", () => ({
    parse: jest.fn().mockReturnValue(["parsed"])
}));

jest.mock("../../hush", () => ({
    hush: jest.fn().mockReturnValue(1e3)
}));

describe("get-class-name", () => {
    it("should generate proper class", () => {
        const className = getClassNameForCss("random");
        const expected = "g0" + 1e3.toString(16);

        expect(hush).toBeCalledWith("random");
        expect(parse).toBeCalledWith("." + expected, "random");
        expect(add).toBeCalledWith(expected, "parsed");

        expect(className).toEqual(expected);
    })
});