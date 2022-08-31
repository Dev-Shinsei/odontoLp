export function Footer() {
  return (
    <div className="bg-transparent py-10 px-6 text-base font-bold ">
      <div className="flex justify-between items-center">
        <div className="">
          <a href="#" className="px-6 rounded hover:bg-indigo-400">Direitos Autorais</a>
          <a href="#" className="px-6 rounded hover:bg-indigo-400">Termos de Uso</a>
          <a href="#" className="px-6 rounded hover:bg-indigo-400">Políticas de Privacidade</a>
        </div>
        <div className="">
          <a href="#home">
            <img src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/61dc34f3623c7b35f3596ee9_icon-backtotop.svg" alt="desenho de seta para cima com função de voltar ao topo da página" loading="lazy" />
          </a>
        </div>
      </div>
    </div>
  );
}
