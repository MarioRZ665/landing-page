import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        
        {/* --- Título de la Sección --- */}
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Un Servicio para Cada Necesidad
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Te presentamos una solución integral que se adapta a tus necesidades, sin importar el destino o la urgencia.
            </motion.p>
          </ScrollAnimationWrapper>

          {/* --- Contenedor de la Tarjeta Única con el Texto Actualizado --- */}
          <div className="flex flex-col w-full items-center my-8 lg:my-12">
            <div className="w-full lg:w-11/12 xl:w-10/12">
              <ScrollAnimationWrapper className="flex justify-center">
                <motion.div
                  variants={scrollAnimation}
                  className="border-2 border-gray-500 rounded-xl p-6 lg:p-8 grid grid-cols-1 md:grid-cols-5 gap-x-8 gap-y-8 items-center w-full"
                  whileHover={{
                    scale: 1.02,
                    transition: {
                      duration: .2
                    }
                  }}
                >
                  {/* Columna de la Imagen */}
                  <div className="md:col-span-2 flex justify-center items-center w-full h-full">
                    <Image
                      src="/assets/5.jpg"
                      width={370}
                      height={666}
                      alt="Servicios de paquetería Rápidos de la Cuenca"
                    />
                  </div>

                  {/* Columna de Información con el nuevo texto */}
                  <div className="md:col-span-3 flex flex-col text-center md:text-left h-full">
                    <h4 className="text-xl lg:text-2xl text-black-600 font-medium capitalize mb-4">
                      Servicios Ofrecidos
                    </h4>
                    <ul className="list-inside text-black-500 flex-grow text-base lg:text-lg">
                      <li className="relative check custom-list my-2">
                        <strong>Tipos de Envíos:</strong> Documentos, paquetes y mercancías de hasta 50 kg.
                      </li>
                      <li className="relative check custom-list my-2">
                        <strong>Cobertura:</strong> Toda la República Mexicana y envíos a más de 100 países.
                      </li>
                      <li className="relative check custom-list my-2">
                        <strong>Tiempos de Entrega:</strong> Opciones exprés (desde 2 hrs), estándar y económica (hasta 5 días).
                      </li>
                      <li className="relative check custom-list my-2">
                        <strong>Servicios Adicionales:</strong> Envíos refrigerados, alta prioridad y entregas en horarios específicos.
                      </li>
                    </ul>
                  </div>

                  {/* Sección de CTA */}
                  <div className="md:col-span-5 flex flex-col sm:flex-row items-center justify-between w-full mt-4 pt-4 border-t border-gray-200">
                    <p className="text-2xl lg:text-3xl text-black-600 font-medium text-center mb-4 sm:mb-0">
                      Soluciones a tu Medida
                    </p>
                    <ButtonPrimary>Cotizar Ahora</ButtonPrimary>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>

        {/* --- Sección de Red de Cobertura --- */}
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
              Nuestra Amplia Red de Cobertura
            </motion.h3>
            <motion.p className="leading-normal mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
              Llegamos a donde necesites, conectando cada rincón de México y el mundo.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}>
              <Maps className="w-full h-auto" />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>

        {/* --- Sección de Testimonios --- */}
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              La Confianza que Mueve a Nuestros Clientes
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              Estas son las historias de clientes que han optimizado su logística y crecido con nosotros.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>

        {/* --- Sección de CTA Final --- */}
        <div className="relative w-full mt-16">
          <ScrollAnimationWrapper>
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    ¿Listo para Optimizar <br /> tus Envíos?
                  </h5>
                  <p>Hablemos de cómo podemos ayudarte a llegar más lejos.</p>
                </div>
                <ButtonPrimary>Empezar Ahora</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        
      </div>
    </div>
  );
};

export default Pricing;