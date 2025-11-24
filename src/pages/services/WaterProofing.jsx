import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { trackServiceView } from '../../components/GoogleAnalytics.jsx'
import SEO from '../../components/SEO.jsx'
import { seoData } from '../../data/seoData.js'

export default function WaterProofing() {
	useEffect(() => {
		trackServiceView('Water Proofing')
	}, [])
	return (
		<div className="service-detail-page">
			<SEO {...seoData.waterProofing} />
			{/* Page Header */}
			<section className="service-header">
				<div className="container">
					<h1>Building Water Proofing Services</h1>
					<p>Professional water proofing solutions to protect your building from water damage and leakage</p>
				</div>
			</section>

			{/* Process Section */}
			<section className="process-section">
				<div className="container">
					<h2>Our Water Proofing Process</h2>
					<div className="process-grid">
						<div className="process-item">
							<div className="process-number">1</div>
							<h3>Site Inspection</h3>
							<p>Comprehensive assessment of your building to identify leakage points, damp areas, and structural vulnerabilities</p>
						</div>
						<div className="process-item">
							<div className="process-number">2</div>
							<h3>Solution Design</h3>
							<p>Customized water proofing plan based on building structure, location, and specific requirements</p>
						</div>
						<div className="process-item">
							<div className="process-number">3</div>
							<h3>Material Application</h3>
							<p>Professional application of high-quality water proofing materials using advanced techniques</p>
						</div>
						<div className="process-item">
							<div className="process-number">4</div>
							<h3>Quality Assurance</h3>
							<p>Thorough testing and inspection to ensure complete protection and long-lasting results</p>
						</div>
					</div>
				</div>
			</section>

			{/* Services Offered */}
			<section className="benefits-section">
				<div className="container">
					<h2>Our Water Proofing Services</h2>
					<div className="benefits-grid">
						<div className="benefit-item">
							<div className="benefit-icon">🏢</div>
							<div className="benefit-content">
								<h3>Terrace Water Proofing</h3>
								<p>Complete terrace and roof water proofing to prevent water seepage and structural damage</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🧱</div>
							<div className="benefit-content">
								<h3>Basement Water Proofing</h3>
								<p>Protect your basement from ground water infiltration and moisture problems</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🚿</div>
							<div className="benefit-content">
								<h3>Bathroom Water Proofing</h3>
								<p>Complete bathroom and wet area water proofing to prevent leakage to lower floors</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🏗️</div>
							<div className="benefit-content">
								<h3>Wall Water Proofing</h3>
								<p>External and internal wall water proofing to prevent dampness and paint damage</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🏭</div>
							<div className="benefit-content">
								<h3>Industrial Water Proofing</h3>
								<p>Heavy-duty water proofing solutions for industrial buildings and commercial structures</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🔧</div>
							<div className="benefit-content">
								<h3>Leakage Repair</h3>
								<p>Expert repair of existing leaks and water damage restoration services</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="benefits-section">
				<div className="container">
					<h2>Why Choose Our Water Proofing Services?</h2>
					<div className="benefits-grid">
						<div className="benefit-item">
							<div className="benefit-icon">🏆</div>
							<div className="benefit-content">
								<h3>Expert Technicians</h3>
								<p>Certified professionals with years of experience in building water proofing and construction</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">💎</div>
							<div className="benefit-content">
								<h3>Premium Materials</h3>
								<p>High-quality water proofing materials and sealants from trusted manufacturers</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🛡️</div>
							<div className="benefit-content">
								<h3>Long-Term Protection</h3>
								<p>Durable solutions that provide years of protection against water damage</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">📋</div>
							<div className="benefit-content">
								<h3>Detailed Reports</h3>
								<p>Comprehensive documentation of inspection findings and work completed</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">🔄</div>
							<div className="benefit-content">
								<h3>Warranty Coverage</h3>
								<p>Service warranty and follow-up support to ensure complete satisfaction</p>
							</div>
						</div>
						<div className="benefit-item">
							<div className="benefit-icon">💰</div>
							<div className="benefit-content">
								<h3>Competitive Pricing</h3>
								<p>Transparent pricing with no hidden costs for complete peace of mind</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="cta-section">
				<div className="container">
					<h2>Protect Your Building from Water Damage</h2>
					<p>Get a free inspection and quote for water proofing services. Our experts are ready to help you create a water-tight building.</p>
					<div className="cta-buttons">
						<a href="tel:+918790128760" className="btn btn-primary">
							Call +91 8790128760
						</a>
						<Link to="/contact" className="btn btn-secondary">
							Get Free Quote
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}

