import "../styles/hero.css";
import hero from "../assets/herofinal.png";
import useCountdown from "../hooks/useCountdown";
import { config } from "../data/config";

export default function Hero() {
  const { d, h, m, s } = useCountdown(config.date);

  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <img src={hero} alt="Invitación" className="hero-img" />
        <div className="hero-overlay">
          <p className="hero-tag">MIS XV AÑOS</p>
          <h3 className="hero-names">Stephany Guadalupe</h3>
          <p className="hero-date">30 • Mayo • 2026</p>

          <div className="hero-counter">
            <div className="counter-item"><span>{d}</span><small>Días</small></div>
            <div className="counter-item"><span>{h}</span><small>Hrs</small></div>
            <div className="counter-item"><span>{m}</span><small>Min</small></div>
            <div className="counter-item"><span>{s}</span><small>Seg</small></div>
          </div>
        </div>
        
      </div>
    </section>
  );
}