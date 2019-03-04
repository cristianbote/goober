export = goober;

export as namespace goober;

declare namespace goober {
    type styled = (tag: string) => tagged;
    type tagged = (tag: string) => TaggedNode;
    type setPragma = (val: TaggedNode) => void;
    type extractCSS = () => string;
    type css = tagged;
}

type TaggedNode = (props: any, ...args: any[]) => any;
