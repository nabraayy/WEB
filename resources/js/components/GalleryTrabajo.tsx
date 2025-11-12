import { useState } from "react";

interface GalleryProps {
  images: string[]; 
  basePath?: string; 
}

export default function Gallery({ images, basePath = "" }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
     <section className="w-full p-7 mt-20 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[200px]">

        {images.map((file, index) => {
          const imageSrc = basePath ? `${basePath}/${file}` : file;
          return (
            <img
              key={file}
              src={imageSrc}
              alt={file}
              loading="lazy"
              className={`w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer ${
                index % 3 === 0 ? "row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(imageSrc)}
            />
          );
        })}
      </section>

      
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}
    </>
  );
}
