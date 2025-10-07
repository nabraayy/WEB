import React from "react";

export default function Work() {
  return (
    <section className="max-w-6xl mx-auto p-4 mt-20">
     
      <div className="mb-8">
        <video
          className="w-full rounded-lg shadow-lg"
          src="/contenido/Demoreel_LAURA_GÓMEZ_DELICADO.mp4" 
          controls
          autoPlay
          muted
        />
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="col-span-2">
            <img
            src="/contenido/AJOLOTE/mejor-frame-2.jpg"
            alt="Imagen 1"
            className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <p className="mt-2 text-center text-gray-700 font-medium">
            AJOLOTE
            </p>
        </div>
        <div >
        <img
          src="/contenido/000.CON-TRABAJO/ARTESFINALES/salon001.jpg"
          alt="Imagen 2"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
            <p className="mt-2 text-center text-gray-700 font-medium">
                CON-TRABAJO
            </p>
        </div>
        <div className="col-span-2">
        <img
          src="/images/imagen3.jpg"
          alt="Imagen 3"
          className="w-full rounded-lg shadow-md"
        />
        </div>
    </div>
    </section>
  );
}
