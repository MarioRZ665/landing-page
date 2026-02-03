import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Entregas Ultra Rápidas: Recibe tus paquetes en tiempo récord con nuestro servicio exprés.",
  "Cobertura Global y Nacional: Conectamos tu mundo con envíos a más de 100 destinos cada rincón de la República Mexicana.",
  "Envíos Especializados: Manejamos con cuidado paquetes refrigerados, mercancía de alta prioridad y envíos de hasta 50 kg.",
  "Máxima Flexibilidad y Control: Elige el tipo de entrega (exprés, estándar o económica) y programa tus envíos en horarios específicos.",
  "10 Años de Experiencia: Nuestra década en el sector garantiza un servicio confiable, seguro y sin contratiempos.",
  "Soluciones para Todos: Ofrecemos planes y servicios a la medida tanto para clientes particulares como para grandes empresas."
];
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
              src="/assets/blog2-1.jpg"
              alt="Servicio de logística y distribución de Rápidos de la Cuenca"
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
              Con más de 10 años de experiencia en el sector, en Rápidos de la Cuenca entendemos la importancia de tu tiempo. Por eso, ofrecemos un servicio de mensajería y paquetería en la Ciudad de México (CDMX) diseñado para ser la solución más confiable y eficiente. Nuestra amplia trayectoria en las calles de la capital garantiza que tus paquetes lleguen a su destino de forma segura y puntual.
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
