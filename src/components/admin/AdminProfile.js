import Profile from "../system/Profile";
import './styles/AdminProfile.css';
import { connect } from "react-redux";

const AdminProfile = ({ user }) => {
    return (  
        <div className="adminProfileContainer">
            <Profile user={user} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.getAuthState.user,
    };
}
 
export default connect(mapStateToProps)(AdminProfile);