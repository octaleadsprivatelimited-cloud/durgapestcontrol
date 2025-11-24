import { Link } from 'react-router-dom'
import SEO from '../../components/SEO.jsx'
import { seoData } from '../../data/seoData.js'

export default function FoggingService() {
	return (
		<div className="service-detail-page">
			<SEO {...seoData.foggingService} />
			{/* Page Header */}
			<section className="service-header">
				<div className="container">
					<h1>Fogging Service</h1>
					<p>Professional fogging services for mosquito control, disinfection, and pest elimination in residential and commercial properties</p>
				</div>
			</section>

			{/* Process Section */}
			<section className="process-section">
				<div className="container">
					<h2>Our Fogging Service Process</h2>
					<div className="process-grid">
						<div className="process-item">
							<div className="process-number">1</div>
							<h3>Site Assessment</h3>
							<p>Thorough inspection of your property to identify areas requiring fogging treatment</p>
						</div>
						<div className="process-item">
							<div className="process-number">2</div>
							<h3>Preparation</h3>
							<p>Proper preparation of the area including covering sensitive items and ensuring safety</p>
						</div>
						<div className="process-item">
							<div className="process-number">3</div>
							<h3>Fogging Treatment</h3>
							<p>Professional fogging using advanced equipment and safe, effective solutions</p>
						</div>
						<div className="process-item">
							<div className="process-number">4</div>
							<h3>Post-Treatment Care</h3>
							<p>Guidelines and follow-up to ensure maximum effectiveness and safety</p>
						</div>
					</div>
				</div>
			</section>

			{/* Services Offered */}
			<section className="services-offered-section">
				<div className="container">
					<h2>Fogging Services We Offer</h2>
					<div className="services-grid">
						<div className="service-item">
							<div className="service-icon">🦟</div>
							<h3>Mosquito Fogging</h3>
							<p>Effective mosquito control through thermal and ULV fogging to eliminate adult mosquitoes and prevent breeding</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🧹</div>
							<h3>Disinfection Fogging</h3>
							<p>Complete disinfection of spaces using fogging technology for bacteria, viruses, and pathogens</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🏢</div>
							<h3>Commercial Fogging</h3>
							<p>Large-scale fogging services for offices, warehouses, factories, and commercial establishments</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🏠</div>
							<h3>Residential Fogging</h3>
							<p>Safe fogging treatments for homes, apartments, and residential complexes</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🎬</div>
							<h3>Cinema & Mall Fogging</h3>
							<p>Specialized fogging services for cinemas, shopping malls, and entertainment venues</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🏭</div>
							<h3>Industrial Fogging</h3>
							<p>Industrial-grade fogging for factories, manufacturing units, and large facilities</p>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="benefits-section">
				<div className="container">
					<h2>Why Choose Our Fogging Services?</h2>
					<div className="benefits-grid">
						<div className="benefit-item">
							<div className="benefit-icon">⚡</div>
							<div className="benefit-content">
								<h3>Quick & Effective</h3>
								<p>Fast-acting fogging treatments that provide immediate results and long-lasting protection</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🛡️</div>
							<div className="benefit-content">
								<h3>Safe & Eco-Friendly</h3>
								<p>Uses safe, approved chemicals that are effective yet gentle on the environment</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">📏</div>
							<div className="benefit-content">
								<h3>Comprehensive Coverage</h3>
								<p>Fogging reaches all areas including hard-to-reach spaces for complete treatment</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🏆</div>
							<div className="benefit-content">
								<h3>Professional Equipment</h3>
								<p>State-of-the-art fogging machines and professional-grade solutions</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">⏰</div>
							<div className="benefit-content">
								<h3>Flexible Scheduling</h3>
								<p>Available for both scheduled maintenance and emergency fogging services</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">✅</div>
							<div className="benefit-content">
								<h3>Guaranteed Results</h3>
								<p>We guarantee effective fogging treatment with follow-up support</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="cta-section">
				<div className="container">
					<div className="cta-content">
						<h2>Need Professional Fogging Service?</h2>
						<p>Contact Durga Bhavani Pest Control Service for expert fogging solutions in Hyderabad, Nizamabad, Karimnagar, Kamareddy, and Adilabad</p>
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

