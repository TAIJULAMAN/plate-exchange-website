import React from "react";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import Loader from "../shared/Loaders/Loader";

const PrivateRoute = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                if (decoded.role === import.meta.env.VITE_ROLE) {
                    setIsAuthorized(true);
                } else {
                    setIsAuthorized(false);
                }
            } catch (error) {
                console.error("Invalid token", error);
            }
        }
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <Loader />
        );
    }

    return isAuthorized ? children : <Navigate to="/login" />;
};

export default PrivateRoute;