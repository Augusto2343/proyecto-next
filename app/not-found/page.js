import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-6">
      <svg width="180" height="180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-8 animate-bounce">
        <circle cx="12" cy="12" r="10" fill="#2563eb"/>
        <path d="M9 10h.01M15 10h.01M8 16c1.333-1 4.667-1 6 0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">¡Página no encontrada!</h2>
      <p className="mb-8 text-gray-300 text-center max-w-md">Lo sentimos, la página que buscas no existe o fue movida. Pero no te preocupes, puedes volver a la página principal.</p>
      <Link href="/">
        <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-200">Volver al inicio</span>
      </Link>
    </div>
  );
};

export default NotFound;