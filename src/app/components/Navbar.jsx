'use client'
import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react'

const links = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Proyectos', href: '#proyectos' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
        }`}>
            <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
                
                <div className="flex items-center">
                    <a href="#" className={`text-xl md:text-2xl font-black tracking-tighter transition-colors duration-300 ${
                        isScrolled ? "text-black" : "text-white"
                    }`}>
                        SG<span className={isScrolled ? "text-[#d4af37]" : "text-[#d4af37]"}>PisoPared</span>
                    </a>
                </div>

                <div>
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className={`md:hidden relative z-50 transition-colors ${
                            (isOpen || isScrolled) ? "text-black" : "text-white"
                        }`}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex">
                        <ul className="flex items-center gap-8">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <a className={`text-sm font-bold transition-all duration-300 hover:text-[#d4af37] ${
                                        isScrolled ? "text-slate-700" : "text-white/90"
                                    }`} href={link.href}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md active:scale-95 ${
                                    isScrolled 
                                    ? "bg-black text-white hover:bg-slate-800" 
                                    : "bg-[#d4af37] text-white hover:brightness-110"
                                }`} href="https://wa.me/34691426670" target="_blank">
                                    Presupuesto
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile Menu (Overlay) */}
                    <div className={`${
                        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                    } fixed top-0 left-0 w-full h-screen bg-white transition-all duration-500 ease-in-out md:hidden flex flex-col pt-24 px-8`}>
                        <ul className="flex flex-col gap-8 text-2xl font-black tracking-tighter text-black uppercase">
                            {links.map((link, index) => (
                                <li key={index}>
                                    {/* El onClick={() => setIsOpen(false)} es clave para que el menú se quite al viajar a la sección */}
                                    <a onClick={() => setIsOpen(false)} href={link.href}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a 
                                    onClick={() => setIsOpen(false)}
                                    className="bg-[#d4af37] text-white px-8 py-4 rounded-2xl inline-block w-full text-center text-lg shadow-lg" 
                                    href="https://wa.me/34691426670"
                                >
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