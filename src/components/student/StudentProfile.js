import './styles/StudentProfile.css';
import Profile from '../system/Profile';
import { connect } from 'react-redux';

const StudentProfile = ({ user }) => {
    return (
        <div className="studentProfileContainer">
            <Profile user={user} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.getAuthState.user,
    };
}

export default connect(mapStateToProps)(StudentProfile);