const setAuthState = (state, isAuthenticated, isAuthResultAvailable, role, user) => {
    let authState = {
        ...state,
        isAuthenticated: isAuthenticated,
        isAuthResultAvailable: isAuthResultAvailable,
        role: role,
        user: user,
    };
    return authState;
}

export default setAuthState;