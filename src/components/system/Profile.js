import { Avatar } from "@material-ui/core";
import './styles/Profile.css';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    avatar:{
        height: '120px',
        width: '120px',
        fontSize: '60px',
    },
    name: {
        fontSize: '30px',
    },
}));

const Profile = ({ user }) => {

    const classes = useStyles();

    return(
        <div className="profileContainer">
            <div className="profileAvatar">
                <Avatar 
                    src={user ? user.photoURL : null}
                    className={classes.avatar}
                >
                    { user ? user.displayName[0] : null }
                </Avatar>
            </div>
            <div className="profileName">
                <p className={classes.name} >{user.displayName}</p>
            </div>
        </div>
    );
}

export default Profile;