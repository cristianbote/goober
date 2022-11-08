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
        const styleElem =
            (target ? target.querySelector('#' + GOOBER_ID) : window[GOOBER_ID]) ||
            Object.assign((target || document.head).appendChild(document.createElement('style')), {
                innerHTML: ' ',
                id: GOOBER_ID
            });
        // if style el is empty populate it with a comment, else it will return `null` and fail out if
        // anyone attempts to access it's `data` property
        if (!styleElem.firstChild) styleElem.innerHTML = '/*goober*/';
        return styleElem.firstChild;
    }

    return target || ssr;
};
