import { useEffect, useRef } from "react";
import cancion from "../assets/Tercer Cielo - No Crezcas Mas.mp3"; // Asegúrate de que el nombre coincida

export default function AudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Intentar reproducir automáticamente
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.log("Autoplay bloqueado por el navegador. Esperando interacción.");
        });
      }
    };

    playAudio();

    // El truco: Si el navegador bloqueó el autoplay, 
    // sonará en cuanto el usuario toque cualquier parte de la invitación.
    window.addEventListener("click", playAudio, { once: true });
    window.addEventListener("touchstart", playAudio, { once: true });

    return () => {
      window.removeEventListener("click", playAudio);
      window.removeEventListener("touchstart", playAudio);
    };
  }, []);

  return (
    <audio 
      ref={audioRef} 
      src={cancion} 
      loop  /* Esto hace que se repita constantemente */
      style={{ display: "none" }} /* Invisible */
    />
  );
}