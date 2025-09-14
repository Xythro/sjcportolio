import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import nextToYouImage from "../../assets/images/Nexttoyou.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";

const NextToYou = () => {
  const title = "Next To You - art project with MQTT communicating smart (ESP32) park benches";
  const description = "Interactive art installation featuring smart park benches with ESP32-based MQTT communication";
  const images = [
    nextToYouImage
  ];
  
  const content = (
    <div>
      <h2>Project Overview</h2>
      <p>
        Next To You is an interactive art project that explores human connection and 
        communication through technology. The project features smart park benches 
        equipped with ESP32 microcontrollers that communicate via MQTT protocol, 
        creating a network of connected public spaces.
      </p>

      <h3>Technical Implementation</h3>
      <ul>
        <li>ESP32 microcontrollers for wireless communication</li>
        <li>MQTT protocol for real-time messaging between benches</li>
        <li>Custom sensor integration for user interaction</li>
        <li>Weather-resistant enclosure design</li>
        <li>Low-power operation for extended battery life</li>
      </ul>

      <h3>Artistic Concept</h3>
      <p>
        The project aims to create moments of unexpected connection in public spaces. 
        When someone sits on one bench, it can communicate with other benches in the 
        network, creating a sense of shared experience and community across physical 
        distances.
      </p>

      <h3>Features</h3>
      <ul>
        <li>Real-time communication between multiple bench locations</li>
        <li>Interactive sensors that detect occupancy and user presence</li>
        <li>Visual and audio feedback systems</li>
        <li>Data logging for interaction patterns and usage analytics</li>
        <li>Modular design for easy installation and maintenance</li>
      </ul>
    </div>
  );

  return (
    <HelmetProvider>
      <Container className="Project-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title} | {meta.title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{title}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <div className="project-content">
              {content}
            </div>
          </Col>
          <Col lg="6">
            <div className="project-gallery">
              <Row>
                {images.map((image, index) => (
                  <Col xs={12} key={index} className="mb-4">
                    <img 
                      src={image}
                      alt={`Next To You Project Image ${index + 1}`}
                      className="img-fluid"
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '1200px',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default NextToYou;
