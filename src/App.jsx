import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animes" element={<Index />} />
            <Route path="/animes/:id" element={<Show />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
