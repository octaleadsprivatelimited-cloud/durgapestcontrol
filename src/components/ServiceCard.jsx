import { Link } from 'react-router-dom'

// Image mapping by service slug (for backward compatibility)
const serviceImagesBySlug = {
	'termite-control': '/images/TERMITE CONTROL1.webp',
	'cockroach-control': '/images/COCKROACH CONTROL1.webp',
	'bed-bug-control': '/images/Bed Bug Treatment.avif',
	'rodent-control': '/images/RODENT CONTROL.webp',
	'ant-control': '/images/ANT CONTROL1.webp',
	'mosquito-control': '/images/MOSQUITO CONTROL1.webp',
	'commercial-pest-control': '/images/Office Pest Control.webp',
	'restaurant-pest-control': '/images/restaurant-pest-control.jpg',
	'warehouse-pest-control': '/images/Warehouse Pest Control.webp',
	'hotel-pest-control': '/images/Hotel Pest Control.avif',
	'retail-pest-control': '/images/Retail Pest Control.avif',
	'sanitization': '/images/Sanitization Services.webp',
	'water-proofing': '/images/building-waterproofing.jpg',
	'fogging-service': '/images/fogging-service.jpg',
	'cinema-shopping-malls': '/images/cinema-shopping-malls.jpg',
	'pre-construction-service': '/images/TERMITE CONTROL1.webp',
	'residential-commercial-factory': '/images/residential-commercial-factory.jpg',
	'anti-termite-pipeline': '/images/termite-reticulation-system-1.jpg',
}

// Image mapping by service title (for WhatsApp links)
const serviceImagesByTitle = {
	'Termite Control': '/images/TERMITE CONTROL1.webp',
	'Cockroach Control': '/images/COCKROACH CONTROL1.webp',
	'Bed Bug Treatment': '/images/Bed Bug Treatment.avif',
	'Rodent Control': '/images/RODENT CONTROL.webp',
	'Ant Control': '/images/ANT CONTROL1.webp',
	'Mosquito Control': '/images/MOSQUITO CONTROL1.webp',
	'Office Pest Control': '/images/Office Pest Control.webp',
	'Restaurant Pest Control': '/images/restaurant-pest-control.jpg',
	'Warehouse Pest Control': '/images/Warehouse Pest Control.webp',
	'Hotel Pest Control': '/images/Hotel Pest Control.avif',
	'Retail Pest Control': '/images/Retail Pest Control.avif',
	'Sanitization Services': '/images/Sanitization Services.webp',
	'Building Water Proofing': '/images/building-waterproofing.jpg',
	'Fogging Service': '/images/fogging-service.jpg',
	'Cinema & Shopping Malls': '/images/cinema-shopping-malls.jpg',
	'Pre-Construction Service': '/images/TERMITE CONTROL1.webp',
	'Residential, Commercial & Factory': '/images/residential-commercial-factory.jpg',
	'Anti-Termite Pipeline Service': '/images/termite-reticulation-system-1.jpg',
}

export default function ServiceCard({ title, excerpt, to, imageSrc, whatsappLink }) {
	// Get image based on title first (for WhatsApp links), then by slug, then default
	let defaultImage = serviceImagesByTitle[title]
	
	if (!defaultImage && to) {
		// Extract service slug from the 'to' prop for backward compatibility
		const serviceSlug = to.split('/').pop() || ''
		defaultImage = serviceImagesBySlug[serviceSlug]
	}
	
	// Fallback to default image
	if (!defaultImage) {
		defaultImage = '/images/Bed Bug Treatment.avif'
	}
	
	// Determine if we should use WhatsApp link or regular link
	const isWhatsApp = whatsappLink || (to && to.startsWith('https://wa.me'))
	const linkUrl = whatsappLink || to
	
	return (
		<div className="service-card">
			<div className="service-card-header">
				<div className="service-icon">
					{getServiceIcon(title)}
				</div>
				<div className="service-image-container">
					<img 
						src={imageSrc || defaultImage} 
						alt={title} 
						className="service-image"
						loading="lazy"
					/>
				</div>
			</div>
			<div className="service-card-body">
				<h3 className="service-title">{title}</h3>
				<p className="service-description">{excerpt}</p>
			</div>
			<div className="service-card-footer">
				{isWhatsApp ? (
					<a href={linkUrl} target="_blank" rel="noopener noreferrer" className="service-btn">
						<span className="btn-text">Learn More</span>
						<span className="btn-arrow">→</span>
					</a>
				) : (
					<Link to={to} className="service-btn">
						<span className="btn-text">Learn More</span>
						<span className="btn-arrow">→</span>
					</Link>
				)}
			</div>
		</div>
	)
}

function getServiceIcon(title) {
	const iconMap = {
		'Termite Control': '🏠',
		'Cockroach Control': '🪳',
		'Bed Bug Treatment': '🛏️',
		'Rodent Control': '🐭',
		'Ant Control': '🐜',
		'Mosquito Control': '🦟',
		'Office Pest Control': '🏢',
		'Restaurant Pest Control': '🍽️',
		'Warehouse Pest Control': '🏭',
		'Hotel Pest Control': '🏨',
		'Retail Pest Control': '🛍️',
		'Sanitization Services': '🧽',
		'Fogging Service': '🌫️',
		'Cinema & Shopping Malls': '🎬',
		'Pre-Construction Service': '🏗️',
		'Residential, Commercial & Factory': '🏭',
		'Anti-Termite Pipeline Service': '🔧',
	}
	return iconMap[title] || '🛡️'
}
