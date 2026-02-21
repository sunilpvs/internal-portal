import React from "react";
import Navbar from "../Navbar";
import PageHeader from "../PageHeader";
import Footer from "../Footer";
import ContactSection from "../ContactSection";


import leader1 from "../images/leadership/team-1a.jpg";
import leader2 from "../images/leadership/team-2a.jpg";
import leader3 from "../images/leadership/team-3a.jpg";


function Leadership() {
  return (
    <>
      <Navbar />
      <PageHeader title="Leadership" />

      <div className="leadership-container">

        {/* Leader 1 */}
        <div className="leader-row">
             <div className="leader-image">
            <img src={leader1} alt="Sreeram Bhagawathi" />
          </div>
          <div className="leader-content">
            <h5>SREERAM BHAGAWATHI</h5>
            <h3>Chairman & MD</h3>
            <p>
              With over four decades of experience in the field, it is befitting
              to call him the anchor of Shri Chandra. As a founder and esteemed
              industry stalwart, his pragmatic leadership, expertise and guidance
              have been key in steering the group towards success.
            </p>
          </div>
        </div>

        {/* Leader 2 */}
        <div className="leader-row">
            <div className="leader-image">
            <img src={leader2} alt="Sreeram Bhagawathi" />
          </div>
          <div className="leader-content">
            <h5>VENKAT BHAGAWATHI</h5>
            <h3>Executive Director</h3>
            <p>
              The dynamic and zealous spearhead of Shri Chandra, he shares his
              father’s passion for the sea alongside exceptional business acumen.
              His creativity and drive have been key in positioning the company
              uniquely in the market.
            </p>
          </div>
        </div>

        {/* Leader 3 */}
        <div className="leader-row">
             <div className="leader-image">
            <img src={leader3} alt="Sreeram Bhagawathi" />
          </div>
          <div className="leader-content">
            <h5>SHIVA BHAGAWATHI</h5>
            <h3>Director Operations</h3>
            <p>
              He brings more than two decades of multi-sectoral experience aiding
              in effective grassroots level management of operations. His
              steadfast leadership aligns day-to-day management with long-term
              goals.
            </p>
          </div>
        </div>

      </div>

      <ContactSection />
      <Footer />
    </>
  );
}

export default Leadership;

