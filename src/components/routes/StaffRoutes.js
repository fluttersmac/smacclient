import { paths } from "../config";
import { v4 as uuidv4 } from 'uuid';
import Staff from '../staff/Staff';

const staffRoutes = [
    {
        exact: false,
        path: paths.STAFF_PATH,
        component: <Staff/>,
        key: uuidv4(),
        redirect: null,
    }
];

export default staffRoutes;