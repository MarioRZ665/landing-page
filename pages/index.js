import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
	return (
		<>
			<SeoHead
				googleSiteVerification="fELze3GnzS3ToTlmwbRzDTQMWedjauYnXczzq0HalNg"
				title="Rápidos de la Cuenca | Paquetería y Mensajería Segura en México"
				description="Envíos rápidos, seguros y confiables con Rápidos de la Cuenca. Rastrea tu paquete en línea, servicio de mensajería foránea y paquetería nacional en todo México."
				keywords="paquetería en México, mensajería segura, envíos nacionales, rastreo de paquetes, logística México, Rápidos de la Cuenca, envíos económicos, transporte de carga, mensajería exprés"
				canonical="https://www.rapidosdelacuenca.com.mx/"
				ogTitle="Rápidos de la Cuenca | Paquetería y Mensajería Segura en México"
				ogDescription="Tu servicio de paquetería y mensajería confiable en México. Rápidos de la Cuenca: rapidez, seguridad y confianza en cada envío."
				ogImage="https://www.rapidosdelacuenca.com.mx/images/og-image.jpg"
				ogUrl="https://www.rapidosdelacuenca.com.mx/"
				twitterCard="summary_large_image"
				twitterSite="@rapidosdelacuenca"
				jsonLd={[
					{
						"@context": "https://schema.org",
						"@type": "ParcelService",
						"name": "Rápidos de la Cuenca",
						"url": "https://www.rapidosdelacuenca.com.mx",
						"logo": "https://www.rapidosdelacuenca.com.mx/images/logo.png",
						"description": "Servicio de paquetería y mensajería segura en México. Rastreo en línea, envíos foráneos y logística confiable.",
						"areaServed": {
							"@type": "Country",
							"name": "México"
						},
						"contactPoint": {
							"@type": "ContactPoint",
							"telephone": "+52-2214079186",
							"contactType": "customer service",
							"availableLanguage": ["Spanish", "English"]
						}
					},
					{
						"@context": "https://schema.org",
						"@type": "LocalBusiness",
						"name": "Rápidos de la Cuenca - CDMX",
						"address": {
							"@type": "PostalAddress",
							"streetAddress": "Av. Transportistas No. 15, Nave 'C' Bodega 26, Central de Carga Oriente",
							"addressLocality": "Iztapalapa",
							"addressRegion": "CDMX",
							"postalCode": "09230",
							"addressCountry": "MX"
						},
						"telephone": "+52-5526337009"
					},
					{
						"@context": "https://schema.org",
						"@type": "FAQPage",
						"mainEntity": [
							{
								"@type": "Question",
								"name": "¿Qué servicios de mensajería ofrecen?",
								"acceptedAnswer": {
									"@type": "Answer",
									"text": "Ofrecemos envíos de documentos, paquetes y mercancías de hasta 50 kg con servicios exprés, estándar y económicos en todo México."
								}
							},
							{
								"@type": "Question",
								"name": "¿Tienen servicio de rastreo de paquetes?",
								"acceptedAnswer": {
									"@type": "Answer",
									"text": "Sí, contamos con seguimiento en línea para todos nuestros envíos nacionales e internacionales para garantizar la seguridad de tu mercancía."
								}
							}
						]
					}
				]}
			/>
			<Layout>
				<Hero />
				<Feature />
				<Pricing />
			</Layout>
		</>
	);
}
