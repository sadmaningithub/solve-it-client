import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(authContext)
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <div className="flex flex-row justify-center "> <span className="loading loading-spinner loading-lg"></span> </div>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoute.propTypes ={
    children: PropTypes.node
}

export default PrivateRoute;