/**
 * Returns the _commit_ target
 * @param {Object} target
 */
const GOOBER_ID = "goober";
const dummy = {
    data: ""
};
export const getSheet = target => {
    try {
        target = target || document.head;
        let sheet = target.querySelector("#" + GOOBER_ID);
        if (!sheet) {
            sheet = target.appendChild(document.createElement("style"));
            sheet.innerHTML = " ";
            sheet.id = GOOBER_ID;
        }
        return sheet.firstChild;
    } catch (e) {}
    return dummy;
};
