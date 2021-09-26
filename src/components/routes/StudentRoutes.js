import { paths } from "../config";
import { v4 as uuidv4 } from 'uuid';
import Student from '../student/Student';
import StudentHome from "../student/StudentHome";
import StudentProfile from "../student/StudentProfile";

const studentRoutes = [
    {
        exact: false,
        path: paths.STUDENT_PATH,
        component: <Student />,
        key: uuidv4(),
        redirect: null,
        subRoutes: [
            {
                exact: true,
                path: paths.STUDENT_HOME_PATH,
                component: <StudentHome />,
                key: uuidv4(),
                redirect: null,
            },
            {
                exact: true,
                path: paths.STUDENT_PROFILE_PATH,
                component: <StudentProfile />,
                key: uuidv4(),
                redirect: null,
            },
        ],
    },
];

export default studentRoutes;