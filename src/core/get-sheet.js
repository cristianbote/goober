let GOOBER_ID = '_goober';
let ssr = {
    data: ''
};

/**
 * Returns the _commit_ target
 * @param {Object} [target]
 * @returns {HTMLStyleElement|{data: ''}}
 */
export let getSheet = (target) => {
    if (typeof window !== 'undefined') {
        // Querying the existing target for a previously defined <style> tag
        // We're doing a querySelector because the <head> element doesn't implemented the getElementById api
        let sheet = target ? target.querySelector('#' + GOOBER_ID) : window[GOOBER_ID];
        if (!sheet) {
            // Note to self: head.innerHTML +=, triggers a layout/reflow. Avoid it.
            sheet = (target || document.head).appendChild(document.createElement('style'));
            sheet.innerHTML = ' ';
            sheet.id = GOOBER_ID;
        }
        return sheet.firstChild;
    }
    return target || ssr;
};
