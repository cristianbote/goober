import { styled, setPragma } from "../styled";
import { css } from "../css";

jest.mock("../css", () => ({
  css: jest.fn().mockReturnValue("css()")
}));

describe("styled", () => {
  it("type", () => {
    expect(typeof styled).toEqual("function");
  });

  it("return type", () => {
    expect(typeof styled()).toEqual("function");
  });

  it("setPragma", () => {
    const pragma = jest.fn();

    expect(() => styled()()()).toThrow();

    setPragma(pragma);
    styled()()();

    expect(pragma).toBeCalled();

    setPragma(undefined);
  });

  it("args", () => {
    const h = jest.fn().mockReturnValue("h()");
    const p = { bar: 1};
    setPragma(h);

    expect(styled("tag")`foo: 1`(p)).toEqual("h()");
    expect(css).toBeCalledWith(["foo: 1"]);
    expect(h).toBeCalledWith("tag", Object.assign({}, p, { className: "css()" }));
  });

  it("args: concat className", () => {
    const h = jest.fn().mockReturnValue("h()");
    const p = { bar: 1, className: "existing" };
    setPragma(h);

    expect(styled("tag")`foo: 1`(p)).toEqual("h()");
    expect(css).toBeCalledWith(["foo: 1"]);
    expect(h).toBeCalledWith("tag", Object.assign({}, p, { className: "existing css()" }));
  });
});
