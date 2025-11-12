import React from "react";

interface PortfolioItem {
  image: string;
  title: string;
  link: string;
  aspectRatio?: string;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-12">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-xl group cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
            style={{ aspectRatio: item.aspectRatio || "16/9" }}
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="absolute bottom-4 left-4 text-white z-10">
            <h3 className="text-lg font-semibold drop-shadow-lg">
              {item.title}
            </h3>
          </div>

          <a href={item.link} className="absolute inset-0"></a>
        </div>
      ))}
    </section>
  );
}
