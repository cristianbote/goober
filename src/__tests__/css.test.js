import { css } from "../css";

jest.mock("../styled", () => ({
  styled: jest.fn()
}));

describe("css", () => {
  it("should be a fn", () => {
    expect(typeof css).toEqual("function");
    expect(css()).toEqual(undefined);
  });
});
