import { css } from "../css";

jest.mock("../styled", () => ({
  styled: jest.fn().mockReturnValue("styled(return)")
}));

describe("css", () => {
  it("should be a fn", () => {
    expect(css).toEqual("styled(return)");
  });
});
