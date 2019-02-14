import { parse } from "../parse";

describe("parse", () => {
    it("regular", () => {
        const out = parse("hush", `
            display: value;

            button {
                border: 0;
            }

            &.nested {
                foo: 1px;
                baz: scale(1), translate(1);
            }
        `);

        expect(out).toEqual([
            "hush{display: value;}",
            "hush button {border: 0;}",
            "hush.nested {foo: 1px;baz: scale(1), translate(1);}"
        ]);
    });

    it("keyframes", () => {
        const out = parse("hush", `
            @keyframes superAnimation {
                11.1% {
                    opacity: 0.9999;
                }
                111% {
                    opacity: 1;
                }
            }
        `);

        expect(out).toEqual([
            "@keyframes superAnimation {11.1% {opacity: 0.9999;}111% {opacity: 1;}}"
        ]);
    });

    xit("@media", () => {
        const out = parse("hush", `
            @media any all (no-really-anything) {
                position: super-absolute;
            }
        `);

        expect(out).toEqual([
            "@media any all (no-really-anything) {hush{position: super-absolute;}}"
        ]);
    });
});