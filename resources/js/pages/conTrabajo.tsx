import HeaderNav from "@/components/Header/nav";
import React from "react";
import { useEffect, useState } from "react";
import "../../css/app.css";
import GalleryTrabajo from "@/components/GalleryTrabajo";
import VideoCarousel from "@/components/Video";
import PortfolioGrid from "@/components/Porfolio";


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


            <section className="w-full px-6 pt-10 grid md:grid-cols-2 gap-8 items-center">
                
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
            <div className="relative py-10 text-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative inline-block bg-white px-6">
                <h4 className="text-2xl font-semibold tracking-wide text-gray-800">
                PROCESO CON-TRABAJO
                </h4>
            </div>
            </div>
            <GalleryTrabajo
                images={[
                    "003.jpg",
                    "006.jpg",
                    "007.jpg",
                    "008.jpg",
                    "baño_01.jpg",
                    "cocina_01.jpg",
                    "escaleras.jpg",
                    "psicologica_02.jpg",
                    "psicologica.jpg",]}
                basePath="/contenido/000.CON-TRABAJO/ARTESFINALES"
            />
            <div className="relative py-10 text-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative inline-block bg-white px-6">
                <h4 className="text-2xl font-semibold tracking-wide text-gray-800">
                FONDOS CON-TRABAJO
                </h4>
            </div>
            </div>

            <GalleryTrabajo
                images={[
                    "diagrama_casa.jpg",
                    "fondo_001_parada_bus_color.jpg",
                    "fondo_001_parada_bus_línea.jpg",
                    "fondo_003_escaleras_línea.jpg",
                    "fondo_003_escaleras_color.jpg",
                    "fondo_001_parada_bus_color.jpg",
                    "fondo_004_cocina_línea.jpg",
                    "fondo_004_cocina_color.jpg",
                    "fondo_004_cocina_línea.jpg",]}
                basePath="/contenido/000.CON-TRABAJO/FONDOS"
            />
            <div className="relative py-10 text-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative inline-block bg-white px-6">
                <h4 className="text-2xl font-semibold tracking-wide text-gray-800">
                CREACIÓN PERSONAJES CON-TRABAJO
                </h4>
            </div>
            </div>
            <GalleryTrabajo
                images={[
                    "amparin_001.jpg",
                    "aprox_001.jpg",
                    "bocetos_alien_001.jpg",
                    "bocetos_alien_002.jpg",
                    "bocetos_alien_003.jpg",
                    "bocetos_alien_004.jpg",
                    "bocetos_alien_005.jpg",
                    "bocetos_señoras_001.jpg",
                    "bocetos_señoras_002.jpg",
                    "gallinas_001.jpg",
                    "gallinas_002.jpg",
                    "opciones_abrigo.jpg",
                    ]}
                basePath="/contenido/000.CON-TRABAJO/DISEÑO DE PERSONAJES"
            />
            <div className="relative py-10 text-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative inline-block bg-white px-6">
                <h4 className="text-2xl font-semibold tracking-wide text-gray-800">
                ANIMACIONES
                </h4>
            </div>
            </div>
            <VideoCarousel
            
                videos={[
                    "cocina_animacion.mp4",
                    "escena_psicologica.mp4",
                    "psicologica.mp4",
                ]}
                basePath="/contenido/000.CON-TRABAJO/ANIMACIÓN"
            />

            

               
          
        </>
    );
}
