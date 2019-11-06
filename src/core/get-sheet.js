/**
 * Returns the _commit_ target
 * @param {Object} target
 */
const GOOBER_ID = "_goober";
const dummy = {
    data: ""
};
export const getSheet = target => {
    try {
        let sheet = target ? target.querySelector('#' + GOOBER_ID) : self[GOOBER_ID];
        if (!sheet) {
            let _target = target || document.head;
            sheet = _target.appendChild(document.createElement("style"));
            sheet.innerHTML = " ";
            sheet.id = GOOBER_ID;
        }
        return sheet.firstChild;
    } catch (e) {}
    return dummy;
};
