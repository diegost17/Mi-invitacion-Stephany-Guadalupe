import { config } from "../data/config";

export default function EventInfo() {
  return (
    <section>
      <h2>Ubicación</h2>
      <iframe src={config.mapsUrl}></iframe>
    </section>
  );
}