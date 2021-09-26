import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import signIn from '../../backend/SignIn';
import { getPathForRole } from '../system/functions/getPathForRole';
import { connect } from "react-redux";
import './styles/Login.css';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import Loading from "../widgets/Loading";
import { setLoading } from "../../store/actions/Loader";

const Login = ({ history, role, isLoading, setLoading }) => {

    const [ userEmail, setUserEmail ] = useState(null);
    const [ userPassword, setUserPassword ] = useState(null);
    const [ loginInfo, setLoginInfo ] = useState(null);

    useEffect(() => {
        history.push(getPathForRole(role));
    }, [role, history]);

    const handleEmailType = (event) => {
        const email = event.target.value;
        if(email.trim().length !== 0){
            setUserEmail(email);
        }
    }

    const handlePasswordType = (event) => {
        const password = event.target.value;
        if(password.trim().length !== 0){
            setUserPassword(password);
        }
    }

    const handleLogin = async () => {
        setLoading(true);
        const response = await signIn(userEmail, userPassword);
        setLoading(false);
        if(response.signInStatus){
            history.push(getPathForRole(response.role));
        }
        else if(response.error){
            if(response.error.code === "auth/missing-email"){
                setLoginInfo("email should not be empty");
            }
            else if(response.error.code === "auth/user-not-found"){
                setLoginInfo("user account not found");
            }
            else if(response.error.code === "auth/internal-error"){
                setLoginInfo("email or password is not correct");
            }
            else if(response.error.code === "auth/wrong-password"){
                setLoginInfo("email or password is not correct");
            }
            else if(response.error.code === "auth/invalid-email"){
                setLoginInfo("please enter a valid email address");
            }
            else{
                setLoginInfo(response.error.message);
            }
            console.log(response.error.message);
        }
        else{
            setLoginInfo("Invalid Login Attempt!");
            console.log("Invalid Login Attempt!");
        }
    }

    const handleReset = () => {
        var userEmailValue = document.getElementById("userEmail");
        var userPasswordValue = document.getElementById("userPassword");
        if(userEmailValue !== null){
            userEmailValue.value=null;
        }
        if(userPasswordValue !== null){
            userPasswordValue.value=null;
        }
    }
 
    return (  
        <div className="loginContainer">
            <Loading disabled={isLoading} size={120} hidden={!isLoading}/>
            <div className="loginWindow">
                <div className="loginHeader">
                    <h1>Login</h1>
                </div>
                <div className="loginContent">
                    <PersonIcon style={{ fontSize:'25px', marginRight: '20px', }} />
                    <input type="text" id="loginUserEmail" onChange={handleEmailType} placeholder="Email" autoComplete="off" required /> <br/>
                    <LockIcon style={{ fontSize:'25px', marginRight: '20px', }} />
                    <input type="password" id="loginUserPassword" onChange={handlePasswordType} placeholder="Password" autoComplete="off" required /> <br/>
                    <button id="loginPageLoginButton" onClick={handleLogin} >Login</button> <br/>
                    <button id="loginPageResetButton" onClick={handleReset} >Reset</button> <br/><br/><br/>
                    <div className="loginInfo">
                        {loginInfo}
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        role: state.getAuthState.role,
        isLoading: state.getLoading.isLoading,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoading: (isLoading) => dispatch(setLoading(isLoading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));