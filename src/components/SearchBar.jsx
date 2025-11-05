function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search starships by name or model..."
      onChange={handleChange}
      style={{
        width: "100%",
        padding: "10px",
        margin: "20px 0",
        fontSize: "1rem",
      }}
    />
  );
}

export default SearchBar;
