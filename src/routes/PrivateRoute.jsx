import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";
import Loader from "../shared/Loaders/Loader";

const PrivateRoute = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            try {
                const decoded = jwtDecode(token);

                // Optional: check expiry
                if (decoded.exp * 1000 > Date.now()) {
                    setIsAuthorized(true);
                } else {
                    localStorage.removeItem("token"); // expired
                    setIsAuthorized(false);
                }
            } catch (error) {
                console.error("Invalid token", error);
                localStorage.removeItem("token");
                setIsAuthorized(false);
            }
        } else {
            setIsAuthorized(false);
        }

        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return isAuthorized ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
