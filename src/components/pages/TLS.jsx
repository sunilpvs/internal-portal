import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactSection from "../ContactSection";
import tlsBanner from "../images/banners/tls-banner.jpeg";

function TLS() {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <div className="page-banner">
        <img src={tlsBanner} alt="TLS Banner" />
      </div>

      {/* Content */}
      <div className="page-container">

        <h4>Tanmayee Logistics and Services</h4>

        <p className="justify-text">
          Tanmayee Logistics and Services is a global MSME registered partnership 
          entity which exclusively caters to Coastal Shipping and Logistics. 
          Logistic clusters around forelands and hinterlands are now connected 
          seamlessly from origin point to end point with demand and supply in unison.
        </p>

        <p className="justify-text">
          Our ability to convert challenges into strategic opportunities of 
          commercial privilege for our clients has helped etch our niche as 
          the most preferred partner for delivering real time results.
        </p>

        <p className="justify-text">
          Besides this, Tanmayee envisions the provision of Free Trade 
          Warehousing Zone services at Kakinada Special Economic Zone 
          with primary focus on building an ecosystem around Kakinada 
          sea port with its unique Land and Sea advantages.
        </p>

        <h4 style={{ marginTop: "40px" }}>
          Our Scope of Operations Include
        </h4>

        <ul className="check-list">
          <li>Coastal Vessel Agency</li>
          <li>Coastal Customs Clearance</li>
          <li>Inland Container Clearances</li>
          <li>Delivery Management Services</li>
          <li>Heavy Material Handling Services</li>
          <li>Machinery Handling and Services</li>
          <li>End-to-End Logistics Services</li>
          <li>Specific Permissions from MMD</li>
          <li>ODC Handling Services</li>
          <li>Project Handling Services</li>
        </ul>

      </div>

      <ContactSection />
      <Footer />
    </>
  );
}

export default TLS;
