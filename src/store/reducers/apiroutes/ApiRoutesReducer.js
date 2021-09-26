import * as actions from '../../config';
import setApiRoutes from './setApiRoutes';

var initialState = {
    createUser: null,
    deleteUser: null,
    getUserByEmail: null,
    getUserById: null,
    getUserByPhoneNumber: null,
    listAllUsers: null,
    updateUser: null
};

const ApiRoutesReducer = (state = initialState, action) => {
    switch(action.type){
        case actions.SET_API_ROUTES:
            return setApiRoutes(state, action.smacApiRoutes);
        default:
            return state;
    }
}

export default ApiRoutesReducer;