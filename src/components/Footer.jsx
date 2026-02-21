import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Kakinada */}
        <div className="footer-column">
          <h3>KAKINADA (Head Quarters)</h3>

          <p><i class="fas fa-map-marker-alt"></i>
            1st Floor, Door no. 70-7-62/A, Ramya Royale,<br/>
            Revenue ward 30, Ramanayyapeta,<br/>
            Kakinada<br/>
            Andhra Pradesh 533003
          </p>

          <p><i class="fas fa-phone-alt"></i>0884 - 2361567/69</p>
          <p><i class="fas fa-envelope"></i> info@shrichandragroup.com</p>
        </div>

        {/* Mumbai */}
        <div className="footer-column">
          <h3>MUMBAI (Corporate Office)</h3>

          <p><i class="fas fa-map-marker-alt"></i>
            Sagar Tech Plaza B - 408 - 411,<br/>
            Andheri Kurla Road, Sakinaka,<br/>
            Andheri East, Mumbai<br/>
            Maharashtra 400072
          </p>

          <p><i class="fas fa-phone-alt"></i>022 - 4964 0000</p>
          <p><i class="fas fa-envelope"></i> info@shrichandragroup.com</p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul className="quick-links">
            <li><i class="fas fa-chevron-right"></i> <Link to="/scbc">SCBC</Link></li>
            <li><i class="fas fa-chevron-right"></i> <Link to="/scgl">SCGL</Link></li>
            <li><i class="fas fa-chevron-right"></i> <Link to="/scgepl">SCGEPL</Link></li>
            <li><i class="fas fa-chevron-right"></i><Link to="/tls">TLS</Link></li>
            <li><i class="fas fa-chevron-right"></i><Link to="/scpg">SCPG</Link></li>
            <li><i class="fas fa-chevron-right"></i> <Link to="/scedp">SCEDP</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div>
          Copyright © <span className="green-text">SCG</span>, All Right Reserved.
        </div>

        <div>
          Designed By <span className="green-text">PVS Consultancy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
