import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div>
      <img src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1083&q=80" alt="odonto background" className="absolute object-cover bg-no-repeat w-screen h-screen opacity-20"/>
      <Navbar />
      <div className="w-10/12 mx-auto my-0 z-index-50">
      <main className="text-center min-h-screen">
        <div className="border-2 w-60 h-60 ">
          <section>seção 1</section>
          <section>seção 2</section>
        </div>

      </main>
      </div>
      <Footer />
    </div>
  );
}
