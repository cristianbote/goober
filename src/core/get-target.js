/**
 * Returns the _commit_ target
 * @param {Object} target 
 */
export const getTarget = target => {
    try {
        target = target || document.head;
        let sheet = target.querySelector("style[data-goober]");
        if (!sheet) {
            let ctx = document.createElement("x-s");
            ctx.innerHTML = '<style data-goober=""> </style>';
            sheet = target.appendChild(ctx.firstChild);
        }

        return sheet.firstChild;
    } catch(e) { }
}