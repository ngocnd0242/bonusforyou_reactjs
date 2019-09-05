import { LOGIN } from '../../constants'

const initialState = {
    loginStatus: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, loading: true };
        default:
            return state;
    }
};

export default reducer;