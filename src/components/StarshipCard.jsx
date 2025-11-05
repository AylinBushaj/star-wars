import { Link } from "react-router-dom";

function StarshipCard({ ship }) {
  // ID’yi URL’den çıkar
  const id = ship.url.match(/\/([0-9]*)\/$/)[1];

  return (
    <Link to={`/starship/${id}`} className="starship-card">
      <h2>{ship.name}</h2>
      <p>
        <strong>Model:</strong> {ship.model}
      </p>
      <p>
        <strong>Speed:</strong> {ship.max_atmosphering_speed}
      </p>
    </Link>
  );
}

export default StarshipCard;
