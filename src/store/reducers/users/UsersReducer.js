import * as actions from '../../config';
import setUsers from './setUsers';
import setSelectedUser from './setSelectedUser';
import setIsLoadingUsers from './setIsLoadingUsers';

var initialState = {
    users: [],
    selectedUser: null,
    isLoadingUsers: true,
};

const UsersReducer = (state=initialState, action) => {
    switch(action.type){
        case actions.SET_USERS:
            return setUsers(state, action.users);
        case actions.SET_SELECTED_USER:
            return setSelectedUser(state, action.selectedUser);
        case actions.SET_ISLOADING_USERS:
            return setIsLoadingUsers(state, action.isLoadingUsers);
        default:
            return state;
    }
}

export default UsersReducer;