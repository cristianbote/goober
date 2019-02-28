import { css, glob } from "../css";
import { hash } from "../core/hash";
import { compile } from "../core/compile";
import { getTarget } from "../core/get-target";

jest.mock("../core/hash", () => ({
  hash: jest.fn().mockReturnValue("hash()")
}));

jest.mock("../core/compile", () => ({
  compile: jest.fn().mockReturnValue("compile()")
}));

jest.mock("../core/get-target", () => ({
  getTarget: jest.fn().mockReturnValue("getTarget()")
}));

describe("css", () => {

  beforeEach(() => {
    hash.mockClear();
    compile.mockClear();
    getTarget.mockClear();
  });

  it("type", () => {
    expect(typeof css).toEqual("function");
  });

  it("args: tagged", () => {
    const out = css`base${1}`;

    expect(compile).toBeCalledWith(["base", ""], [1], undefined);
    expect(getTarget).toBeCalled();
    expect(hash).toBeCalledWith("compile()", "getTarget()", undefined);
    expect(out).toEqual("hash()");
  });

  it("args: object", () => {
    const out = css({ foo: 1 });

    expect(hash).toBeCalledWith({ foo: 1 }, "getTarget()", undefined);
    expect(compile).not.toBeCalled();
    expect(getTarget).toBeCalled();
    expect(out).toEqual("hash()");
  });

  it("bind", () => {
    const target = "";
    const p = {};
    const g = true;
    const out = css.bind({
      target,
      p,
      g
    })`foo: 1`;

    expect(hash).toBeCalledWith("compile()", "getTarget()", true);
    expect(compile).toBeCalledWith(["foo: 1"], [], p);
    expect(getTarget).toBeCalledWith(target);
    expect(out).toEqual("hash()");
  });
});

describe("glob", () => {
  it("type", () => {
    expect(typeof glob).toEqual("function");
  });

  it("args: g", () => {
    glob`a:b`;
    expect(hash).toBeCalledWith("compile()", "getTarget()", 1);
  });
});
