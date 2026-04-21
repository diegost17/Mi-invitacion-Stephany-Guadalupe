import { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import EventInfo from "./components/EventInfo";
import Gallery from "./components/Gallery";
import WelcomeModal from "./components/WelcomeModal";
import cancion from "./assets/cancion1.mp3"; 
import Gadparents from "./components/Gadparents";

function App() {
//Animaciones
useEffect(() => {
    AOS.init({
      duration: 1000, // mil milisegundos = 1 segundo
      once: false,
      mirror: true
    });
    // Esto fuerza a AOS a detectar los elementos al cargar
    AOS.refresh(); 
  }, []);

// Audio
  const audioRef = useRef(new Audio(cancion));

  const iniciarInvitacion = () => {
    audioRef.current.loop = true;
    audioRef.current.play().catch(err => console.log("Error al reproducir:", err));
  };

  return (
    <>
      <WelcomeModal onStart={iniciarInvitacion} />
      <main>
        <Hero />
        <Gadparents />
        <EventInfo />
        <Gallery />
      </main>
    </>
  );
}

export default App;