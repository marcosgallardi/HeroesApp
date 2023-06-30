import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";


export const LoginPages = () => {

    const { login } = useContext(AuthContext)

    const navigate = useNavigate();

    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastpath') || '/';

        login('Marcos Gallardi');
        navigate(lastPath, { replace: true })
    }

    return (
        <div className="container mt-5">
            <h1>LoginPage</h1>
            <hr />

            <button className="btn btn-outline-primary" onClick={handleLogin}> Login </button>
        </div>
    )
}
