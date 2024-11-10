

import "./HomePage.css"; 
import imagen1 from "../assets/imagen1.jpg"
function HomePage() {
    return (
        <div className="homepage">
           
            <div className="background-banner">
                <h1 className="background-text">Ficti Cia S.A.</h1>
            </div>
            
           
            <section className="content">
                <h1>Bienvenidos a Ficti Cia S.A.</h1>
                <p>
                    Ficti Cia S.A. es una empresa líder en el sector industrial, comprometida
                    con la innovación y la excelencia en todos nuestros servicios.
                </p>

                <h2>Nuestra Misión</h2>
                <p>
                    Ofrecemos soluciones eficientes y sostenibles que impactan positivamente en la vida de
                    las personas y en el desarrollo de la industria. Nos esforzamos por ser un referente
                    en calidad y servicio.
                </p>

                <h2>Nuestros Valores</h2>
                <ul>
                    <li>Compromiso con la calidad</li>
                    <li>Innovación continua</li>
                    <li>Responsabilidad social y ambiental</li>
                    <li>Trabajo en equipo</li>
                </ul>

                <h2>Nuestros Servicios</h2>
                <p>
                    En Ficti Cia S.A., ofrecemos una amplia gama de servicios que cubren desde la
                    consultoría hasta la implementación de soluciones personalizadas.
                </p>

              
                <div className="image-gallery">
            <img src={imagen1} alt="Servicio único" />
        </div>
            </section>
        </div>
    );
}

export default HomePage;
