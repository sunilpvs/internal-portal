import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logos/u_logo.jpeg";

import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { logoutUser } from "../services/auth/auth";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { userData, isLoading } = useContext(AppContext);
  const apiBaseUrl = `${(process.env.REACT_APP_API_BASE_URL || "").replace(/\/+$/, "")}/`;
  const authURL = `${apiBaseUrl}auth/auth.php`;

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

        {!isLoading && (
          <>
            {userData ? (
              <li
                className="dropdown profile-dropdown"
                onMouseEnter={() => setProfileOpen(true)}
                onMouseLeave={() => setProfileOpen(false)}
                style={{ marginLeft: "auto" }}
              >
                <a href="#" style={{ cursor: "pointer" }}>
                  👤 Profile ▾
                </a>
                {profileOpen && (
                  <ul className="dropdown-menu profile-menu">
                    <li style={{ padding: "10px 20px 10px 20px", color: "#666" }}>
                      <a 
                        href="https://myprofile.microsoft.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: "#0b2c5f", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
                      >
                        <strong>{userData.f_name+" "+userData.l_name || "User"}</strong>
                        <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: "12px" }}></i>
                      </a>
                    </li>
                    <li style={{ borderTop: "1px solid #eee" }}>
                      <a href="#" onClick={handleLogout} style={{ color: "#0b2c5f", textDecoration: "none", display: "block" }}>
                        Logout
                      </a>
                    </li>
                  </ul>
                )}
              </li>
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
