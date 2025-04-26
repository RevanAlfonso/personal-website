// Penyesuaian pada Projects.js
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectsCard } from "./projectCard";
import projIm1 from "../assets/img/hai-phung-0z76nwoF1OI-unsplash.jpg";
import projUIimg1 from "../assets/img/projectUI1.png";
import projUIimg2 from "../assets/img/projectUI2.png";

export const Projects = () => {
  const projectsWebDevelopment = [
    {
      title: "Personal Website",
      description: "Design & Development",
      imgUrl: projIm1,
    },
    {
      title: "E-Commerce Platform",
      description: "Full-Stack Development",
      imgUrl: projIm1,
    },
    {
      title: "Travel Blog",
      description: "React & Node.js",
      imgUrl: projIm1,
    },
    {
      title: "Task Manager App",
      description: "React & Firebase",
      imgUrl: projIm1,
    },
    {
      title: "Restaurant Website",
      description: "Responsive Design",
      imgUrl: projIm1,
    },
    {
      title: "Portfolio Template",
      description: "HTML, CSS & JavaScript",
      imgUrl: projIm1,
    },
  ];

  const projectsUIDesign = [
    {
      title: "GearMotion",
      description: "Sport Bike UI Design",
      imgUrl: projUIimg1,
      linkUrl: "https://www.figma.com/proto/5e7LvzpOEhLSyTMl5Mx91j/Untitled?node-id=1-2&p=f&t=x70HfiVGuWv6VbfD-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"
    },
    {
      title: "LaufeyPage",
      description: "Fan Page Laufey",
      imgUrl: projUIimg2,
      linkUrl: "https://www.figma.com/proto/5Zhkl9fl0mHolfPfluNsSr/Untitled?node-id=1-2&p=f&t=hueeXGSH2JTNoUgp-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
    },
    {
      title: "FoodMood App",
      description: "Food Delivery UI/UX",
      imgUrl: projIm1,
    },
    {
      title: "Travel Explorer",
      description: "Travel App UI Design",
      imgUrl: projIm1,
    },
    {
      title: "E-Learning Platform",
      description: "Educational UI Design",
      imgUrl: projIm1,
    },
    {
      title: "Health Tracker",
      description: "Fitness App UI/UX",
      imgUrl: projIm1,
    },
  ];

  return (
    <section className="projects py-5" id="projects">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              Berikut adalah beberapa proyek yang telah saya kerjakan, mencakup pengembangan web
              dan desain UI/UX dengan berbagai teknologi dan pendekatan kreatif.
            </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="d-flex justify-content-center mb-4 gap-2">
                <Nav.Item>
                  <Nav.Link eventKey="first" className="px-4">Web Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className="px-4">UI/UX Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" className="px-4">Graphics Design</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projectsWebDevelopment.map((project, index) => (
                      <ProjectsCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projectsUIDesign.map((project, index) => (
                      <ProjectsCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="text-center py-5">
                    <div style={{ 
                      background: "rgba(255, 255, 255, 0.3)", 
                      backdropFilter: "blur(10px)", 
                      padding: "40px 20px", 
                      borderRadius: "16px",
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)" 
                    }}>
                      <h3>Project Graphics Design</h3>
                      <p className="mt-3">Projects coming soon! Saat ini saya sedang bekerja pada beberapa proyek desain grafis yang menarik. Kembali lagi nanti untuk melihat karya-karya terbaru.</p>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>

            {/* Promo Banner */}
            <div className="promo-banner mt-5">
              <div className="promo-content text-center">
                <h3>Mau Buat Website dan Desain dengan Harga Terjangkau?</h3>
                <p>
                  Sphere ID siap bantu kamu wujudkan project impianmu dengan desain
                  profesional dan harga yang ramah di kantong!
                </p>
                <a href="https://wa.me/6282269882378" target="_blank" rel="noopener noreferrer">
  <button
    className="mt-3 px-4 py-2 rounded-pill fw-semibold"
    style={{ background: "#ffffff", color: "#2575fc", border: "none" }}
  >
    ✨ Hubungi Kami Sekarang
  </button>
</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};