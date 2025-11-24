import { useState } from 'react'
import SEO from '../components/SEO.jsx'
import { seoData } from '../data/seoData.js'

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState(null)

	const faqs = [
		{
			category: 'General Questions',
			questions: [
				{
					q: 'What areas do you serve for pest control services?',
					a: 'We provide professional pest control services across Hyderabad, Nizamabad, Karimnagar, Kamareddy, and Adilabad. Our team covers both residential and commercial properties in these areas with 24/7 emergency service availability.'
				},
				{
					q: 'How long has Durga Bhavani Pest Control Service been in business?',
					a: 'We have been serving customers since 2003, providing reliable and effective pest control solutions across Telangana. With over 20 years of experience, we have built a reputation for quality service and customer satisfaction.'
				},
				{
					q: 'Are your pest control treatments safe for children and pets?',
					a: 'Yes, absolutely! We use eco-friendly and safe pest control methods that are approved for use in homes with children and pets. Our technicians are trained to apply treatments safely, and we always provide guidelines for post-treatment care.'
				},
				{
					q: 'Do you offer emergency pest control services?',
					a: 'Yes, we provide 24/7 emergency pest control services across all our service areas. Whether you have a sudden infestation or urgent pest problem, our team is available round the clock to help you.'
				}
			]
		},
		{
			category: 'Service & Pricing',
			questions: [
				{
					q: 'How much does pest control service cost?',
					a: 'Pest control pricing depends on the type of service, property size, and severity of infestation. We offer free inspections and quotes for all services. Contact us at +91 8790128760 or +91 9542681438 for a customized quote.'
				},
				{
					q: 'Do you provide free inspections?',
					a: 'Yes, we offer free inspections for all pest control services. Our expert technicians will assess your property, identify pest issues, and provide a detailed quote with no obligation.'
				},
				{
					q: 'What payment methods do you accept?',
					a: 'We accept cash, credit cards, debit cards, UPI, and net banking. Payment can be made after service completion, and we provide detailed invoices for all transactions.'
				},
				{
					q: 'Do you offer warranty on your services?',
					a: 'Yes, we provide a 30-day guarantee on most pest control services. If pests return within the warranty period, we will provide a free follow-up treatment to ensure complete elimination.'
				}
			]
		},
		{
			category: 'Termite Control',
			questions: [
				{
					q: 'How do I know if I have termites?',
					a: 'Common signs include mud tubes on walls, hollow-sounding wood, discarded wings near windows, and visible termite damage. Our technicians can perform a thorough inspection to identify termite activity in your property.'
				},
				{
					q: 'How long does termite treatment take?',
					a: 'Termite treatment duration depends on the infestation level and property size. Typically, treatment takes 2-4 hours, with follow-up visits scheduled as needed. We provide a complete treatment plan during the initial inspection.'
				},
				{
					q: 'Is termite treatment safe for my family?',
					a: 'Yes, we use safe termiticides that are approved for residential use. Our technicians follow strict safety protocols, and we provide clear instructions for post-treatment care to ensure your family\'s safety.'
				}
			]
		},
		{
			category: 'Cockroach & Bed Bug Control',
			questions: [
				{
					q: 'How quickly can you eliminate cockroaches?',
					a: 'Our cockroach control treatments typically show results within 24-48 hours, with complete elimination achieved within 1-2 weeks depending on infestation severity. We use advanced gel baits and targeted treatments for effective results.'
				},
				{
					q: 'Do I need to leave my home during bed bug treatment?',
					a: 'For heat treatment, you may need to leave for a few hours. For chemical treatment, you can usually stay in your home. Our technicians will advise you based on the treatment method chosen and provide detailed instructions.'
				},
				{
					q: 'How do you prevent cockroaches from returning?',
					a: 'We provide comprehensive treatment including gel baits, residual sprays, and preventive measures. We also offer maintenance plans and tips to keep your property cockroach-free long-term.'
				}
			]
		},
		{
			category: 'Water Proofing Services',
			questions: [
				{
					q: 'What areas can be water proofed?',
					a: 'We provide water proofing for terraces, basements, bathrooms, walls, and balconies. Our services include both new construction water proofing and repair of existing leaks.'
				},
				{
					q: 'How long does water proofing last?',
					a: 'Quality water proofing can last 10-15 years or more with proper maintenance. We use premium materials and provide warranty coverage on our water proofing services.'
				},
				{
					q: 'Can you fix existing water leakage?',
					a: 'Yes, we specialize in leakage repair and restoration. Our technicians identify the source of leaks and provide permanent solutions using advanced water proofing techniques and materials.'
				}
			]
		},
		{
			category: 'Commercial Services',
			questions: [
				{
					q: 'Do you provide pest control for restaurants?',
					a: 'Yes, we offer specialized restaurant pest control services with food-safe treatments that comply with FSSAI regulations. We understand the unique needs of food service establishments and provide discreet, effective solutions.'
				},
				{
					q: 'What commercial properties do you service?',
					a: 'We service offices, warehouses, hotels, restaurants, retail stores, hospitals, schools, and other commercial establishments across Hyderabad, Nizamabad, Karimnagar, Kamareddy, and Adilabad.'
				},
				{
					q: 'Do you offer maintenance contracts for businesses?',
					a: 'Yes, we offer customized maintenance contracts for commercial properties with regular scheduled visits, priority service, and discounted rates. Contact us to discuss a plan tailored to your business needs.'
				}
			]
		}
	]

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<div className="faq-page">
			<SEO {...seoData.faq} />
			
			{/* Page Header */}
			<section className="page-header">
				<div className="container">
					<h1>Frequently Asked Questions</h1>
					<p>Find answers to common questions about our pest control and water proofing services</p>
				</div>
			</section>

			{/* FAQ Content */}
			<section className="faq-content">
				<div className="container">
					{faqs.map((category, categoryIndex) => (
						<div key={categoryIndex} className="faq-category">
							<h2>{category.category}</h2>
							<div className="faq-list">
								{category.questions.map((faq, index) => {
									const globalIndex = faqs.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.questions.length, 0) + index
									return (
										<div key={index} className={`faq-item ${openIndex === globalIndex ? 'open' : ''}`}>
											<button 
												className="faq-question" 
												onClick={() => toggleFAQ(globalIndex)}
												aria-expanded={openIndex === globalIndex}
											>
												<span>{faq.q}</span>
												<svg 
													width="20" 
													height="20" 
													viewBox="0 0 24 24" 
													fill="none" 
													stroke="currentColor" 
													strokeWidth="2"
													className={`faq-icon ${openIndex === globalIndex ? 'open' : ''}`}
												>
													<path d="M6 9l6 6 6-6"/>
												</svg>
											</button>
											<div className="faq-answer">
												<p>{faq.a}</p>
											</div>
										</div>
									)
								})}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* CTA Section */}
			<section className="cta-section">
				<div className="container">
					<h2>Still Have Questions?</h2>
					<p>Our expert team is ready to help. Contact us for personalized assistance and free consultations.</p>
					<div className="cta-buttons">
						<a href="tel:+918790128760" className="btn btn-primary">
							Call +91 8790128760
						</a>
						<a href="/contact" className="btn btn-secondary">
							Contact Us
						</a>
					</div>
				</div>
			</section>
		</div>
	)
}

