import axios from "axios";
import { roles } from "../components/config";

const UpdateUser = async (updateUserRoute, idToken=null, currentUserId=null, currentUserRole=null, userId=null, userName=null, userEmail=null, userEmailVerified=false, userPassword=null, userPhoneNumber=null, userPhotoURL=null, userDisabled=false, userRole=null) => {

    var updateResponse = "not updated";

    if(updateUserRoute === null || updateUserRoute.toString().length === 0){
        console.log("update API route is not given");
        return;
    }
    if(idToken === null || idToken.toString().length === 0){
        console.log("user ID Token is not given");
    }
    if(userId === null || userId.toString().length === 0){
        return "user ID should not be empty";
    }
    
    if(userName !== null && (currentUserId === userId || currentUserRole === roles.ADMIN_ROLE)){
        let response = await axios.put(`${updateUserRoute}displayName/${userId}`, { displayName: userName });
        if(response){
            if(response.error){
                return response.error;
            }
            else{
                updateResponse = response;
            }
        }
        else{
            return "error in updating username";
        }
    }
    if(userEmail !== null && (currentUserId === userId || currentUserRole === roles.ADMIN_ROLE)){
        let response = await axios.put(`${updateUserRoute}email/${userId}`, { email: userEmail });
        if(response){
            if(response.error){
                return response.error;
            }
            else{
                updateResponse = response;
            }
        }
        else{
            return "error in updating user email";
        }
    }
    if(userEmailVerified !== null && (currentUserId === userId || currentUserRole === roles.ADMIN_ROLE)){
        let response = await axios.put(`${updateUserRoute}emailVerified/${userId}`, { emailVerified: userEmailVerified });
        if(response){
            if(response.error){
                return response.error;
            }
            else{
                updateResponse = response;
            }
        }
        else{
            return "error in updating user email verified";
        }
    }
    if(userPassword !== null && (currentUserId === userId || currentUserRole === roles.ADMIN_ROLE)){
        let response = await axios.put(`${updateUserRoute}emailVerified/${userId}`, { password: userPassword });
        if(response){
            if(response.error){
                return response.error;
            }
            else{
                updateResponse = response;
            }
        }
        else{
            return "error in updating user password";
        }
    }
    if(userPhoneNumber !== null && (currentUserId === userId || currentUserRole === roles.ADMIN_ROLE)){
        let response = await axios.put(`${updateUserRoute}emailVerified/${userId}`, { phoneNumber: userPhoneNumber });
        if(response){
            if(response.error){
                return response.error;
            }
            else{
                updateResponse = response;
            }
        }
        else{
            return "error in updating user phone number";
        }
    }
    if(userPhotoURL !== null && (currentUserId === userId || currentUserRole === roles.ADMIN_ROLE)){
        let response = await axios.put(`${updateUserRoute}photoURL/${userId}`, { photoURL: userPhotoURL });
        if(response){
            if(response.error){
                return response.error;
            }
            else{
                updateResponse = response;
            }
        }
        else{
            return "error in updating user phone number";
        }
    }
    if(userDisabled !== null && (currentUserId === userId || currentUserRole === roles.ADMIN_ROLE)){
        let response = await axios.put(`${updateUserRoute}disabled/${userId}`, { disabled: userDisabled });
        if(response){
            if(response.error){
                return response.error;
            }
            else{
                updateResponse = response;
            }
        }
        else{
            return "error in updating user disabled";
        }
    }
    if(userRole !== null && (!(currentUserId === userId && currentUserRole === roles.ADMIN_ROLE) && (currentUserRole === roles.ADMIN_ROLE))){
        let response = await axios.put(`${updateUserRoute}role/${userId}`, { role: userRole });
        if(response){
            if(response.error){
                return response.error;
            }
            else{
                updateResponse = response;
            }
        }
        else{
            return "error in updating user role";
        }
    }
    return updateResponse;
}   

export default UpdateUser;