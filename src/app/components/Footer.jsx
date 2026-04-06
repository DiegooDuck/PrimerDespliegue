"use client";
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'; 
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Subimos de py-8 a py-12 para que tenga un porte más profesional
    <footer className="bg-[#1a1a1a] py-12 text-white border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mb-10">
          
          {/* 1. MARCA */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-black tracking-tighter uppercase text-white leading-none mb-3">
              SG<span className="text-[#d4af37]">PisoPared</span>
            </h2>
            <p className="text-slate-500 text-[12px] uppercase tracking-[0.2em] font-medium">
  Asesoramiento técnico · Sin compromiso
</p>
          </div>

          {/* 2. CONTACTO (Iconos con un pelín más de presencia) */}
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-col gap-3">
                <a href="tel:+34600000000" className="flex items-center justify-center gap-3 text-slate-400 hover:text-[#d4af37] transition-colors text-[13px]">
                  <Phone size={14} className="text-[#d4af37]" />
                  +34 661 333 750
                </a>

                <a href="mailto:info@tureforma.com" className="flex items-center justify-center gap-3 text-slate-400 hover:text-[#d4af37] transition-colors text-[13px]">
                  <Mail size={14} className="text-[#d4af37]" />
                  sgpisopared@gmail.com
                </a>

                <div className="flex items-center justify-center gap-3 text-slate-400 text-[13px]">
                  <MapPin size={14} className="text-[#d4af37]" />
                  Santander, Cantabria
                </div>
            </div>
          </div>

          {/* 3. REDES SOCIALES (Círculos un poco más amplios) */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-600 mb-5">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-full text-white transition-all hover:scale-110 shadow-lg"
                style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
                <FaInstagram size={18} />
              </a>
              <a href="#" className="p-3 bg-[#1877F2] text-white rounded-full transition-all hover:scale-110 shadow-lg">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="p-3 bg-[#25D366] text-white rounded-full transition-all hover:scale-110 shadow-lg">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* BARRA INFERIOR LEGAL */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600 font-bold">
            © {currentYear} TU REFORMA — TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[9px] uppercase tracking-widest text-slate-500 hover:text-white transition-colors font-bold">Privacidad</a>
            <a href="#" className="text-[9px] uppercase tracking-widest text-slate-500 hover:text-white transition-colors font-bold">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}