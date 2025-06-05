import {
    Dumbbell,
    Bike,
    Music,
    Leaf,
} from "lucide-react";

export default function Services() {
    return (
        <div className="bg-black text-white px-6 py-12">
            <h1 className="text-3xl font-bold text-center mb-12">Clases y servicios</h1>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Imagen de las clases */}
                <div className="w-full">
                    <img
                        src="https://images.pexels.com/photos/866027/pexels-photo-866027.jpeg"
                        alt="Clases de entrenamiento"
                        className="rounded-xl shadow-lg"
                    />
                </div>

                {/* Lista de servicios */}
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <Dumbbell className="text-[#eefb03] w-8 h-8" />
                        <div>
                            <h3 className="text-[#eefb03] font-semibold">CrossFit</h3>
                            <p className="text-sm text-gray-300">Entrenamiento funcional de alta intensidad.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Bike className="text-[#eefb03] w-8 h-8" />
                        <div>
                            <h3 className="text-[#eefb03] font-semibold">Spinning / Indoor Cycling</h3>
                            <p className="text-sm text-gray-300">Clases de ciclismo en interiores.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Leaf className="text-[#eefb03] w-8 h-8" />
                        <div>
                            <h3 className="text-[#eefb03] font-semibold">Yoga</h3>
                            <p className="text-sm text-gray-300">Flexibilidad, fuerza y relajación.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Music className="text-[#eefb03] w-8 h-8" />
                        <div>
                            <h3 className="text-[#eefb03] font-semibold">Zumba</h3>
                            <p className="text-sm text-gray-300">Cardio con ritmos latinos y baile.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
