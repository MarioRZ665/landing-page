import React, { useMemo } from "react";
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

				{/* --- Título de la Sección de Servicios --- */}
				<div className="flex flex-col w-full">
					<ScrollAnimationWrapper>
						<motion.h3
							variants={scrollAnimation}
							className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
						>
							Soluciones Logísticas a Tu Medida: Envíos Nacionales e Internacionales
						</motion.h3>
						<motion.p
							variants={scrollAnimation}
							className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
						>
							Descubre nuestros servicios de envíos de documentos, paquetes y mercancías. Ofrecemos una solución integral de logística adaptada a cada necesidad, con   entregas rápidas   y seguras a nivel nacional en México.
						</motion.p>
					</ScrollAnimationWrapper>

					{/* --- Contenedor de la Tarjeta de Servicios con el Texto Actualizado --- */}
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
									{/* Columna de Información con el nuevo texto */}
									<div className="md:col-span-5 flex flex-col text-center md:text-left h-full">
										<h4 className="text-xl lg:text-2xl text-black-600 font-medium capitalize mb-4">
											Servicios de Paquetería y Mensajería
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
				<div className="flex flex-col w-full my-14">
					<ScrollAnimationWrapper>
						<motion.h3
							variants={scrollAnimation}
							className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12  mx-auto">
							Sucursales Clave en México: Conectando tu Logística
						</motion.h3>
						<motion.p className="leading-normal mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
							Nuestra   amplia red de cobertura   te garantiza un servicio de   paquetería y mensajería   eficiente. Visita nuestras sucursales y optimiza tu logística con nosotros.
						</motion.p>
					</ScrollAnimationWrapper>

					{/* Bloque de Sucursales en 3 Columnas sin imágenes */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8 px-4 md:px-0">
						{/* Sucursal CIUDAD DE MÉXICO */}
						<ScrollAnimationWrapper>
							<motion.div
								variants={scrollAnimation}
								className="bg-[#D1F2EB] rounded-xl p-6 shadow-md flex flex-col justify-between h-full border-2 border-[#4D8C68]"
								whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
							>
								<h4 className="text-xl font-bold text-black-600 mb-3">CIUDAD DE MÉXICO</h4>
								<p className="text-black-500 text-sm mb-4 flex-grow">
									(CABEZA DE JUÁREZ)<br />
									CENTRAL DE CARGA ORIENTE<br />
									AV. TRANSPORTISTAS No. 15<br />
									NAVE 'C' BODEGA 26<br />
									COL. ÁLVARO OBREGÓN<br />
									CP 09230 DEL. IZTAPALAPA<br />
								</p>
								<p className="font-semibold text-blue-700 text-lg">
									TELS: (55) 2633 7009, 2633 7011, 5529 3240<br />
									<span className="text-gray-600 text-sm">(OCURRE OFICINA)</span>
								</p>
							</motion.div>
						</ScrollAnimationWrapper>

						{/* Sucursal PUEBLA, PUE */}
						<ScrollAnimationWrapper>
							<motion.div
								variants={scrollAnimation}
								className="bg-[#D1F2EB] rounded-xl p-6 shadow-md flex flex-col justify-between h-full border-2 border-[#4D8C68]"
								whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
							>
								<h4 className="text-xl font-bold text-black-600 mb-3">PUEBLA, PUE</h4>
								<p className="text-black-500 text-sm mb-4 flex-grow">
									AV. EDUCADORES<br />
									ESQ. DIEGO RIVERA No. 5601<br />
									LOCAL 'I' COL. SATÉLITE<br />
									1a SECCIÓN CP. 72320<br />
								</p>
								<p className="font-semibold text-blue-700 text-lg">
									TELS: 01 (222) 236 6160<br />
									<span className="text-gray-600 text-sm">(OCURRE OFICINA)</span>
								</p>
							</motion.div>
						</ScrollAnimationWrapper>

						{/* Sucursal TUXTEPEC, OAX */}
						<ScrollAnimationWrapper>
							<motion.div
								variants={scrollAnimation}
								className="bg-[#D1F2EB] rounded-xl p-6 shadow-md flex flex-col justify-between h-full border-2 border-[#4D8C68]"
								whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
							>
								<h4 className="text-xl font-bold text-black-600 mb-3">TUXTEPEC, OAX</h4>
								<p className="text-black-500 text-sm mb-4 flex-grow">
									CALLE 1a MAYO No. 120<br />
									COL. MARÍA LUISA CP 68320<br />
									FRENTE A DORMITORIOS ADO<br />
								</p>
								<p className="font-semibold text-blue-700 text-lg">
									TELS: 01 (287) 875 2680<br />
									<span className="text-gray-600 text-sm">(OCURRE OFICINA)</span>
								</p>
							</motion.div>
						</ScrollAnimationWrapper>

						{/* Sucursal APANGO ACAJETE PUEBLA */}
						<ScrollAnimationWrapper>
							<motion.div
								variants={scrollAnimation}
								className="bg-[#D1F2EB] rounded-xl p-6 shadow-md flex flex-col justify-between h-full border-2 border-[#4D8C68]"
								whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
							>
								<h4 className="text-xl font-bold text-black-600 mb-3">APANGO ACAJETE PUEBLA</h4>
								<p className="text-black-500 text-sm mb-4 flex-grow">
									CALLE 5 SUR No. 5<br />
								</p>
								<p className="font-semibold text-blue-700 text-lg">
									TELS: 01 (222) 275 7343<br />
									<span className="text-gray-600 text-sm">(OCURRE OFICINA)</span>
								</p>
							</motion.div>
						</ScrollAnimationWrapper>
					</div>
					{/* Fin del Bloque de Sucursales */}


				</div>

				{/* --- Sección de Testimonios --- */}
				<div className="flex flex-col w-full my-13" id="testimoni">
					<ScrollAnimationWrapper>
						<motion.h3
							variants={scrollAnimation}
							className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/13 sm: lg:w-4/13 mx-auto">
							La Confianza de Cientos de Clientes Satisfechos
						</motion.h3>
						<motion.p
							variants={scrollAnimation}
							className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
						>
							Conoce las historias de éxito que nos respaldan. Nuestros   clientes satisfechos   han logrado   optimizar su logística   y   mejorar sus entregas   gracias a nuestra experiencia.
						</motion.p>
					</ScrollAnimationWrapper>
					<ScrollAnimationWrapper className="w-full flex flex-col py-12">
						<motion.div variants={scrollAnimation}>
							<Testimoni />
						</motion.div>
					</ScrollAnimationWrapper>
				</div>

			</div>
		</div>
	);
};

export default Pricing;