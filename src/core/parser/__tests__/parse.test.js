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
            "hush{display:value;}",
            "hush button{border:0;}",
            "hush.nested{foo:1px;baz:scale(1), translate(1);}"
        ].join(""));
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

            @keyframes foo {
                to {
                    baz: 1px;
                    foo: 1px;
                }
            }
        `);

        expect(out).toEqual([
            "@keyframes superAnimation{11.1%{opacity:0.9999}111%{opacity:1}}",
            "@keyframes foo{to{baz:1px;foo:1px}}"
        ].join(""));
    });

    it("@media", () => {
        const out = parse("hush", `
            @media any all (no-really-anything) {
                position: super-absolute;
            }
        `);

        expect(out).toEqual([
            "@media any all (no-really-anything){hush{position:super-absolute;}}"
        ].join(""));
    });

    it("cra", () => {
        expect(parse("App", `
            text-align: center;

            .logo {
                animation: App-logo-spin infinite 20s linear;
                height: 40vmin;
                pointer-events: none;
            }

            .header {
                background-color: #282c34;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: calc(10px + 2vmin);
                color: white;
            }

            .link {
                color: #61dafb;
            }

            @keyframes App-logo-spin {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
        `)).toEqual([
            "App{text-align:center;}",
            "App .logo{animation:App-logo-spin infinite 20s linear;height:40vmin;pointer-events:none;}",
            "App .header{background-color:#282c34;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(10px + 2vmin);color:white;}",
            "App .link{color:#61dafb;}",
            "@keyframes App-logo-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}"
        ].join(""));
    });

    describe("object style notation", () => {
        it("should work", () => {
            expect(parse(".object", {
                "text-align": "center",
                "padding": 1 + "px"
            })).toEqual([
                ".object{text-align:center;padding:1px;}"
            ].join(""))
        })
    });
});