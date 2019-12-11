/**
 * Returns the _commit_ target
 * @param {Object} target
 */
const GOOBER_ID = '_goober';
const ssr = {
    data: ''
};
export const getSheet = target => {
    try {
        let sheet = target ? target.querySelector('#' + GOOBER_ID) : self[GOOBER_ID];
        if (!sheet) {
            let _target = target || document.head;
            _target.innerHTML += '<style id="' + GOOBER_ID + '"> </style>';
            sheet = _target.lastChild;
        }
        return sheet.firstChild;
    } catch (e) {}
    return ssr;
};
