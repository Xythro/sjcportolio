import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";

const ProjectTemplate = ({ title, description, images, content }) => {
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
          <Col lg="8">
            <div className="project-content">
              {content}
            </div>
          </Col>
          <Col lg="4">
            <div className="project-gallery">
              {images.map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  className="img-fluid mb-4"
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default ProjectTemplate; 