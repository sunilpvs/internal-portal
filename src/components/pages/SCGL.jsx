import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactSection from "../ContactSection";
import scglBanner from "../images/banners/scgl-banner.jpeg";

function SCGL() {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <div className="page-banner">
        <img src={scglBanner} alt="SCGL Banner" />
      </div>

      {/* Content Section */}
      <div className="page-container">

        <h4>Shri Chandra Global Logistics</h4>

        <p className="justify-text">
          Shri Chandra Global Logistics is the transportation wing of Shri Chandra Group.
          We are a Nationwide Logistical Services Company with an additional focus on
          Heavy Equipment Supplies. With an extensive fleet of vehicles combined with
          trained, professional in-house technical know-how we are designed to provide
          world class logistics interface for our clients.
        </p>

        <p className="justify-text">
          We are fully equipped and proficient to handle a diverse portfolio of cargoes
          (DG cargo, ODC cargo, Project cargo, bulk cargo, break-bulk cargo) and capacities
          (Full or Less Than Full) as per your requirement all-round the year 24/7.
        </p>

        <h4 className="section-title">Our Fleet of Vehicles Include</h4>

        <ul className="check-list">
          <li>20 feet trailers</li>
          <li>40 feet trailers</li>
          <li>Forklift</li>
          <li>Hydra</li>
          <li>Low bed Trailers</li>
          <li>14 Tyre Taurus Trucks</li>
          <li>Semi low bed multi axle trailers</li>
        </ul>

        <h4 className="section-title">Services Offered</h4>

        <div className="two-column">

          <ul className="check-list">
            <li>Cranes on Hire</li>
            <li>Heavy Material Transporter</li>
            <li>Local Transporter</li>
            <li>Machine Transporter</li>
            <li>ODC Transportation Services</li>
            <li>Project Cargo Transportation Services</li>
            <li>Road Transport Service</li>
            <li>Steel Coil Transporter</li>
          </ul>

          <ul className="check-list">
            <li>Trailer And Truck Services</li>
            <li>Heavy Ropes Transportation</li>
            <li>Transportation Logistics Services</li>
            <li>Heavy Lift Cargo Transportation</li>
            <li>Professional Drivers & Driver Management</li>
            <li>Nationwide Permits</li>
          </ul>

        </div>

      </div>

      <ContactSection />
      <Footer />
    </>
  );
}

export default SCGL;
