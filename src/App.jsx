import { useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink, MemoryRouter, useLocation } from "react-router-dom";

const Random = () => <p>🎲 Random page from Remote 2.</p>;
const About = () => <p>ℹ️ Second remote application.</p>;

export default function App({ standalone = true,basename="" }) {
  return (
    <BrowserRouter basename={standalone ? "/" : basename}>
      <div style={remoteStyles.container}>
        <h2>React Remote App 2</h2>

        <nav style={remoteStyles.nav}>
          <NavLink to="/" style={remoteNav}>Home</NavLink>
          <NavLink to="/random" style={remoteNav}>Random</NavLink>
          <NavLink to="/about" style={remoteNav}>About</NavLink>
        </nav>

        <div style={remoteStyles.card}>
          <Routes>
            <Route index  element={<p>🏠 Remote 2 Home</p>} />
            <Route path="random" element={<Random />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

const remoteStyles = {
  container: {
    textAlign: "center",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    marginBottom: 16,
  },
  card: {
    padding: 20,
    background: "#eef2ff",
    borderRadius: 6,
  },
};

const remoteNav = ({ isActive }) => ({
  textDecoration: "none",
  padding: "6px 10px",
  borderRadius: 4,
  color: isActive ? "#fff" : "#4f46e5",
  background: isActive ? "#4f46e5" : "transparent",
});
