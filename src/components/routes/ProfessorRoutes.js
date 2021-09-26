import { paths } from "../config";
import { v4 as uuidv4 } from 'uuid';
import Professor from '../professor/Professor';

const professorRoutes = [
    {
        exact: false,
        path: paths.PROFESSOR_PATH,
        component: <Professor/>,
        key: uuidv4(),
        redirect: null,
    }
];

export default professorRoutes;