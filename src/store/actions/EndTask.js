import * as actionsTypes from '../config';

export const setEndTask = (usersListener) => {
    return {
        type: actionsTypes.SET_END_TASK,
        usersListener: usersListener,
    };
}

export const setEndDepartmentsTask = (departmentsListener) => {
    return {
        type: actionsTypes.SET_END_DEPARTMENTS_TASK,
        departmentsListener: departmentsListener,
    };
}