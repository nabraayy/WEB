import { useState } from "react";

export default function Gallery() {
  const images = [
    "003.jpg",
    "006.jpg",
    "007.jpg",
    "008.jpg",
    "baño_01.jpg",
    "cocina_01.jpg",
    "escaleras.jpg",
    "psicologica_02.jpg",
    "psicologica.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="max-w-7xl mx-auto p-7 mt-20 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[200px]">
        {images.map((file, index) => (
          <img
            key={file}
            src={`/contenido/000.CON-TRABAJO/ARTESFINALES/${file}`}
            alt={file}
            loading="lazy"
            className={`w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer ${
              index % 3 === 0 ? "row-span-2" : ""
            }`}
            onClick={() => setSelectedImage(file)}
          />
        ))}
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={`/contenido/000.CON-TRABAJO/ARTESFINALES/${selectedImage}`}
            alt={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}
    </>
  );
}
