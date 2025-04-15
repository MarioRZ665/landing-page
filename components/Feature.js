import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Programación a medida: sitios web, e-commerce, sistemas internos, automatizaciones y más.",
  "Marketing digital inteligente: campañas en redes sociales, SEO, email marketing, branding y análisis de datos.",
  "Experiencia de usuario (UX/UI): creamos interfaces intuitivas, modernas y enfocadas en la conversión.",
  "Soporte continuo y optimización: no solo entregamos proyectos, sino que trabajamos contigo para mejorar continuamente la presencia y el rendimiento de tus plataformas a lo largo del tiempo."
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

          <motion.div className="flex flex-col items-left justify-center ml-auto w-full lg:w-12/12" variants={scrollAnimation}>
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              ¿Qué hacemos?
            </h3>
            <p className="my-2 text-black-500">
              En nuestra empresa unimos lo mejor de dos mundos: la tecnología y la creatividad.
              Nos especializamos en ofrecer soluciones digitales integrales que impulsan el crecimiento de marcas, emprendedores y empresas.

              Desde el desarrollo de plataformas web, aplicaciones personalizadas y sistemas a medida, hasta la creación de estrategias de marketing digital enfocadas en resultados reales.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: .2
                    }
                  }}>
                  {feature}
                </motion.li>
              )
              )}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
