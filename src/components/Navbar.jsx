import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logos/u_logo.jpeg";

import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { logoutUser } from "../services/auth/auth";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [hrOpen, setHrOpen] = useState(false);
  const { userData, isLoading } = useContext(AppContext);
  const apiBaseUrl = `${(process.env.REACT_APP_API_BASE_URL || "").replace(/\/+$/, "")}/`;
  const authURL = `${apiBaseUrl}auth/auth.php`;
  const vmsPortalUrl = process.env.REACT_APP_VMS_PORTAL_URL;
  const amsPortalUrl = process.env.REACT_APP_AMS_PORTAL_URL;
  const adminPortalUrl = process.env.REACT_APP_ADMIN_PORTAL_URL;
  const cmsPortalUrl = process.env.REACT_APP_CMS_PORTAL_URL;
  const policyUrl = process.env.REACT_APP_POLICY_URL;

  const handleLogout = async () => {
    await logoutUser();
  };

  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="logo-section">
        <Link to="/">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>
      </div>
      {/* Menu */}
      <ul className="nav-links">
        <li><Link to="/about">About Us</Link></li>

        <li
          className="dropdown"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <a href="#">Portfolio ▾</a>

          {open && (
            <ul className="dropdown-menu">
              <li><Link to="/scbc">Oil & Gas</Link></li>
              <li><Link to="/scgl">Nationwide Logistics</Link></li>
              <li><Link to="/scgepl">Freight Forwarding</Link></li>
              <li><Link to="/tls">Cargo Clearances</Link></li>
              <li><Link to="/scpg">Renewable Energy</Link></li>
              <li><Link to="/scedp">Imaging Deeper & Imaging Finer</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/leadership">Leadership</Link></li>
        <li><Link to="/awards">Awards</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {!isLoading && userData && (
          <li
            className="dropdown"
            onMouseEnter={() => setHrOpen(true)}
            onMouseLeave={() => setHrOpen(false)}
          >
            <a href="#" style={{ cursor: "pointer" }} className="nav-trigger-label">
              <span>Human Resources</span>
              <span>▾</span>
            </a>
            {hrOpen && (
              <ul className="dropdown-menu tools-menu">
                <li>
                  <Link to="/holiday-calendar" target="_blank" className="tools-link">
                    <span className="tools-label">Holiday Calendar</span>
                  </Link>
                </li>
                <li>
                  <a
                    href={policyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tools-link"
                  >
                    <span className="tools-label">Policies</span>
                    <i className="fas fa-arrow-up-right-from-square external-link-icon"></i>
                  </a>
                </li>
              </ul>
            )}
          </li>
        )}


        {!isLoading && (
          <>
            {userData ? (
              <>
                <li
                  className="dropdown"
                  onMouseEnter={() => setToolsOpen(true)}
                  onMouseLeave={() => setToolsOpen(false)}
                  style={{ marginLeft: "auto" }}
                >
                  <a href="#" style={{ cursor: "pointer" }} className="nav-trigger-label">
                    <span>Tools</span>
                    <span>▾</span>
                  </a>
                  {toolsOpen && (
                    <ul className="dropdown-menu tools-menu">
                      {vmsPortalUrl && (
                        <li>
                          <a
                            href={vmsPortalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tools-link"
                          >
                            <span className="tools-label">Vendor Management System(VMS)</span>
                            <i className="fas fa-arrow-up-right-from-square external-link-icon"></i>
                          </a>
                        </li>
                      )}
                      {amsPortalUrl && (
                        <li>
                          <a
                            href={amsPortalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tools-link"
                          >
                            <span className="tools-label">Asset Management System(AMS)</span>
                            <i className="fas fa-arrow-up-right-from-square external-link-icon"></i>
                          </a>
                        </li>
                      )}
                      {adminPortalUrl && (
                        <li>
                          <a
                            href={adminPortalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tools-link"
                          >
                            <span className="tools-label">Admin Portal</span>
                            <i className="fas fa-arrow-up-right-from-square external-link-icon"></i>
                          </a>
                        </li>
                      )}
                      {cmsPortalUrl && (
                        <li>
                          <a
                            href={cmsPortalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tools-link"
                          >
                            <span className="tools-label">Rice Module (CMS)</span>
                            <i className="fas fa-arrow-up-right-from-square external-link-icon"></i>
                          </a>
                        </li>
                      )}
                    </ul>
                  )}
                </li>

                <li
                  className="dropdown profile-dropdown"
                  onMouseEnter={() => setProfileOpen(true)}
                  onMouseLeave={() => setProfileOpen(false)}
                >
                  <a href="#" style={{ cursor: "pointer" }} className="nav-trigger-label">
                    <span className="profile-icon">👤</span>
                    <span>Profile</span>
                    <span>▾</span>
                  </a>
                  {profileOpen && (
                    <ul className="dropdown-menu profile-menu">

                      {/* Name with Profile Link */}
                      <li className="profile-row profile-header-row">
                        <a
                          href="https://myprofile.microsoft.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="profile-link"
                        >
                          <strong className="profile-link-label">{userData.f_name + " " + userData.l_name || "User"}</strong>
                          <i className="fas fa-arrow-up-right-from-square external-link-icon"></i>
                        </a>
                      </li>

                      {/* My assets */}
                      <li className="profile-row">
                        <Link to="/my-assets" target="_blank" className="profile-link">
                          My Assets
                        </Link>
                      </li>

                      {/* Logout */}
                      <li className="profile-row profile-logout-row">
                        <a href="#" onClick={handleLogout} className="profile-link">
                          Logout
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              </>
            ) : (
              <li style={{ marginLeft: "auto" }}><Link to={authURL} className="login">Login</Link></li>
            )}
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
