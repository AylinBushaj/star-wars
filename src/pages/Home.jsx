import { useEffect, useState } from "react";
import StarshipCard from "../components/StarshipCard";
import SearchBar from "../components/SearchBar";

const API_URL = "https://swapi.dev/api/starships/";

//State tanımlıyoruz.
function Home() {
  const [starships, setStarships] = useState([]);
  const [nextPage, setNextPage] = useState(API_URL);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // API'den gemileri çek
  const fetchStarships = async (url) => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
  // Önceki listeleri koruyarak yenilerini getiriyorum.
    setStarships((prev) => [...prev, ...data.results]);
    setNextPage(data.next);
    setLoading(false);
  };

  // Sayfa açıldığında verileri getiriyorum.
  useEffect(() => {
    fetchStarships(API_URL);
  }, []);

  // Arama işlemleri
  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setStarships([]);
      fetchStarships(API_URL);
      return;
    }
    const res = await fetch(`${API_URL}?search=${query}`);
    const data = await res.json();
    setStarships(data.results);
  };

  return (
    <div className="container">
      <h1>🚀 Star Wars Starships</h1>

      {/* Arama kutusu */}
      <SearchBar onSearch={handleSearch} />

      {/* Liste */}
      <div className="starship-list">
        {starships.map((ship, i) => (
          <StarshipCard key={i} ship={ship} />
        ))}
      </div>

      {/* Daha fazla yükle */}
      {nextPage && !searchQuery && (
        <button onClick={() => fetchStarships(nextPage)} disabled={loading}>
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
}

export default Home;
