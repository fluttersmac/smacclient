import './styles/Student.css';
import SideMenu  from "../widgets/SideMenu";
import { v4 as uuidv4 } from 'uuid';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { paths } from "../config";
import signOut from "../../backend/SignOut";
import HomeIcon from "@material-ui/icons/Home";
import studentRoutes from "../routes/StudentRoutes";
import { Switch, Route } from 'react-router-dom';

const menuContents = [
    {
        text: "Home",
        icon: <HomeIcon/>,
        path: paths.STUDENT_HOME_PATH,
        key: uuidv4(),
        function: null,
    },
];

const avatarContents = [
    {
        text: "Profile",
        icon: <AccountCircleIcon/>,
        path: paths.STUDENT_PROFILE_PATH,
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

const Student = (props) => {

    const handleRoutes = () => {
        return studentRoutes.map((route) => {
            let subRoutes = route.subRoutes;
            if(subRoutes){
                return subRoutes.map((subRoute) => {
                    return <Route 
                        exact={subRoute.exact}
                        path={subRoute.path}
                        key={subRoute.key}
                    >
                        {subRoute.component}
                        {subRoute.redirect}
                    </Route>
                });
            }
            else{
                return null;
            }
        });
    }
    
    return (  
        <div className="studentContainer">
            <div className="studentHeader">
                <SideMenu
                    avatarMenuContents={avatarContents}
                    sideMenuContents={menuContents}
                />            
            </div>
            <div className="studentContent">
                <Switch>
                    { handleRoutes() }
                </Switch>
            </div>
        </div>
    );
}

export default Student;