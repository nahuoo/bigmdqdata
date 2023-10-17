"use client"
import { useEffect } from "react";
import gsap from 'gsap'

const Intro = () => {
   useEffect(() => {
      let tl = gsap.timeline({
        defaults: {
          ease: 'none',
          duration: 0.6,
        },
      });
      tl.fromTo('.hr', { width: '10px', left: '50%' }, { width: '100vw', left: '0%', opacity: 0 });
      tl.to('.box1', { y: '-0.8%', ease: 'expo.inOut' }, '<');
      tl.to('.box1', { y: '-100%', ease: 'expo.inOut' });
      tl.to('.box2', { y: '100%', ease: 'expo.inOut' }, '<');
     }, []);
 
    return (
        <div className="h-full w-full">
        <div className="box1 bg-red-50 w-full h-[50%] fixed z-10 flex justify-end items-center flex-col">
          <div className="text-[rgba(159, 63, 9, 0.8)] text-5xl font-bold">
            BIG MDQ
          </div>
        </div>
        <div className="hr w-full h-[0.2%] bg-gray-500 z-9 top-[49.7%] fixed"></div> {/* Línea gris en medio */}
        <div className="box2 bg-red-50 w-full h-[50%] fixed top-1/2 z-10 flex justify-center items-start">
          <div className="text-[rgba(159, 63, 9, 0.8)] text-5xl font-bold">DATA</div>
        </div>
      </div>
      
    );
  };

export default Intro;