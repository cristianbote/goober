import { add, flush } from "../sheet";

describe("sheet", () => {
  describe("add", () => {
    beforeEach(() => {
      if (global.document.head.firstChild) {
        global.document.head.removeChild(global.document.head.firstChild);
      }
    });

    afterAll(() => {
      // Empty out the cache
      flush();
    });

    it("should add css", () => {
      // Add a 'css' rule
      add("1", "one", global.document.head);

      // Same hash, should not be twice
      add("1", "one", global.document.head);

      const sheet = global.document.head.firstChild;

      expect(sheet.hasAttribute("data-goober")).toEqual(true);

      expect(sheet.firstChild.nodeType).toEqual(3);

      expect(sheet.firstChild.data).toEqual("one");
    });

    it("should not create the sheet on server-side", () => {
      const bkp = global.document;
      delete global.document;

      // Should not throw
      expect(() => add("2", "ssr")).not.toThrow();

      global.document = bkp;
    });
  });

  describe("flush", () => {
    it("flush the css", () => {
      // Add a 'css' rule
      add("3", "flush");

      expect(flush()).toEqual(["flush"]);

      // Second call should be empty array since it has been flushed
      expect(flush()).toEqual([]);
    });
  });
});
