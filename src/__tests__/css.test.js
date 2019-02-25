import { css } from "../css";
import { styled } from "../styled";

jest.mock("../styled", () => ({
    styled: jest.fn().mockReturnValue(() => {})
}));

describe("css", () => {
    it("should call styled", () => {
        css();

        expect(styled).toBeCalledWith("");
    });

    it("should be a fn", () => {
        expect(typeof css).toEqual("function");
    });
});