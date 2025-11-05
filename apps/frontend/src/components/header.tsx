export function Header() {
  return (
    <header className="flex justify-between px-6 md:px-12 py-4 bg-amber-600 items-center shadow-lg">
      <h1 className="text-white text-2xl font-bold tracking-wide">
        Venta de servicios
      </h1>

      <div className="flex gap-6 items-center">
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li className="hover:text-amber-200 transition duration-300 cursor-pointer">
            Quiénes somos
          </li>
          <li className="hover:text-amber-200 transition duration-300 cursor-pointer">
            Contacto
          </li>
          <li className="hover:text-amber-200 transition duration-300 cursor-pointer">
            Servicios
          </li>
        </ul>

        <button className="border-2 border-white text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-amber-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
          🛒 Carrito
        </button>
      </div>
    </header>
  );
}
