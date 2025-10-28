import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-black to-black text-white py-14 px-6 text-center overflow-hidden">
      {/* Luz de fondo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(62,242,155,0.08),transparent_70%)]"></div>

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-6"
      >
        {/* Logo */}
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          <span className="text-operatia-green drop-shadow-[0_0_10px_rgba(62,242,155,0.5)]">
            Operat
          </span>
          IA
        </h2>

        {/* Descripción corta */}
        <p className="text-white/60 max-w-xl leading-relaxed">
          Simplificamos la automatización con inteligencia artificial para que te concentres en lo que realmente importa: hacer crecer tu negocio.
        </p>

        {/* Redes sociales */}
        <div className="flex gap-6 mt-2">
          <a
            href="mailto:contacto@operatia.com"
            className="text-white/70 hover:text-operatia-green transition"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-operatia-green transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-operatia-green transition"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-operatia-green transition"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>

        {/* Línea divisoria */}
        <div className="w-full h-px bg-white/10 my-8"></div>

        {/* Copyright */}
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} OperatIA. Todos los derechos reservados.
        </p>
      </motion.div>
    </footer>
  );
}