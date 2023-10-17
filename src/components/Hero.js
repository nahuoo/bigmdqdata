"use client"
import gsap from 'gsap';
import { useEffect } from 'react';
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import { CgArrowLongDown } from 'react-icons/cg';

// Componente para la sección izquierda
const LeftSection = () => {
  return (
    <div className="absolute left-0 flex h-full max-w-screen-xl flex-col items-center justify-around bg-transparent py-8 sm:px-0 md:mx-auto md:px-4">
      {/* Selección de idiomas */}
      <div className="languages flex text-sm">
        <div>EN |</div>
        <div>| ES</div>
      </div>
      {/* Texto principal y flecha de desplazamiento */}
      <p className="big-data rotate-[270deg]">Big mdq Data</p>
      <CgArrowLongDown />
    </div>
  );
}

// Componente para la sección inferior
const BottomSection = () => {
  return (
    <div className="scroll-svg max-h-screen-xl absolute bottom-10 mx-auto flex w-full flex-col items-center justify-around bg-transparent px-4 py-8">
      {/* Ícono de desplazamiento */}
      <div className="icon-scroll"></div>
    </div>
  );
}

// Componente para la sección derecha con enlaces a redes sociales
const RightSection = () => {
  return (
    <div className="social-media-tab absolute right-0 mx-5 flex h-full max-w-screen-xl flex-col items-center justify-end bg-transparent px-4 py-20 text-2xl">
      {/* Enlaces a redes sociales */}
      <div className="flex h-[15%] flex-col items-center justify-between">
        <a href="https://www.instagram.com/splinetool/" target="_blank" rel="noopener noreferrer">
          <AiOutlineInstagram />
        </a>
        <a href="https://www.facebook.com/splinetool/" target="_blank" rel="noopener noreferrer">
          <AiOutlineFacebook />
        </a>
        <a href="https://wa.me/2348102345678" target="_blank" rel="noopener noreferrer">
          <AiOutlineWhatsApp />
        </a>
      </div>
    </div>
  );
}

// Componente para el fondo de letras grises
export const GrayLettersBackground = () => {
  return (
    <div className="animacion-5 right-50 md:text-[500px] text-[150px] absolute text-gray-400">
      BIG
    </div>
  );
}

// Componente principal del héroe
export const Hero = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      defaults: {
        ease: 'none',
        duration: 0.5,
      },
    });

    tl.fromTo('.languages', { opacity: 0 }, { opacity: 1, delay: 1, });
    tl.fromTo('.animacion-1', { opacity: 0 }, { opacity: 1 });
    tl.fromTo('.big-data', { opacity: 0 }, { opacity: 1 },'<');
    tl.fromTo('.scroll-svg', { opacity: 0 }, { opacity: 1 }, '<');
    tl.fromTo('.animacion-2', { opacity: 0 }, { opacity: 1 });
    tl.fromTo('.animacion-3', { opacity: 0 }, { opacity: 1 });
    tl.fromTo('.animacion-4', { opacity: 0 }, { opacity: 1 });
    tl.fromTo('.social-media-tab', { opacity: 0 }, { opacity: 1 });
    tl.fromTo('.animacion-5', { opacity: 0 }, { opacity: 0.1 }, '<');

  }, []);

  return (
    // Contenedor principal
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <LeftSection />
      <BottomSection />
      <RightSection />
      <GrayLettersBackground />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >

        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="animacion-1 relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Anunciamos nuestros últimos avances en ciencia de datos{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Lee más <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="animacion-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transformando datos para impulsar tu negocio en línea
            </h1>
            <p className="animacion-3 mt-6 text-lg leading-8 text-gray-600">
              Aplicamos una metodología adaptada a las necesidades de tu organización.
              Trabajamos en conjunto para compensar las debilidades y construir sobre las fortalezas.
            </p>
            <div className="animacion-4 mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contactános
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Aprende más <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >

        </div>
      </div>
    </div>
  );
}
