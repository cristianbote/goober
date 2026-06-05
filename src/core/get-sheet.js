let ssr = {
    data: ''
};

/**
 * Returns the _commit_ target
 * @param {Object} [target]
 * @returns {HTMLStyleElement|{data: ''}}
 */
export let getSheet = (target) => {
    let el;
    return typeof window == 'object'
        ? ((el =
              // Querying the existing target for a previously defined <style> tag
              // We're doing a querySelector because the <head> element doesn't implemented the getElementById api
              (target ? target.querySelector('#_goober') : window._goober) ||
              ((el = document.createElement('style')),
              (el.id = '_goober'),
              (el.textContent = ' '),
              el)),
          (el.nonce = window.__nonce__),
          el.parentNode || (target || document.head).appendChild(el),
          el.firstChild)
        : target || ssr;
};
