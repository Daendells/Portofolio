import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { BsAward } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import logo from "../Assets/logo.png";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar
      expanded={expanded}
      fixed="top"
      expand="lg"
      className={isScrolled ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex" onClick={closeMenu}>
          <img src={logo} className="img-fluid logo" alt="Davin portfolio" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          aria-label="Toggle navigation"
          onClick={() => setExpanded((current) => !current)}
        >
          <span />
          <span />
          <span />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={closeMenu}>
                <AiOutlineHome /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={closeMenu}>
                <AiOutlineUser /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={closeMenu}>
                <AiOutlineFundProjectionScreen /> Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/credentials" onClick={closeMenu}>
                <BsAward /> Credentials
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={closeMenu}>
                <CgFileDocument /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
