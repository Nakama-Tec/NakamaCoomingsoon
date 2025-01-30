import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Contactanos = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el correo electrónico al backend
        console.log('Email enviado:', email);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-extrabold text-white mb-8">NOTIFICAME</h1>
            <form onSubmit={handleSubmit} className="p-4 rounded-lg shadow-lg w-full max-w-md flex items-center">
                <div className="flex-grow mr-2">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-white shadow appearance-none border border-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Correo Electrónico"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 flex items-center"
                >
                    <FaPaperPlane />
                </button>
            </form>
        </div>
    );
};

export default Contactanos;
