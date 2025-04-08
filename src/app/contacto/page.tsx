export default function Contact() {
    return (
        <section className="bg-black text-white px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-light text-center mb-4">Contacto</h2>
                <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim nec nisl ullamcorper eleifend. 
                    Praesent risus leo, fringilla et nulla at, egestas euismod orci.
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Información de contacto */}
                    <div className="space-y-6">
                        <p>Utiliza las siguientes vías de contacto, o rellena el formulario.</p>
                        <p><strong>Vía E-mail</strong></p>
                        <p><strong>En nuestras redes sociales</strong></p>
                        <p><strong>Por teléfono</strong></p>
                    </div>

                    {/* Formulario con labels */}
                    <form className="space-y-6">
                        <div>
                            <label className="block mb-1 text-white">Nombre</label>
                            <input 
                                type="text" 
                                placeholder="Escribe tu nombre" 
                                className="w-full p-3 rounded-md text-black bg-white"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-white">E-mail</label>
                            <input 
                                type="email" 
                                placeholder="Escribe tu e-mail" 
                                className="w-full p-3 rounded-md text-black bg-white"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-white">Teléfono</label>
                            <input 
                                type="tel" 
                                placeholder="Escribe tu teléfono (Opcional)" 
                                className="w-full p-3 rounded-md text-black bg-white"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-white">Mensaje</label>
                            <textarea 
                                rows={4} 
                                placeholder="Escribe tu mensaje" 
                                className="w-full p-3 rounded-md text-black bg-white"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className="bg-yellow-300 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-400"
                        >
                            ENVIAR MENSAJE
                        </button>
                    </form>
                </div>

                <p className="text-center mt-16 text-sm text-gray-400">
                    2025 - Política de Privacidad
                </p>
            </div>
        </section>
    );
}
