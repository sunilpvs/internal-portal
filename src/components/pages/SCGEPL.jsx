import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactSection from "../ContactSection";
import scgeplBanner from "../images/banners/scgepl-banner.jpeg";

function SCGEPL() {
  return (
    <>
      <Navbar />

      {/* Banner Image */}
      <div className="page-banner">
        <img src={scgeplBanner} alt="SCGEPL Banner" />
      </div>

      {/* Content */}
      <div className="page-container">

        <h4>Shri Chandra Global EXIM Private Limited</h4>

        <p className="justify-text">
          SCGE is a Startup India company that was started in an effort to reimagine the global supply chain to enable the provision of a myraid range of services to our clients. We thus integrated forward to form our exculsive Freight Forwarding arm. The ever-evolving business landscape is dynamic and we are fully equipped to strategically position you with a significant competitive edge. Our asset light contract logistics, freight forwarding and transportation capacities are par excellence deemed unparalleled in both efficiency and efficacy. Our scope of operations include; Vessel Chartering/Ship broking, Air and Sea Freight, Warehousing, Transport, Packaging, Customs Clearance/Documentation, Projects, Heavy loads and Bulk Cargoes among other strengths. Besides Freight Forwarding, an exclusive Import and Export division was designed to undertake trading of commodities and merchandise. Our multifaceted expertise in the process is essential for navigating the economies of both scale and size effectively. We enable ease in business by Air, Rail, Road and Sea.
        </p>

       
      </div>

      <ContactSection />
      <Footer />
    </>
  );
}

export default SCGEPL;
