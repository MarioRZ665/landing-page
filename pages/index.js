import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='Soluciones TI para Empresas | Retail, Cloud, Consultoría Tech y Mobile' />
      
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
