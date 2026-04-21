import { useState } from "react";
import "../styles/welcomeModal.css";

export default function WelcomeModal({ onStart }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleStart = () => {
    setIsOpen(false);
    if (onStart) onStart(); // Aquí activamos la música
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>¡Bienvenido!</h2>
        <p>Haz clic en "Abrir Invitación" para continuar.</p>
        <button onClick={handleStart} className="modal-btn">
          Abrir Invitación
        </button>
      </div>
    </div>
  );
}