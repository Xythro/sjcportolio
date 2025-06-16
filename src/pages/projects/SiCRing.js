import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import sicRingMain from "../../assets/images/SiCring_main.jpg";

const SiCRing = () => {
  const title = "Silicon Carbide Ring";
  const description = "Advanced material processing and manufacturing of silicon carbide components";
  const images = [sicRingMain];
  
  const content = (
    <div>
      <h2>Project Overview</h2>
      <p>
        This project focused on the development and manufacturing of high-performance
        silicon carbide rings for industrial applications. The process involved
        advanced material processing techniques and precise manufacturing methods
        to achieve the required material properties and dimensional accuracy.
      </p>

      <h3>Technical Challenges</h3>
      <ul>
        <li>Material selection and optimization</li>
        <li>Precision manufacturing tolerances</li>
        <li>Surface finish requirements</li>
        <li>Quality control and testing</li>
      </ul>

      <h3>Manufacturing Process</h3>
      <p>
        The manufacturing process included several critical steps:
      </p>
      <ul>
        <li>Material preparation and mixing</li>
        <li>Forming and shaping</li>
        <li>High-temperature sintering</li>
        <li>Precision machining</li>
        <li>Surface treatment and finishing</li>
      </ul>

      <h3>Results</h3>
      <p>
        The project successfully produced silicon carbide rings that met all
        specified requirements for hardness, wear resistance, and dimensional
        accuracy. The components demonstrated excellent performance in their
        intended applications, with improved durability and reliability compared
        to conventional materials.
      </p>
    </div>
  );

  return (
    <ProjectTemplate
      title={title}
      description={description}
      images={images}
      content={content}
    />
  );
};

export default SiCRing; 