"use client";
import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ServicioCarrusel({ title, subtitle, items, rotateDir = "rotate-1" }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? scrollRef.current.offsetWidth * 0.7 : 400;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    /* Reducido a pb-4 para que la siguiente sección suba bastante */
    <section className="pb-4 lg:pb-6 overflow-hidden max-w-[1440px] mx-auto px-6 lg:px-12">
      
      {/* Reducimos mb-8 a mb-4 para pegar el título a las fotos */}
      <div className="flex flex-row items-end justify-between mb-4 border-b border-slate-100 pb-3">
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-none">
            <span className="text-slate-400 text-sm md:text-base block mb-1 font-medium">{title}</span>
            <span className={`text-white px-3 py-1 inline-block bg-black rounded-xl text-xl md:text-2xl transform ${rotateDir}`}>
              {subtitle}
            </span>
          </h2>
        </div>
        
        <div className="flex gap-2 mb-0.5">
          <button onClick={() => scroll("left")} className="p-2 border border-slate-200 rounded-full hover:bg-slate-50 text-slate-600 bg-white">
            <ArrowLeft size={16} />
          </button>
          <button onClick={() => scroll("right")} className="p-2 bg-black text-white rounded-full hover:bg-slate-800 shadow-sm">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar touch-pan-x pb-2">
        {items.map((item) => (
          <div key={item.id} className="min-w-[70vw] md:min-w-[35vw] lg:min-w-[22%] snap-start group">
            <div className="relative aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-3 bg-slate-100">
              <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-3 left-3 z-10">
                <span className="text-white font-bold text-[8px] bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 uppercase">
                  {item.id}
                </span>
              </div>
            </div>
            <div className="space-y-0.5 px-1">
              <h3 className="text-base md:text-lg font-bold tracking-tight">{item.title}</h3>
              <p className="text-slate-500 text-[11px] md:text-xs leading-tight line-clamp-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}