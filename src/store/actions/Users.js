import * as actionTypes from '../config';

export const setUsers = (users) => {
    return {
        type: actionTypes.SET_USERS,
        users: users,
    };
}

export const setSelectedUser = (selectedUser) => {
    return {
        type: actionTypes.SET_SELECTED_USER,
        selectedUser: selectedUser,
    };
}

export const setIsLoadingUsers = (isLoadingUsers) => {
    return {
        type: actionTypes.SET_ISLOADING_USERS,
        isLoadingUsers: isLoadingUsers,
    };
}