import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <section id="center">
      <div>
        <h1>Nginx | Suresh Jat</h1>
      </div>
    </section>
  );
}
function Greet() {
  return (
    <section id="center">
      <div>
        <h1>Hello world!</h1>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/greet">Greet</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/greet" element={<Greet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
