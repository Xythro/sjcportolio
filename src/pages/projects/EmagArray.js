import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import emagMaintemp from "../../assets/images/emag_maintemp.jpg";

const EmagArray = () => {
  const title = "Programmable Electromagnet Array";
  const description = "Development of a hexagonal array of nineteen electromagnets with custom ESP32 driver";
  const images = [emagMaintemp];
  
  const content = (
    <div>
      <h2>Project Overview</h2>
      <p>
        This project involved the design and implementation of a sophisticated
        electromagnet array system, featuring nineteen individually controllable
        electromagnets arranged in a hexagonal pattern. The system was driven by
        a custom ESP32-based control system, enabling precise control over each
        magnet's strength and timing.
      </p>

      <h3>System Components</h3>
      <ul>
        <li>Custom-designed electromagnets</li>
        <li>ESP32 microcontroller</li>
        <li>Power management system</li>
        <li>Control interface</li>
      </ul>

      <h3>Technical Features</h3>
      <p>
        The system incorporated several advanced features:
      </p>
      <ul>
        <li>Individual magnet control</li>
        <li>Programmable field patterns</li>
        <li>Real-time field strength adjustment</li>
        <li>Temperature monitoring and protection</li>
        <li>Wireless control capability</li>
      </ul>

      <h3>Applications</h3>
      <p>
        The electromagnet array system was designed for various applications:
      </p>
      <ul>
        <li>Material manipulation and sorting</li>
        <li>Research and experimentation</li>
        <li>Educational demonstrations</li>
        <li>Industrial automation</li>
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

export default EmagArray; 