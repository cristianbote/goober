interface Display {
    display: DisplayConstant
}

type DisplayConstant = "block"
| "flow"
| "contents"
| "flex"
| "flow-root"
| "grid"
| "inherit"
| "initial"
| "inline"
| "inline-block"
| "inline-flex"
| "inline-grid"
| "list-item"
| "none"
| "revert"
| "table"
| "table-row"
| "unset"

export default function display(display1: DisplayConstant, display2?: DisplayConstant): Display;