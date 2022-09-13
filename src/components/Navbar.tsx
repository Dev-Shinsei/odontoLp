export function Navbar() {
  return (
    <nav id="home" className="relative w-full text-center list-none flex items-center justify-between bg-transparent py-5 px-10  font-bold ">
      <a
          href="#"
          className="cursor-pointer "
        >
          <div className="w-44 h-8  rounded flex justify-center items-center px-auto hover:bg-indigo-400 uppercase">
          Jessica Ursulino
          </div>
      </a>

      <a className="cursor-pointer ">
      <div className="w-36 h-8  rounded flex justify-center items-center p-auto hover:bg-indigo-400">
        <li>Sobre</li>
      </div>
      </a>

      <a className="cursor-pointer ">
      <div className="w-36 h-8  rounded flex justify-center items-center p-auto hover:bg-indigo-400">
        <li>Especialidade</li>
      </div>
      </a>

      <a className="cursor-pointer">
      <div className="w-44 h-8 rounded flex justify-center items-center p-auto hover:bg-indigo-400 uppercase">
        <li>Agendar Consulta</li>
      </div>
      </a>
    </nav>
  );
}
