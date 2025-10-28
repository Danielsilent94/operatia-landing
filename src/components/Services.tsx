import { motion } from "framer-motion";
import { Bot, Repeat, BarChart3 } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: "Chatbots IA personalizados",
      desc: "Atiende a tus clientes 24/7 con respuestas naturales y útiles. Aumenta tus ventas sin perder leads.",
    },
    {
      icon: Repeat,
      title: "Automatización de procesos",
      desc: "Conecta WhatsApp, email y tus formularios para ahorrar tiempo y eliminar tareas repetitivas.",
    },
    {
      icon: BarChart3,
      title: "Optimización y métricas",
      desc: "Obtén paneles visuales con tus datos en tiempo real para tomar mejores decisiones.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-28 px-6 bg-gradient-to-b from-black via-slate-900 to-operatia-blue text-white text-center overflow-hidden"
    >
      {/* Fondo con brillo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(62,242,155,0.12),transparent_70%)]"></div>

      {/* Título principal */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-4xl sm:text-5xl font-extrabold mb-12 tracking-tight"
      >
        Servicios de <span className="text-operatia-green">OperatIA</span>
      </motion.h2>

      {/* Tarjetas */}
      <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map(({ icon: Icon, title, desc }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-b from-slate-800/40 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-operatia-green/50 hover:shadow-[0_0_20px_rgba(62,242,155,0.25)] transition-all duration-500"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-operatia-green/10 group-hover:bg-operatia-green/20 transition">
                <Icon className="h-10 w-10 text-operatia-green" />
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-3 group-hover:text-operatia-green transition-colors">
              {title}
            </h3>
            <p className="text-white/70 leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}