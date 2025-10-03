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
    if (typeof window === 'object') {
        // Querying the existing target for a previously defined <style> tag
        // We're doing a querySelector because the <head> element doesn't implemented the getElementById api
        let el =
            (target ? target.querySelector('#' + GOOBER_ID) : window[GOOBER_ID]) ||
            Object.assign(document.createElement('style'), {
                innerHTML: ' ',
                id: GOOBER_ID
            });
        el.nonce = window.__nonce__;
        if (!el.parentNode) (target || document.head).appendChild(el);
        return el.firstChild;
    }

    return target || ssr;
};
