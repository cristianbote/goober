export function shouldForwardProp(filterPropFunction) {
    return function forwardProp(props) {
        for (let p in props) {
            if (!filterPropFunction(p)) {
                delete props[p];
            }
        }
    };
}
