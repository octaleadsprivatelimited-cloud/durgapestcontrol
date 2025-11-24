import { Link } from 'react-router-dom'
import SEO from '../../components/SEO.jsx'
import { seoData } from '../../data/seoData.js'

export default function PreConstructionService() {
	return (
		<div className="service-detail-page">
			<SEO {...seoData.preConstructionService} />
			{/* Page Header */}
			<section className="service-header">
				<div className="container">
					<h1>Pre-Construction Pest Control Service</h1>
					<p>Professional pre-construction pest control and termite treatment to protect your building from the ground up</p>
				</div>
			</section>

			{/* Process Section */}
			<section className="process-section">
				<div className="container">
					<h2>Our Pre-Construction Process</h2>
					<div className="process-grid">
						<div className="process-item">
							<div className="process-number">1</div>
							<h3>Site Preparation</h3>
							<p>Thorough site inspection and preparation before construction begins</p>
						</div>
						<div className="process-item">
							<div className="process-number">2</div>
							<h3>Soil Treatment</h3>
							<p>Comprehensive soil treatment to create a barrier against termites and other pests</p>
						</div>
						<div className="process-item">
							<div className="process-number">3</div>
							<h3>Foundation Treatment</h3>
							<p>Application of protective treatments during foundation and structure development</p>
						</div>
						<div className="process-item">
							<div className="process-number">4</div>
							<h3>Quality Assurance</h3>
							<p>Final inspection and certification to ensure complete protection</p>
						</div>
					</div>
				</div>
			</section>

			{/* Services Offered */}
			<section className="services-offered-section">
				<div className="container">
					<h2>Pre-Construction Services We Offer</h2>
					<div className="services-grid">
						<div className="service-item">
							<div className="service-icon">🏗️</div>
							<h3>Soil Treatment</h3>
							<p>Pre-construction soil treatment to prevent termite infestation before building begins</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🏠</div>
							<h3>Foundation Protection</h3>
							<p>Termite barrier installation during foundation construction for long-term protection</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🧱</div>
							<h3>Structural Treatment</h3>
							<p>Treatment of structural elements including beams, columns, and walls during construction</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🛡️</div>
							<h3>Chemical Barrier</h3>
							<p>Installation of chemical barriers to prevent pest entry into the building</p>
						</div>
						<div className="service-item">
							<div className="service-icon">📋</div>
							<h3>Certification</h3>
							<p>Provision of pre-construction treatment certificates for compliance and warranty</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🔍</div>
							<h3>Regular Monitoring</h3>
							<p>Ongoing monitoring during construction phase to ensure treatment effectiveness</p>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="benefits-section">
				<div className="container">
					<h2>Why Pre-Construction Pest Control is Essential</h2>
					<div className="benefits-grid">
						<div className="benefit-item">
							<div className="benefit-icon">💰</div>
							<div className="benefit-content">
								<h3>Cost-Effective</h3>
								<p>Prevention is more economical than post-construction treatment and repairs</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🛡️</div>
							<div className="benefit-content">
								<h3>Complete Protection</h3>
								<p>Creates a comprehensive barrier that protects the entire structure from the ground up</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">✅</div>
							<div className="benefit-content">
								<h3>Long-Lasting Results</h3>
								<p>Pre-construction treatments provide protection for many years</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">📜</div>
							<div className="benefit-content">
								<h3>Compliance & Warranty</h3>
								<p>Meets building code requirements and provides warranty documentation</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🏗️</div>
							<div className="benefit-content">
								<h3>Structural Integrity</h3>
								<p>Protects building structure from termite damage and pest-related deterioration</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🔒</div>
							<div className="benefit-content">
								<h3>Peace of Mind</h3>
								<p>Ensures your investment is protected from day one of construction</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="cta-section">
				<div className="container">
					<div className="cta-content">
						<h2>Planning a New Construction Project?</h2>
						<p>Contact Durga Bhavani Pest Control Service for professional pre-construction pest control in Hyderabad, Nizamabad, Karimnagar, Kamareddy, and Adilabad</p>
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

