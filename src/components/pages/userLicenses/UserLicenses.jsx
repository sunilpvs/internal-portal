import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import PageHeader from "../../PageHeader";
import { getUserLicenses } from "../../../services/auth/userDetails";
import "./UserLicenses.css";

function UserLicenses() {
    const [licenses, setLicenses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let isMounted = true;

        const fetchLicenses = async () => {
            setIsLoading(true);
            setError("");

            try {
                const response = await getUserLicenses();
                const apiLicenses = Array.isArray(response?.data?.licenses)
                    ? response.data.licenses
                    : [];

                if (isMounted) {
                    setLicenses(apiLicenses);
                }
            } catch (fetchError) {
                if (isMounted) {
                    setLicenses([]);
                    setError("Unable to load licenses. Please try again later.");
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        fetchLicenses();

        return () => {
            isMounted = false;
        };
    }, []);

    const formattedLicenses = useMemo(() => {
        return licenses.map((license, index) => ({
            id: license?.id ?? `${index}`,
            name: String(license?.skuPartNumber || "Unknown License").replace(/_/g, " ")
        }));
    }, [licenses]);

    return (
        <>
            <Navbar />
            <div className="user-licenses-container">
                <PageHeader title="My Licenses" />

                <div className="user-licenses-content">
                    <div className="licenses-header">
                        <h2>Assigned Licenses</h2>
                        <p>Licenses currently available for your account.</p>
                    </div>

                    {isLoading ? (
                        <div className="licenses-grid licenses-grid-loading">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <div key={item} className="license-tile license-skeleton" />
                            ))}
                        </div>
                    ) : error ? (
                        <div className="licenses-message error-message">{error}</div>
                    ) : formattedLicenses.length === 0 ? (
                        <div className="licenses-message">No licenses assigned to your account.</div>
                    ) : (
                        <div className="licenses-grid">
                            {formattedLicenses.map((license, index) => (
                                <div
                                    key={license.id}
                                    className="license-tile"
                                    style={{ animationDelay: `${index * 80}ms` }}
                                >
                                    <span className="license-status">
                                        <span className="status-dot" />
                                        ASSIGNED
                                    </span>
                                    <span className="license-name">{license.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default UserLicenses;