import * as actions from '../../config';
import setDepartments from './setDepartments';
import setSelectedDepartment from './setSelectedDepartment';
import setIsLoadingDepartments from './setIsLoadingDepartments';

var initialState = {
    departments: [],
    selectedDepartment: null,
    isLoadingDepartments: false,
};

const DepartmentsReducer = (state=initialState, action) => {
    switch(action.type){
        case actions.SET_DEPARTMENTS:
            return setDepartments(state, action.departments);
        case actions.SET_SELECTED_DEPARTMENT:
            return setSelectedDepartment(state, action.selectedDepartment);
        case actions.SET_ISLOADING_DEPARTMENTS:
            return setIsLoadingDepartments(state, action.isLoadingDepartments);
        default:
            return state;
    }
}

export default DepartmentsReducer;