import React from "react";
import logo from "../assets/logo-operatia.png";

interface HeroProps {
  phoneNumber: string;
  onScrollToContact: () => void;
}

function Hero({ phoneNumber, onScrollToContact }: HeroProps) {
  return (
    <section className="relative gradient-hero flex flex-col justify-center items-center text-center px-6 sm:px-10 py-24">
      {/* Logo arriba izquierda */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-10">
        <img
          src={logo}
          alt="OperatIA logo"
          className="w-16 sm:w-20 h-auto opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Texto principal */}
      <h1 className="text-6xl sm:text-7xl font-extrabold text-white tracking-tight drop-shadow-md mt-8">
        OperatIA
      </h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white/90 mt-6 max-w-2xl leading-snug">
        Automatiza tu negocio con Inteligencia Artificial
      </h2>
      <p className="text-lg sm:text-xl text-white/80 mt-5 max-w-2xl leading-relaxed">
        Ahorra tiempo, consigue más clientes y mejora tu atención con sistemas
        automatizados que trabajan por ti las 24 horas.
      </p>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/40 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/70"
        >
          Habla con un experto
        </a>

        <button
          onClick={onScrollToContact}
          className="border border-white/40 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/70"
        >
          Solicitar demo gratuita
        </button>
      </div>
    </section>
  );
}

export default Hero;