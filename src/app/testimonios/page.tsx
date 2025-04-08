export default function Testimonials() {
    return (
        <section className="bg-black text-white px-6 py-16">
            <div className="max-w-6xl mx-auto">
                {/* Testimonios */}
                <div className="grid md:grid-cols-2 gap-10 mb-20 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">TESTIMONIOS</h2>
                        <p className="text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim nec nisl ullamcorper eleifend. 
                            Praesent risus leo, fringilla et nulla at, egestas euismod orci.
                        </p>

                        {/* Puntos indicadores */}
                        <div className="flex space-x-2 mt-6">
                            <span className="h-3 w-3 bg-gray-600 rounded-full"></span>
                            <span className="h-3 w-3 bg-gray-600 rounded-full"></span>
                            <span className="h-3 w-3 bg-gray-600 rounded-full"></span>
                        </div>
                    </div>
                    <div>
                        <img 
                            src="https://images.pexels.com/photos/866027/pexels-photo-866027.jpeg" 
                            alt="Testimonio" 
                            className="rounded-lg object-cover w-full h-auto"
                        />
                    </div>
                </div>

                {/* Resultados */}
                <h2 className="text-4xl font-bold mb-10">RESULTADOS</h2>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    <img 
                        src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Fitness resultados" 
                        className="rounded-md"
                    />
                    <div className="space-y-10">
                        <div>
                            <h3 className="font-semibold mb-2">Primeros 3 meses</h3>
                            <p className="text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim nec nisl ullamcorper 
                                eleifend. Praesent risus leo, fringilla et nulla at, egestas euismod orci
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Primeros 6 meses</h3>
                            <p className="text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim nec nisl ullamcorper 
                                eleifend. Praesent risus leo, fringilla et nulla at, egestas euismod orci
                            </p>
                        </div>
                    </div>
                </div>

                {/* Botones */}
                <div className="flex justify-center gap-6 mt-12">
                    <button className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-100">
                        MÁS INFORMACIÓN
                    </button>
                    <button className="bg-yellow-300 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-400">
                        CONTÁCTANOS
                    </button>
                </div>
            </div>
        </section>
    );
}
