import * as actions from '../../config';
import setCurrentPageTitle from './setCurrentPageTitle';

var initialState = {
    pageTitle: 'Title'
};

const PageReducer = (state=initialState, action) => {
    switch(action.type){
        case actions.SET_CURRENT_PAGE_TITLE:
            return setCurrentPageTitle(state, action.pageTitle);
        default:
            return state;

    }
}

export default PageReducer;