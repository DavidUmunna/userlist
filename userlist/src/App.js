import "./App.css";
import { Routes, Route } from "react-router-dom";
import MovieTrailer from "./components/movie_trailer";
import Trailer from "./components/trailer";

function App() {
  const videoid = "qz4c9WPceVM";

  return (
    <div>
      
      <Routes>
        <Route path="/" element={<MovieTrailer />} />
        <Route path="/trailer" element={<Trailer videoId={videoid} />} />
      </Routes>
    </div>
  );
}

export default App;
