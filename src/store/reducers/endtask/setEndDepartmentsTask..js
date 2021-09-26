

const setEndDepartmentsTask = (state, departmentsListener) => {
    return {
        ...state,
        departmentsListener: departmentsListener,
    };
}

export default setEndDepartmentsTask;