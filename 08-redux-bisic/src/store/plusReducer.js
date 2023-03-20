

const init = { count: 0, show: true }
const reducer = (state = init, action) => {
    // redux 사용시 기존 state 를 변형시키면 안된다.
    // ex : count: count++;  
    //      기존 return state;
    // 항상 새로운 값을 생성해야 한다
    switch (action.type) {
        case "PLUS":
            return { ...state, count: state.count + 1 }
        case "MINUS":
            return { ...state, count: state.count - 1 }
        case "PLUSFIVE":
            return { ...state, count: state.count + action.number }
        case "TOGGLE":
            return { ...init, show: !state.show }
        default:
            return state
    }
}
export default reducer;
