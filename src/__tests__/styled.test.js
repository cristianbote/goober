import { styled, setPragma } from "../styled";
import { getCss } from "../core/parser/get-css";
import { getClassNameForCss } from "../core/style/get-class-name";

jest.mock("../core/style/get-class-name", () => ({
    getClassNameForCss: jest.fn().mockReturnValue("getClassNameForCss")
}));

jest.mock("../core/parser/get-css", () => ({
    getCss: jest.fn().mockReturnValue("getCss")
}));

describe("styled", () => {
    it("should return the className for vanilla", () => {
        const vanilla = styled("")`css`;

        expect(getCss).toHaveBeenCalledWith(["css"], [], undefined);
        expect(getClassNameForCss).toHaveBeenCalledWith("getCss");
        
        expect(vanilla).toEqual('getClassNameForCss');
    });

    it("should not call the pragma if not set", () => {
        const Comp = styled("tag")`css`({});
        
        expect(Comp).toEqual("getClassNameForCss");
    });

    it("should not call the pragma if not set", () => {
        const fn = jest.fn();
        setPragma(fn);

        const Comp = styled("tag")`css`({});
        expect(fn).toBeCalled();
    });

    it("object style notation", () => {
        const Comp = styled("tag")({ foo: 1 })({});
        expect(getClassNameForCss).toBeCalledWith({ foo: 1 });
    })
});