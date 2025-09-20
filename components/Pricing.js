import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
// CORRECCIÓN: Se eliminó la importación que causaba el error.
// import ButtonOutline from "./misc/ButtonOutline"; 
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
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
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
              Elige la solución que mejor se adapte a tus necesidades, sin importar el destino o la urgencia.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            
            {/* Tarjeta 1: Envío Estándar */}
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/standard-box.png" 
                    width={145}
                    height={165}
                    alt="Servicio de Envío Estándar"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Envío Estándar
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Cobertura Nacional
                  </li>
                  <li className="relative check custom-list my-2">
                    Entrega de 3 a 5 días
                  </li>
                  <li className="relative check custom-list my-2">
                    Paquetes de hasta 20 kg
                  </li>
                  <li className="relative check custom-list my-2">
                    Rastreo Básico
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    Económico
                  </p>
                  {/* CAMBIO: Se reemplazó ButtonOutline por un botón estilizado */}
                  <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange ">
                    Cotizar Ahora
                  </button>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            
            {/* Tarjeta 2: Envío Exprés (Destacada) */}
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-orange-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 shadow-lg"
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/express-box.png" 
                    width={145}
                    height={165}
                    alt="Servicio de Envío Exprés"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Envío Exprés
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Cobertura Nacional e Internacional
                  </li>
                  <li className="relative check custom-list my-2">
                    Entrega desde 2 horas
                  </li>
                  <li className="relative check custom-list my-2">
                    Paquetes de hasta 50 kg
                  </li>
                  <li className="relative check custom-list my-2">
                    Rastreo en Tiempo Real
                  </li>
                  <li className="relative check custom-list my-2">
                    Recolección a Domicilio
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    Prioritario
                  </p>
                  <ButtonPrimary>Cotizar Urgente</ButtonPrimary>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>

            {/* Tarjeta 3: Servicios Especiales */}
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/special-box.png"
                    width={145}
                    height={165}
                    alt="Servicios Especiales de Logística"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Servicios Especiales
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Envíos Refrigerados
                  </li>
                  <li className="relative check custom-list my-2">
                    Mercancía de Alta Prioridad
                  </li>
                  <li className="relative check custom-list my-2">
                    Entrega en Horarios Específicos
                  </li>
                  <li className="relative check custom-list my-2">
                    Logística a la Medida
                  </li>
                  <li className="relative check custom-list my-2">
                    Soporte Dedicado
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    A Medida
                  </p>
                  {/* CAMBIO: Se reemplazó ButtonOutline por un botón estilizado */}
                   <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange ">
                    Contactar Asesor
                  </button>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
              Nuestra Amplia Red de Cobertura
            </motion.h3>
            <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
              Llegamos a donde necesites, conectando cada rincón de México y el mundo.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}>
              <Maps className="w-full h-auto" />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
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
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
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

