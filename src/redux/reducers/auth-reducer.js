const initialState = {
    isAuth: false,
    login: '',
    password: '',
    errors: []
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default authReducer;