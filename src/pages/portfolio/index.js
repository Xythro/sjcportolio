import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Project Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Project Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5">
          <Row>
            {dataportfolio.map((data, i) => {
              const isSEMProject = data.link === "/projects/sem-microscopy";
              const isSiCRingProject = data.link === "/projects/sic-ring";
              const isCustomTrucksProject = data.link === "/projects/custom-trucks";
              return (
                <Col lg={4} md={6} sm={12} key={i} className="mb-4">
                  <div className="po_item">
                    <img src={data.img} alt="" />
                    <div className="content">
                      <p>{data.description}</p>
                      {(isSEMProject || isSiCRingProject || isCustomTrucksProject) && <Link to={data.link}>view project</Link>}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </HelmetProvider>
  );
};
