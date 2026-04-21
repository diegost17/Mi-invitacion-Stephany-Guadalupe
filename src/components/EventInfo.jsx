import "../styles/eventInfo.css";
import fondoEventos from "../assets/fondo3.png"; 

export default function EventInfo() {
  return (
    <section 
      className="events-section" 
      style={{ backgroundImage: `url(${fondoEventos})` }}
    >
      {/* TARJETA 1: CEREMONIA RELIGIOSA */}
      <div className="event-card">
        <div className="event-icon">⛪</div>
        <h3 className="event-title">Ceremonia Religiosa</h3>
        <p className="event-detail">14:15 HRS</p>
        <p className="event-location-name">Parroquia de San Miguel Arcangel</p>
        <p className="event-address">Col. San Miguel Xico 1ra Sección.
Valle de Chalco</p>
        
        <button 
          className="event-btn"
          onClick={() => window.open("https://maps.app.goo.gl/3ENvWnYk9vNCa1P5A", "_blank")}
        >
          VER UBICACIÓN
        </button>
      </div>

      {/* TARJETA 2: RECEPCIÓN */}
      <div className="event-card">
        <div className="event-icon">🥂</div>
        <h3 className="event-title">Recepción</h3>
        <p className="event-detail">16:00 HRS</p>
        <p className="event-address">Calle Emiliano Zapata Mz 4 Lt 3
San Miguel Xico 1ra Sección.
Valle de chalco, cerrada de la Virgen</p>
        
        <button 
          className="event-btn"
          onClick={() => window.open("https://maps.app.goo.gl/JitiUAEASPqrysoY7", "_blank")}
        >
          VER UBICACIÓN
        </button>
      </div>
    </section>
  );
}