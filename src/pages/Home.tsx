import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div>
      <Navbar />

      <main className="text-center">
        HomePage


        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, eaque voluptas dolorem nemo reprehenderit unde fugit repudiandae, sint autem qui quas, illo aliquid voluptatem exercitationem sunt ratione vitae possimus dicta.
      </main>

      <footer className="relative bottom-0">
        <Footer />
      </footer>
    </div>
  );
}
