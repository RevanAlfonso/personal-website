import { useEffect, useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import pfp from "../assets/img/pfp.jpeg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Fullstack Developer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  
  // State for controlling the modal
  const [showModal, setShowModal] = useState(false);
  
  // Functions to handle modal open/close
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  // Social media links
  const socialMedia = [
    { name: "LinkedIn", icon: "bi-linkedin", url: "https://linkedin.com/in/your-username" },
    { name: "GitHub", icon: "bi-github", url: "https://github.com/revanalfonso" },
    { name: "Instagram", icon: "bi-instagram", url: "https://www.instagram.com/repan.js/?utm_source=ig_web_button_share_sheet" },
    { name: "Twitter", icon: "bi-twitter-x", url: "https://twitter.com/your-username" },
    { name: "Email", icon: "bi-envelope-fill", url: "mailto:your-email@example.com" }
  ];

  return (
    <section className="banner" id="home">
      <Container>
        <div className="banner-content-blur p-4 p-md-5">
          <Row className="align-items-center">
            <Col
              xs={12}
              md={6}
              xl={5}
              className="text-center text-md-end order-1 order-md-2 mb-4 mb-md-0 pe-md-4"
            >
              <img src={pfp} alt="Profile" className="banner-img" />
            </Col>

            <Col xs={12} md={6} xl={7} className="order-2 order-md-1">
              <span className="tagline">Welcome to my Portofolio</span>
              <h1>
                {`Hi I'm Revan Junior `}
                <span className="wrap">
                  <br />
                  {text}
                </span>
              </h1>
              <p>
                I'm a passionate web developer who loves building modern and
                responsive websites using React, PHP, and other technologies.
                Let's create something amazing together!
              </p>
              <button onClick={handleOpenModal}>
                <i className="bi bi-arrow-right-circle"></i> Let's Connect
              </button>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Social Media Modal */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        centered
        className="connect-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Connect With Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="social-links">
            <Row className="g-4">
              {socialMedia.map((platform, index) => (
                <Col xs={6} md={4} key={index}>
                  <a 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <div className="social-icon-wrapper">
                      <i className={`bi ${platform.icon}`}></i>
                      <span>{platform.name}</span>
                    </div>
                  </a>
                </Col>
              ))}
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};