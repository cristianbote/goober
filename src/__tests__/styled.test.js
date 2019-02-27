import { styled, setPragma } from "../styled";
import { getCss } from "../core/parser/get-css";
import { getClassNameForCss } from "../core/style/get-class-name";

jest.mock("../core/style/get-class-name", () => ({
  getClassNameForCss: jest.fn().mockReturnValue("getClassNameForCss")
}));

jest.mock("../core/parser/get-css", () => ({
  getCss: jest.fn().mockReturnValue("getCss")
}));

describe("styled", () => {
  it("should return the className for vanilla", () => {
    const vanilla = styled()`css`;

    expect(getCss).toHaveBeenCalledWith(["css"], [], undefined);
    expect(getClassNameForCss).toHaveBeenCalledWith(
      "getCss",
      true,
      undefined
    );

    expect(vanilla).toEqual("getClassNameForCss");
  });

  it("should use the target that is bound to styled", () => {
    const s = styled.bind({ target: document.body });
    s("tag")`css`({});
    expect(getCss).toHaveBeenCalledWith(["css"], [], {});
    expect(getClassNameForCss).toHaveBeenCalledWith(
      "getCss",
      true,
      document.body
    );
  });

  it("should not call the pragma if not set", () => {
    const Comp = styled("tag")`css`({});

    expect(Comp).toEqual("getClassNameForCss");
  });

  it("should not call the pragma if not set", () => {
    const fn = jest.fn();
    setPragma(fn);

    styled("tag")`css`({});
    expect(fn).toBeCalled();
  });

  it("object style notation", () => {
    styled("tag")({ foo: 1 })();
    expect(getClassNameForCss).toBeCalledWith("getCss", true, undefined);
  });

  it("global", () => {
    const res = styled("global")`foo: 1;`;
    expect(res).toEqual(undefined);
  });
});
