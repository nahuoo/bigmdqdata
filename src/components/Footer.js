"use client";

// Componente principal del Footer
export const Footer = () => {
  return (
    // Contenedor principal
    <>
      <div className="bg-white pt-16 pb-6">
        <div className="flex flex-col items-center justify-center gap-16 bg-white text-gray-600 w-[1280px] mx-auto">
          <div className="grid grid-cols-4 grid-rows-4 text-gray-900 font-medium w-full gap-y-2 gap-x-28 text-base items-center">
            <p className="uppercase font-bold text-3xl">Big mdq Data</p>
            <p className="uppercase font-bold text-xl">Servicios</p>
            <p className="uppercase font-bold text-xl">Soluciones</p>
            <p className="uppercase font-bold text-xl">Cultura</p>
            <p className="">Moreno 2689 Piso 7</p>
            <p>Analitica</p>
            <p>Capacitación</p>
            <p>Cultura</p>
            <p className="">contacto@bigmdqdata.com.ar</p>
            <p>Gobernanza de datos</p>
            <p>Capacitación</p>
            <p>Soluciones</p>
            <p className="">+54 9 223 520-0162</p>
            <p>Seguridad</p>
            <p>Inteligencia Artificial</p>
            <p>Analitica</p>
          </div>
          <CopyRigth />
        </div>
      </div>
    </>
  );
};

const CopyRigth = () => {
  return (
    <div className="w-full py-6 flex gap-20 bg-white text-gray-600 font-semibold">
      <span>Copyrights ©2023 BigMDQData</span>
      <span>
        Created by:{" "}
        <span className="font-bold text-purple-900">Another Team</span>
      </span>
    </div>
  );
};
