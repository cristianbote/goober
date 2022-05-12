import{compile}from"../compile";const template=(o,...e)=>p=>compile(o,e,p);describe("compile",(()=>{it("simple",(()=>{expect(template`prop: 1;`({})).toEqual("prop: 1;")})),it("vnode",(()=>{expect(template`prop: 1; ${()=>({props:{className:"class"}})}`({})).toEqual("prop: 1; .class"),expect(template`prop: 1; ${()=>({props:{foo:1}})}`({})).toEqual("prop: 1; ")})),it("vanilla classname",(()=>{expect(template`prop: 1; ${()=>"go0ber"}`({})).toEqual("prop: 1; .go0ber")})),it("value interpolations",(()=>{expect(template`prop: 1; ${()=>0},${()=>{}},${()=>null},${2}`({})).toEqual("prop: 1; 0,,,2");const o=template`
            background: dodgerblue;
            ${o=>"bloo"===o.padding&&`\n                padding: ${o.padding}px;\n            `}
            border: 1px solid blue;
        `;expect(o({})).toEqual("\n            background: dodgerblue;\n            \n            border: 1px solid blue;\n        ")})),describe("objects",(()=>{it("normal",(()=>{expect(template`prop: 1;${o=>({color:o.color})}`({color:"red"})).toEqual("prop: 1;color:red;")})),it("styled-system",(()=>{const o=template`
                prop: 1;
                ${o=>({color:o.color})}
                ${o=>({backgroundColor:o.backgroundColor})}
            `({color:"red",backgroundColor:"blue"});expect(o.replace(/([\s|\n]+)/gm,"").trim()).toEqual("prop:1;color:red;background-color:blue;")}))}))}));