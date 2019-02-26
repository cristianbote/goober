import { css } from "../css";

jest.mock("../styled", () => ({
  styled: jest.fn().mockReturnValue(() => {})
}));

describe("css", () => {
  it("should be a fn", () => {
    expect(typeof css).toEqual("function");
  });
});
