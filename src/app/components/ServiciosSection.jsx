"use client";
import React from "react";
import ServicioCarrusel from "./ServicioCarrusel";
import { reformasData, limpiezaData } from "../../data/serviciosData";

export default function ServiciosSection() {
  return (
    <div id="servicios" className="bg-white text-black font-sans pt-12 selection:bg-black selection:text-white">
      
      {/* TÍTULO PRINCIPAL */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center mb-10 md:mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[1px] w-8 md:w-12 bg-slate-200"></div>
          <span className="text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.4em]">Descubre nuestra excelencia</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950">
          NUESTROS <span className="text-slate-300">SERVICIOS</span>
        </h1>
      </div>

      {/* SECCIÓN REFORMAS */}
      <ServicioCarrusel 
        title="Servicios" 
        subtitle="de Reforma" 
        items={reformasData} 
        rotateDir="-rotate-1" 
      />

      <div className="w-full h-[1px] bg-slate-100 max-w-[1300px] mx-auto opacity-40 mb-16" />

      {/* SECCIÓN LIMPIEZA */}
      <ServicioCarrusel 
        title="Servicios" 
        subtitle="de Limpieza" 
        items={limpiezaData} 
        rotateDir="rotate-1" 
      />

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}