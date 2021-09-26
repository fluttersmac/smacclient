import * as actionsTypes from '../config';

export const setAuthState = (isAuthenticated, isAuthResultAvailable, role, user) => {
    return {
        type: actionsTypes.SET_AUTH_STATE,
        isAuthenticated: isAuthenticated,
        isAuthResultAvailable: isAuthResultAvailable,
        role: role,
        user: user,
    }
}
