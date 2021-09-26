import { setEndDepartmentsTask } from '../../actions/EndTask';
import * as actions from '../../config';
import setEndTask from './setEndTask';

var initialState = {
    usersListener: null,
    departmentsListener: null,
};

const EndTaskReducer   = (state=initialState, action) => {
    switch(action.type){
        case actions.SET_END_TASK:
            return setEndTask(state, action.usersListener);
        case actions.SET_END_DEPARTMENTS_TASK:
            return setEndDepartmentsTask(state, action.departmentsListener);
        default:
            return state;
    }
}

export default EndTaskReducer;