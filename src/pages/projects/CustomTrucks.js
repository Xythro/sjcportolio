import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import customtrucksMainCopy from "../../assets/images/Skateboard Trucks/customtrucks_main_copy.jpg";
import truckSide from "../../assets/images/Skateboard Trucks/Truck_side.jpg";
import machinedBaseplate from "../../assets/images/Skateboard Trucks/Machined_baseplate.JPG";
import machinedHanger from "../../assets/images/Skateboard Trucks/Machined_hanger.JPG";
import truckBushingPin from "../../assets/images/Skateboard Trucks/Truck_bushing_pin.jpg";
import trucksMove from "../../assets/images/Skateboard Trucks/Trucks_move.gif";
import truckFea from "../../assets/images/Skateboard Trucks/Truck_fea.jpg";

const CustomTrucks = () => {
  const title = "Custom Longboard Trucks - CNC 6061, designed for high angle turns";
  const description = "Custom designed and machined longboard trucks for high angle turns";

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
                    src={truckSide}
                    alt="Truck side view"
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
                    src={customtrucksMainCopy}
                    alt="Custom trucks main"
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
                    src={machinedBaseplate}
                    alt="Machined baseplate"
                    className="img-fluid"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '600px',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  />
                </Col>
                <Col xs={6} className="mb-4">
                  <img 
                    src={machinedHanger}
                    alt="Machined hanger"
                    className="img-fluid"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '600px',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  />
                </Col>
                <Col xs={6} className="mb-4">
                  <img 
                    src={truckBushingPin}
                    alt="Truck bushing pin"
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
                    src={trucksMove}
                    alt="Trucks in motion"
                    className="img-fluid"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '400px',
                      objectFit: 'cover',
                      aspectRatio: '5/4',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  />
                </Col>
                <Col xs={12} className="mb-4">
                  <img 
                    src={truckFea}
                    alt="Truck FEA analysis - full width"
                    className="img-fluid"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '500px',
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

export default CustomTrucks;