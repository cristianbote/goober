import{toHash}from"../to-hash";describe("to-hash",(()=>{it("regression",(()=>{const o=toHash("goober");expect(o).toEqual("go1990315141"),expect(toHash("goober")).toEqual("go1990315141")})),it("collision",(()=>{const o=toHash("background:red;color:black;"),t=toHash("background:black;color:red;");expect(o===t).toBeFalsy()}))}));