import React from "react";
import Navbar from "../Navbar";
import PageHeader from "../PageHeader";
import Footer from "../Footer";
import ContactSection from "../ContactSection";

import award1 from "../images/awards/award1.jpg";
import award2 from "../images/awards/award2.jpg";
import award3 from "../images/awards/award3.jpg";
import award4 from "../images/awards/award4-1.jpeg";
import award5 from "../images/awards/award5.jpeg";
import award6 from "../images/awards/award6.jpeg";

function Awards() {
  return (
    <>
      <Navbar />
      <PageHeader title="Awards" />

      <div className="awards-section">
        <div className="awards-row">
          <img src={award1} alt="Award 1" />
          <img src={award2} alt="Award 2" />
          <img src={award3} alt="Award 3" />
          <img src={award4} alt="Award 4" />
          <img src={award5} alt="Award 5" />
          <img src={award6} alt="Award 6" />
        </div>
      </div>

      <ContactSection />
      <Footer />
    </>
  );
}

export default Awards;
