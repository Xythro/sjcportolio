import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import spiderHair from "../../assets/images/SEM Images/Wolf_Spider_hair.jpg";
import dragonfly06 from "../../assets/images/SEM Images/Sam_Dragonfly06.jpg";
import dragonfly05 from "../../assets/images/SEM Images/Sam_Dragonfly05.jpg";
import snailShell07 from "../../assets/images/SEM Images/Sam_SnailShell07.jpg";
import snailShell06 from "../../assets/images/SEM Images/Sam_SnailShell06.jpg";
import spiderWeb08 from "../../assets/images/SEM Images/Sam_Spider_web08.jpg";
import spiderWeb04 from "../../assets/images/SEM Images/Sam_Spider_web04.jpg";
import spiderWeb03 from "../../assets/images/SEM Images/Sam_Spider_web03.jpg";
import spiderWeb01 from "../../assets/images/SEM Images/Sam_Spider_web01.jpg";
import beeEye1 from "../../assets/images/SEM Images/Bee_eye1.jpg";
import beeEye2 from "../../assets/images/SEM Images/Bee_eye2.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";

const SEMicroscopy = () => {
  const title = "SEM Microscopy";
  const description = "High-resolution imaging and analysis using Scanning Electron Microscopy";
  const images = [
    spiderHair,
    dragonfly06,
    dragonfly05,
    snailShell07,
    snailShell06,
    spiderWeb08,
    spiderWeb04,
    spiderWeb03,
    spiderWeb01,
    beeEye1,
    beeEye2
  ];
  
  const content = (
    <div>
      <h2>Project Overview</h2>
      <p>
        This project involved the use of Scanning Electron Microscopy (SEM) to conduct
        detailed analysis of various materials and biological samples. The work focused
        on obtaining high-resolution images and performing elemental analysis to
        understand material properties and structures at the microscopic level.
      </p>

      <h3>Technical Aspects</h3>
      <ul>
        <li>Sample preparation and mounting</li>
        <li>SEM operation and optimization</li>
        <li>Image acquisition and processing</li>
        <li>Elemental analysis and mapping</li>
      </ul>

      <h3>Analysis Methods</h3>
      <p>
        The project utilized several advanced microscopy techniques:
      </p>
      <ul>
        <li>Secondary electron imaging for surface topography</li>
        <li>Backscattered electron imaging for composition contrast</li>
        <li>Energy-dispersive X-ray spectroscopy (EDS)</li>
        <li>3D reconstruction from multiple images</li>
      </ul>

      <h3>Findings</h3>
      <p>
        The SEM analysis provided valuable insights into the microstructure and
        composition of various samples, including the dragonfly forerib shown in
        the image. The high-resolution images revealed intricate details about
        the material's structure and properties, contributing to a better
        understanding of its characteristics and potential applications.
      </p>
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
                  <Col xs={6} key={index} className="mb-4">
                    <img 
                      src={image}
                      alt={`SEM Image ${index + 1}`}
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

export default SEMicroscopy; 