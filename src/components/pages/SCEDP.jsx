import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactSection from "../ContactSection";
import scdepBanner from "../images/banners/scdep-banner.png";

function SCEDP() {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <div className="page-banner">
        <img src={scdepBanner} alt="SCEDP Banner" />
      </div>

      {/* Content */}
      <div className="page-container">

        <h4>Shri Chandra Energy and Data Processing Services</h4>

        <p className="justify-text">
          An offshoot of Shri Chandra Group (SCG), Shri Chandra Energy and Data
          Processing Services Private Limited (SCEDP) is the Group’s
          meticulously planned initiative aimed at meeting the dynamic and
          demanding needs of clients in Seismic Processing, Imaging, and
          Interpretation solutions.
        </p>

        <p className="justify-text">
          Backed by a team of industry veterans and world-class professionals,
          equipped with state-of-the-art technology, SCEDP offers a comprehensive
          range of processing services — from standard processing to cutting-edge
          imaging solutions tailored to address structural and stratigraphic
          complexities.
        </p>

        <p className="justify-text">
          In addition to Imaging and Interpretation services, SCEDP provides
          specialized offerings such as survey merging, integration of various
          geophysical data with seismic data, field geometry design, and field
          quality control.
        </p>

        <p className="justify-text">
          At SCEDP, we are committed to being your premier destination for all
          Imaging and Interpretation solutions.
        </p>

        {/* Section 1 */}
        <h4 className="section-title">
          Seismic Data Processing and Imaging
        </h4>

        <p className="justify-text">
          2D and 3D Time and Depth Domain processing with contemporary
          algorithms for Land, Offshore and OBN datasets with MAZ and WAZ
          geometries.
        </p>

        <ul className="check-list">
          <li>Deblending</li>
          <li>Deghosting</li>
          <li>Broadband Signature</li>
          <li>Model Based Denoise</li>
          <li>Multipass Demultiple</li>
          <li>Close Grid Multipass Velocity Analysis</li>
          <li>KPSTM</li>
        </ul>

        {/* Section 2 */}
        <h4 className="section-title">
          Anisotropic Velocity Model Building & Advanced Toolkits
        </h4>

        <ul className="check-list">
          <li>Kirchoff PSDM</li>
          <li>Reverse Time Migration</li>
          <li>Full Waveform Inversion</li>
          <li>LS-KPSDM</li>
        </ul>

        {/* Section 3 */}
        <h4 className="section-title">Special Processing</h4>

        <ul className="check-list">
          <li>Seismic Attributes and AVO</li>
          <li>Near Surface Model Building with Tomostatics</li>
          <li>Multi Survey Merger with Customized Matching Filters</li>
          <li>Integration of Geophysical Data (GM & MT) with Seismic</li>
          <li>Long Offset Data Processing</li>
        </ul>

        {/* Section 4 */}
        <h4 className="section-title">Data Interpretation</h4>

        <ul className="check-list">
          <li>Integrated Interpretation Projects (Basin to Prospect Level)</li>
          <li>Block Evaluation for Acquisition</li>
          <li>Well Log Analysis</li>
        </ul>

        {/* Section 5 */}
        <h4 className="section-title">Support Services</h4>

        <ul className="check-list">
          <li>Field Survey Design (Land, Marine & OBN)</li>
          <li>On-site QC for Land Crews & Marine Acquisition</li>
        </ul>

      </div>

      <ContactSection />
      <Footer />
    </>
  );
}

export default SCEDP;
