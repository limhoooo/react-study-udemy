

const init = { count: 0 }
const reducer = (state = init, action) => {
    switch (action.type) {
        case "PLUS":
            return { count: state.count + 1 }
        case "MINUS":
            return { count: state.count - 1 }
        case "PLUSFIVE":
            return { count: state.count + action.number }
        default:
            return state
    }
}
export default reducer;
