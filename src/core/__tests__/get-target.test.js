import { getTarget } from "../get-target";

describe("getTarget", () => {
    it("regression", () => {
        const target = getTarget();
        expect(target.nodeType).toEqual(3);
    });

    it("custom target", () => {
        const custom = document.createElement("div");
        const target = getTarget(custom);

        expect(target.nodeType).toEqual(3);
        expect(target.parentElement.nodeType).toEqual(1);
        expect(target.parentElement.hasAttribute("data-goober")).toBeTruthy();
    });

    it("reuse sheet", () => {
        const custom = document.createElement("div");
        const target = getTarget(custom);
        const second = getTarget(custom);

        expect(target === second).toBeTruthy();
    });

    it("server side", () => {
        const bkp = global.document;
        delete global.document;

        expect(() => getTarget()).not.toThrow();

        global.document = bkp;
    });
});