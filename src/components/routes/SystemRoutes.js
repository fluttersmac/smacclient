import Login from "../system/Login";
import { v4 as uuidv4 } from 'uuid';
import { Redirect } from "react-router-dom";
import { paths } from '../config';

const systemRoutes = [
    {
        exact: true,
        path: '/',
        component: null,
        key: uuidv4(),
        redirect: <Redirect to='/Login'/>,
    },
    {
        exact: true,
        path: paths.LOGIN_PATH,
        component: <Login/>,
        key: uuidv4(),
        redirect: null,
    },
];

export default systemRoutes;