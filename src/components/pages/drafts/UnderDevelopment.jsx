import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import "./UnderDevelopment.css";

function UnderDevelopment() {
	return (
		<>
			<Navbar />

			<main className="under-dev-page">
				<div className="under-dev-bg under-dev-bg-one"></div>
				<div className="under-dev-bg under-dev-bg-two"></div>

				<section className="under-dev-card">
					<div className="under-dev-icon-wrap">
						<i className="fas fa-gear under-dev-gear-large"></i>
						<i className="fas fa-gear under-dev-gear-small"></i>
					</div>

					<h1>Page Under Development</h1>
					<p>
						We are actively building this section and it will be available soon.
					</p>

					<Link to="/" className="under-dev-home-link">
						Go to Home
					</Link>
				</section>
			</main>

			<Footer />
		</>
	);
}

export default UnderDevelopment;