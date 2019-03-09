import { parse } from "../parse";

describe("parse", () => {
    it("regular", () => {
        const out = parse({
            "display": "value",
            "button": {
              "border": "0"
            },
            "&.nested": {
              "foo": "1px",
              "baz": "scale(1), translate(1)"
            }
          }, "hush");

        expect(out).toEqual([
            "hush{display:value;}",
            "hush button{border:0;}",
            "hush.nested{foo:1px;baz:scale(1), translate(1);}"
        ].join(""));
    });

    it("keyframes", () => {
        const out = parse({
            "@keyframes superAnimation": {
              "11.1%": {
                "opacity": "0.9999"
              },
              "111%": {
                "opacity": "1"
              }
            },
            "@keyframes foo": {
              "to": {
                "baz": "1px",
                "foo": "1px"
              }
            }
          }, "hush");

        expect(out).toEqual([
            "@keyframes superAnimation{11.1%{opacity:0.9999}111%{opacity:1}}",
            "@keyframes foo{to{baz:1px;foo:1px}}"
        ].join(""));
    });

    it("@media", () => {
        const out = parse({
            "@media any all (no-really-anything)": {
              "position": "super-absolute"
            }
          }, "hush");

        expect(out).toEqual([
            "@media any all (no-really-anything){hush{position:super-absolute;}}"
        ].join(""));
    });

    xit("@import", () => {
        const out = parse({
            "@import url('https://domain.com/path?1=s')": {}
          }, "hush");

        expect(out).toEqual([
            "@media any all (no-really-anything){hush{position:super-absolute;}}"
        ].join(""));
    });

    it("cra", () => {
        expect(parse({
            "text-align": "center",
            ".logo": {
              "animation": "App-logo-spin infinite 20s linear",
              "height": "40vmin",
              "pointer-events": "none"
            },
            ".header": {
              "background-color": "#282c34",
              "min-height": "100vh",
              "display": "flex",
              "flex-direction": "column",
              "align-items": "center",
              "justify-content": "center",
              "font-size": "calc(10px + 2vmin)",
              "color": "white"
            },
            ".link": {
              "color": "#61dafb"
            },
            "@keyframes App-logo-spin": {
              "from": {
                "transform": "rotate(0deg)"
              },
              "to": {
                "transform": "rotate(360deg)"
              }
            }
          }, "App")
          ).toEqual([
            "App{text-align:center;}",
            "App .logo{animation:App-logo-spin infinite 20s linear;height:40vmin;pointer-events:none;}",
            "App .header{background-color:#282c34;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(10px + 2vmin);color:white;}",
            "App .link{color:#61dafb;}",
            "@keyframes App-logo-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}"
        ].join(""));
    });

    // Not... supported
    xit("@supports", () => {
        expect(parse(
            {
                "@supports (some: 1px)": {
                    "@media (s: 1)" : {
                        "display": "flex"
                    }
                }
            },
            "hash"
        )).toEqual([
            "@supports (some: 1px){@media (s: 1){hush{display:flex;}}}"
        ])
    });
});
