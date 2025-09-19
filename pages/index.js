import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
	return (
		<>
			<SeoHead
				title="Rápidos de la Cuenca | Paquetería y Mensajería Segura en México"
				description="Envíos rápidos y confiables con Rápidos de la Cuenca. Rastrea tu paquete en línea, mensajería foránea y paquetería segura en todo México."
				keywords="paquetería, mensajería, envíos, logística, rastreo de paquetes, Rápidos de la Cuenca"
			/>
			<Layout>
				<Hero />
				<Feature />
				<Pricing />
			</Layout>
		</>
	);
}
