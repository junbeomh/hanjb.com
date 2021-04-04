
const initialState = {
    theme: "dark",
}

const themeSwitchReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case "GET_THEME":
            return {
                ...state,
                theme: action.payload,
            }
        case "TOGGLE_THEME":
            return {
                ...state,
                theme: action.payload,
            }
        default:
            return state
    }
}

export default themeSwitchReducer
