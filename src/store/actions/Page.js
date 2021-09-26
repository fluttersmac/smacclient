import * as actionTypes from '../config';

export const setCurrentPageTitle = (pageTitle) => {
    return {
        type: actionTypes.SET_CURRENT_PAGE_TITLE,
        pageTitle: pageTitle,
    };
} 