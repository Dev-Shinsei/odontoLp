export function Navbar() {
  return (
    <nav className="text-center list-none flex space-x-20 justify-between items-center py-4 px-10 bg-red-300 ">
      <a className="cursor-pointer">
        <img
          src="https://github.com/Dev-Shinsei.png"
          alt="imagem de Shinsei"
          className=" rounded-full h-10 w-10"
        />
      </a>

      <a className="cursor-pointer hover:scale-110">
        <li>About</li>
      </a>
      <a className="cursor-pointer hover:scale-110">
        <li>Resume</li>
      </a>
      <a className="cursor-pointer hover:scale-110">
        <li>Contact</li>
      </a>
    </nav>
  );
}
