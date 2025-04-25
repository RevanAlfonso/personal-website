import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import icon1 from "../assets/img/instagram.png";  // Ganti dengan path gambar yang sesuai
import icon2 from "../assets/img/github.png";     // Ganti dengan path gambar yang sesuai
import icon3 from "../assets/img/linkedin.png";   // Ganti dengan path gambar yang sesuai
import "../App.css";  // Import file CSS untuk styling

const MyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Menambahkan event listener untuk scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <Container>
        <Navbar.Brand href="#home" className="brand-text">
          Repan<span className="text-glow">.js</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {["home", "about", "projects", "contact"].map((section) => (
              <Nav.Link
                key={section}
                href={`#${section}`}
                className={activeLink === section ? "active nav-link-custom" : "nav-link-custom"}
                onClick={() => setActiveLink(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
          <div className="d-flex align-items-center gap-3">
            <a href="https://www.instagram.com/repan.js/?utm_source=ig_web_button_share_sheet"><img src={icon1} alt="Instagram" width="24" /></a>
            <a href="https://github.com/RevanAlfonso"><img src={icon2} alt="GitHub" width="24" /></a>
            <a href="#"><img src={icon3} alt="LinkedIn" width="24" /></a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
