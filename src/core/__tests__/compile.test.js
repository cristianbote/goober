import { compile } from "../compile";

const template = (str, ...defs) => {
    return props => compile(str, defs, props);
};

describe("compile", () => {
    it("simple", () => {
        expect(
            template`prop: 1;`({})
        ).toEqual("prop: 1;");
    });

    it("vnode", () => {
        expect(
            template`prop: 1; ${() => ({ props: { className: "class" }})}`({})
        ).toEqual("prop: 1; .class");


        // Empty or falsy
        expect(
            template`prop: 1; ${() => ({ props: { }})}`({})
        ).toEqual("prop: 1; ");
    });

    it("vanilla classname", () => {
        expect(
            template`prop: 1; ${() => "go0ber"}`({})
        ).toEqual("prop: 1; .go0ber");
    });

    it("value interpolations", () => {
        expect(
            template`prop: 1; ${() => 1} ${2}`({})
        ).toEqual("prop: 1; 1 2");
    });
});