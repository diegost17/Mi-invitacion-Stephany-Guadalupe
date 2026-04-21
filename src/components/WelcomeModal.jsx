import { useState } from "react";
import "../styles/welcomeModal.css";

export default function WelcomeModal({ onStart }) {
  const [visible, setVisible] = useState(true);

  const handleOpen = () => {
    setVisible(false); // ESTO QUITA EL MODAL DE LA PANTALLA
    if (onStart) onStart();
  };

  if (!visible) return null; // Si no es visible, no renderiza NADA

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>¡Bienvenido!</h2>
        <p>Haz clic en "Abrir Invitación" para continuar.</p>
        <button onClick={handleOpen} className="modal-btn">
          Abrir Invitación
        </button>
      </div>
    </div>
  );
}