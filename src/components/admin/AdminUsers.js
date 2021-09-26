import Users from '../system/Users';
import './styles/AdminUsers.css';
import { Button, TextField, Switch, FormControlLabel, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { useEffect, useState } from 'react';
import AddUser from '../../backend/AddUser';
import { connect } from 'react-redux';
import { setUsers, setSelectedUser } from '../../store/actions/Users';
import DeleteUser from '../../backend/DeleteUser';
import UpdateUser from '../../backend/UpdateUser';
import { setLoading } from '../../store/actions/Loader';
import Loading from '../widgets/Loading';

const useStyles = makeStyles((theme) => ({
    userIdField: {
        marginLeft: '10px',
        marginTop: '20px',
        width: '80%'
    },
    userNameField: {
        marginLeft: '10px',
        marginTop: '20px',
        width: '80%'
    },
    userEmailField: {
        marginLeft: '10px',
        marginTop: '20px',
        width: '80%'
    },
    userPasswordField: {
        marginLeft: '10px',
        marginTop: '20px',
        width: '80%'
    },
    userPhoneNumberField: {
        marginLeft: '10px',
        marginTop: '20px',
        width: '80%'
    },
    userRoleField: {
        marginLeft: '10px',
        marginTop: '20px',
        width: '80%'
    },
    userAddButton: {
        marginTop: '10px',
        width: '90%',
        backgroundColor: '#765645',
        '&:hover': {
            backgroundColor: '#432345',
            color: 'white'
        },
        textTransform: 'none',
    },
    userUpdateButton: {
        marginTop: '10px',
        width: '90%',
        backgroundColor: '#765645',
        '&:hover': {
            backgroundColor: '#432345',
            color: 'white'
        },
        textTransform: 'none',
    },
    userDeleteButton: {
        marginTop: '10px',
        width: '90%',
        backgroundColor: '#765645',
        '&:hover': {
            backgroundColor: '#432345',
            color: 'white'
        },
        textTransform: 'none',
    },
    resetButton: {
        marginTop: '10px',
        width: '90%',
        backgroundColor: '#765645',
        '&:hover': {
            backgroundColor: '#432345',
            color: 'white'
        },
        textTransform: 'none',
    }
}));

const AdminUsers = ({ selectedUser, setSelectedUser, createUserRoute, updateUserRoute, deleteUserRoute, user, role, isLoading, setLoading }) => {
    
    const classes = useStyles();

    const [ userId, setUserId ] = useState(null);
    const [ userName, setUserName ] = useState(null);
    const [ userEmail, setUserEmail ] = useState(null);
    const [ userPassword, setUserPassword ]= useState(null);
    const [ userPhoneNumber, setUserPhoneNumber ] = useState(null);
    const [ userRole, setUserRole ] = useState("student");
    const [ shrinkUserIdLabel, setShrinkUserIdLabel ] = useState(false);
    const [ shrinkUserNameLabel, setShrinkUserNameLabel ] = useState(false);
    const [ shrinkUserEmailLabel, setShrinkUserEmailLabel ] = useState(false);
    const [ shrinkUserPasswordLabel, setShrinkUserPasswordLabel ] = useState(false);
    const [ shrinkUserPhoneNumberLabel, setShrinkUserPhoneNumberLabel ] = useState(false);
    const [ editModeOn, setEditModeOn ] = useState(false);

    useEffect(() => {
        if(selectedUser !== null){
            document.getElementById("userId").value=selectedUser.uid;
            document.getElementById("userName").value=selectedUser.displayName;
            document.getElementById("userEmail").value=selectedUser.email;
            document.getElementById("userPassword").value='';
            document.getElementById("userPhoneNumber").value=selectedUser.phoneNumber;
            document.getElementById("userRole").value=selectedUser.role;
            setShrinkUserIdLabel(true);
            setShrinkUserNameLabel(true);
            setShrinkUserEmailLabel(true);
            setShrinkUserPasswordLabel(true);
            setShrinkUserPhoneNumberLabel(true);
        }
        else{
            setShrinkUserIdLabel(false);
            setShrinkUserNameLabel(false);
            setShrinkUserEmailLabel(false);
            setShrinkUserPasswordLabel(false);
            setShrinkUserPhoneNumberLabel(false);
        }
    }, [selectedUser]);

    useEffect(() => {
        if(selectedUser !== null && !editModeOn){
            setUserId(selectedUser.uid);
            setUserName(selectedUser.displayName);
            setUserEmail(selectedUser.email);
            setUserPassword(document.getElementById('userPassword').value);
            setUserPhoneNumber(selectedUser.phoneNumber);
            setUserRole(selectedUser.role);
        }
        else if(editModeOn){
            setUserId(document.getElementById('userId').value);
            setUserName(document.getElementById('userName').value);
            setUserEmail(document.getElementById('userEmail').value);
            setUserPassword(document.getElementById('userPassword').value);
            setUserPhoneNumber(document.getElementById('userPhoneNumber').value);
            setUserRole(document.getElementById('userRole').value);
        }
    }, [selectedUser, userId, userName, userEmail, userPassword, userPhoneNumber, userRole, editModeOn]);
    
    const handleUserIdField = (event) => {
        let id = event.target.value;
        if(id === null || id === undefined || id.toString().trim().length === 0){
            console.log("user id should not be empty!");
            setShrinkUserIdLabel(false);
            return;
        }
        setShrinkUserIdLabel(true);
        setUserId(id);
    }

    const handleUserNameField = (event) => {
        let name = event.target.value;
        if(name === null || name === undefined || name.toString().trim().length === 0){
            console.log("username should not be empty!");
            setShrinkUserNameLabel(false);
            return;
        }
        setShrinkUserNameLabel(true);
        setUserName(name);
    }

    const handleUserEmailField = (event) => {
        let email = event.target.value;
        if(email === null || email === undefined || email.toString().trim().length === 0){
            console.log("user email should not be empty!");
            setShrinkUserEmailLabel(false);
            return;
        }
        setShrinkUserEmailLabel(true);
        setUserEmail(email);
    }

    const handleUserPasswordField = (event) => {
        let password = event.target.value;
        if(password === null || password === undefined || password.toString().trim().length === 0){
            console.log("user password should not be empty!");
            setShrinkUserPasswordLabel(false);
            return;
        }
        setShrinkUserPasswordLabel(true);
        setUserPassword(password);
    }

    const handleUserPhoneNumberField = (event) => {
        let phoneNumber = event.target.value;
        if(phoneNumber === null || phoneNumber === undefined || phoneNumber.toString().trim().length === 0){
            console.log("user phone number should not be empty!");
            setShrinkUserPhoneNumberLabel(false);
            return;
        }
        setShrinkUserPhoneNumberLabel(true);
        setUserPhoneNumber(phoneNumber);
    }

    const handleUserRoleField = (event) => {
        let role = event.target.value;
        if(role === null || role === undefined || role.toString().trim().length === 0){
            console.log("user role should not be empty!");
            return;
        }
        setUserRole(role);
    }

    const handleAddUser = async () => {
        setLoading(true);
        let response = await AddUser(createUserRoute, user.uid, role, userId, userName, userEmail, userPassword, userPhoneNumber, userRole, /*userEmailVerified*/false, /*userDisabled*/false, /*userPhotoURL*/null);
        if(response.data){
            handleReset();
        }
        else{
            console.log(response);
        }
        setLoading(false);
    }

    const handleUpdateUser = async () => {
        if(!editModeOn){
            console.log("Turn on edit to update.");
            return;
        }
        setLoading(true);
        const idToken = user.getIdToken(true);
        let response = await UpdateUser(updateUserRoute, idToken, user.uid, role, userId, userName, userEmail, false, userPassword, userPhoneNumber, null, false, userRole);
        if(response.data){
            handleReset();
        }
        else{
            console.log("user updated successfully");
        }
        setLoading(false);
    }

    const handleDeleteUser = async () => {
        setLoading(true);
        let response = await DeleteUser(deleteUserRoute, user.uid, role, userId);
        if(response.data){
            handleReset();
        }
        else{
            console.log(response);
        }
        setLoading(false);
    }

    const handleEditMode = (event) => {
        setEditModeOn(event.target.checked);
    }

    const handleReset = () => {
        setLoading(true);
        document.getElementById("userId").value='';
        document.getElementById("userName").value='';
        document.getElementById("userEmail").value='';
        document.getElementById("userPassword").value='';
        document.getElementById("userPhoneNumber").value='';
        document.getElementById("userRole").value="student";
        setShrinkUserIdLabel(false);
        setShrinkUserNameLabel(false);
        setShrinkUserEmailLabel(false);
        setShrinkUserPasswordLabel(false);
        setShrinkUserPhoneNumberLabel(false);
        setSelectedUser(null);
        setLoading(false);
    }

    return (  
        <div className="adminUsersContainer">
            <Loading disabled={isLoading} size={80} hidden={!isLoading} />
            <div className="adminUsersLeftContentContainer">
                <div className="adminUsersLeftContentContainerTop">
                    <div className="adminUsersLeftContentContainerLeftContent">
                        <TextField 
                            id="userId"
                            className={classes.userIdField} 
                            label="User ID" 
                            variant="outlined"
                            onChange={handleUserIdField}
                            InputLabelProps={{ 
                                shrink: shrinkUserIdLabel
                            }}
                            inputProps={{
                                readOnly: !editModeOn
                            }}
                        />
                        <TextField 
                            id="userEmail"
                            className={classes.userEmailField} 
                            label="Email" 
                            variant="outlined" 
                            onChange={handleUserEmailField}
                            InputLabelProps={{ 
                                shrink: shrinkUserEmailLabel
                            }}
                            inputProps={{
                                readOnly: !editModeOn
                            }}
                        />
                        <TextField 
                            id="userPhoneNumber"
                            className={classes.userPhoneNumberField} 
                            label="PhoneNumber" 
                            variant="outlined" 
                            onChange={handleUserPhoneNumberField}
                            InputLabelProps={{ 
                                shrink: shrinkUserPhoneNumberLabel
                            }}
                            inputProps={{
                                readOnly: !editModeOn
                            }}
                        />
                    </div>
                    <div className="adminUsersLeftContentContainerRightContent">
                        <TextField 
                            id="userName"
                            className={classes.userNameField} 
                            label="Name" 
                            variant="outlined" 
                            onChange={handleUserNameField}
                            InputLabelProps={{ 
                                shrink: shrinkUserNameLabel
                            }}
                            inputProps={{
                                readOnly: !editModeOn
                            }} 
                        />
                        <TextField 
                            id="userPassword"
                            className={classes.userPasswordField} 
                            label="Password" 
                            variant="outlined" 
                            onChange={handleUserPasswordField}
                            InputLabelProps={{ 
                                shrink: shrinkUserPasswordLabel
                            }}
                            inputProps={{
                                readOnly: !editModeOn
                            }}
                        />
                        <FormControl variant="filled" className={classes.userRoleField}>
                            <InputLabel 
                                htmlFor="filled-age-native-simple" >User Role</InputLabel>
                                <Select
                                    native
                                    id="userRole"
                                    onChange={handleUserRoleField}
                                    defaultValue="student"
                                    disabled={!editModeOn}
                                >
                                    <option value="student">Student</option>
                                    <option value="professor">Professor</option>
                                    <option value="staff">Staff</option>
                                    <option value="hod">Hod</option>
                                </Select>
                        </FormControl>
                    </div>
                </div>
                <Divider />
                <div className="adminUsersLeftContentContainerMiddleContent">
                    <FormControlLabel
                        control={<Switch 
                            checked={editModeOn}
                            onChange={handleEditMode}
                        />}
                        label="Edit"
                    />
                </div>
                <div className="adminUsersLeftContentContainerBottom">
                    
                    <Button
                        className={classes.userAddButton}
                        onClick={handleAddUser}
                    >
                        Add User
                    </Button>
                    <Button
                        className={classes.userUpdateButton}
                        onClick={handleUpdateUser}
                    >
                        Update User
                    </Button>
                    <Button
                        className={classes.userDeleteButton}
                        onClick={handleDeleteUser}
                    >
                        Delete User
                    </Button>
                    <Button
                        className={classes.resetButton}
                        onClick={handleReset}
                    >
                        Reset
                    </Button>
                </div>
                
            </div>
            <div className="adminUsersRightContentContainer">
                <Users/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedUser: state.getUsers.selectedUser,
        createUserRoute: state.getApiRoutes.createUser,
        updateUserRoute: state.getApiRoutes.updateUser,
        deleteUserRoute: state.getApiRoutes.deleteUser,
        user: state.getAuthState.user,
        role: state.getAuthState.role,
        isLoading: state.getLoading.isLoading,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => dispatch(setUsers(users)),
        setSelectedUser: (selectedUser) => dispatch(setSelectedUser(selectedUser)),
        setLoading: (isLoading) => dispatch(setLoading(isLoading)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);