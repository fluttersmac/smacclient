import * as actionTypes from '../config';

export const setDepartments = (departments) => {
    return {
        type: actionTypes.SET_DEPARTMENTS,
        departments: departments,
    };
}

export const setSelectedDepartment = (selectedDepartment) => {
    return {
        type: actionTypes.SET_SELECTED_DEPARTMENT,
        selectedDepartment: selectedDepartment,
    };
}

export const setIsLoadingDepartments = (isLoadingDepartments) => {
    return {
        type: actionTypes.SET_ISLOADING_DEPARTMENTS,
        isLoadingDepartments: isLoadingDepartments,
    };
}