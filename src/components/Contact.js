import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Implementasi pengiriman form ke email atau backend
    alert("Pesan terkirim! Terima kasih telah menghubungi saya.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="contact py-5" id="contact">
      <Container>
        <h2 className="section-title">Hubungi Saya</h2>
        <p className="section-subtitle">
          Punya pertanyaan atau ingin bekerja sama? Jangan ragu untuk menghubungi saya.
        </p>
        
        <Row className="justify-content-center">
          <Col lg={4} className="mb-4 mb-lg-0">
            <div className="contact-info p-4 rounded-4" style={{ background: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(14px)", border: "1px solid rgba(255, 255, 255, 0.1)", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)" }}>
              <h3 className="mb-4">Informasi Kontak</h3>
              
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box me-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: "45px", height: "45px", background: "#5c7aea", color: "white" }}>
                  <FaPhone />
                </div>
                <div>
                  <p className="mb-0">+62 822 6988 2378</p>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box me-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: "45px", height: "45px", background: "#5c7aea", color: "white" }}>
                  <FaEnvelope />
                </div>
                <div>
                  <p className="mb-0">revanjuniorw@gmail.com</p>
                </div>
              </div>
              
              <div className="d-flex align-items-center">
                <div className="icon-box me-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: "45px", height: "45px", background: "#5c7aea", color: "white" }}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="mb-0">Medan, Indonesia</p>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={8}>
            <div className="contact-form p-4 rounded-4" style={{ background: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(14px)", border: "1px solid rgba(255, 255, 255, 0.1)", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)" }}>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Nama Depan</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        required 
                        style={{ background: "rgba(255, 255, 255, 0.6)", border: "1px solid rgba(200, 200, 200, 0.3)" }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Nama Belakang</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        required 
                        style={{ background: "rgba(255, 255, 255, 0.6)", border: "1px solid rgba(200, 200, 200, 0.3)" }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        style={{ background: "rgba(255, 255, 255, 0.6)", border: "1px solid rgba(200, 200, 200, 0.3)" }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Nomor Telepon</Form.Label>
                      <Form.Control 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange}
                        style={{ background: "rgba(255, 255, 255, 0.6)", border: "1px solid rgba(200, 200, 200, 0.3)" }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label>Pesan</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                    style={{ background: "rgba(255, 255, 255, 0.6)", border: "1px solid rgba(200, 200, 200, 0.3)" }}
                  />
                </Form.Group>
                
                <Button 
                  type="submit" 
                  className="btn px-4 py-2" 
                  style={{ background: "#5c7aea", border: "none", borderRadius: "12px", fontWeight: "500" }}
                >
                  Kirim Pesan
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};