import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducers from './reducers/RootReducer';

//creating store 
const store = createStore(
    Reducers, 
    composeWithDevTools()
);

export default store;