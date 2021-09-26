import { paths } from "../config";
import { v4 as uuidv4 } from 'uuid';
import Hod from '../hod/Hod';

const hodRoutes = [
    {
        exact: false,
        path: paths.HOD_PATH,
        component: <Hod/>,
        key: uuidv4(),
        redirect: null,
    },
];

export default hodRoutes;