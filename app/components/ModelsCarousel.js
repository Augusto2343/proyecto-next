"use client"

import Link from "next/link"
import { useState } from "react"

const ModelsCarousel = ({ items }) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  if (!items || items.length === 0)
    return <p className="text-white">Cargando...</p>;


  return (
    <div
      className="relative w-full max-w-5xl h-[400px] mx-auto overflow-hidden rounded-xl shadow-lg bg-black"
      tabIndex={0}
      aria-label="Modelos Carousel"
    >
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 h-full flex flex-col justify-center items-center relative"
          >
            <img
              src={item.imagen}
              alt={item.titulo}
              className="object-cover  h-full rounded-xl"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/60 p-4 text-white rounded-b-xl">
              <h2 className="text-xl font-semibold">{item.titulo}</h2>
              <Link href={`/producto/${item.id}`} className=" text-sm :hover text-red-500">
                Ver detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-30 shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 12l6-6m-6 6l6 6m-6-6h14"></path></svg>
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-30 shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Siguiente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 12l-6-6m6 6l-6 6m6-6H5"></path></svg>
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
              i === index ? "bg-white scale-125" : "bg-gray-400 opacity-70"
            }`}
            aria-label={`Ir al slide ${i + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ModelsCarousel;