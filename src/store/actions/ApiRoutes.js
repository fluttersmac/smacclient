import * as actionsTypes from '../config';

export const setApiRoutes = (smacApiRoutes) => {
    return {
        type: actionsTypes.SET_API_ROUTES,
        smacApiRoutes: smacApiRoutes,
    }
}