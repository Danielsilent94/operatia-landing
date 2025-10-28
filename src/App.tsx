import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="w-full flex flex-col bg-black text-white">
      {/*Hero code*/}
      <Hero />

      {/*services*/}
      <section className="relative z-10">
        <Services />
      </section>

      {/*Contact Form*/}
      <Contact />

      {/*Social Media*/}
      <Footer />
    </main>
  );
}