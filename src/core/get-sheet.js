/**
 * Returns the _commit_ target
 * @param {Object} target
 */
const GOOBER = "goober";
const dummy = {
    data: ""
};
export const getSheet = target => {
    try {
        target = target || document.head;
        let sheet = target.querySelector("[data-" + GOOBER + "]");
        if (!sheet) {
            sheet = target.appendChild(document.createElement("style"));
            sheet.innerHTML = " ";
            sheet.dataset[GOOBER] = "";
        }
        return sheet.firstChild;
    } catch (e) {}
    return dummy;
};
