import { normalizer } from "../normalizer";

describe("normalizer", () => {
    it("should remove spaces, newlines and have proper format", () => {
        const out = normalizer(`
            foo: baz;
            prop: 1px 3px 0px rgba(1111, 1, 1, 1) inset;

            &:hover,
            &:focus {
                nope: 1;
            }




            a {
                color: random;
            }
            @media all {
                block: display;
            }


            @media with nested selector {
                #id {
                    color: foo;
                }
            }
        `);

        expect(out).toEqual([
            "",  // newline
            "foo: baz;",
            "prop: 1px 3px 0px rgba(1111, 1, 1, 1) inset;",
            "", // newline
            "&:hover,",
            "&:focus {",
            "nope: 1;",
            "}",
            "", // newline
            "a {",
            "color: random;",
            "}",
            "", // newline
            "@media all {",
            "block: display;",
            "}",
            "",  // newline
            "@media with nested selector {",
            "#id {",
            "color: foo;",
            "}",
            "}",
            ""
        ].join("\n"));
    });

    xit("cra", () => {
        const out = normalizer(`
            animation: App-logo-spin infinite 20s linear;
            height: 40vmin;
            pointer-events: none;

            @keyframes App-logo-spin {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
        `);

        expect(out).toEqual("");
    });

    xit("unsupported", () => {
        const out = normalizer(`
            foo: baz;
            prop: 1px 3px 0px rgba(1111, 1, 1, 1) inset;

            &:hover,
            &:focus {
                nope: 1;
            }

            button,
            a {
                color: random;
            }
            
            @media all {
                block: display;
                
                .class {
                    javascript: alert(1);
                }
            }
        `);

        expect(out).toEqual([
            "",  // newline
            "foo: baz;",
            "prop: 1px 3px 0px rgba(1111, 1, 1, 1) inset;",
            "", // newline
            "&:hover,",
            "&:focus {",
            "nope: 1;",
            "}",
            "", // newline
            "button,",
            "a {",
            "color: random;",
            "}",
            "", // newline
            "@media all {",
            "block: display;",
            ".class {",
            "javascript: alert(1);",
            "}",
            "}",
            ""  // newline
        ].join("\n"));
    });
});