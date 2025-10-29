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
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/40 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/70"
          >
            Habla con un experto
          </a>

          <a
            href="#contact"
            className="border border-white/40 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/70"
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
            <div className="text-5xl mb-4">🤖</div>
            <h4 className="text-xl font-semibold mb-2">
              Chatbots IA personalizados
            </h4>
            <p className="text-white/70">
              Atiende a tus clientes 24/7 con respuestas naturales y útiles. Aumenta tus ventas sin perder leads.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
            <div className="text-5xl mb-4">🔁</div>
            <h4 className="text-xl font-semibold mb-2">
              Automatización de procesos
            </h4>
            <p className="text-white/70">
              Conecta WhatsApp, email y tus formularios para ahorrar tiempo y eliminar tareas repetitivas.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
            <div className="text-5xl mb-4">📊</div>
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

      {/* Footer */}
      <footer className="bg-[#0A1220] py-12 text-center border-t border-white/10">
        <h4 className="text-2xl font-bold mb-2 text-emerald-400 drop-shadow-md">
          OperatIA
        </h4>
        <p className="text-white/70 mb-6">
          Simplificamos la automatización con inteligencia artificial para que te concentres en lo que realmente importa: hacer crecer tu negocio.
        </p>

        <div className="flex justify-center gap-6 text-white/80 text-2xl mb-6">
          <a href="https://mail.google.com/mail/u/1/#inbox" className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M2 4h20v16H2z" fill="none"/><path d="M2 4h20v16H2zM4 6v.511l8 6.223 8-6.223V6H4zm0 2.979V18h16V8.979l-8 6.222z"/></svg>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.14h4.56V24H.22zM8.44 8.14h4.37v2.16h.06c.61-1.15 2.1-2.37 4.33-2.37 4.63 0 5.48 3.05 5.48 7.02V24h-4.56v-6.9c0-1.65-.03-3.78-2.3-3.78-2.31 0-2.67 1.8-2.67 3.66V24H8.44V8.14z"/></svg>
          </a>
          <a href="https://www.instagram.com/operatia360/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm4.5-.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
          </a>
          <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2C6.477 2 2 6.473 2 11.995c0 2.123.663 4.084 1.79 5.714L2 22l4.418-1.56A9.942 9.942 0 0 0 12 22c5.523 0 10-4.477 10-10.005C22 6.473 17.523 2 12 2zm0 18a8.006 8.006 0 0 1-4.065-1.11l-.29-.174-2.62.924.9-2.67-.183-.273A8.003 8.003 0 1 1 12 20zM8.58 7.3c-.192-.434-.393-.443-.577-.451-.15-.006-.322-.006-.495-.006s-.455.065-.694.326c-.238.26-.911.89-.911 2.17 0 1.28.933 2.52 1.063 2.69.131.17 1.802 2.87 4.43 3.9 2.63 1.03 2.63.687 3.107.643.476-.043 1.522-.622 1.738-1.224.217-.602.217-1.118.152-1.224-.065-.106-.238-.17-.5-.3-.261-.13-1.522-.75-1.758-.836-.236-.087-.408-.13-.58.13-.173.26-.666.836-.817 1.006-.15.17-.3.195-.56.065-.261-.13-1.1-.405-2.095-1.292-.774-.692-1.296-1.546-1.447-1.806-.15-.26-.016-.4.114-.53.117-.116.261-.3.392-.45.13-.15.174-.26.261-.43.087-.17.043-.325-.022-.455-.065-.13-.576-1.43-.804-1.953z"/></svg>
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