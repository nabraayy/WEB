import HeaderNav from "@/components/Header/nav";
import React from "react";
import { useEffect, useState } from "react";
import "../../css/app.css";
import GalleryTrabajo from "@/components/GalleryTrabajo";


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
                    src="/contenido/000.CON-TRABAJO/ARTESFINALES/cocina_01.jpg"
                    alt="Portada"
                    className="w-full h-full object-cover object-center transition-transform duration-200"
                    style={{ transform: `translateY(${offsetY * 0.1}px)` }}
                />

                <div className="absolute top-0 left-0 w-full flex justify-center pt-25">
                    <h3 className=" text-5xl font-bold text-black drop-shadow-lg text-center">
                    CON-TRABAJO
                    </h3>
                </div>
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
                    src="/contenido/000.CON-TRABAJO/ANIMACIÓN/cocina_animacion.mp4" 
                    controls
                    autoPlay
                    muted
                    />
                </div>
            </section>
            <div className="relative w-full h-[500px] overflow-hidden">
                <img
                    src="/contenido/000.CON-TRABAJO/ARTESFINALES/001.jpg"
                    alt="Portada"
                    className="w-full h-full object-cover object-center transition-transform duration-200"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-5xl font-bold drop-shadow-lg">
                        PROCESO CON-TRABAJO
                    </h3>
                </div>
            </div>
            <section className="max-w-7xl mx-auto p-7 mt-20 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[200px]">
                {[
                    "003.jpg",
                    "006.jpg",
                    "007.jpg",
                    "008.jpg",
                    "baño_01.jpg",
                    "cocina_01.jpg",
                    "escaleras.jpg",
                    "psicologica_02.jpg",
                    "psicologica.jpg",
                ].map((file, index) => (
                    <img
                    key={file}
                    src={`/contenido/000.CON-TRABAJO/ARTESFINALES/${file}`}
                    alt={file}
                    loading="lazy"
                    className={`w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105 ${
                        index % 3 === 0 ? "row-span-2" : ""
                    }`}
                    />
                ))}
            </section>
            <GalleryTrabajo />
        </>
    );
}
