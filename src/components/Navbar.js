import { useState } from "react";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";

const links = [
  ["#home", "Home"],
  ["#about", "About"],
  ["#projects", "Projects"],
  ["#contact", "Contact"],
];

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-wrapper container" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          Hashir Ahmed
        </a>
        <ul id="site-links" className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map(([path, label]) => (
            <li key={path}>
              <a href={path} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button className="icon-button" type="button" onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
            {theme === "light" ? <DarkModeOutlined /> : <LightModeOutlined />}
          </button>
          <a className="button button-small button-outline nav-resume"
            href={`${process.env.PUBLIC_URL}/Hashir-Ahmed_Resume.pdf`}>
            Résumé <ArrowOutward />
          </a>
          <button className="icon-button menu-toggle" type="button"
            aria-expanded={menuOpen} aria-controls="site-links" aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
