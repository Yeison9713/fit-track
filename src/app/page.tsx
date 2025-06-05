export default function Home() {
    return (
        <div className="bg-[url('../../public/4043.jpg')] min-h-[70vh] bg-no-repeat bg-center bg-cover flex items-center">
            <div className="space-y-3">
                <div className="w-full pl-12">
                    <p className="text-5xl lg:text-7xl font-bold uppercase">Fuerza.</p>
                    <p className="text-5xl lg:text-7xl font-bold uppercase">Disciplina.</p>
                    <p className="text-5xl lg:text-7xl font-bold uppercase">Resultados.</p>
                </div>
                <div className="w-full pl-12">
                    <p className="text-lg lg:text-xl">Transforma tu cuerpo, supera tus limites.</p>
                </div>
                <div className="w-full pl-12">
                    <button className="button-primary mt-5 text-sm lg:text-base w-[15rem] lg:w-[18rem]">
                        Unete ahora
                    </button>
                </div>
            </div>
        </div>
    );
}
