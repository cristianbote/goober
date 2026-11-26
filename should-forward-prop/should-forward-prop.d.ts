export as namespace shouldForwardProp;

export type ForwardPropFunction = (prop: string) => boolean;

export function shouldForwardProp(fwdProp: ForwardPropFunction): (props: object) => undefined;
