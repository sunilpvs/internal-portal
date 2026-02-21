import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import "./PageNotFound.css";

function PageNotFound() {
	return (
		<>
			<Navbar />

			<main className="not-found-page">
				<div className="not-found-glow not-found-glow-one"></div>
				<div className="not-found-glow not-found-glow-two"></div>

				<section className="not-found-card">
					<div className="not-found-code-wrap">
						<span className="not-found-digit">4</span>
						<span className="not-found-zero">
							<i className="fas fa-compass"></i>
						</span>
						<span className="not-found-digit">4</span>
					</div>

					<h1>Page Not Found</h1>
					<p>
						The page you are looking for does not exist or may have been moved.
					</p>

					<Link to="/" className="not-found-home-link">
						Go to Home
					</Link>
				</section>
			</main>

			<Footer />
		</>
	);
}

export default PageNotFound;
