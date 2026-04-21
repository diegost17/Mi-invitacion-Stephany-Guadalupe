import { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import EventInfo from "./components/EventInfo";
import WelcomeModal from "./components/WelcomeModal";
import cancion from "./assets/cancion1.mp3"; 
import Gadparents from "./components/Gadparents";
import rsvp from "./components/RSVP";
import RSVP from "./components/RSVP";
import FeaturedPhotos from "./components/FeaturedPhotos";


function App() {
//Animaciones
useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 0,
      offset: 0, // Esto hace que se activen apenas aparezcan en pantalla
      once: true
    });
    // Esto fuerza a AOS a detectar los elementos al cargar
    AOS.refresh(); 
  }, []);

// Audio
  const audioRef = useRef(new Audio(cancion));

  const iniciarInvitacion = () => {
    audioRef.current.loop = true;
    audioRef.current.play().catch(err => console.log("Error:", err));
    
    // Dale un tiempo a que el Modal desaparezca del DOM
    setTimeout(() => {
      AOS.refresh();
      window.dispatchEvent(new Event('resize')); // El truco final para forzar la detección
    }, 500);
  };

  return (
    <>
      <WelcomeModal onStart={iniciarInvitacion} />
      <main>
        <Hero />
        <Gadparents />
        <FeaturedPhotos />
        <EventInfo />
        <RSVP />
      </main>
    </>
  );
}

export default App;