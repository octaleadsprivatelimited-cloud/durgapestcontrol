import { Link } from 'react-router-dom'
import SEO from '../../components/SEO.jsx'
import { seoData } from '../../data/seoData.js'

export default function AntiTermitePipeline() {
	return (
		<div className="service-detail-page">
			<SEO {...seoData.antiTermitePipeline} />
			{/* Page Header */}
			<section className="service-header">
				<div className="container">
					<h1>Anti-Termite Pipeline Service</h1>
					<p>Professional anti-termite pipeline installation and treatment to protect your property from termite infestation</p>
				</div>
			</section>

			{/* Service Image Section */}
			<section className="service-image-section">
				<div className="container">
					<div className="service-image-wrapper">
						<img 
							src="/images/termite-reticulation-system-1.jpg" 
							alt="Anti-Termite Reticulation System Installation" 
							className="service-main-image"
							loading="lazy"
						/>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="process-section">
				<div className="container">
					<h2>Our Anti-Termite Pipeline Process</h2>
					<div className="process-grid">
						<div className="process-item">
							<div className="process-number">1</div>
							<h3>Site Assessment</h3>
							<p>Comprehensive inspection of your property to determine the best pipeline installation strategy</p>
						</div>
						<div className="process-item">
							<div className="process-number">2</div>
							<h3>Pipeline Design</h3>
							<p>Customized pipeline system design based on property structure and termite risk assessment</p>
						</div>
						<div className="process-item">
							<div className="process-number">3</div>
							<h3>Installation</h3>
							<p>Professional installation of anti-termite pipeline system around the foundation and perimeter</p>
						</div>
						<div className="process-item">
							<div className="process-number">4</div>
							<h3>Chemical Treatment</h3>
							<p>Application of termiticides through the pipeline system for effective and long-lasting protection</p>
						</div>
						<div className="process-item">
							<div className="process-number">5</div>
							<h3>Regular Monitoring</h3>
							<p>Periodic inspection and maintenance to ensure the system continues to provide optimal protection</p>
						</div>
						<div className="process-item">
							<div className="process-number">6</div>
							<h3>Follow-up Service</h3>
							<p>Ongoing support and re-treatment as needed to maintain termite-free environment</p>
						</div>
					</div>
				</div>
			</section>

			{/* Services Offered */}
			<section className="services-offered-section">
				<div className="container">
					<h2>Anti-Termite Pipeline Services We Offer</h2>
					<div className="services-grid">
						<div className="service-item">
							<div className="service-icon">🔧</div>
							<h3>Pipeline Installation</h3>
							<p>Professional installation of anti-termite pipeline system around building foundation and perimeter</p>
						</div>
						<div className="service-item">
							<div className="service-icon">💧</div>
							<h3>Chemical Injection</h3>
							<p>Regular injection of termiticides through pipeline system for continuous protection</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🛡️</div>
							<h3>Barrier Creation</h3>
							<p>Creation of chemical barrier that prevents termites from entering your property</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🔍</div>
							<h3>Inspection & Monitoring</h3>
							<p>Regular inspection and monitoring of pipeline system to ensure effectiveness</p>
						</div>
						<div className="service-item">
							<div className="service-icon">🔄</div>
							<h3>Maintenance Service</h3>
							<p>Periodic maintenance and re-treatment to maintain long-term protection</p>
						</div>
						<div className="service-item">
							<div className="service-icon">📋</div>
							<h3>Documentation</h3>
							<p>Complete documentation and certification of anti-termite pipeline installation</p>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="benefits-section">
				<div className="container">
					<h2>Why Choose Anti-Termite Pipeline Service?</h2>
					<div className="benefits-grid">
						<div className="benefit-item">
							<div className="benefit-icon">🛡️</div>
							<div className="benefit-content">
								<h3>Long-Term Protection</h3>
								<p>Pipeline system provides continuous protection against termites for many years</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">💉</div>
							<div className="benefit-content">
								<h3>Targeted Treatment</h3>
								<p>Precise application of termiticides exactly where needed through pipeline system</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🌱</div>
							<div className="benefit-content">
								<h3>Eco-Friendly Solution</h3>
								<p>Safe and environmentally responsible treatment methods that protect your family and pets</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">💰</div>
							<div className="benefit-content">
								<h3>Cost-Effective</h3>
								<p>Prevents costly termite damage and repairs by protecting your property proactively</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🔧</div>
							<div className="benefit-content">
								<h3>Easy Maintenance</h3>
								<p>Pipeline system allows for easy re-treatment without major disruption to your property</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">✅</div>
							<div className="benefit-content">
								<h3>Proven Effectiveness</h3>
								<p>Industry-proven method that has successfully protected thousands of properties</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="cta-section">
				<div className="container">
					<div className="cta-content">
						<h2>Protect Your Property with Anti-Termite Pipeline Service</h2>
						<p>Contact Durga Bhavani Pest Control Service for professional anti-termite pipeline installation in Hyderabad, Nizamabad, Karimnagar, Kamareddy, and Adilabad</p>
						<div className="cta-actions">
							<a href="tel:+918790128760" className="btn btn-primary">
								<span className="btn-icon">📞</span>
								Call +91 8790128760
							</a>
							<Link to="/contact" className="btn btn-secondary">
								<span className="btn-icon">📝</span>
								Get Free Quote
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

