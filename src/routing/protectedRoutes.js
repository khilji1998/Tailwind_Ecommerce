import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("loggedin")) {
            navigate('/signin');
        }
    }, [navigate]);

    return children;
};
