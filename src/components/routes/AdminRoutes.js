import Admin from '../admin/Admin';
import AdminHome from '../admin/AdminHome';
import { v4 as uuidv4 } from 'uuid';
import { paths } from '../config';
import { Redirect } from 'react-router-dom';
import AdminProfile from '../admin/AdminProfile';
import AdminUsers from '../admin/AdminUsers';
import AdminDepartments from '../admin/AdminDepartments';
import AdminChats from '../admin/AdminChats';

const adminRoutes = [
    {
        exact: false,
        path: paths.ADMIN_PATH,
        component: <Admin/>,
        key: uuidv4(),
        redirect: null,
        subRoutes: [
            {
                exact: true,
                path: paths.ADMIN_PATH,
                component: null,
                key: uuidv4(),
                redirect: <Redirect to={paths.ADMIN_HOME_PATH} />,
            },
            {
                exact: true,
                path: paths.ADMIN_HOME_PATH,
                component: <AdminHome/>,
                key: uuidv4(),
                redirect: null,
            },
            {
                exact: true,
                path: paths.ADMIN_PROFILE_PATH,
                component: <AdminProfile/>,
                key: uuidv4(),
                redirect: null,
            },
            {
                exact: true,
                path: paths.ADMIN_USERS_PATH,
                component: <AdminUsers/>,
                key: uuidv4(),
                redirect: null,
            },
            {
                exact: true,
                path: paths.ADMIN_DEPARTMENTS_PATH,
                component: <AdminDepartments/>,
                key: uuidv4(),
                redirect: null,
            },
            {
                exact: true,
                path: paths.ADMIN_CHATS_PATH,
                component: <AdminChats/>,
                key: uuidv4(),
                redirect: null,
            },
            {
                exact: false,
                path: '*',
                component: null,
                key: uuidv4(),
                redirect: <Redirect to={paths.ADMIN_HOME_PATH}/>,
            },
        ],
    }
];

export default adminRoutes;