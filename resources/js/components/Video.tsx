import { useState } from "react";

interface VideoCarouselProps {
  videos: string[];
  basePath?: string;
}

export default function VideoCarousel({ videos, basePath = "" }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => setCurrentIndex((prev) => (prev + 1) % videos.length);
  const prevVideo = () => setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);

  const videoSrc = basePath ? `${basePath}/${videos[currentIndex]}` : videos[currentIndex];

  return (
    <section className="max-w-6xl mx-auto mt-20 mb-12 flex flex-col items-center relative">
      
      {/* Contenedor principal con flechas externas */}
      <div className="w-full flex items-center justify-between">
        {/* Flecha izquierda */}
        <button
          onClick={prevVideo}
          className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition z-10"
        >
          ←
        </button>

        {/* Video principal */}
        <div className="flex-1 mx-4 rounded-xl overflow-hidden shadow-lg">
          <video
            key={videoSrc}
            src={videoSrc}
            controls
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Flecha derecha */}
        <button
          onClick={nextVideo}
          className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition z-10"
        >
          →
        </button>
      </div>

    
    </section>
  );
}
