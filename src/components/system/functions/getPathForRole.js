import { paths, roles } from "../../config"

export const getPathForRole = (role) => {
    if(role === roles.ADMIN_ROLE){
        return paths.ADMIN_PATH;
    }
    else if(role === roles.HOD_ROLE){
        return paths.HOD_PATH;
    }
    else if(role === roles.PROFESSOR_ROLE){
        return paths.PROFESSOR_PATH;
    }
    else if(role === roles.STAFF_ROLE){
        return paths.STAFF_PATH;
    }
    else if(role === roles.STUDENT_ROLE){
        return paths.STUDENT_PATH;
    }
    else{
        return paths.LOGIN_PATH;
    }
}