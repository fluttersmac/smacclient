// root paths

//admin
const ADMIN_PATH = "/Admin"

//hod
const HOD_PATH = "/Hod"

//professor
const PROFESSOR_PATH = "/Professor"

//staff
const STAFF_PATH = "/Staff"

//student 
const STUDENT_PATH = "/Student"

export const paths = {
    //system paths
    LOGIN_PATH: "/Login",

    //admin paths
    ADMIN_PATH: ADMIN_PATH,
    ADMIN_HOME_PATH: `${ADMIN_PATH}/Home`,
    ADMIN_PROFILE_PATH: `${ADMIN_PATH}/Profile`,
    ADMIN_USERS_PATH: `${ADMIN_PATH}/Users`,
    ADMIN_DEPARTMENTS_PATH: `${ADMIN_PATH}/Departments`,
    ADMIN_CHATS_PATH: `${ADMIN_PATH}/Chats`,

    //hod paths
    HOD_PATH: HOD_PATH,
    HOD_HOME_PATH: `${HOD_PATH}/Home`,
    HOD_PROFILE_PATH: `${HOD_PATH}/Profile`,
    HOD_CHATS_PATH: `${HOD_PATH}/Chats`,

    //professor paths
    PROFESSOR_PATH: PROFESSOR_PATH,
    PROFESSOR_HOME_PATH: `${PROFESSOR_PATH}/Home`,
    PROFESSOR_PROFILE_PATH: `${PROFESSOR_PATH}/Profile`,
    PROFESSOR_CHATS_PATH: `${PROFESSOR_PATH}/Chats`,

    //staff paths
    STAFF_PATH: STAFF_PATH,
    STAFF_HOME_PATH: `${STAFF_PATH}/Home`,
    STAFF_PROFILE_PATH: `${STAFF_PATH}/Profile`,
    STAFF_CHATS_PATH: `${STAFF_PATH}/Chats`,

    //student paths
    STUDENT_PATH: STUDENT_PATH,
    STUDENT_HOME_PATH: `${STUDENT_PATH}/Home`,
    STUDENT_PROFILE_PATH: `${STUDENT_PATH}/Profile`,
    STUDENT_CHATS_PATH: `${STUDENT_PATH}/Chats`,
};


//roles
export const roles = {
    ADMIN_ROLE: "admin",
    STUDENT_ROLE: "student",
    STAFF_ROLE: "staff",
    PROFESSOR_ROLE: "professor",
    HOD_ROLE: "hod",
};