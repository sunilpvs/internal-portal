function ContactSection() {
  return (
    <div className="contact-section">
      <h2>Interested in doing business with us?</h2>
      <div className="contact-form">
        <div className="form-column">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Designation" />
          <input type="text" placeholder="Phone" />
          <textarea placeholder="Leave a message here"></textarea>
        </div>

        <div className="form-column">
          <input type="text" placeholder="Organization" />
          <input type="email" placeholder="Your email" />
          <button className="send-btn">Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
