import React from "react";

const sucursales = [
  {
    ciudad: "CIUDAD DE MÉXICO (Cabeza de Juárez)",
    direccion: [
      "Central de Carga Oriente",
      "Av. Transportistas No. 15, Nave 'C' Bodega 26",
      "Col. Álvaro Obregón, CP 09230, Del. Iztapalapa",
    ],
    telefonos: "(55) 2633 7009, 2633 7011, 5529 3240",
    ocurre: true,
  },
  {
    ciudad: "PUEBLA, PUE",
    direccion: [
      "Av. Educadores Esq. Diego Rivera No. 5601",
      "Local 'I' Col. Satélite 1a Sección CP. 72320",
    ],
    telefonos: "01 (222) 236 6160",
    ocurre: true,
  },
  {
    ciudad: "TUXTEPEC, OAX",
    direccion: [
      "Calle 1a Mayo No. 120",
      "Col. María Luisa CP 68320",
      "Frente a Dormitorios ADO",
    ],
    telefonos: "01 (287) 875 2680",
    ocurre: true,
  },
  {
    ciudad: "APANGO ACAJETE, PUEBLA",
    direccion: ["Calle 5 Sur No. 5"],
    telefonos: "01 (222) 275 7343",
    ocurre: true,
  },
];

const Footer = () => {
  return (
    <footer className="bg-white-300 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-6">
        <p className="text-black-600 mb-6 font-bold text-xl text-center">Sucursales y Teléfonos</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {sucursales.map((sucursal, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-5 border border-gray-100">
              <p className="font-semibold text-orange-600 mb-2">{sucursal.ciudad}</p>
              {sucursal.direccion.map((linea, i) => (
                <p key={i} className="text-gray-700 text-sm">{linea}</p>
              ))}
              <p className="mt-2 text-black-600 font-medium">Tels: <span className="text-black-500">{sucursal.telefonos}</span></p>
              {sucursal.ocurre && (
                <p className="italic text-gray-400 text-xs mt-1">Ocurre oficina</p>
              )}
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-center text-sm">©{new Date().getFullYear()} - Rápidos de la cuenca</p>
      </div>
    </footer>
  );
};

export default Footer;