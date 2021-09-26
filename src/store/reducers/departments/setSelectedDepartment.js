
const setSelectedDepartment = (state, selectedDepartment) => {
    return {
        ...state,
        selectedDepartment: selectedDepartment,
    };
}

export default setSelectedDepartment;