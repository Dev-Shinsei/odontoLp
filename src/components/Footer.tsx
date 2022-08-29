export function Footer() {
  return (
    <footer className="bottom-0 bg-white relative pt-1 border-b-2 border-blue-700">
      <div className="text-center">
        <i className="m-2 bg-gray-200">Instagram</i>
        <i className="m-2 bg-gray-200">TikTok</i>
        <i className="m-2 bg-gray-200">CRO</i>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-blue-700 font-bold mb-2">
              © 2022 by Dev-Shinsei
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}