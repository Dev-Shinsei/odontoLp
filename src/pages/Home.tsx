import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div>
      <img src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1083&q=80" alt="odonto background" className="absolute object-cover bg-no-repeat w-screen h-screen opacity-20"/>
      <Navbar />
      <div className="w-10/12 mx-auto my-0 z-index-50">
      <main className="text-center min-h-screen">
        <p>Home Page</p>


        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, eaque voluptas dolorem nemo reprehenderit unde fugit repudiandae, sint autem qui quas, illo aliquid voluptatem exercitationem sunt ratione vitae possimus dicta.</p>
      </main>
      </div>
      <Footer />
    </div>
  );
}
