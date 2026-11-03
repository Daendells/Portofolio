import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { BsMoon, BsSun } from "react-icons/bs";

const LINKS = [
  ["/", "Home"],
  ["/about", "About"],
  ["/project", "Projects"],
  ["/credentials", "Credentials"],
  ["/resume", "Resume"],
];

// Light is the default; a saved choice wins. Storage can be blocked, so reads and writes are guarded.
function savedTheme() {
  try {
    return window.localStorage.getItem("theme") === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // Private mode: the choice lasts for this visit only.
    }
  }, [theme]);

  const closeMenu = () => setExpanded(false);
  const dark = theme === "dark";

  return (
    <Navbar expanded={expanded} fixed="top" expand="lg" className={isScrolled ? "site-nav site-nav--scrolled" : "site-nav"}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={closeMenu} className="logo-text">
          Davin Jonathan Tanus
        </Navbar.Brand>
        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            aria-pressed={dark}
            aria-label="Dark mode"
            onClick={() => setTheme(dark ? "light" : "dark")}
          >
            {dark ? <BsSun aria-hidden="true" /> : <BsMoon aria-hidden="true" />}
          </button>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" aria-label="Toggle navigation" onClick={() => setExpanded((open) => !open)} />
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {LINKS.map(([to, label]) => (
              <Nav.Item key={to}>
                <Nav.Link as={Link} to={to} onClick={closeMenu}>
                  {label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
