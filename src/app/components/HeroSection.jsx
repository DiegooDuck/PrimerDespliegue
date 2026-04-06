
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function HeroSection() {
    return(
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
            <Image 
                    src="/bg-hero.jpg" 
                    alt="Hero SGPisoPared" 
                    fill                  // Sustituye al w-full h-full
                    priority              // Esto quita el aviso de LCP (le da prioridad)
                    className="object-cover" // Mantiene la proporción sin deformar
                />
            <div className="absolute inset-0 bg-black/25"></div>
            </div>
            {/* Contenido del HeroSection */}
            <div className="relative z-10 max-w-8xl mx-auto px-10 py-20 flex flex-col items-start gap-6 md:w-full xl:w-full xl:px-20">
                <div className="flex flex-col items-start gap-6 ">
                    {/* Badge superior (El de la cajita transparente) */}
                    <div className="inline-block border border-white/40 backdrop-blur-xs bg-white/10 px-5 py-2 rounded-full mb-5">
                        <span className="text-white text-xs md:text-sm font-bold uppercase tracking-widest">
                            Servicios generales & Reformas
                        </span>
                    </div>
                    
                    <h1 className="text-5xl font-extrabold leading-[1.05] mb-2 uppercase tracking-tighter italic md:text-6xl lg:text-7xl">
                        <span className="text-white block">Transformamos</span>
                        <span className="text-white block ">tu casa,</span>
                        <span className="text-[#d4af37] block">en el hogar que</span>
                        <span className="text-[#d4af37] block">siempre soñaste</span>
                    </h1>
                    <div>
                        <p className="text-white/90 text-lg  max-w-2xl font-bold">
                            Cocinas, baños, electricidad, pintura,
                            acabados de alta calidad, limpieza y más. Especialistas en reformas integrales
                            con más de 10 años convirtiendo ideas en realidad.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 items-start md:flex-row">
                        <button className="text-white py-3 px-4 flex bg-[#d4af37] gap-2 items-center font-bold rounded-2xl [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)] hover:bg-[#b8952e] cursor-pointer transition-all duration-300 ease-in-out active:scale-[0.98]">Solicitar presupuesto <MoveRight /> </button>
                        <button className="text-white py-3 px-6 bg-transparent border border-white/40 rounded-2xl cursor-pointer font-bold transition-all duration-200 ease-in-out hover:bg-white/10 hover:border-white/80 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-[0.95]">
  Ver servicios
</button>
                    </div>
                </div>

            </div>

        </section>
    )
}