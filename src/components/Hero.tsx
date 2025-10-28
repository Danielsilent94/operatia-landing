import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-br from-operatia-blue via-slate-900 to-black text-white overflow-hidden">

      {/* Luces de fondo sutiles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-operatia-green/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl opacity-30 animate-pulse delay-700"></div>
      </div>

      {/* LOGO / NOMBRE */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
      >
        <span className="text-operatia-green drop-shadow-[0_0_10px_rgba(62,242,155,0.6)]">Operat</span>IA
      </motion.h1>

      {/* SUBTÍTULO */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/90 max-w-3xl leading-snug"
      >
        Automatiza tu negocio con <span className="text-operatia-green font-bold">Inteligencia Artificial</span>
      </motion.h2>

      {/* DESCRIPCIÓN */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-6 text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed"
      >
        Ahorra tiempo, consigue más clientes y mejora tu atención con sistemas automatizados que trabajan por ti las 24 h.
      </motion.p>

      {/* BOTONES */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-10 flex flex-col sm:flex-row gap-5"
      >
        <a
          href="https://wa.me/34667213004?text=Hola,%20quiero%20saber%20más%20sobre%20las%20automatizaciones%20con%20IA."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-operatia-green text-slate-900 font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-operatia-green/50 hover:scale-105 transition-all duration-300 text-lg"
        >
          Habla con un experto
        </a>
        <a
          href="#contact"
          className="border border-operatia-green text-operatia-green font-semibold px-10 py-4 rounded-xl hover:bg-operatia-green hover:text-slate-900 hover:scale-105 transition-all duration-300 text-lg"
        >
          Solicitar demo gratuita
        </a>
      </motion.div>
    </section>
  );
}