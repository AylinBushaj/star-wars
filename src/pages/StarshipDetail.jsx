import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const API_URL = "https://swapi.dev/api/starships/";

function StarshipDetail() {
  const { id } = useParams();
  const [ship, setShip] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      const res = await fetch(`${API_URL}${id}/`);
      const data = await res.json();
      setShip(data);
    };
    fetchDetail();
  }, [id]);

  if (!ship) return <p>Loading...</p>;

  return (
    <div className="detail">
      <h1>{ship.name}</h1>
      <p>
        <strong>Model:</strong> {ship.model}
      </p>
      <p>
        <strong>Manufacturer:</strong> {ship.manufacturer}
      </p>
      <p>
        <strong>Passengers:</strong> {ship.passengers}
      </p>
      <p>
        <strong>Crew:</strong> {ship.crew}
      </p>
      <p>
        <strong>Cargo Capacity:</strong> {ship.cargo_capacity}
      </p>
      <p>
        <strong>Max Speed:</strong> {ship.max_atmosphering_speed}
      </p>

      <Link to="/" style={{ marginTop: "20px", display: "inline-block" }}>
        Back to list
      </Link>
    </div>
  );
}

export default StarshipDetail;
