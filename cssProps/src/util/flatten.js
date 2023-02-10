export default (props) =>
    Array.isArray(props) ? props.reduce((result, prop) => Object.assign(result, prop), {}) : props;
