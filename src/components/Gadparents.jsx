import "../styles/gadparents.css";
import fondoFlores from "../assets/fondo2.jpg"; 

export default function Gadparents() {
  return (
    <section className="family-section">
      {/* Animación: Deslizar desde arriba */}
      <div className="invite-banner" data-aos="fade-down" data-aos-offset="0">
        <p>¡Es mi fiesta, es mi día y lo quiero compartir con todos mis amigos y familia!</p>
        <p>¡Te espero para disfrutar juntos!</p>
      </div>

      <div 
        className="family-container" 
        style={{ backgroundImage: `url(${fondoFlores})` }}
      >
        <div className="family-overlay">
          {/* Animación: Deslizar desde la izquierda */}
          <div className="family-group" data-aos="fade-right">
            <h2 className="group-title">Con la bendición de Dios y de mis padres.</h2>
            <div className="names-container">
              <p className="script-font">Omar Domínguez Maldonado</p>
              <span className="ampersand">&</span>
              <p className="script-font">Carolina López Ventura</p>
            </div>
          </div>

          {/* Animación: Zoom suave */}
          <div className="family-group" style={{ marginTop: '40px' }} data-aos="fade-right" data-aos-offset="0">
            <h2 className="group-title">Tiene el honor de invitarles a la celebración de los quince años de:</h2>
            <div className="divider"></div>
            <div className="names-container">
              <p className="script-font main-name">Stephany Guadalupe</p>
            </div>
            <div className="divider"></div>
          </div>

          {/* Animación: Deslizar desde abajo */}
          <div className="padrinos-box" data-aos="fade-up">
            <p className="section-tag">Y MIS PADRINOS</p>
            <div className="names-container">
              <p className="script-font">Daniel Ortega Jarquín</p>
              <span className="ampersand">&</span>
              <p className="script-font">Isamar Bañuelos López</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}