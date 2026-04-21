import "../styles/gadparents.css";
import fondoPadrinos from "../assets/fondo2.jpg"; 

export default function Gadparents() {
  return (
    <section className="godparents-section">
      {/* Recuadro de los Padres */}
      <div className="parents-card">
        <p className="section-tag">CON LA BENDICIÓN DE MIS PADRES</p>
        <div className="names-group">
          <p>Nombre del Padre</p>
          <p>Nombre de la Madre</p>
        </div>
      </div>

      {/* Sección Blanca con Imagen de Fondo para Padrinos */}
      <div 
        className="godparents-container" 
        style={{ backgroundImage: `url(${fondoPadrinos})` }}
      >
        <div className="godparents-content">
          <p className="section-tag">Y MIS PADRINOS</p>
          <div className="names-group highlight">
            <p>Nombre del Padrino</p>
            <p>Nombre de la Madrina</p>
          </div>
        </div>
      </div>
    </section>
  );
}