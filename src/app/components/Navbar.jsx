'use client'
import { useState, useEffect } from "react"; // Añadimos useEffect
import { Menu, X } from 'lucide-react'

const links = [
    { name: 'Nosotros', href: '#' },
    { name: 'Servicios', href: '#' },
    { name: 'Proyectos', href: '#' },
    { name: 'Testimonios', href: '#' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Lógica para detectar el scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            isScrolled 
            ? "bg-white shadow-lg py-2" 
            : "bg-transparent py-4"
        }`}>
            <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
                
                {/* Logo - Cambia de blanco a negro al bajar */}
                <div className="flex items-center">
                    <span className={`text-xl md:text-2xl font-black tracking-tighter transition-colors duration-300 ${
                        isScrolled ? "text-black" : "text-white"
                    }`}>
                        SGPisoPared
                    </span>
                </div>

                <div>
                    {/* Botón Hamburguesa - Cambia de color al bajar */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className={`md:hidden transition-colors ${isScrolled ? "text-black" : "text-white"}`}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex">
                        <ul className="flex items-center gap-8">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <a className={`text-sm font-bold transition-all duration-300 hover:opacity-70 ${
                                        isScrolled ? "text-slate-700" : "text-white/90"
                                    }`} href={link.href}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            
                            {/* Botón Presupuesto - Cambia estilo al bajar */}
                            <li>
                                <a className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md active:scale-95 ${
                                    isScrolled 
                                    ? "bg-black text-white hover:bg-slate-800" 
                                    : "bg-[#d4af37] text-white hover:brightness-110"
                                }`} href="">
                                    Presupuesto
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile Menu (Overlay) */}
                    <div className={`${
                        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                    } fixed top-0 left-0 w-full h-screen bg-white z-[-1] transition-all duration-500 ease-in-out md:hidden flex flex-col pt-24 px-8`}>
                        <ul className="flex flex-col gap-8 text-2xl font-black tracking-tighter text-black uppercase">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <a onClick={() => setIsOpen(false)} href={link.href}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a className="bg-black text-white px-8 py-4 rounded-2xl inline-block w-full text-center text-lg" href="">
                                    Solicitar Presupuesto
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    )
}