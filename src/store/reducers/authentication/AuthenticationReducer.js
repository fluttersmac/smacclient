import * as actions from '../../config';
import setAuthState from './setAuthState';

var initialState = {
    isAuthenticated: false,
    isAuthResultAvailable: false,
    role: null,
    user: null,
};

const AuthenticationReducer = (state = initialState, action) => {

    switch(action.type){

        case actions.SET_AUTH_STATE:
            return setAuthState(state, action.isAuthenticated, action.isAuthResultAvailable, action.role, action.user);

        default:
            return state;
    }
}

export default AuthenticationReducer;