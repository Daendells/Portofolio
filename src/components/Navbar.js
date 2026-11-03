import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const LINKS = [
  ["/project", "Work"],
  ["/about", "About"],
  ["/credentials", "Credentials"],
  ["/resume", "CV"],
];

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar expanded={expanded} fixed="top" expand="md" className={isScrolled ? "site-nav site-nav--scrolled" : "site-nav"}>
      <Container className="site-nav-inner">
        <Navbar.Brand as={Link} to="/" onClick={closeMenu} className="logo-text">
          Davin Jonathan Tanus
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" aria-label="Toggle navigation" onClick={() => setExpanded((open) => !open)} />
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
