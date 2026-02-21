import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactSection from "../ContactSection";
import scpgBanner from "../images/banners/scpg-banner.jpeg";

function SCPG() {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <div className="page-banner">
        <img src={scpgBanner} alt="Shri Chandra PowerGen Banner" />
      </div>

      {/* Content */}
      <div className="page-container">
        <h4>Shri Chandra PowerGen</h4>

        <p className="justify-text">
          Shri Chandra PowerGen is the group’s foray into renewable energy.
          We are into Solar, Wind, Water and Bio-degradable alternative
          sources of energy to build climate positive solutions.
        </p>

        <p className="justify-text">
          Our large investment in research and numerous projects in the
          pipeline are keyed in to disseminate innovative technology one
          resource at a time. Sustainability is the core that drives the
          PowerGen initiative.
        </p>
      </div>

      <ContactSection />
      <Footer />
    </>
  );
}

export default SCPG;
