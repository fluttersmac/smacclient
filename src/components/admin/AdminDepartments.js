import Departments from "../system/Departments";
import './styles/AdminDepartments.css';

const AdminDepartments = () => {
    return(
        <div className="adminDepartmentsContainer">
            <div className="adminDepartmentsLeftContainer">

            </div>
            <div className="adminDepartmentsRightContainer">
                <Departments/>
            </div>
        </div>
    );
}

export default AdminDepartments;