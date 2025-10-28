import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="gradient-hero min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-10">
      {/* LOGO / TÍTULO PRINCIPAL */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl sm:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg"
      >
        <span className="text-operatia-green">Operat</span>IA
      </motion.h1>

      {/* SUBTÍTULO */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-2xl sm:text-3xl font-semibold text-white/90 mt-6 max-w-2xl leading-snug"
      >
        Automatiza tu negocio con Inteligencia Artificial
      </motion.h2>

      {/* DESCRIPCIÓN */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-lg sm:text-xl text-white/75 mt-6 max-w-2xl leading-relaxed"
      >
        Ahorra tiempo, consigue más clientes y mejora tu atención con sistemas automatizados
        que trabajan por ti las 24 horas.
      </motion.p>

      {/* BOTONES */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 mt-10"
      >
        <a
          href="https://wa.me/34667213004?text=Hola,%20quiero%20saber%20más%20sobre%20las%20automatizaciones%20con%20IA."
          target="_blank"
          className="bg-operatia-green text-slate-900 font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Habla con un experto
        </a>
        <a
          href="#contact"
          className="border-2 border-operatia-green text-operatia-green font-semibold px-8 py-3 rounded-xl hover:bg-operatia-green hover:text-slate-900 transition-all duration-300"
        >
          Solicitar demo gratuita
        </a>
      </motion.div>

      {/* DECORATIVO SUAVE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <div className="absolute w-[800px] h-[800px] bg-operatia-green/10 blur-[150px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </section>
  );
}