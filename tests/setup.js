jest.mock(
    "react",
    () => ({ createElement: jest.fn().mockReturnValue("vnode") }),
    { virtual: true }
);

jest.mock(
    "preact",
    () => ({ h: jest.fn().mockReturnValue("vnode") }),
    { virtual: true }
);