import HeaderNav from "@/components/Header/nav";
import React from "react";
import { useEffect, useState } from "react";

export default function LaEspera() {
    const [offsetY, setOffsetY] = useState(0);
    useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
        <>
            <HeaderNav />
            <div className="relative w-full h-[800px] overflow-hidden">
                    <img
                        src="/contenido/LaEspera/011.jpg.png"
                        alt="Portada"
                        className="w-full h-full object-cover object-center transition-transform duration-200"
                        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
                    />
            </div>


            <section className="max-w-7xl mx-auto px-6 pt-10 grid md:grid-cols-2 gap-8 items-center">
                
                 <div>
                    <h2 className="text-3xl font-bold mb-4">La Espera</h2>
                    <p className="text-lg leading-relaxed text-gray-500">
                    La Espera (2024-2026) is a 2D animated short film that follows a young artist as she waits for a train that never seems to arrive. In order to stay entertained, she draws in her sketchbook how people wait. An ironic and absurd comedy that reflects on the small human interactions that sometimes go unnoticed.

                    </p>
                </div>
                <div className="mb-9">
                    <video
                    className="w-full rounded-lg shadow-lg"
                    src="/contenido/LaEspera/TEASER_LA_ESPERA.mp4" 
                    controls
                    autoPlay
                    muted
                    />
                </div>
            </section>
            <div className="relative w-full h-[500px] overflow-hidden">
                <img
                    src="/contenido/LaEspera/004.jpg.png"
                    alt="Portada"
                    className="w-full h-full object-cover object-center transition-transform duration-200"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-5xl font-bold drop-shadow-lg">
                        Proceso La Espera
                    </h3>
                </div>
            </div>
            <section className="max-w-7xl mx-auto p-7 mt-20 grid md:grid-cols-3 gap-6">
                <img
                src="/contenido/LaEspera/001.jpg.png"
                loading="lazy"
                alt="ESPERA"
                className=" h-full w-full object-cover object-center "
                />
                <img
                src="/contenido/LaEspera/002.jpg.png"
                loading="lazy"
                alt="ESPERA"
                className=" h-full w-full object-cover object-center "
                />
                <img
                src="/contenido/LaEspera/003.jpg.png"
                loading="lazy"
                alt="ESPERA"
                className=" h-full w-full object-cover object-center "
                />
            </section>
            <section className="max-w-7xl mx-auto p-7 mt-20 grid md:grid-cols-3 gap-6">
                <img
                src="/contenido/LaEspera/004.jpg.png"
                loading="lazy"
                alt="ESPERA"
                className=" h-full w-full object-cover object-center "
                />
                <img
                src="/contenido/LaEspera/005.jpg.png"
                loading="lazy"
                alt="ESPERA"
                className=" h-full w-full object-cover object-center "
                />
                <img
                src="/contenido/LaEspera/007.jpg.png"
                loading="lazy"
                alt="ESPERA"
                className=" h-full w-full object-cover object-center "
                />
            </section>
            <section className="max-w-7xl mx-auto p-7 mt-20 grid md:grid-cols-3 gap-6">
                <img
                src="/contenido/LaEspera/008.jpg.png"
                loading="lazy"
                alt="ESPERA"
                className=" h-full w-full object-cover object-center "
                />
                <img
                src="/contenido/LaEspera/009.jpg.png"
                loading="lazy"
                alt="ESPERA"
                className=" h-full w-full object-cover object-center "
                />
                <img
                src="/contenido/LaEspera/010.jpg.png"
                loading="lazy"
                alt="ESPERA"
                className=" h-full w-full object-cover object-center "
                />
            </section>
        </>
    );
}