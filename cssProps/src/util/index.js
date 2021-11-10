export default function appendArgs(args, delimiter){
    delimiter = delimiter || " "
    return Array.from(args).reduce((result, arg) => {
        return result + delimiter + arg
    })
}