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
import auCoatGif from "../../assets/images/Au_coat.gif";
import cCoatGif from "../../assets/images/C_coat.gif";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";

const SEMicroscopy = () => {
  const title = "SEM Microscopy - (mis)uses of an awesome tool";
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
      <p>
        At my old workplace I had the fortunate access to a ZEISS Scanning Electron Microscope. While a relatively old machine (purchased originally in 2010) it was a fantastic tool for our material science work, and an even better toy for curiosity. Shown on the right are some of my (mis)uses of the SEM.
      </p>

      <p>
        We were also fortunate in obtaining a carbon and gold sputter coating chamber for free with the SEM, which enabled conductive material coatings for imaging non-conductive samples (e.g. organics, ceramics etc).
      </p>

      <p>
        The gold sputter coater was much faster and more regularly utilised, as the old vacuum pump with the coater couldn't quite pull deep enough vacuum for fast carbon coating.
      </p>

      <div className="mb-4">
        <img 
          src={auCoatGif}
          alt="Gold coating process"
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
        <p><strong><em>Gold coating samples, with the gorgeous blueish purple plasma characteristic of gold.</em></strong></p>
      </div>

      <div className="mb-4">
        <img 
          src={cCoatGif}
          alt="Carbon coating process"
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
        <p><strong><em>Literally blinding light from the 3000C carbon filament used in coating.</em></strong></p>
      </div>

      <p>
        The SEM itself had BSD and SE imaging modes, and an Oxford Instruments EBSD. Unfortunately I never found an excuse/use for the EBSD - as far as we could tell it had never been used, which was a shame given how interesting of a tool it is.
      </p>

      <p>
        We spent a fair amount of time tuning and reassembling the microscope, but were never really able to get the advertised performance out of it (nowhere close in-fact). This was definitely in-part due to the extremely unideal mechanical isolation, and probably insufficient power filtering. At the time the facilities were very space constrained, with the choice either being buildings with leaky roofs, full of powder contamination or (as chosen) mounted on a flimsy concrete pad. As we were on a tight budget we couldn't buy the more expensive Lathanum Hexaboride filaments (in place of the tungsten filaments that came with the machine) which have a much higher electron emission intensity and so a stronger image signal.
      </p>

      <p>
        In any case, the ability to see in a spectrum of varying atomic weights was such a fantastic privilege - there was/is only a handful of SEMs in NZ outside of the universities.
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