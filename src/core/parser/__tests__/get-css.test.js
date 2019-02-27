import { getCss } from "../get-css";

const template = (str, ...defs) => {
    return props => getCss(str, defs, props);
}

describe("get-css", () => {
    it("simple", () => {
        expect(
            template`prop: 1;`({})
        ).toEqual("prop: 1;");
    });

    it("vnode", () => {
        expect(
            template`prop: 1; ${() => ({ attributes: { className: "class" }})}`({})
        ).toEqual("prop: 1; .class");


        // Empty or falsy
        expect(
            template`prop: 1; ${() => ({ attributes: { }})}`({})
        ).toEqual("prop: 1; ");
    });

    it("vanilla classname", () => {
        expect(
            template`prop: 1; ${() => "g00ber"}`({})
        ).toEqual("prop: 1; .g00ber");
    });

    it("value interpolations", () => {
        expect(
            template`prop: 1; ${() => 1} ${2}`({})
        ).toEqual("prop: 1; 1 2");
    });

    it("non iterable", () => {
        const v = Math.random();

        expect(
            template(v)()
        ).toEqual(v);
    });
});