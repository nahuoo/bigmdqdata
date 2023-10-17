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
    <div className="right-50 md:text-[500px] text-[150px] absolute text-gray-900/5">
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
        duration: 1,
      },
    });

    tl.fromTo('.languages', { opacity: 0 }, { opacity: 1, delay: 1, });
    tl.fromTo('.big-data', { opacity: 0 }, { opacity: 1 });
    tl.fromTo('.scroll-svg', { opacity: 0 }, { opacity: 1 }, '<');
    tl.fromTo('.social-media-tab', { opacity: 0 }, { opacity: 1 });

  }, []);

  return (
    // Contenedor principal
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <LeftSection />
      <BottomSection />
      <RightSection />
      <GrayLettersBackground />
    </div>
  );
}
