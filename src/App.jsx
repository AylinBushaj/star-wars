import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StarshipDetail from "./pages/StarshipDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starship/:id" element={<StarshipDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
