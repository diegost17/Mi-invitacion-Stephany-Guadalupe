import "../styles/gadparents.css";
import fondoFlores from "../assets/fondo2.jpg"; 

export default function Gadparents() {
  return (
    <section className="family-section">
      {/* BANNER ROJO */}
      <div className="invite-banner">
        <p>¡Es mi fiesta, es mi día y lo quiero compartir con todos mis amigos y familia!</p>
        <p>¡Te espero para disfrutar juntos!</p>
      </div>

      {/* CONTENEDOR CON FONDO */}
      <div 
        className="family-container" 
        style={{ backgroundImage: `url(${fondoFlores})` }}
      >
        <div className="family-overlay">
          
          {/* 1. Bloque Padres */}
          <div className="family-group">
            <h2 className="group-title">Con la bendición de Dios y de mis padres.</h2>
            <div className="names-container">
              <p className="script-font">Omar Domínguez Maldonado</p>
              <span className="ampersand">&</span>
              <p className="script-font">Carolina López Ventura</p>
            </div>
          </div>

          {/* 2. Bloque Stephany con líneas */}
          <div className="family-group" style={{ marginTop: '40px' }}>
            <h2 className="group-title">Tiene el honor de invitarles a la celebración de los quince años de:</h2>
            <div className="divider"></div>
            <div className="names-container">
              <p className="script-font main-name">Stephany Guadalupe</p>
            </div>
            <div className="divider"></div>
          </div>

          {/* 3. Cuadro de Padrinos (Abajo de Stephany) */}
          <div className="padrinos-box">
            <p className="section-tag">Y MIS PADRINOS</p>
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