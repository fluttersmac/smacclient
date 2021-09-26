
const setIsLoadingDepartments = (state, isLoadingDepartments) => {
    return {
        ...state,
        isLoadingDepartments: isLoadingDepartments,
    };
}

export default setIsLoadingDepartments;