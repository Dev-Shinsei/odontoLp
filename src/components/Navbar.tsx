export function Navbar() {
  return (
    <nav className="w-full text-center list-none flex items-center justify-between bg-red-300 py-5 px-10  font-bold ">
      <div>
      <a href="#" target="_blank" className="cursor-pointer hover:text-white ">
        Jéssica Ursulino
      </a>
      </div>
      
      
      <a className="cursor-pointer hover:text-white">
        <li>About</li>
      </a>
      

      
      <a className="cursor-pointer hover:text-white">
        <li>Resume</li>
      </a>
      
      
      <a className="cursor-pointer hover:text-white">
        <li>Contact</li>
      </a>
      
      
      
      
    </nav>
  );
}
