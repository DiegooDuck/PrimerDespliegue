"use client"; // Importante: Framer Motion necesita ser Client Component
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
    // Variantes para animar los hijos de forma escalonada
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Tiempo entre que aparece un elemento y el siguiente
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return(
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/bg-hero.jpg" 
                    alt="Hero SGPisoPared" 
                    fill                  
                    priority              
                    className="object-cover" 
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Contenedor principal con animación de entrada */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-8xl mx-auto px-6 py-20 flex flex-col items-start gap-6 md:w-full xl:w-full xl:px-20"
            >
                <div className="flex flex-col items-start gap-4 md:gap-6 w-full">
                    
                    {/* 1. Badge animado */}
                    <motion.div variants={itemVariants} className="inline-block border border-white/40 backdrop-blur-xs bg-white/10 px-4 py-1.5 rounded-full mb-2 md:mb-5">
                        <span className="text-white text-[10px] md:text-sm font-bold uppercase tracking-widest">
                            Servicios generales & Reformas
                        </span>
                    </motion.div>
                    
                    {/* 2. Título animado */}
                    <motion.h1 variants={itemVariants} className="text-4xl font-extrabold leading-[1.1] mb-2 uppercase tracking-tighter italic md:text-6xl lg:text-7xl max-w-full">
                        <span className="text-white block">Transformamos</span>
                        <span className="text-white block">tu casa,</span>
                        <span className="text-[#d4af37] block">en el hogar que</span>
                        <span className="text-[#d4af37] block">siempre soñaste</span>
                    </motion.h1>

                    {/* 3. Párrafo animado */}
                    <motion.div variants={itemVariants}>
                        <p className="text-white/90 text-base md:text-lg max-w-2xl font-bold leading-relaxed">
                            Cocinas, baños, electricidad, pintura,
                            acabados de alta calidad, limpieza y más. Especialistas en reformas integrales
                            con más de 10 años convirtiendo ideas en realidad.
                        </p>
                    </motion.div>

                    {/* 4. Botones con efecto Hover y entrada */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-3 items-stretch w-full md:w-auto md:flex-row md:items-start">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-white py-4 px-6 flex justify-center bg-[#d4af37] gap-2 items-center font-bold rounded-2xl [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer transition-all duration-300"
                        >
                            Solicitar presupuesto <MoveRight /> 
                        </motion.button>
                        
                        <motion.button 
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="text-white py-4 px-6 bg-transparent border border-white/40 rounded-2xl cursor-pointer font-bold transition-all duration-200"
                        >
                            Ver servicios
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}