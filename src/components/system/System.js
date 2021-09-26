import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from './NotFound';
import Loading from '../widgets/Loading';
import systemRoutes from '../routes/SystemRoutes';
import adminRoutes from '../routes/AdminRoutes';
import hodRoutes from '../routes/HodRoutes';
import professorRoutes from '../routes/ProfessorRoutes';
import staffRoutes from '../routes/StaffRoutes';
import studentRoutes from '../routes/StudentRoutes';
import { paths, roles } from '../config';

const System = ({ isAuthResultAvailable, isAuthenticated, role }) => {

    if(!isAuthResultAvailable){
        return <Loading size={120} disabled={false} />;
    }

    const handleSystemRoutes = () => {
        return systemRoutes.map((route) => {
            return <Route 
                exact={route.exact}
                path={route.path}
                key={route.key}
            >
                {route.component}
                {route.redirect}
            </Route>
        });
    }

    const handleProtectedRoutes = () => {
        if(isAuthenticated){
            if(role === roles.ADMIN_ROLE){
                return adminRoutes.map((route) => {
                    return <Route 
                        exact={route.exact}
                        path={route.path}
                        key={route.key}
                    >
                        {route.component}
                        {route.redirect}
                    </Route>
                });
            }
            else if(role === roles.HOD_ROLE){
                return hodRoutes.map((route) => {
                    return <Route 
                        exact={route.exact}
                        path={route.path}
                        key={route.key}
                    >
                        {route.component}
                        {route.redirect}
                    </Route>
                });
            }
            else if(role === roles.PROFESSOR_ROLE){
                return professorRoutes.map((route) => {
                    return <Route 
                        exact={route.exact}
                        path={route.path}
                        key={route.key}
                    >
                        {route.component}
                        {route.redirect}
                    </Route>
                });
            }
            else if(role === roles.STAFF_ROLE){
                return staffRoutes.map((route) => {
                    return <Route 
                        exact={route.exact}
                        path={route.path}
                        key={route.key}
                    >
                        {route.component}
                        {route.redirect}
                    </Route>
                });
            }
            else if(role === roles.STUDENT_ROLE){
                return studentRoutes.map((route) => {
                    return <Route 
                        exact={route.exact}
                        path={route.path}
                        key={route.key}
                    >
                        {route.component}
                        {route.redirect}
                    </Route>
                });
            }
            else{
                console.log("you are not allowed to login");
                return <Redirect to={paths.LOGIN_PATH}/>
            }
        }
        else{
            return <Redirect to={paths.LOGIN_PATH}/>
        }
    }

    return (  
        <div className="systemContainer">
            <Switch>
                { handleSystemRoutes() }
                { handleProtectedRoutes() }
                <Route path='*' component={NotFound} />
            </Switch>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthResultAvailable: state.getAuthState.isAuthResultAvailable,
        isAuthenticated: state.getAuthState.isAuthenticated,
        role: state.getAuthState.role,
    };
}
 
export default connect(mapStateToProps)(System);