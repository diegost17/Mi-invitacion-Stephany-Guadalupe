import { config } from "../data/config";

export default function Gallery() {
  return (
    <section>
      {config.gallery.map((img, i) => (
        <img key={i} src={img} width="200" />
      ))}
    </section>
  );
}