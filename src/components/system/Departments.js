import { useEffect } from "react";
import { connect } from "react-redux";
import { setDepartments, setIsLoadingDepartments, setSelectedDepartment } from "../../store/actions/Departments";
import { getFirestore, query, onSnapshot, collection } from 'firebase/firestore';
import { setEndDepartmentsTask } from "../../store/actions/EndTask";
import Loading from "../widgets/Loading";

const Departments = ({ setDepartments, departments, setIsLoadingDepartments, setEndDepartmentsTask, isLoadingDepartments, setSelectedDepartment }) => {

    useEffect(() => {
        let isLoading = true;
       setIsLoadingDepartments(true);
        if((isLoading && departments.length === 0)){
            (async () => {
                const db = getFirestore();
                const departmentsRef = query(collection(db, 'departments'));
                const endDepartmentsListener = onSnapshot(departmentsRef, (departmentDocs) => {
                    let departmentList = [];
                    departmentDocs.forEach((departmentDoc) => {    
                        departmentList.push(departmentDoc.data());
                    });
                    setDepartments(departmentList);
                });
                setEndDepartmentsTask(endDepartmentsListener);
                isLoading=false;
            })();
        }
        else{
            isLoading=false;
            setIsLoadingDepartments(false);
        }
        return () => {
            isLoading=false;
            setIsLoadingDepartments(false);
        }
    }, [departments.length, setDepartments, setEndDepartmentsTask, setIsLoadingDepartments]);

    useEffect(() => {
        if(departments.length !== 0){
            setIsLoadingDepartments(false);
        }
    }, [departments.length, setIsLoadingDepartments]);

    const renderDepartments = () => {
        //logic
    }

    return (
        <div className="departmentsContainer">
            <div className="contentBody">
                { isLoadingDepartments ? <Loading size={40} /> : renderDepartments() }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        departments: state.getDepartments.departments,
        isLoadingDepartments: state.getDepartments.isLoadingDepartments,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedDepartment: (selectedDepartment) => dispatch(setSelectedDepartment(selectedDepartment)),
        setIsLoadingDepartments: (isLoadingDepartments) => dispatch(setIsLoadingDepartments(isLoadingDepartments)),
        setEndDepartmentsTask: (endDepartmentsListener) => dispatch(setEndDepartmentsTask(endDepartmentsListener)),
        setDepartments: (departments) => dispatch(setDepartments(departments)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Departments);