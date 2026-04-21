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
        <p className="event-detail">16:00 HRS</p>
        <p className="event-location-name">Parroquia de San Juan Bautista</p>
        <p className="event-address">Calle Principal #45, Col. Centro</p>
        
        <button 
          className="event-btn"
          onClick={() => window.open("https://maps.google.com/?q=Parroquia+San+Juan+Bautista", "_blank")}
        >
          VER UBICACIÓN
        </button>
      </div>

      {/* TARJETA 2: RECEPCIÓN */}
      <div className="event-card">
        <div className="event-icon">🥂</div>
        <h3 className="event-title">Recepción</h3>
        <p className="event-detail">18:00 HRS</p>
        <p className="event-location-name">Salón de Eventos "El Castillo"</p>
        <p className="event-address">Av. de las Rosas #123, Ciudad de México</p>
        
        <button 
          className="event-btn"
          onClick={() => window.open("https://maps.google.com/?q=Salon+El+Castillo", "_blank")}
        >
          VER UBICACIÓN
        </button>
      </div>
    </section>
  );
}