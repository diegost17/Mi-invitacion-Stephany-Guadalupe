import { useState, useRef } from "react";
import Hero from "./components/Hero";
import EventInfo from "./components/EventInfo";
import Gallery from "./components/Gallery";
import WelcomeModal from "./components/WelcomeModal";
import cancion from "./assets/cancion1.mp3"; 

function App() {
  // Solo creamos el audio UNA vez usando useRef
  const audioRef = useRef(new Audio(cancion));

  const iniciarInvitacion = () => {
    audioRef.current.loop = true;
    audioRef.current.play().catch(err => console.log("Error al reproducir:", err));
  };

  return (
    <>
      {/* El Modal es el que manda la señal para iniciar el audio */}
      <WelcomeModal onStart={iniciarInvitacion} />
      
      <main>
        {/* Quitamos <AudioPlayer /> de aquí, ya no lo necesitas */}
        <Hero />
        <EventInfo />
        <Gallery />
      </main>
    </>
  );
}

export default App;