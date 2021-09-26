import SideMenu from '../widgets/SideMenu';
import './styles/Admin.css';
import HomeIcon from '@material-ui/icons/Home';
import { paths } from '../config';
import { Switch, Route } from 'react-router-dom';
import adminRoutes from '../routes/AdminRoutes';
import { v4 as uuidv4 } from 'uuid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import signOut from '../../backend/SignOut';
import PeopleIcon from '@material-ui/icons/People';
import SchoolIcon from '@material-ui/icons/School';
import ChatIcon from '@material-ui/icons/Chat';

const menuContents = [
    {
        text: "Home",
        icon: <HomeIcon/>,
        path: paths.ADMIN_HOME_PATH,
        key: uuidv4(),
        function: null,
    },
    {
        text: "Users",
        icon: <PeopleIcon/>,
        path: paths.ADMIN_USERS_PATH,
        key: uuidv4(),
        function: null,
    },
    {
        text: "Departments",
        icon: <SchoolIcon/>,
        path: paths.ADMIN_DEPARTMENTS_PATH,
        key: uuidv4(),
        function: null
    },
    {
        text: "Chats",
        icon: <ChatIcon/>,
        path: paths.ADMIN_CHATS_PATH,
        key: uuidv4(),
        function: null
    }
];

const avatarContents = [
    {
        text: "Profile",
        icon: <AccountCircleIcon/>,
        path: paths.ADMIN_PROFILE_PATH,
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

const Admin = (props) => {

    const handleRoutes = () => {
        return adminRoutes.map((route) => {
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
        <div className="adminContainer">
            <div className="adminHeader">
                <SideMenu
                    sideMenuContents={menuContents}
                    avatarMenuContents={avatarContents}
                />
            </div>
            
            <div className="adminContent">
                <Switch>
                    { handleRoutes() }
                </Switch>
            </div>
        </div>
    );
}
 
export default Admin;