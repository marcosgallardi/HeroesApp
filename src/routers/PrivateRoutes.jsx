import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext"


export const PrivateRoutes = ({ children }) => {

    const { logged } = useContext(AuthContext)
    const { pathname, search } = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastpath', lastPath);

    return (logged)
        ? children
        : <Navigate to="/login" />
}



