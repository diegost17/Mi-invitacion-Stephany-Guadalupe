import "../styles/gadparents.css";
import fondoFlores from "../assets/fondo2.jpg"; 

export default function Gadparents() {
  return (
    <section className="family-section">
      {/* BANNER ROJO - Frase de invitación */}
      <div className="invite-banner">
        <p>¡Es mi fiesta, es mi día y lo quiero compartir con todos mis amigos y familia!</p>
        <p>¡Te espero para disfrutar juntos!</p>
      </div>

      {/* SECCIÓN PADRES Y PADRINOS CON FONDO */}
      <div 
        className="family-container" 
        style={{ backgroundImage: `url(${fondoFlores})` }}
      >
        <div className="family-overlay">
          {/* Bloque Padres */}
          <div className="family-group">
            <h2 className="group-title">Con la bendición de Dios y de mis padres.</h2>
            <div className="names-container">
              <p className="script-font">Omar Domínguez Maldonado</p>
              <span className="ampersand">&</span>
              <p className="script-font">Carolina López Ventura</p>
            </div>
          </div>

          {/* Bloque Padrinos */}
          <div className="family-group" style={{ marginTop: '40px' }}>
            <h2 className="group-title">Y mis padrinos.</h2>
            <div className="names-container">
              <p className="script-font">Nombre del Padrino</p>
              <span className="ampersand">&</span>
              <p className="script-font">Nombre de la Madrina</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}