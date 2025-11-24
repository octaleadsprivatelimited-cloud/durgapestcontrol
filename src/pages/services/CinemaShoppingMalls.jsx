import { Link } from 'react-router-dom'
import SEO from '../../components/SEO.jsx'
import { seoData } from '../../data/seoData.js'

export default function CinemaShoppingMalls() {
	return (
		<div className="service-detail-page">
			<SEO {...seoData.cinemaShoppingMalls} />
			{/* Page Header */}
			<section className="service-header">
				<div className="container">
					<h1>Cinema & Shopping Malls Pest Control</h1>
					<p>Specialized pest control solutions for cinemas, shopping malls, multiplexes, and entertainment complexes</p>
				</div>
			</section>

			{/* Process Section */}
			<section className="process-section">
				<div className="container">
					<h2>Our Cinema & Mall Pest Control Process</h2>
					<div className="process-grid">
						<div className="process-item">
							<div className="process-number">1</div>
							<h3>Comprehensive Inspection</h3>
							<p>Detailed assessment of all areas including theaters, food courts, retail spaces, and common areas</p>
						</div>
						<div className="process-item">
							<div className="process-number">2</div>
							<h3>Customized Treatment Plan</h3>
							<p>Tailored pest management strategy designed for high-traffic entertainment and retail environments</p>
						</div>
						<div className="process-item">
							<div className="process-number">3</div>
							<h3>Discrete Treatment</h3>
							<p>Professional treatments conducted during off-hours to minimize disruption to business operations</p>
						</div>
						<div className="process-item">
							<div className="process-number">4</div>
							<h3>Ongoing Maintenance</h3>
							<p>Regular monitoring and preventive treatments to maintain a pest-free environment</p>
						</div>
					</div>
				</div>
			</section>

			{/* Services Offered */}
			<section className="services-offered-section">
				<div className="container">
					<h2>Services for Cinemas & Shopping Malls</h2>
					<div className="services-grid">
						<div className="service-item">
							<div className="service-icon">🎬</div>
							<h3>Theater Pest Control</h3>
							<p>Specialized pest control for movie theaters, multiplexes, and auditoriums ensuring customer comfort</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🍔</div>
							<h3>Food Court Management</h3>
							<p>Food-safe pest control for food courts, restaurants, and dining areas within malls</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🛍️</div>
							<h3>Retail Space Control</h3>
							<p>Pest management for retail stores, shops, and commercial spaces within shopping complexes</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🚪</div>
							<h3>Common Area Treatment</h3>
							<p>Comprehensive pest control for corridors, restrooms, parking areas, and common spaces</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🧹</div>
							<h3>Sanitization Services</h3>
							<p>Deep cleaning and sanitization to maintain hygiene standards in high-traffic areas</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🦟</div>
							<h3>Mosquito & Fly Control</h3>
							<p>Regular fogging and treatment to eliminate mosquitoes, flies, and flying insects</p>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="benefits-section">
				<div className="container">
					<h2>Why Choose Our Cinema & Mall Pest Control?</h2>
					<div className="benefits-grid">
						<div className="benefit-item">
							<div className="benefit-icon">👥</div>
							<div className="benefit-content">
								<h3>Customer-Focused</h3>
								<p>Treatments designed to ensure customer comfort and safety in public spaces</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🕐</div>
							<div className="benefit-content">
								<h3>Flexible Scheduling</h3>
								<p>Services available during off-hours to avoid disrupting business operations</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">✅</div>
							<div className="benefit-content">
								<h3>Compliance Ready</h3>
								<p>Meets all health and safety regulations for commercial entertainment venues</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🛡️</div>
							<div className="benefit-content">
								<h3>Food-Safe Solutions</h3>
								<p>Uses food-grade approved treatments safe for food court and dining areas</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">📊</div>
							<div className="benefit-content">
								<h3>Regular Monitoring</h3>
								<p>Ongoing inspections and maintenance to prevent pest issues before they occur</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🏆</div>
							<div className="benefit-content">
								<h3>Experienced Team</h3>
								<p>Specialized expertise in managing large-scale commercial entertainment facilities</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="cta-section">
				<div className="container">
					<div className="cta-content">
						<h2>Need Pest Control for Your Cinema or Mall?</h2>
						<p>Contact Durga Bhavani Pest Control Service for specialized solutions in Hyderabad, Nizamabad, Karimnagar, Kamareddy, and Adilabad</p>
						<div className="cta-actions">
							<a href="tel:+918790128760" className="btn btn-primary">
								<span className="btn-icon">📞</span>
								Call +91 8790128760
							</a>
							<a href="/contact" className="btn btn-secondary">
								<span className="btn-icon">📝</span>
								Get Free Quote
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

