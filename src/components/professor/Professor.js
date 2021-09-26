import SideMenu  from "../widgets/SideMenu";
import { v4 as uuidv4 } from 'uuid';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { paths } from "../config";
import signOut from "../../backend/SignOut";

const avatarContents = [
    {
        text: "Profile",
        icon: <AccountCircleIcon/>,
        path: paths.PROFESSOR_PROFILE_PATH,
        key: uuidv4(),
        function: null,
    },
    {
        text: "Logout",
        icon: <ExitToAppIcon/>,
        path: null,
        key: uuidv4(),
        function: signOut
    }
];

const Professor = () => {
    return (  
        <div className="professorContainer">
            <SideMenu 
                avatarMenuContents={avatarContents}
            />
        </div>
    );
}
 
export default Professor;