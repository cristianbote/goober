import { styled } from "../styled";
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
        const vanilla = styled("")`css`({});

        expect(getCss).toHaveBeenCalledWith(["css"], [], {});
        expect(getClassNameForCss).toHaveBeenCalledWith("getCss");
        
        expect(vanilla).toEqual('getClassNameForCss');
    });

    it("should the vdom", () => {
        const Comp = styled("tag")`css`({});
        
        expect(Comp).toEqual({
            "attributes": {
                "className": " getClassNameForCss"
            },
            "children": [],
            "key": undefined,
            "nodeName": "tag"
        });
    });
});