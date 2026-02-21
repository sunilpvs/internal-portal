import Navbar from "../Navbar";
import Footer from "../Footer";
import PageHeader from "../PageHeader";
import ContactSection from "../ContactSection";

function About() {
  return (
    <>
      <Navbar />
      <PageHeader title="About Us" />

      <div className="about-section">
        <div className="about-container">

          <h2 className="about-main-title">
            Think Maritime, Think Shri Chandra
          </h2>

          <p className="about-text">
            Shri Chandra Group of companies is a conglomerate with a long
            standing reputation for being a pioneer in the Shipping, Logistics
            and Maritime industry. Established in 2009, the group is
            headquartered in Kakinada, Andhra Pradesh.
          </p>

          <h3 className="about-subtitle">Vision</h3>
          <p className="about-text">
            To enable, empower and engineer new frontiers in the shipping,
            logistics and maritime industries.
          </p>

          <h3 className="about-subtitle">Mission</h3>
          <p className="about-text">
            Advancing client experience that affords luxury of choice to be
            transformed into a sustainable strategic inclusion.
          </p>

          <h3 className="about-subtitle">Values</h3>

          <ul className="about-values">
            <li><strong>People</strong> – Alignment in all actions</li>
            <li><strong>Pioneer</strong> – Innovation & reinvention</li>
            <li><strong>Partner</strong> – Collaborating to create</li>
            <li><strong>Protect</strong> – Persevere & reinforce</li>
            <li><strong>Prosperity</strong> – Sustainable growth</li>
          </ul>

        </div>
      </div>

      <ContactSection />
      <Footer />
    </>
  );
}

export default About;
