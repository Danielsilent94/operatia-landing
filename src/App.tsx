import React from "react";
import Hero from "./components/Hero";
import logo from "./assets/logo-operatia.png";

function App() {
  const phoneNumber = "34667213004"; // <-- tu número de WhatsApp (sin + ni espacios)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = (e.currentTarget.elements.namedItem("name") as HTMLInputElement).value;
    const message = (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement).value;

    if (!name || !message) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const encodedText = encodeURIComponent(`Hola, soy ${name}. ${message}`);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
  };

  // 🚀 Scroll suave hacia el formulario
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="w-full flex flex-col min-h-screen bg-[#0A1220] text-white">
      {/* HERO */}
      <Hero phoneNumber={phoneNumber} onScrollToContact={scrollToContact} />

      {/* SERVICIOS */}
      <section className="bg-[#0A1220] py-24 px-6 text-center">
        <h3 className="text-4xl font-bold mb-16">Servicios de OperatIA</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
            <div className="text-5xl mb-4">🤖</div>
            <h4 className="text-xl font-semibold mb-2">Chatbots IA personalizados</h4>
            <p className="text-white/70">
              Atiende a tus clientes 24/7 con respuestas naturales y útiles. Aumenta tus ventas sin perder leads.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
            <div className="text-5xl mb-4">🔁</div>
            <h4 className="text-xl font-semibold mb-2">Automatización de procesos</h4>
            <p className="text-white/70">
              Conecta WhatsApp, email y tus formularios para ahorrar tiempo y eliminar tareas repetitivas.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
            <div className="text-5xl mb-4">📊</div>
            <h4 className="text-xl font-semibold mb-2">Optimización y métricas</h4>
            <p className="text-white/70">
              Obtén paneles visuales con tus datos en tiempo real para tomar mejores decisiones.
            </p>
          </div>
        </div>
      </section>

      {/* FORMULARIO DE CONTACTO */}
      <section
        id="contact"
        className="py-24 px-6 text-center border-t border-white/10 bg-gradient-to-b from-[#0A1220] to-[#020910]"
      >
        <h3 className="text-3xl font-bold mb-6">Solicita tu demo gratuita</h3>
        <p className="text-white/70 max-w-2xl mx-auto mb-10">
          Cuéntanos brevemente qué tipo de automatización necesitas. Te responderemos en menos de 24 horas.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <textarea
            name="message"
            placeholder="Describe tu proyecto..."
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-emerald-300 transition-all"
          >
            Enviar mensaje
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A1220] py-12 text-center border-t border-white/10">
        <div className="flex flex-col items-center mb-6">
          <img
            src={logo}
            alt="OperatIA logo"
            className="w-16 h-16 mb-3 drop-shadow-lg"
          />
          <h4 className="text-2xl font-bold text-emerald-400 drop-shadow-md">
            OperatIA
          </h4>
        </div>

        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
          Simplificamos la automatización con inteligencia artificial para que te concentres en lo que realmente importa: hacer crecer tu negocio.
        </p>

        <div className="flex justify-center gap-6 text-white/80 text-2xl mb-6">
          {/* Email */}
          <a href="mailto:info@operatia.com" className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M2 4h20v16H2z" fill="none" />
              <path d="M2 4h20v16H2zM4 6v.511l8 6.223 8-6.223V6H4zm0 2.979V18h16V8.979l-8 6.222z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.14h4.56V24H.22zM8.44 8.14h4.37v2.16h.06c.61-1.15 2.1-2.37 4.33-2.37 4.63 0 5.48 3.05 5.48 7.02V24h-4.56v-6.9c0-1.65-.03-3.78-2.3-3.78-2.31 0-2.67 1.8-2.67 3.66V24H8.44V8.14z" />
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/operatia360/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm4.5-.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M12 2C6.477 2 2 6.473 2 11.995c0 2.123.663 4.084 1.79 5.714L2 22l4.418-1.56A9.942 9.942 0 0 0 12 22c5.523 0 10-4.477 10-10.005C22 6.473 17.523 2 12 2zm0 18a8.006 8.006 0 0 1-4.065-1.11l-.29-.174-2.62.924.9-2.67-.183-.273A8.003 8.003 0 1 1 12 20z" />
            </svg>
          </a>
        </div>

        <p className="text-white/40 text-sm">
          © 2025 OperatIA. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}

export default App;