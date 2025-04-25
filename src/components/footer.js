import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-glass py-4">
      <Container>
        <Row className="align-items-center text-center">
          <Col md={4} className="mb-3 mb-md-0">
            <h4 className="brand-text mb-0">
              Repan<span className="text-glow">.js</span>
            </h4>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <p>&copy; {new Date().getFullYear()} Revan Junior. All rights reserved.</p>
          </Col>
          <Col md={4}>
            <div className="social-icons d-flex gap-3 justify-content-center">
              <a href="https://www.instagram.com/repan.js/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://github.com/RevanAlfonso" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;