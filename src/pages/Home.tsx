import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div>
      <Navbar />

      <main className="text-center">HomePage</main>

      <footer className="relative bottom-0">
        <Footer />
      </footer>
    </div>
  );
}
