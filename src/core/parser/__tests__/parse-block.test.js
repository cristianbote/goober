import { parseBlock } from "../parse-block";

describe("parse-block", () => {
    it("default block", () => {
        expect(
            parseBlock("hash", "named")
        ).toEqual("hash{named}");
    });

    it("named", () => {
        expect(
            parseBlock("hash", "named {")
        ).toEqual("hash named {");
    });

    it("@media", () => {
        expect(
            parseBlock("hash", "@media rule {\nfoo: bar;\n}")
        ).toEqual("@media rule {hash{foo: bar;}}");
    });

    it("@keyframes", () => {
        expect(
            parseBlock("hash", "@keyframes {")
        ).toEqual("@keyframes {");
    });

    it("&nested", () => {
        expect(
            parseBlock("hash", "&.nested {")
        ).toEqual("hash.nested {");
    });
});