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
      name: "Envíos Realizados Cada Día",
      number: "1,200",
      icon: AiOutlineSchedule,
    },
    {
      name: "Empresas que Confían en Rápidos de la Cuenca",
      number: "150",
      icon: AiOutlineShop,
    },
    {
      name: "Ciudades con Cobertura Activa",
      number: "300",
      icon: AiOutlineEnvironment,
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <header className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper viewport={{ once: true, amount: 0 }}>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          {/* Texto Hero */}
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <section
              className="text-center sm:text-left py-12 px-4 bg-white"
              aria-labelledby="hero-title"
            >
              <h1
                id="hero-title"
                className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black leading-normal"
              >
                Envíos Rápidos y Seguros en México | Rápidos de la Cuenca
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl">
                Más de 10 años entregando confianza. En{" "}
                <strong>Rápidos de la Cuenca</strong> ofrecemos envíos locales
                desde solo 2 horas, cobertura nacional y soluciones logísticas
                personalizadas para tu negocio.
              </p>
            </section>

            {/* Botones de contacto */}
            <div className="w-full flex flex-wrap justify-center sm:justify-start gap-4 mt-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/522214079186?text=Hola,%20me%20gustaría%20cotizar%20un%20envío."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cotizar envío por WhatsApp"
                prefetch={false}
              >
                <ButtonPrimary>
                  <span className="flex items-center gap-2">
                    Cotiza al Instante por WhatsApp
                    <AiOutlineWhatsApp size={24} aria-hidden="true" />
                  </span>
                </ButtonPrimary>
              </a>

              {/* Teléfono */}
              <a
                href="tel:+522214079186"
                aria-label="Llamar a Rápidos de la Cuenca"
                className="flex items-center gap-3 py-3 px-5 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 hover:shadow-md transition-all duration-300 group"
              >
                <FiPhoneCall
                  className="text-orange-500 group-hover:scale-110 transition-transform"
                  size={22}
                  aria-hidden="true"
                />
                <span className="font-semibold text-gray-800 text-lg">
                  22 1407 9186
                </span>
              </a>
            </div>

            {/* Contacto organizado en tarjetas */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:contacto@rapidosdelacuenca.com.mx"
                className="flex-1 py-3 px-5 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 hover:shadow-md transition-all duration-300 text-center"
              >
                <span className="font-semibold text-gray-800 text-lg">
                  contacto@rapidosdelacuenca.com.mx
                </span>
              </a>
              <a
                href="mailto:logistica@rapidosdelacuenca.com.mx"
                className="flex-1 py-3 px-5 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 hover:shadow-md transition-all duration-300 text-center"
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
                alt="Camión de paquetería de Rápidos de la Cuenca en ruta"
                quality={100}
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* Estadísticas */}
      <section
        aria-label="Estadísticas de Rápidos de la Cuenca"
        className="relative w-full flex mt-12"
      >
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
                    <Icon
                      className="h-6 w-6 text-orange-500"
                      aria-hidden="true"
                    />
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
      </section>
    </header>
  );
};

export default Hero;
