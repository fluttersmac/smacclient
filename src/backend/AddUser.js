import axios from "axios";
import { roles } from '../components/config';

const AddUser = async (createUserRoute=null, currentUserId=null, currentUserRole=null, userId=null, userName=null, userEmail=null, userPassword=null, userPhoneNumber=null, userRole=null, userEmailVerified=false, userDisabled=false, userPhotoURL=null) => {

    if(userId === null || userId.toString().trim().length === 0){
        return "user id should not be empty!";
    }
    else if(userName === null || userName.toString().trim().length === 0){
        return "user name should not be empty!";
    }
    else if(userPassword === null || userPassword.toString().trim().length === 0){
        return "user password should not be empty!";
    }
    else if(userRole === null || userRole.toString().trim().length === 0){
        return "user role should not be empty!";
    }
    else if(currentUserId === null || currentUserId === undefined){
        console.log("current user role should not be empty");
        return;
    }
    else if(currentUserId === userId){
        return "you cannot add yourself again";
    }
    else if(currentUserRole !== roles.ADMIN_ROLE){
        return "you are not allowed to use this feature";
    }

    if(userEmailVerified === null){
        userEmailVerified = false;
    }

    if(userDisabled === null){
        userDisabled = false;
    }

    if(userPhotoURL === null || userPhotoURL === undefined){
        userPhotoURL = null
    }

    let userData = {
        uid: userId,
        email: userEmail,
        phoneNumber: userPhoneNumber,
        password: userPassword,
        displayName: userName,
        role: userRole,
        emailVerified: userEmailVerified,
        disabled: userDisabled,
        photoURL: userPhotoURL,
    };
    try{
        let response = await axios.post(createUserRoute, userData);
        if(response){
            return response;
        }
        else{
            return null;
        }
    }
    catch(error){
        if(error.response){
            if(error.response.data){
                return error.response.data;
            }
            else{
                return error.response;
            }
        }
        else{
            return error;
        }
    }
}

export default AddUser;