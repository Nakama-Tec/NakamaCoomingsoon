import Contador from "./components/Contador"
import { FaFacebookF, FaTwitter, FaBehance, FaDribbble, FaInstagram } from "react-icons/fa";



function App() {

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center p-4">
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
        <a href="#" className="text-white text-xl border border-white p-2 hover:bg-red-500 transition">
          <FaFacebookF />
        </a>
        <a href="#" className="text-white text-xl border border-white p-2 hover:bg-blue-500 transition">
          <FaTwitter />
        </a>
        <a href="#" className="text-white text-xl border border-white p-2 hover:bg-blue-700 transition">
          <FaBehance />
        </a>
        <a href="#" className="text-white text-xl border border-white p-2 hover:bg-pink-500 transition">
          <FaDribbble />
        </a>
        <a href="#" className="text-white text-xl border border-white p-2 hover:bg-purple-500 transition">
          <FaInstagram />
        </a>
      </div>
      <div className="text-center">
        <p className="text-4xl md:text-5xl font-light tracking-wide uppercase relative top-4 font-semibold">MUY</p>
        <p className="text-5xl md:text-7xl font-bold uppercase mt-2 relative top-5">PRONTO</p>
      </div>
      <div className="w-3/4 max-w-2xl border-t-4 border-red-600 mt-4 relative top-1"></div>
      <div className="relative top-10">
        <Contador />
        </div>
      <div className="absolute bottom-4 text-sm text-gray-400">
      <p>&copy; {new Date().getFullYear()} Nakama Tec. Derechos Reservados</p>
      </div>
    </div>

  )
}

export default App
