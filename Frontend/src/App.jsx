import Contactanos from "./components/Contactanos"
import Contador from "./components/Contador"


function App() {

  return (
    <div className="fondo">
      <div className="flex flex-col justify-center items-center h-screen">
        <div>
          <img src="https://mueblesnakama.wordpress.com/wp-content/uploads/2021/03/logo-nombre.png?w=479" alt="" />
        </div>
        <p className="mt-5 text-4xl text-green-500 font-semibold tracking-wide uppercase">Cuenta Regresiva</p>
        <Contador />
        <Contactanos />
      </div>
    </div>
  )
}

export default App
