
const setCurrentPageTitle = (state, Pagetitle) => {
    return {
        ...state,
        pageTitle: Pagetitle,
    };
}

export default setCurrentPageTitle;