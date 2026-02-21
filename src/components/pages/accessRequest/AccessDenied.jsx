import React from "react";
import { useNavigate } from "react-router-dom";
import "./AccessDenied.css";

const AccessDenied = () => {
    const navigate = useNavigate();

    return (
        <div className="access-denied-page">
            <div className="access-denied-card">
                <h1 className="access-denied-title">
                        Access Denied
                </h1>

                <p className="access-denied-message">
                    You do not have the necessary permissions to access this portal.
                </p>

                <p className="access-denied-subtext">
                    Please contact your administrator for further assistance.
                </p>

                <button
                    type="button"
                    className="access-denied-button"
                    onClick={() => navigate("/login")}
                >
                    Back to Login
                </button>
            </div>
        </div>
    );
};

export default AccessDenied;
 
 