import HeaderNav from "@/components/Header/nav";
import React from "react";
import { useEffect, useState } from "react";
import "../../css/app.css";
import GalleryTrabajo from "@/components/GalleryTrabajo";
import VideoCarousel from "@/components/Video";


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
                    src="/contenido/003.SORTILEGIOS MUESLEY/001.jpg"
                    alt="Portada"
                    className="w-full h-full object-cover object-center transition-transform duration-200"
                    style={{ transform: `translateY(${offsetY * 0.1}px)` }}
                />

                <div className="absolute top-0 left-0 w-full flex justify-center pt-25">
                    <h3 className=" text-5xl font-bold text-black drop-shadow-lg text-center">
                    SORTILEGIOS MUESLEY
                    </h3>
                </div>
            </div>


            <section className="max-w-7xl mx-auto px-6 pt-10 grid md:grid-cols-2 gap-8 items-center">
                
                 <div>
                    <h2 className="text-3xl font-bold mb-4">Sortilegios Muesley</h2>
                    <p className="text-lg leading-relaxed text-gray-500">
                    La Espera (2024-2026) is a 2D animated short film that follows a young artist as she waits for a train that never seems to arrive. In order to stay entertained, she draws in her sketchbook how people wait. An ironic and absurd comedy that reflects on the small human interactions that sometimes go unnoticed.

                    </p>
                </div>
                <div className="mb-9">
                    <video
                    className="w-full rounded-lg shadow-lg"
                    src="/contenido/003.SORTILEGIOS MUESLEY/stop-motion grupo 8 (1).mp4" 
                    controls
                    autoPlay
                    muted
                    />
                </div>
            </section>
            <div className="relative w-full h-[500px] overflow-hidden">
                <img
                    src="/contenido/003.SORTILEGIOS MUESLEY/001.jpg"
                    alt="Portada"
                    className="w-full h-full object-cover object-center transition-transform duration-200"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-5xl font-bold drop-shadow-lg">
                        PROCESO SORTILEGIO MUESLEY
                    </h3>
                </div>
            </div>
            <GalleryTrabajo
                images={[
                    "ScreenShot 2024-06-17 000952.png",
                    "ScreenShot 2024-06-17 001000.png",
                    "ScreenShot 2024-06-17 001013.png",
                    "ScreenShot 2024-06-17 001022.png",
                    "ScreenShot 2024-06-17 001027.png",
                    "ScreenShot 2024-06-17 001033.png",
                    "ScreenShot 2024-06-17 001042.png",
                    "ScreenShot 2024-06-17 001109.png",
                    "ScreenShot 2024-06-17 001116.png",
                    "ScreenShot 2024-06-17 001132.png",
                    "ScreenShot 2024-06-17 001215.png",
                    "ScreenShot 2024-06-17 001218.png",
                    "ScreenShot 2024-06-17 001227.png",
                    "ScreenShot 2024-06-17 001234.png",
                    "ScreenShot 2024-06-17 001238.png",
                    "ScreenShot 2024-06-17 001243.png",
                    "ScreenShot 2024-06-17 001259.png",
                    "ScreenShot 2024-06-17 001305.png",
                    "ScreenShot 2024-06-17 001337.png",
                    "ScreenShot 2024-06-17 001350.png",
                    "ScreenShot 2024-06-17 001407.png",
                ]}
                basePath="/contenido/003.SORTILEGIOS MUESLEY"
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
                   
                    "ScreenShot 2024-06-17 001151.png",
                    "ScreenShot 2024-06-17 001123.png",
                    "ScreenShot 2024-06-17 001145.png",
                    "ScreenShot 2024-06-17 001200.png",  
                ]}
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
