const GOOBER_ID = '_goober';

getSheet.a = '';

/**
 * Returns the _commit_ target
 * @param {Object} [target]
 * @returns {HTMLStyleElement|{data: ''}}
 */
export function getSheet(target) {
    try {
        // Querying the existing target for a previously defined <style> tag
        // We're doing a querySelector because the <head> element doesn't implemented the getElementById api
        let el = target ? target.querySelector('#' + GOOBER_ID) : self[GOOBER_ID];
        if (!el) {
            // Note to self: head.innerHTML +=, triggers a layout/reflow. Avoid it.
            el = (target || document.head).appendChild(document.createElement('style'));
            el.id = GOOBER_ID;
        }
        return el.sheet;
    } catch (e) {}
    return getSheet;
}
