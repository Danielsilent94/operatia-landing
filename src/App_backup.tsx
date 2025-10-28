import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-[#0A1220] text-white">
      {/* HERO */}
      <section className="gradient-hero">
        <Hero />
      </section>

      {/* SERVICIOS */}
      <section className="bg-[#0b1630] py-20 px-6">
        <Services />
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}