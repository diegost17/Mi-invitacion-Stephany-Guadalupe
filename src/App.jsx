import Hero from "./components/Hero";
import EventInfo from "./components/EventInfo";
import Gallery from "./components/Gallery";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  return (
    <>
      <AudioPlayer />
      <Hero />
      <EventInfo />
      <Gallery />
    </>
  );
}

export default App;