import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import PageHeader from "../PageHeader";
import ContactSection from "../ContactSection";

import t1 from "../images/testimonials/testimonial-1.jpg";
import t2 from "../images/testimonials/testimonial-2.jpg";
import t3 from "../images/testimonials/testimonial-3.jpg";
import t4 from "../images/testimonials/testimonial-4.jpg";

function Testimonials() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [t1, t2, t3, t4];

  return (
    <>
      <Navbar />
      <PageHeader title="Testimonials" />

      <div className="testimonial-main">
        <h2>What our clients have to say!</h2>

        <div className="testimonial-documents">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Testimonial ${index + 1}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Expanded View" />
        </div>
      )}

      <ContactSection />
      <Footer />
    </>
  );
}

export default Testimonials;
