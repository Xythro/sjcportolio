import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import customTrucksMain from "../../assets/images/customtrucks_main.jpg";

const CustomTrucks = () => {
  const title = "Custom Longboard Trucks";
  const description = "Design and manufacturing of precision-engineered longboard trucks for enhanced performance";
  const images = [customTrucksMain];
  
  const content = (
    <div>
      <h2>Project Overview</h2>
      <p>
        This project involved the design and manufacturing of custom longboard trucks,
        focusing on optimizing performance characteristics through precise engineering
        and material selection. The goal was to create trucks that offer superior
        control, stability, and durability compared to standard off-the-shelf options.
      </p>

      <h3>Design Features</h3>
      <ul>
        <li>Custom geometry for improved turning response</li>
        <li>Optimized pivot point placement</li>
        <li>Enhanced bushing seat design</li>
        <li>Precision-machined components</li>
      </ul>

      <h3>Manufacturing Process</h3>
      <p>
        The manufacturing process included several critical steps:
      </p>
      <ul>
        <li>CAD design and simulation</li>
        <li>CNC machining of components</li>
        <li>Heat treatment for durability</li>
        <li>Precision assembly and testing</li>
      </ul>

      <h3>Performance Improvements</h3>
      <p>
        The custom trucks demonstrated significant improvements in:
      </p>
      <ul>
        <li>Turning response and control</li>
        <li>Stability at high speeds</li>
        <li>Durability and wear resistance</li>
        <li>Overall ride quality</li>
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

export default CustomTrucks; 