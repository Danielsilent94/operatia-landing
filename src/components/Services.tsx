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
    <section id="services" className="py-24 sm:py-28 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
          Servicios de <span className="text-operatia-green">OperatIA</span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-8 bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-6">
                <Icon className="h-12 w-12 text-operatia-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}