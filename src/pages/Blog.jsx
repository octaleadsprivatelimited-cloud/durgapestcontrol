import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { seoData } from '../data/seoData.js'

export default function Blog() {
	const blogPosts = [
		{
			slug: 'complete-guide-termite-control-hyderabad',
			title: 'Complete Guide to Termite Control in Hyderabad: Prevention and Treatment',
			excerpt: 'Learn everything about termite control in Hyderabad, Nizamabad, Karimnagar, Kamareddy, and Adilabad. Discover prevention tips, treatment methods, and when to call professionals.',
			date: '2024-12-15',
			category: 'Termite Control',
			image: '/images/blog/termite-control.jpg'
		},
		{
			slug: 'cockroach-control-methods-hyderabad',
			title: 'Effective Cockroach Control Methods for Homes and Businesses',
			excerpt: 'Discover proven cockroach control methods used by professionals in Hyderabad. Learn about German cockroach treatment, prevention strategies, and when to seek expert help.',
			date: '2024-12-10',
			category: 'Cockroach Control',
			image: '/images/blog/cockroach-control.jpg'
		},
		{
			slug: 'bed-bug-treatment-hyderabad',
			title: 'Bed Bug Treatment: Heat vs Chemical Methods Explained',
			excerpt: 'Compare heat treatment and chemical treatment for bed bugs. Understand which method works best for your situation in Hyderabad and surrounding areas.',
			date: '2024-12-05',
			category: 'Bed Bug Control',
			image: '/images/blog/bed-bug-treatment.jpg'
		},
		{
			slug: 'water-proofing-terrace-hyderabad',
			title: 'Terrace Water Proofing: Complete Guide for Hyderabad Homes',
			excerpt: 'Protect your terrace from water damage with professional water proofing. Learn about materials, methods, and maintenance for long-lasting protection in Hyderabad.',
			date: '2024-11-28',
			category: 'Water Proofing',
			image: '/images/blog/water-proofing.jpg'
		},
		{
			slug: 'commercial-pest-control-hyderabad',
			title: 'Commercial Pest Control: Essential Guide for Businesses',
			excerpt: 'Why commercial pest control is crucial for restaurants, offices, and warehouses in Hyderabad. Learn about compliance, treatment schedules, and maintenance plans.',
			date: '2024-11-20',
			category: 'Commercial Services',
			image: '/images/blog/commercial-pest-control.jpg'
		},
		{
			slug: 'mosquito-control-prevention-hyderabad',
			title: 'Mosquito Control and Prevention: Protect Your Family from Diseases',
			excerpt: 'Effective mosquito control methods to prevent dengue, malaria, and other diseases. Professional fogging services available in Hyderabad, Nizamabad, Karimnagar, Kamareddy, and Adilabad.',
			date: '2024-11-15',
			category: 'Mosquito Control',
			image: '/images/blog/mosquito-control.jpg'
		},
		{
			slug: 'rodent-control-hyderabad-homes',
			title: 'Rodent Control: How to Eliminate Rats and Mice from Your Home',
			excerpt: 'Complete guide to rodent control in Hyderabad. Learn about rat and mouse prevention, trapping methods, and professional extermination services.',
			date: '2024-11-10',
			category: 'Rodent Control',
			image: '/images/blog/rodent-control.jpg'
		},
		{
			slug: 'basement-water-proofing-hyderabad',
			title: 'Basement Water Proofing: Solutions for Damp and Leakage Issues',
			excerpt: 'Solve basement water problems with professional water proofing. Expert solutions for dampness, leakage, and moisture control in Hyderabad properties.',
			date: '2024-11-05',
			category: 'Water Proofing',
			image: '/images/blog/basement-waterproofing.jpg'
		}
	]

	return (
		<div className="blog-page">
			<SEO {...seoData.blog} />
			
			{/* Page Header */}
			<section className="page-header">
				<div className="container">
					<h1>Pest Control & Water Proofing Blog</h1>
					<p>Expert tips, guides, and insights on pest control and water proofing services in Hyderabad, Nizamabad, Karimnagar, Kamareddy, and Adilabad</p>
				</div>
			</section>

			{/* Blog Posts Grid */}
			<section className="blog-content">
				<div className="container">
					<div className="blog-grid">
						{blogPosts.map((post, index) => {
							// Map categories to actual images
							const getImage = (category, slug) => {
								const imageMap = {
									'Termite Control': '/images/TERMITE CONTROL1.webp',
									'Cockroach Control': '/images/COCKROACH CONTROL1.webp',
									'Bed Bug Control': '/images/Bed Bug Treatment.avif',
									'Water Proofing': slug.includes('basement') ? '/images/hero-bg.jpg' : '/images/hero-bg.webp',
									'Commercial Services': '/images/COMMERCIAL PEST CONTROL.webp',
									'Mosquito Control': '/images/MOSQUITO CONTROL1.webp',
									'Rodent Control': '/images/RODENT CONTROL.webp',
								}
								return imageMap[category] || '/images/hero-bg.jpg'
							}
							
							return (
							<article key={index} className="blog-card">
								<div className="blog-card-image">
									<img 
										src={getImage(post.category, post.slug)} 
										alt={post.title}
										loading="lazy"
									/>
									<div className="blog-card-category">{post.category}</div>
								</div>
								<div className="blog-card-content">
									<div className="blog-card-date">{new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
									<h2 className="blog-card-title">
										<Link to={`/blog/${post.slug}`}>{post.title}</Link>
									</h2>
									<p className="blog-card-excerpt">{post.excerpt}</p>
									<Link to={`/blog/${post.slug}`} className="blog-card-link">
										Read More
										<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
											<path d="M5 12h14M12 5l7 7-7 7"/>
										</svg>
									</Link>
								</div>
							</article>
							)
						})}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="cta-section">
				<div className="container">
					<h2>Need Professional Pest Control or Water Proofing Services?</h2>
					<p>Contact Durga Bhavani Pest Control Service for expert solutions across Hyderabad, Nizamabad, Karimnagar, Kamareddy, and Adilabad</p>
					<div className="cta-buttons">
						<a href="tel:+918790128760" className="btn btn-primary">
							Call +91 8790128760
						</a>
						<a href="/contact" className="btn btn-secondary">
							Get Free Quote
						</a>
					</div>
				</div>
			</section>
		</div>
	)
}

