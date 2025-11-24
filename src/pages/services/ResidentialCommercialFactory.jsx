import { Link } from 'react-router-dom'
import SEO from '../../components/SEO.jsx'
import { seoData } from '../../data/seoData.js'

export default function ResidentialCommercialFactory() {
	return (
		<div className="service-detail-page">
			<SEO {...seoData.residentialCommercialFactory} />
			{/* Page Header */}
			<section className="service-header">
				<div className="container">
					<h1>Residential, Commercial & Factory Pest Control</h1>
					<p>Comprehensive pest control solutions for residential properties, commercial establishments, and industrial factories</p>
				</div>
			</section>

			{/* Process Section */}
			<section className="process-section">
				<div className="container">
					<h2>Our Comprehensive Pest Control Process</h2>
					<div className="process-grid">
						<div className="process-item">
							<div className="process-number">1</div>
							<h3>Detailed Inspection</h3>
							<p>Thorough assessment of your property to identify pest issues, entry points, and risk areas</p>
						</div>
						<div className="process-item">
							<div className="process-number">2</div>
							<h3>Customized Solution</h3>
							<p>Tailored pest management plan designed for your specific property type and requirements</p>
						</div>
						<div className="process-item">
							<div className="process-number">3</div>
							<h3>Professional Treatment</h3>
							<p>Safe and effective pest control treatments using industry-approved methods and products</p>
						</div>
						<div className="process-item">
							<div className="process-number">4</div>
							<h3>Preventive Maintenance</h3>
							<p>Regular follow-up visits and preventive treatments to maintain a pest-free environment</p>
						</div>
					</div>
				</div>
			</section>

			{/* Services Offered */}
			<section className="services-offered-section">
				<div className="container">
					<h2>Our Service Categories</h2>
					<div className="services-grid">
						<div className="service-item">
							<div className="service-icon">🏠</div>
							<h3>Residential Pest Control</h3>
							<p>Complete pest control solutions for homes, apartments, villas, and residential complexes including termite control, cockroach treatment, bed bug removal, and more</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🏢</div>
							<h3>Commercial Pest Control</h3>
							<p>Professional pest management for offices, retail stores, restaurants, hotels, and commercial buildings with minimal business disruption</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🏭</div>
							<h3>Factory Pest Control</h3>
							<p>Industrial-grade pest control for manufacturing units, warehouses, factories, and industrial facilities with specialized treatment protocols</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🦟</div>
							<h3>Mosquito Control</h3>
							<p>Comprehensive mosquito control through fogging, larviciding, and breeding site elimination for all property types</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🐭</div>
							<h3>Rodent Control</h3>
							<p>Effective rat and mouse control using advanced trapping, baiting, and proofing techniques</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🪳</div>
							<h3>Insect Control</h3>
							<p>Complete elimination of cockroaches, ants, bed bugs, and other common household and commercial pests</p>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="benefits-section">
				<div className="container">
					<h2>Why Choose Our Comprehensive Pest Control Services?</h2>
					<div className="benefits-grid">
						<div className="benefit-item">
							<div className="benefit-icon">🎯</div>
							<div className="benefit-content">
								<h3>All Property Types</h3>
								<p>Expert solutions for residential, commercial, and industrial properties</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🛡️</div>
							<div className="benefit-content">
								<h3>Safe & Effective</h3>
								<p>Uses safe, approved treatments that are effective yet gentle on the environment</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">⚡</div>
							<div className="benefit-content">
								<h3>24/7 Emergency Service</h3>
								<p>Round-the-clock availability for urgent pest control needs</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🏆</div>
							<div className="benefit-content">
								<h3>Licensed Professionals</h3>
								<p>Certified technicians with years of experience in all property types</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">📋</div>
							<div className="benefit-content">
								<h3>Maintenance Plans</h3>
								<p>Flexible maintenance schedules to keep your property pest-free year-round</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">✅</div>
							<div className="benefit-content">
								<h3>Guaranteed Results</h3>
								<p>We stand behind our work with comprehensive service warranties</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="cta-section">
				<div className="container">
					<div className="cta-content">
						<h2>Need Pest Control for Your Property?</h2>
						<p>Contact Durga Bhavani Pest Control Service for comprehensive pest control solutions in Hyderabad, Nizamabad, Karimnagar, Kamareddy, and Adilabad</p>
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

