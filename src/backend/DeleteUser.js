import axios from "axios";
import { roles } from "../components/config";

const DeleteUser = async (deleteUserRoute, currentUserId, currentUserRole, userId) => {

    if(currentUserId === userId){
        if(currentUserRole === roles.ADMIN_ROLE){
            return "This user cannot be deleted.";
        }
        else{
            console.log(prompt("Deleting yourself deletes your account. you cannot login again. do you wish to proceed ?"));
        }
    }

    if(currentUserRole !== roles.ADMIN_ROLE){
        return "you are not allowed to use this feature";
    }

    if(userId){
        let response = await axios.delete(`${deleteUserRoute}${userId}`);
        return response;
    }   
    return "user ID should not be empty!";
}

export default DeleteUser;