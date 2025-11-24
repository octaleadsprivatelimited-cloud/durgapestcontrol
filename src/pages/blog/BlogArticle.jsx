import { useParams, Link } from 'react-router-dom'
import SEO from '../../components/SEO.jsx'
import TermiteControlGuide from './TermiteControlGuide.jsx'
import CockroachControlMethods from './CockroachControlMethods.jsx'
import BedBugTreatment from './BedBugTreatment.jsx'
import WaterProofingTerrace from './WaterProofingTerrace.jsx'
import CommercialPestControl from './CommercialPestControl.jsx'
import MosquitoControl from './MosquitoControl.jsx'
import RodentControl from './RodentControl.jsx'
import BasementWaterProofing from './BasementWaterProofing.jsx'

const blogArticles = {
	'complete-guide-termite-control-hyderabad': TermiteControlGuide,
	'cockroach-control-methods-hyderabad': CockroachControlMethods,
	'bed-bug-treatment-hyderabad': BedBugTreatment,
	'water-proofing-terrace-hyderabad': WaterProofingTerrace,
	'commercial-pest-control-hyderabad': CommercialPestControl,
	'mosquito-control-prevention-hyderabad': MosquitoControl,
	'rodent-control-hyderabad-homes': RodentControl,
	'basement-water-proofing-hyderabad': BasementWaterProofing,
}

export default function BlogArticle() {
	const { slug } = useParams()
	const ArticleComponent = blogArticles[slug]

	if (!ArticleComponent) {
		return (
			<div className="blog-article-page">
				<div className="container" style={{padding: '100px 20px', textAlign: 'center'}}>
					<h1>Article Not Found</h1>
					<p>The blog article you're looking for doesn't exist.</p>
					<Link to="/blog" className="btn btn-primary">Back to Blog</Link>
				</div>
			</div>
		)
	}

	return <ArticleComponent />
}

