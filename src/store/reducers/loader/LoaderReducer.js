import * as actions from '../../config';
import setLoading from './setLoading';

var initialState = {
    isLoading: false
};

const LoaderReducer = (state=initialState, action) => {
    switch(action.type){
        case actions.SET_LOADING:
            return setLoading(state, action.isLoading);
        default:
            return state;

    }
}

export default LoaderReducer;