import { combineReducers } from 'redux';
import ApiRoutesReducer from './apiroutes/ApiRoutesReducer';
import AuthenticationReducer from './authentication/AuthenticationReducer';
import PageReducer from './page/PageReducer';
import UsersReducer from './users/UsersReducer';
import LoaderReducer from './loader/LoaderReducer';
import EndTaskReducer from './endtask/EndTaskReducer';
import DepartmentsReducer from './departments/DepartmentsReducer';

const Reducers = combineReducers({
    getAuthState: AuthenticationReducer,
    getPage: PageReducer,
    getUsers: UsersReducer,
    getApiRoutes: ApiRoutesReducer,
    getLoading: LoaderReducer,
    getEndTask: EndTaskReducer,
    getDepartments: DepartmentsReducer,
});

export default Reducers;