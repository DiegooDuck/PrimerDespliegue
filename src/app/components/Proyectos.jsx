"use client";
import React from "react";
import Image from "next/image";
import { proyectos } from "../../data/proyectos";

export default function ProyectosCollage() {
  return (
    <section className="py-12 lg:py-16 bg-slate-50/50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Cabecera con tamaño original de las otras secciones */}
        <div className="mb-12">
          <span className="text-slate-400 text-sm font-bold uppercase tracking-[0.3em]">Portafolio</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mt-2 uppercase">
            Últimos <span className="text-slate-300">Proyectos</span>
          </h2>
        </div>

        {/* GRID COLLAGE COMPACTO (Altura reducida en Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[550px]">
          
          {/* 1. Proyecto Vertical (Ocupa 1 col y 2 filas) */}
          <div className="md:col-span-1 md:row-span-2 relative group bg-white p-1.5 rounded-[2.5rem] border border-slate-100 shadow-sm h-[450px] md:h-auto">
            <div className="relative w-full h-full overflow-hidden rounded-[2.2rem]">
              <Image src={proyectos[0].img} alt={proyectos[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white z-10">
                {proyectos[0].reciente && <BadgeReciente />}
                <span className="text-[#d4af37] text-[10px] font-bold uppercase tracking-widest mb-1">{proyectos[0].category}</span>
                <h3 className="text-xl font-bold uppercase tracking-tighter leading-tight">{proyectos[0].title}</h3>
              </div>
            </div>
          </div>

          {/* 2. Cuadrado Centro Superior */}
          <div className="md:col-span-1 md:row-span-1 relative group bg-white p-1.5 rounded-[2.5rem] border border-slate-100 shadow-sm aspect-square md:aspect-auto">
            <div className="relative w-full h-full overflow-hidden rounded-[2.2rem]">
              <Image src={proyectos[1].img} alt={proyectos[1].title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>

          {/* 3. Cuadrado Derecha Superior */}
          <div className="md:col-span-1 md:row-span-1 relative group bg-white p-1.5 rounded-[2.5rem] border border-slate-100 shadow-sm aspect-square md:aspect-auto">
            <div className="relative w-full h-full overflow-hidden rounded-[2.2rem]">
              <Image src={proyectos[2].img} alt={proyectos[2].title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>

          {/* 4. Horizontal Inferior (Ocupa 2 columnas) */}
          <div className="md:col-span-2 md:row-span-1 relative group bg-white p-1.5 rounded-[2.5rem] border border-slate-100 shadow-sm h-[200px] md:h-auto">
            <div className="relative w-full h-full overflow-hidden rounded-[2.2rem]">
              <Image src={proyectos[5].img} alt={proyectos[5].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center p-10 text-white">
                <div>
                  <span className="text-[#d4af37] text-[10px] font-bold uppercase tracking-widest">Destacado</span>
                  <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">{proyectos[5].title}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fila inferior de cierre (Fotos 4 y 5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
           {proyectos.slice(3, 5).map((p) => (
             <div key={p.id} className="relative group bg-white p-1.5 rounded-[2.5rem] border border-slate-100 shadow-sm h-[180px]">
                <div className="relative w-full h-full overflow-hidden rounded-[2.2rem]">
                  <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                    <h4 className="text-white font-bold uppercase text-xs tracking-widest">
                      {p.title}
                    </h4>
                  </div>
                </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}

function BadgeReciente() {
    return (
        <div className="absolute top-5 left-5 z-20 flex items-center gap-2 bg-black/80 backdrop-blur-sm py-1.5 px-3 rounded-full border border-white/10 shadow-lg">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[9px] font-black uppercase tracking-widest text-white">Live Update</span>
        </div>
    );
}