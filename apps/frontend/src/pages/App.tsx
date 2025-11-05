import { Header } from "../components/header";

function App() {
  return (
    <section>
      <Header />
      <body className="bg-gray-100 font-sans antialiased">
        <main className="container mx-auto px-6 py-12">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
            Nuestros Servicios
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img
                src="https://via.placeholder.com/400x250/FBBF24/FFFFFF?text=Dise%C3%B1o+Web"
                alt="Diseño Web"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Diseño Web Profesional
                </h3>
                <p className="text-gray-600 mb-4">
                  Creamos sitios web modernos, responsivos y optimizados para
                  ofrecer la mejor experiencia de usuario.
                </p>
                <button className="bg-amber-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-amber-700 transition duration-300 shadow-md">
                  Más Información
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img
                src="https://via.placeholder.com/400x250/FBBF24/FFFFFF?text=Marketing+Digital"
                alt="Marketing Digital"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Marketing Digital Estratégico
                </h3>
                <p className="text-gray-600 mb-4">
                  Impulsa tu negocio con nuestras estrategias de SEO, SEM y
                  redes sociales. ¡Alcanza a más clientes!
                </p>
                <button className="bg-amber-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-amber-700 transition duration-300 shadow-md">
                  Más Información
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img
                src="https://via.placeholder.com/400x250/FBBF24/FFFFFF?text=Consultor%C3%ADa"
                alt="Consultoría"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Consultoría Tecnológica
                </h3>
                <p className="text-gray-600 mb-4">
                  Asesoramiento experto para optimizar tus procesos y adoptar
                  las mejores soluciones tecnológicas.
                </p>
                <button className="bg-amber-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-amber-700 transition duration-300 shadow-md">
                  Más Información
                </button>
              </div>
            </div>
          </div>
        </main>
      </body>
    </section>
  );
}

export default App;
