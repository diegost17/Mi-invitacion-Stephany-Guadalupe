import "../styles/featuredPhotos.css";
import foto1 from "../assets/foto1.jpeg"; 
import foto2 from "../assets/foto2.jpeg"; 
import fondoSeccion from "../assets/fondo4.png"; 

export default function FeaturedPhotos() {
  return (
    <section className="featured-main-container">
      
      {/* SECCIÓN 1: FRASE (Fondo blanco limpio) */}
      <div className="growth-phrase-wrapper" data-aos="fade-up">
        <p className="growth-phrase script-font">
          "Ayer una niña, hoy una mujer... <br /> 
          conservando siempre la esencia que me hace soñar."
        </p>
        <div className="growth-divider"></div>
      </div>

      {/* SECCIÓN 2: FOTOS (Con fondo e imágenes centradas) */}
      <div 
        className="photos-background-area" 
        style={{ backgroundImage: `url(${fondoSeccion})` }}
      >
        <div className="featured-container">
          <div className="photo-frame" data-aos="zoom-in-right">
            <img src={foto1} alt="Stephany niña" className="featured-img" />
          </div>

          <div className="photo-frame" data-aos="zoom-in-left">
            <img src={foto2} alt="Stephany quinceañera" className="featured-img" />
          </div>
        </div>
      </div>

    </section>
  );
}