function App() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-[#0A1220] text-white">
      {/* Hero Section */}
      <section className="gradient-hero flex flex-col justify-center items-center text-center px-6 sm:px-10 py-24">
        <h1 className="text-6xl sm:text-7xl font-extrabold text-white tracking-tight drop-shadow-md">
          OperatIA
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white/90 mt-6 max-w-2xl leading-snug">
          Automatiza tu negocio con Inteligencia Artificial
        </h2>
        <p className="text-lg sm:text-xl text-white/80 mt-5 max-w-2xl leading-relaxed">
          Ahorra tiempo, consigue más clientes y mejora tu atención con sistemas automatizados que trabajan por ti las 24 horas.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="https://wa.me/34667213004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium border border-white/30 px-5 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:text-white shadow-sm"
          >
            Habla con un experto
          </a>

          <a
            href="#contact"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0A1220] transition-all duration-300"
          >
            Solicitar demo gratuita
          </a>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="bg-[#0A1220] py-24 px-6 text-center">
        <h3 className="text-4xl font-bold mb-16">Servicios de OperatIA</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
            <div className="text-4xl mb-4">🤖</div>
            <h4 className="text-xl font-semibold mb-2">
              Chatbots IA personalizados
            </h4>
            <p className="text-white/70">
              Atiende a tus clientes 24/7 con respuestas naturales y útiles. Aumenta tus ventas sin perder leads.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
            <div className="text-4xl mb-4">🔁</div>
            <h4 className="text-xl font-semibold mb-2">
              Automatización de procesos
            </h4>
            <p className="text-white/70">
              Conecta WhatsApp, email y tus formularios para ahorrar tiempo y eliminar tareas repetitivas.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
            <div className="text-4xl mb-4">📊</div>
            <h4 className="text-xl font-semibold mb-2">
              Optimización y métricas
            </h4>
            <p className="text-white/70">
              Obtén paneles visuales con tus datos en tiempo real para tomar mejores decisiones.
            </p>
          </div>
        </div>
      </section>

      {/* Formulario de contacto */}
      <section
        id="contact"
        className="py-24 px-6 text-center border-t border-white/10 bg-gradient-to-b from-[#0A1220] to-[#020910]"
      >
        <h3 className="text-3xl font-bold mb-6">Solicita tu demo gratuita</h3>
        <p className="text-white/70 max-w-2xl mx-auto mb-10">
          Cuéntanos brevemente qué tipo de automatización necesitas. Te responderemos en menos de 24 horas.
        </p>

        <form className="max-w-md mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <textarea
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

      {/* Footer */}
      <footer className="bg-[#0A1220] py-12 text-center border-t border-white/10">
        <h4 className="text-2xl font-bold mb-2 text-emerald-400 drop-shadow-md">
          OperatIA
        </h4>
        <p className="text-white/70 mb-6">
          Simplificamos la automatización con inteligencia artificial para que te concentres en lo que realmente importa: hacer crecer tu negocio.
        </p>

        <div className="flex justify-center gap-6 text-white/80 text-2xl mb-6">
          <a href="mailto:info@operatia.com" className="hover:text-white">✉️</a>
          <a href="#" className="hover:text-white">💼</a>
          <a href="#" className="hover:text-white">📸</a>
          <a href="#" className="hover:text-white">💻</a>
        </div>

        <p className="text-white/40 text-sm">
          © 2025 OperatIA. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}

export default App;