import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../Hooks/useinstructor";
import useStudents from "../Hooks/useStudents";



const StudentRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isStudents, isStudentsLoading] = useStudents();
    const location = useLocation();

    if(loading || isStudentsLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isStudents) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default StudentRoute;