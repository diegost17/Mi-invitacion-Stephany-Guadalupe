import useCountdown from "../hooks/useCountdown";
import { config } from "../data/config";

export default function Countdown() {
  const { d, h, m, s } = useCountdown(config.date);

  return (
    <section>
      <h2>Faltan</h2>
      <p>{d}d {h}h {m}m {s}s</p>
    </section>
  );
}