export = gooberGlobal;

export as namespace shouldForwardProp;

declare namespace gooberGlobal {
    type ForwardPropFunction = (prop: string) => boolean;

    function shouldForwardProp(fwdProp: ForwardPropFunction): (props: object) => undefined;
}
