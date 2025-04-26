export default function Login() {
    return (
        <div className="min-h-screen bg-black text-white flex justify-center items-start px-4 pt-12">
            <div className="w-full max-w-md bg-[#1a1a1a] p-10 rounded-2xl shadow-2xl border border-white/10">
                <h1 className="text-3xl font-bold text-center mb-2 text-white">Iniciar Sesión</h1>
                <p className="text-center text-sm text-gray-300 mb-6">
                    Autentícate para estar en forma
                </p>

                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                        className="w-full px-4 py-3 rounded-md bg-[#2b2b2b] text-white placeholder-gray-400 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#eefb03] shadow-lg"
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="w-full px-4 py-3 rounded-md bg-[#2b2b2b] text-white placeholder-gray-400 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#eefb03] shadow-lg"
                    />

                    <p className="text-center text-sm text-gray-300">
                        ¿No tienes una cuenta? <a href="/register" className="text-[#eefb03] font-semibold">AQUÍ</a>
                    </p>

                    <button
                        type="submit"
                        className="w-full bg-[#eefb03] text-black font-bold py-3 rounded-full transition-colors hover:bg-[#f7f90a] text-sm uppercase shadow-xl"
                    >
                        INGRESA
                    </button>
                </form>

                <p className="text-center text-sm mt-6 text-gray-500">
                    2024 - Energym · Política de Privacidad
                </p>
            </div>
        </div>
    );
}
