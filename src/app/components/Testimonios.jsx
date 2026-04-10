"use client";
import React from "react";
import { Star, Quote } from "lucide-react";
import { testimoniosData } from "@/data/testimoniosData";

export default function Testimonios() {
  const tripleTestimonios = [...testimoniosData, ...testimoniosData, ...testimoniosData];

  if (!testimoniosData || testimoniosData.length === 0) return null;

  return (
    <section id="testimonios" className="py-12 lg:py-24 bg-slate-50/50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-col">
          <span className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-2">
            Experiencias Reales
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">
            LO QUE DICEN <span className="text-slate-300">CLIENTES VIP</span>
          </h2>
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Usamos las clases que definiremos en globals.css */}
        <div className="flex gap-6 animate-marquee hover:pause-marquee py-4">
          {tripleTestimonios.map((t, index) => (
            <div 
              key={`${t.id}-${index}`} 
              className="w-[300px] md:w-[450px] flex-shrink-0 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 relative overflow-hidden transition-all duration-500 hover:border-[#d4af37]/40 hover:shadow-md group"
            >
              <Quote className="absolute -top-4 -right-4 text-slate-50 w-24 h-24 -rotate-12 opacity-50" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={i < t.estrellas ? "fill-black text-black" : "text-slate-200"} 
                    />
                  ))}
                </div>

                <p className="text-slate-600 italic leading-relaxed mb-8 text-sm md:text-base min-h-[100px]">
                  {t.texto}
                </p>

                <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                  <div className="w-12 h-12 rounded-full bg-slate-900 flex-shrink-0 flex items-center justify-center text-white font-bold text-lg group-hover:bg-[#d4af37] transition-colors">
                    {t.nombre.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-none mb-1 text-sm md:text-base">
                      {t.nombre}
                    </h4>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                      {t.proyecto}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}