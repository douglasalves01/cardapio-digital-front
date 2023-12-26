import "./card.css";

interface CardProps {
  price: number;
  title: string;
  image: string;
}

export function Card({ price, image, title }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt={title} /> {/* Utilizando a propriedade 'image' */}
      <h2>{title}</h2> {/* Utilizando a propriedade 'title' */}
      <p>
        <b>Valor:</b> {price}
      </p>
    </div>
  );
}
