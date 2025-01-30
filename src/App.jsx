import Contador from "./components/Contador";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center p-4">
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex-col space-y-4 hidden sm:flex">
        <a
          href="https://www.instagram.com/nakama.tec/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl border border-white p-2 transition hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:opacity-80"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.threads.net/@nakama.tec"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl border border-white p-2 hover:bg-gray-900 transition"
        >
          <FaThreads />
        </a>
        <a
          to="/"
          className="text-white text-xl border border-white p-2 hover:bg-black transition"
        >
          <FaXTwitter />
        </a>
      </div>
      <div className="text-center">
        <p className="text-4xl md:text-5xl tracking-wide uppercase relative top-4 font-semibold">
          MUY
        </p>
        <p className="text-5xl md:text-7xl font-bold uppercase mt-2 relative top-5">
          PRONTO
        </p>
      </div>
      <div className="w-3/4 max-w-2xl border-t-4 border-red-600 mt-4 relative top-1"></div>
      <div className="relative top-10">
        <Contador />
      </div>
      <div className="absolute bottom-4 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Nakama Tec. Derechos Reservados</p>
      </div>
    </div>
  );
}

export default App;
