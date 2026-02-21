import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactSection from "../ContactSection";

import logo from "../images/logos/u_logo.jpeg";
import tls from "../images/logos/tls1.png";

// BANNERS
import banner1 from "../images/banners/banner-1.jpeg";
import banner2 from "../images/banners/banner-2.jpg";
import banner3 from "../images/banners/banner-3.jpeg";
import banner4 from "../images/banners/banner-4.jpg";
import banner5 from "../images/banners/banner-5.jpeg";
import banner6 from "../images/banners/banner-6.jpeg";
import banner7 from "../images/banners/banner-7.jpeg";

// INFRASTRUCTURE IMAGES
import infra1 from "../images/index-infra/infra-1.jpeg";
import infra2 from "../images/index-infra/infra-2.jpeg";
import infra3 from "../images/index-infra/infra-3.jpeg";
import infra4 from "../images/index-infra/infra-4.jpeg";
import infra5 from "../images/index-infra/infra-5.jpeg";
import infra6 from "../images/index-infra/infra-6.jpeg";
import infra7 from "../images/index-infra/infra-7.jpg";
import infra8 from "../images/index-infra/infra-8.jpeg";
import infra9 from "../images/index-infra/infra-9.jpeg";
import infra10 from "../images/index-infra/infra-10.jpg";
import infra11 from "../images/index-infra/infra-11.jpeg";
import infra12 from "../images/index-infra/infra-12.jpeg";
import infra13 from "../images/index-infra/infra-13.jpg";
import infra14 from "../images/index-infra/infra-14.jpeg";
import infra15 from "../images/index-infra/infra-15.jpeg";
import infra16 from "../images/index-infra/infra-16.jpeg";
import infra17 from "../images/index-infra/infra-17.jpeg";
import infra18 from "../images/index-infra/infra-18.jpeg";
import infra19 from "../images/index-infra/infra-19.jpeg";
import infra20 from "../images/index-infra/infra-20.jpeg";
import infra21 from "../images/index-infra/infra-21.jpeg";
import infra22 from "../images/index-infra/infra-22.jpeg";
import infra23 from "../images/index-infra/infra-23.jpeg";
import infra24 from "../images/index-infra/infra-24.jpeg";
import infra25 from "../images/index-infra/infra-25.jpeg";

function Home() {
  const banners = [banner1, banner2, banner3, banner4, banner5, banner6, banner7];
  const infrastructureImages = [
    infra1, infra2, infra3, infra4,
    infra5, infra6, infra7, infra8, infra9, infra10, infra11, infra12, infra13, infra14, infra15, infra16, infra17, infra18, infra19. infra20, infra21,infra22, infra23, infra24, infra25 
  ];

  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <>
      <Navbar />

      {/* HERO SLIDER */}
      <div className="hero-slider">
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <img key={index} src={banner} alt="banner" />
          ))}
        </div>

        <button className="prev-btn" onClick={prevSlide}>❮</button>
        <button className="next-btn" onClick={nextSlide}>❯</button>
      </div>

     {/* INDUSTRY SOLUTIONS */}
<section className="solutions-section">
  <h2>Explore Industry Solutions</h2>

  <div className="solutions-grid">

    <div className="solution-card">
      <img src={logo} alt="logo" />
      <h4>Shri Chandra Bulk Cargo Services Private Limited</h4>
      <p className="card-desc">
        SCBC is an ISO & AEO certified International Shipping and
        Logistics Company with a strong network of operations.
      </p>
      <button>Read More</button>
    </div>

    <div className="solution-card">
      <img src={logo} alt="logo" />
      <h4>Shri Chandra Global Logistics</h4>
      <p className="card-desc">
        We provide integrated logistics solutions tailored to global
        supply chain requirements.
      </p>
      <button>Read More</button>
    </div>

    <div className="solution-card">
      <img src={logo} alt="logo" />
      <h4>Shri Chandra Global EXIM Private Limited</h4>
      <p className="card-desc">
        Comprehensive export-import services ensuring seamless
        international trade operations.
      </p>
      <button>Read More</button>
    </div>

    <div className="solution-card">
      <img src={tls} alt="tls" />
      <h4>Tanmaye Logistics and Services</h4>
      <p className="card-desc">
        Delivering customized logistics and transportation
        solutions across industries.
      </p>
      <button>Read More</button>
    </div>

    <div className="solution-card">
      <img src={logo} alt="logo" />
      <h4>Shri Chandra Energy and Data Processing Services</h4>
      <p className="card-desc">
        Providing advanced energy solutions and data processing
        services with reliability and efficiency.
      </p>
      <button>Read More</button>
    </div>

  </div>
</section>

      {/* BLUE STATS STRIP */}
     {/* BLUE STATS STRIP */}
<section className="stats-section">
  <div className="stat-box">
  <div className="stat-icon">
    <i className="fas fa-certificate"></i>
    </div>
    <p className="stat-top">More than</p>
    <h3>15</h3>
    <p className="stat-bottom">Years Experience</p>
  </div>

  <div className="stat-box">
  <div className="stat-icon">
    <i className="fas fa-cogs"></i>
    </div>
    <p className="stat-top">More than</p>
    <h3>250</h3>
    <p className="stat-bottom">Team Strength</p>
  </div>

  <div className="stat-box">
    <div className="stat-icon">
  <i className="fa-solid fa-users"></i>
</div>
    <p className="stat-top">More than</p>
    <h3>300</h3>
    <p className="stat-bottom">Happy Clients</p>
  </div>

  <div className="stat-box">
  <div className="stat-icon">
    <i className="fas fa-check-double"></i>
    </div>
    <p className="stat-top">More than</p>
    <h3>1200</h3>
    <p className="stat-bottom">Projects Done</p>
  </div>
</section>

      {/* INFRASTRUCTURE */}
      <section className="infrastructure-section">
        <h2>Infrastructure</h2>

   <div className="infra-carousel">
  <div className="infra-track">
    {[...infrastructureImages, ...infrastructureImages].map((img, index) => (
      <div className="infra-slide" key={index}>
        <img src={img} alt="infra" />
      </div>
    ))}
  </div>
</div>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
