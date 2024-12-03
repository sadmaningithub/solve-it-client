import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user} = useContext(authContext)

    if(user){
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;