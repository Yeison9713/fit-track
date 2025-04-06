import Link from "next/link";

export default function PlansMemberships() {
    return (
      <section className="text-center">
        <h1 className="title">Planes</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim nec
          nisl ullamcorper eleifend. Praesent risus leo, fringilla et nulla at,
          egestas euismod orci.
        </p>
  
        <div className="plans">
          {/* Plan Básico */}
          <div className="plan">
            <h3>Básico</h3>
            <div className="price">15€</div>
            <ul>
              <li>1 cuenta</li>
              <li>Acceso a los datos</li>
              <li>Crear contenido</li>
              <li>Publicar fotos</li>
              <li>Publicar videos</li>
            </ul>
            <button className="button-primary mt-4 w-full">Seleccionar Plan</button>
          </div>
  
          {/* Plan Avanzado */}
          <div className="plan">
            <h3>Avanzado</h3>
            <div className="price">25€</div>
            <ul>
              <li>Todo el plan Básico</li>
              <li>5 cuentas</li>
              <li>Atención personalizada</li>
              <li>Feedback mensual</li>
              <li>Destaca tus contenidos</li>
              <li>Acceso ilimitado</li>
              <li>Ofertas y descuentos</li>
              <li>Mayor seguridad</li>
            </ul>
            <button className="button-primary mt-4 w-full">Seleccionar Plan</button>
          </div>
  
          {/* Plan Personalizado */}
          <div className="plan">
            <h3>Personalizado</h3>
            <Link href="#" className="contactar">
              Contactar
            </Link>
            <ul>
              <li>
                Todas las características de los planes anteriores además de las
                características personalizadas que necesites.
              </li>
              <li>
                Se realizará un presupuesto ajustado a las necesidades de tu
                negocio.
              </li>
            </ul>
            <button className="button-primary mt-4 w-full">Seleccionar Plan</button>
          </div>
        </div>
      </section>
    );
  };