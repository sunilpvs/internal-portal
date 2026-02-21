import Navbar from "../Navbar";
import Footer from "../Footer";
import PageHeader from "../PageHeader";
import ContactSection from "../ContactSection";

function Contact() {
  return (
    <>
      <Navbar />
      <PageHeader title="Contact" />

      <div className="branches-section">
        <h2>Branches</h2>

        <div className="branches-grid">

          {/* 1 */}
          <div className="branch-card">
            <h3>KAKINADA (HQ)</h3>
            <p>
              1st Floor, Door no. 70-7-62/A, Ramya Royale,<br/>
              Revenue ward 30, Ramanayyapeta,<br/>
              Kakinada, Andhra Pradesh 533003<br/>
              Phone: 0884 - 2361567/69
            </p>
          </div>

          {/* 2 */}
          <div className="branch-card">
            <h3>MUMBAI (Corporate Office)</h3>
            <p>
              Sagar Tech Plaza B - 408 - 411,<br/>
              Andheri Kurla Road, Sakinaka,<br/>
              Andheri East, Mumbai,<br/>
              Maharashtra 400072<br/>
              Phone: 022 - 4964 0000
            </p>
          </div>

          {/* 3 */}
          <div className="branch-card">
            <h3>VISHAKAPATNAM</h3>
            <p>
              32-12-38/40, Flat No. 301B, Navya's Nulife,<br/>
              Venkatasewara Colony Road, Sheelanagar,<br/>
              Visakhapatnam,<br/>
              Andhra Pradesh 530012
            </p>
          </div>

          {/* 4 */}
          <div className="branch-card">
            <h3>KRISHNAPATNAM</h3>
            <p>
              1-108, Flat No 303, 3rd Floor,<br/>
              Pearl Homes, Plot 27 & 40,<br/>
              Opp Fisheries College, Muttukuru,<br/>
              SPSR Nellore,<br/>
              Andhra Pradesh 524347
            </p>
          </div>

          {/* 5 */}
          <div className="branch-card">
            <h3>GANDHIDHAM</h3>
            <p>
              Office No 1, 1st Floor, Time Square - 6,<br/>
              Plot No 4/5, Ward 7/B,<br/>
              Opp Shrinbhagh Garden,<br/>
              Gandhidham (Kutch) 370201
            </p>
          </div>

          {/* 6 */}
          <div className="branch-card">
            <h3>HYDERABAD</h3>
            <p>
              Ground Floor, Plot No.102,<br/>
              Flat No G-2, Nikhila Residency,<br/>
              Road No 6, KCRR Colony,<br/>
              Bachupally Village, Rangareddy,<br/>
              Telangana 500090
            </p>
          </div>

          {/* 7 */}
          <div className="branch-card">
            <h3>CHENNAI</h3>
            <p>
              Old No 229, New No 94/2,<br/>
              R.K Mutt Road, Mylapore,<br/>
              Chennai,<br/>
              Tamil Nadu 600004
            </p>
          </div>

          {/* 8 */}
          <div className="branch-card">
            <h3>BENGALURU</h3>
            <p>
              2nd Floor, #201, Jahnavi Residency,<br/>
              Site 816, HIG A Sector, 3rd Phase,<br/>
              Yelahanka New Town,<br/>
              Bengaluru Urban,<br/>
              Karnataka 560064
            </p>
          </div>

          {/* 9 */}
          <div className="branch-card">
            <h3>DELHI</h3>
            <p>
              Chetan Vihar, Ground Floor,<br/>
              Property No 304-A, KH No 89/22,<br/>
              Gopal Nagar, South West Delhi,<br/>
              New Delhi 110043
            </p>
          </div>

          {/* 10 */}
          <div className="branch-card">
            <h3>DELHI - NCR</h3>
            <p>
              Nucleus Office Management Solutions Pvt Ltd,<br/>
              Cabin No 709, Plot No 29, Sector 142,<br/>
              NOIDA - 201301
            </p>
          </div>

        </div>
      </div>

      <ContactSection />
      <Footer />
    </>
  );
}

export default Contact;
