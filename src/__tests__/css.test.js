import { css } from "../css";
import { styled } from "../styled";

jest.mock("../styled", () => ({
  styled: jest.fn().mockReturnValue(() => {})
}));

describe("css", () => {
  it("should call styled", () => {
    css();

    expect(styled).toBeCalledWith("");
  });

  it("should be a fn", () => {
    expect(typeof css).toEqual("function");
  });

  it("should not call the pragma even if one is bound to css", () => {
    const fn = jest.fn();
    const c = css.bind({ pragma: fn });
    c`css`;
    expect(fn).not.toBeCalled();
  });
});
