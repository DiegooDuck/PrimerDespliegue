"use client";
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      
      {/* EL MENSAJE SOBRE EL BOTÓN */}
      <motion.div 
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          delay: 2, 
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 4 
        }}
        className="bg-white text-black text-[11px] font-bold py-1.5 px-3 rounded-xl rounded-br-none shadow-xl border border-gray-100 mb-1 relative"
      >
        <span className="relative z-10">¿Tienes dudas? ¡Escríbenos!</span>
        {/* Triangulito del bocadillo */}
        <div className="absolute -bottom-1.5 right-2 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-100"></div>
      </motion.div>

      {/* EL BOTÓN DE WHATSAPP */}
      <motion.a
        href="https://wa.me/34691426670"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] p-4 rounded-full text-white transition-colors hover:bg-[#20ba5a]"
      >
        <FaWhatsapp size={28} />
      </motion.a>
      
    </div>
  );
}