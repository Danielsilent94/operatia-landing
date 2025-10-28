import Hero from "./components/Hero";
import Services from "./components/Services";

export default function App() {
  return (
    <main className="w-full flex flex-col bg-slate-950">
      {/* HERO con fondo degradado */}
      <Hero />

      {/* SECCIÓN DE SERVICIOS con fondo blanco */}
      <section className="bg-white text-slate-900">
        <Services />
      </section>
    </main>
  );
}