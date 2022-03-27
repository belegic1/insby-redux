const INITIAL_STATE = {
    menu: null
}

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_MENU':
            return {
                ...state,
                menu: action.payload
            }
        default:
            return state
    }
}

export default menuReducer