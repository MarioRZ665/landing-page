import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

// Íconos
import {
  AiOutlineWhatsApp,
  AiOutlineSchedule,
  AiOutlineShop,
  AiOutlineEnvironment,
} from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const Hero = ({
  listUser = [
    {
      name: "Envíos Diarios",
      number: "1,200",
      icon: AiOutlineSchedule,
    },
    {
      name: "Clientes Empresariales",
      number: "150",
      icon: AiOutlineShop,
    },
    {
      name: "Ciudades Cubiertas",
      number: "300",
      icon: AiOutlineEnvironment,
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          {/* Texto Hero */}
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <section className="text-center sm:text-left py-12 px-4 bg-white">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black leading-normal">
                Rapidos de la Cuenca: Envíos Rápidos y Seguros
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl">
                Con una década de experiencia, garantizamos la entrega puntual
                de tus envíos. Ofrecemos soluciones ágiles para entregas locales
                desde 2 horas, una sólida cobertura en todo México. Somos tu
                aliado estratégico en logística.
              </p>
            </section>

            {/* Botones de contacto */}
            <div className="w-full flex flex-col sm:flex-row items-center sm:items-start gap-5 mt-6 flex-wrap">
              {/* WhatsApp */}
              <a
                href="https://wa.me/522214079186?text=Hola,%20me%20gustaría%20cotizar%20un%20envío."
                target="_blank"
                rel="noopener noreferrer"
              >
                <ButtonPrimary>
                  <span className="flex items-center gap-2">
                    Cotiza tu Envío
                    <AiOutlineWhatsApp size={24} />
                  </span>
                </ButtonPrimary>
              </a>

              {/* Teléfono */}
              <a
                href="tel:+522214079186"
                className="flex items-center gap-3 py-3 px-5 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 hover:shadow-md transition-all duration-300 group"
              >
                <FiPhoneCall
                  className="text-orange-500 group-hover:scale-110 transition-transform"
                  size={22}
                />
                <span className="font-semibold text-gray-800 text-lg">
                  22 1407 9186
                </span>
              </a>
            </div>

            {/* Correos de contacto */}
            <div className="mt-6 flex flex-col gap-3">
              {/* Contacto */}
              <a
                href="mailto:contacto@rapidosdelacuenca.com.mx"
                className="flex items-center gap-3 py-3 px-5 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 hover:shadow-md transition-all duration-300"
              >
                <span className="font-semibold text-gray-800 text-lg">
                  contacto@rapidosdelacuenca.com.mx
                </span>
              </a>

              {/* Logística */}
              <a
                href="mailto:logistica@rapidosdelacuenca.com.mx"
                className="flex items-center gap-3 py-3 px-5 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 hover:shadow-md transition-all duration-300"
              >
                <span className="font-semibold text-gray-800 text-lg">
                  logistica@rapidosdelacuenca.com.mx
                </span>
              </a>
            </div>
          </div>

          {/* Imagen principal */}
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/truck-1.png"
                alt="Camión de envíos rápidos y seguros de Rapidos de la Cuenca"
                quality={100}
                width={800}
                height={600}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* Estadísticas */}
      <div className="relative w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white z-10">
          {listUser.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                key={index}
                custom={{ duration: 2 + index }}
                variants={scrollAnimation}
              >
                <div className="flex mx-auto w-40 sm:w-auto">
                  <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                    <Icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl text-gray-900 font-bold">
                      {stat.number}+
                    </p>
                    <p className="text-lg text-gray-600">{stat.name}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-gray-800 opacity-5 w-11/12 rounded-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
