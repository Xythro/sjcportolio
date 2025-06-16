import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import fbpa6Main from "../../assets/images/FBPA6_main.jpg";

const LaserComposites = () => {
  const title = "Laser Cuttable Composite Plastics";
  const description = "Research and development of advanced composite materials for laser cutting applications";
  const images = [fbpa6Main];
  
  const content = (
    <div>
      <h2>Project Overview</h2>
      <p>
        This project focused on the development and testing of composite plastic
        materials specifically designed for laser cutting applications. The research
        aimed to create materials that combine excellent mechanical properties with
        optimal laser cutting characteristics.
      </p>

      <h3>Research Objectives</h3>
      <ul>
        <li>Material composition optimization</li>
        <li>Laser cutting parameter development</li>
        <li>Edge quality assessment</li>
        <li>Mechanical property testing</li>
      </ul>

      <h3>Development Process</h3>
      <p>
        The project involved several key development stages:
      </p>
      <ul>
        <li>Material selection and formulation</li>
        <li>Composite manufacturing</li>
        <li>Laser cutting parameter optimization</li>
        <li>Quality control and testing</li>
        <li>Performance evaluation</li>
      </ul>

      <h3>Results</h3>
      <p>
        The research successfully developed composite materials that demonstrated:
      </p>
      <ul>
        <li>Superior laser cutting performance</li>
        <li>Excellent edge quality</li>
        <li>Enhanced mechanical properties</li>
        <li>Improved process efficiency</li>
      </ul>
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

export default LaserComposites; 