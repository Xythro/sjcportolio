import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import magnetAnimation from "../../assets/images/Magnet Array/Magnet_animation.gif";
import magnetBulkhead from "../../assets/images/Magnet Array/Magnet_bulkhead.jpg";
import magnetLowerWithMagnets from "../../assets/images/Magnet Array/Magnet_lower_with_magnets.jpg";
import magnetLower from "../../assets/images/Magnet Array/Magnet_lower.jpg";
import magnetTesting from "../../assets/images/Magnet Array/Magnet_testing.jpg";
import magnetTopRotate from "../../assets/images/Magnet Array/Magnet_toprotate.gif";

const EmagArray = () => {
  const title = "Liquid Cooled Electromagnet Array - designed to fit as vacuum chamber manifold";
  const description = "Programmable electromagnet array with liquid cooling for vacuum chamber applications";

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
          <Col lg="12">
            <div className="project-gallery">
              <Row>
                <Col xs={6} className="mb-4">
                  <img 
                    src={magnetAnimation}
                    alt="Magnet animation"
                    className="img-fluid"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '400px',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  />
                </Col>
                <Col xs={6} className="mb-4">
                  <img 
                    src={magnetTopRotate}
                    alt="Magnet top rotation"
                    className="img-fluid"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '400px',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  />
                </Col>
                <Col xs={6} className="mb-4">
                  <img 
                    src={magnetLowerWithMagnets}
                    alt="Magnet lower with magnets"
                    className="img-fluid"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '400px',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  />
                </Col>
                <Col xs={6} className="mb-4">
                  <img 
                    src={magnetLower}
                    alt="Magnet lower assembly"
                    className="img-fluid"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '400px',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  />
                </Col>
                <Col xs={6} className="mb-4">
                  <img 
                    src={magnetTesting}
                    alt="Magnet testing setup"
                    className="img-fluid"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '400px',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  />
                </Col>
                <Col xs={6} className="mb-4">
                  <img 
                    src={magnetBulkhead}
                    alt="Magnet bulkhead"
                    className="img-fluid"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '400px',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default EmagArray;