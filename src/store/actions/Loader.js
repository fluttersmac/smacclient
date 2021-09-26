import * as actionsTypes from '../config';

export const setLoading = (isLoading) => {
    return {
        type: actionsTypes.SET_LOADING,
        isLoading: isLoading,
    }
}
