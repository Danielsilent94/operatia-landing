import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const whatsappNumber = "34667213004"; 
    const encodedMessage = encodeURIComponent(
      `Hola, soy ${name}. ${message}`
    );
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-black via-slate-900 to-black text-white py-24 px-6 flex flex-col items-center justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold mb-8 text-center"
      >
        Solicita tu <span className="text-operatia-green">demo gratuita</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-white/70 mb-10 max-w-xl text-center leading-relaxed"
      >
        Cuéntanos brevemente qué tipo de automatización necesitas.  
        Te responderemos en menos de 24 horas para agendar una demostración personalizada.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full max-w-lg bg-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg space-y-6"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm text-white/70 mb-2">
            Tu nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white focus:border-operatia-green focus:ring-1 focus:ring-operatia-green outline-none transition"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm text-white/70 mb-2">
            Cuéntanos tu proyecto
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white focus:border-operatia-green focus:ring-1 focus:ring-operatia-green outline-none transition resize-none"
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 w-full bg-operatia-green text-black font-semibold py-3 rounded-lg shadow-md hover:shadow-operatia-green/30 transition"
        >
          <Send className="w-5 h-5" />
          Enviar mensaje por WhatsApp
        </motion.button>
      </motion.form>
    </section>
  );
}