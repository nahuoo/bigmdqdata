"use client";
// Listado del Footer
const data = [
  {
    title: "Big mdq Data",
    details: [
      "Moreno 2689 Piso 7",
      "contacto@bigmdqdata.com.ar",
      "+54 9 223 520-0162",
    ],
  },
  {
    title: "Servicios",
    details: ["Capacitación", "Analitica", "Cultura"],
  },
  {
    title: "Soluciones",
    details: ["Seguridad", "Analitica", "Analitica"],
  },
  {
    title: "Cultura",
    details: ["Capacitación", "Capacitación", "Capacitación"],
  },
];
// Componente principal del Footer
export const Footer = () => {
  return (
    // Contenedor principal
    <>
      <div className="bg-white pb-6">
        <div className="flex flex-col items-center justify-center gap-8 bg-white text-gray-600 w-[1280px] mx-auto border-t border-black/50 pt-10">
          <div className="flex justify-between font-medium w-full gap-y-2 gap-x-28 text-base items-center">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <p
                  className={`uppercase font-bold text-indigo-700 h-[40px] ${
                    index === 0 ? "text-3xl" : "text-xl"
                  }`}
                >
                  {item.title}
                </p>
                {item.details.map((detail, detailIndex) => (
                  <p
                    key={detailIndex}
                    className="cursor-pointer border-b-2 border-transparent hover:border-indigo-600 w-fit transition-all duration-300 h-[30px]"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <CopyRigth />
        </div>
      </div>
    </>
  );
};
// Componete del CopyRigth
const CopyRigth = () => {
  return (
    <div className="w-full py-6 flex justify-between gap-20 bg-white text-gray-900 font-bold text-lg">
      <span>Copyrights ©2023 BigMDQData</span>
      <span>
        Created by:{" "}
        <span className="font-bold text-indigo-600 underline cursor-pointer">
          Another Team
        </span>
      </span>
    </div>
  );
};
