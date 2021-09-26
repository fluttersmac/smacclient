import { Button, TextField } from '@material-ui/core';
import './styles/Users.css';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import { IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
import { setUsers, setSelectedUser, setIsLoadingUsers } from '../../store/actions/Users';
import { v4 as uuidv4 } from 'uuid';
import Loading from '../widgets/Loading';
import { getFirestore, collection, onSnapshot, query } from '@firebase/firestore';
import { setEndTask } from '../../store/actions/EndTask';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
        backgroundColor: '#765763'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    filterBox: {
        width: '100%'
    },
    userButton: {
        width: '100%',
        height: '60px',
        marginTop: '1px',
        backgroundColor: 'lightblue',
        '&:hover': {
            backgroundColor: 'blue',
            color: 'white',
        },
        border: '1px solid black',
        textTransform: 'none',
    },
    selectedUserButton: {
        width: '100%',
        height: '60px',
        marginTop: '1px',
        backgroundColor: 'blue',
        color: 'white',
        '&:hover': {
            backgroundColor: 'blue',
            color: 'white',
        },
        border: '1px solid black',
        textTransform: 'none',
    },
    userButtonName: {
        display: 'flex',
        flex: 0.5,
    },
    userButtonEmail: {
        display: 'flex',
        flex: 0.5,
    },
    userOptionButtonProfile: {
        display: 'none',
        backgroundColor: 'whitesmoke',
        textTransform: 'none',
        position: 'absolute',
        zIndex: '1000', 
        left: '90%',           
    },
    userOptionButtonChat: {
        display: 'none',
        backgroundColor: 'whitesmoke',
        textTransform: 'none',
        position: 'absolute',
        zIndex: '1000',   
        left: '80%',  
    },
}));



const Users = ({ setUsers, users, user, selectedUser, setSelectedUser, setEndTask, setIsLoadingUsers, isLoadingUsers }) => {

    const classes = useStyles();
    const [ searchBy, setSearchBy ] = useState("userId");
    const [ searchUser, setSearchUser ] = useState(null);

    useEffect(() => {
        let isLoading = true;
        setIsLoadingUsers(true);
        if((isLoading && users.length === 0)){
            (async () => {
                const db = getFirestore();
                const usersRef = query(collection(db, 'users'));
                const endUsersListener = onSnapshot(usersRef, (userDocs) => {
                    let userList = [];
                    userDocs.forEach((userDoc) => {    
                        userList.push(userDoc.data());
                    });
                    setUsers(userList);
                });
                setEndTask(endUsersListener);
                isLoading=false;
            })();
        }
        else{
            isLoading=false;
            setIsLoadingUsers(false);
        }
        return () => {
            isLoading=false;
            setIsLoadingUsers(false);
        }
    }, [users, setUsers, user.uid, setEndTask, setIsLoadingUsers, isLoadingUsers]);

    useEffect(() => {
        if(users.length !== 0){
            setIsLoadingUsers(false);
        }
    }, [users.length, setIsLoadingUsers]);

    const reloadUsers = async () => {
        setIsLoadingUsers(false);
        setUsers([]);
    }

    const handleFilterBox = (event) => {
        let option = event.target.value;
        if(option === "1"){
            setSearchBy("userId");
        }
        else if(option === "2"){
            setSearchBy("name");
        }
        else if(option === "3"){
            setSearchBy("email");
        }
        else if(option === "4"){
            setSearchBy("phoneNumber");
        }
        else{
            setSearchBy("userId");
        }
    }
    const renderUsers = () => {
        return users.filter((smacUser) => {
            if(searchUser === null || searchUser.toString() === "" || searchUser.toString().trim().length === 0){
                return smacUser;
            }
            if(searchBy === "userId"){
                if(smacUser.uid.toString().toLowerCase().includes(searchUser.toLowerCase())){
                    return smacUser;
                }
                else return null;
            }
            else if(searchBy === "name"){
                if(smacUser.displayName === null || smacUser.displayName === undefined) return null;
                if(smacUser.displayName.toString().toLowerCase().includes(searchUser.toLowerCase())){
                    return smacUser;
                }
                else return null;
            }
            else if(searchBy === "email"){
                if(smacUser.email === null || smacUser.email === undefined) return null;
                if(smacUser.email.toString().toLowerCase().includes(searchUser.toLowerCase())){
                    return smacUser;
                }
                else return null;
            }
            else if(searchBy === "phoneNumber"){
                if(smacUser.phoneNumber === null || smacUser.phoneNumber === undefined) return null;
                if(smacUser.phoneNumber.toString().toLowerCase().includes(searchUser.toLowerCase())){
                    return smacUser;
                }
                else return null;
            }
            else{
                return null;
            }
        }).map((smacUser) => {
            if(smacUser.uid === user.uid){
                return <div className="userButtonContainer" key={smacUser.uid || uuidv4()}>
                        <Button
                            className={classes.userButton}
                            
                            style={{ 
                                backgroundColor: '#353653',
                                color: 'white'
                            }}
                            onClick={ () => setSelectedUser(smacUser) }
                        >
                            <p className={classes.userButtonName} >{smacUser.displayName}</p> 
                            <p className={classes.userButtonEmail} >{smacUser.email}</p>
                            <p style={{ 
                                    backgroundColor: 'whitesmoke', 
                                    color: 'red', 
                                    borderRadius: '10px',
                                    fontSize: '15px',
                                }} 
                            > You </p>
                        </Button>
                        <Fab 
                            className={classes.userOptionButtonProfile} 
                            variant="extended" 
                        >
                            view profile
                        </Fab>
                        <Fab 
                            className={classes.userOptionButtonChat} 
                            variant="extended" 
                        >
                            Open In Chat
                        </Fab>
                </div>
                
            }
            if(selectedUser === smacUser){
                return <Button
                    className={classes.selectedUserButton}
                    key={smacUser.uid || uuidv4()}
                    onClick={ () => setSelectedUser(smacUser) }
                >
                    <p className={classes.userButtonName} >{smacUser.displayName}</p> 
                    <p className={classes.userButtonEmail} >{smacUser.email}</p>
                </Button>
            }
            else{
                return <Button
                    className={classes.userButton}
                    key={smacUser.uid || uuidv4()}
                    onClick={ () => setSelectedUser(smacUser) }
                >
                    <p className={classes.userButtonName} >{smacUser.displayName}</p> 
                    <p className={classes.userButtonEmail} >{smacUser.email}</p>
                </Button>
            }
        });
    }

    return (  
        <div className="usersContainer">
            <div className="usersHeader">
                <div className="usersHeaderSearchField">
                    <TextField 
                        id="searchUsersTextField" 
                        label="Search Users" 
                        variant="filled" 
                        style={{ width: '100%' }}
                        onChange={ (event) => setSearchUser(event.target.value) }
                    />
                </div>
                <div className="usersHeaderFilterField">
                    <FormControl variant="filled" className={classes.filterBox}>
                        <InputLabel htmlFor="filled-age-native-simple">Search by</InputLabel>
                        <Select
                            native
                            onChange={handleFilterBox}
                            defaultValue={1}
                        >
                            <option value={1}>User Id</option>
                            <option value={2}>Name</option>
                            <option value={3}>Email</option>
                            <option value={4}>Phone Number</option>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="usersContent">
                <div className="usersContentHeader">
                    <div className="usersContentInformation">
                            <h4>Searching users by { searchBy }</h4>
                    </div>
                    <div className="usersContentRefresh">
                        <IconButton 
                            onClick={reloadUsers}
                        >
                            <RefreshIcon
                                className="refreshButton"
                            />    
                        </IconButton>
                    </div>
                </div>

                <div className="contentBody">
                    { isLoadingUsers ? <Loading  size={40} /> : renderUsers() }
                </div>
            </div>


        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        users: state.getUsers.users,
        user: state.getAuthState.user,
        selectedUser: state.getUsers.selectedUser,
        isLoadingUsers: state.getUsers.isLoadingUsers,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => dispatch(setUsers(users)),
        setSelectedUser: (selectedUser) => dispatch(setSelectedUser(selectedUser)),
        setEndTask: (usersListener) => dispatch(setEndTask(usersListener)),
        setIsLoadingUsers: (isLoadingUsers) => dispatch(setIsLoadingUsers(isLoadingUsers)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);