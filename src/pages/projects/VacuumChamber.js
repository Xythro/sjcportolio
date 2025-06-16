import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import vacuumChamberMain from "../../assets/images/Vacuumchamber_main.jpg";

const VacuumChamber = () => {
  const title = "Vacuum Chamber Rebuild";
  const description = "Revival and redesign of a 1960's Triaxial Shear Testing chamber";
  const images = [vacuumChamberMain];
  
  const content = (
    <div>
      <h2>Project Overview</h2>
      <p>
        This project involved the restoration and modernization of a vintage vacuum chamber
        originally used for triaxial shear testing in the 1960s. The chamber required
        significant updates to meet modern safety standards while preserving its
        historical significance.
      </p>

      <h3>Key Challenges</h3>
      <ul>
        <li>Restoring vintage components while maintaining functionality</li>
        <li>Implementing modern safety features</li>
        <li>Upgrading control systems for better precision</li>
        <li>Documenting the restoration process</li>
      </ul>

      <h3>Technical Details</h3>
      <p>
        The chamber was originally designed for testing soil samples under controlled
        pressure conditions. The restoration process included:
      </p>
      <ul>
        <li>Complete disassembly and inspection of all components</li>
        <li>Replacement of outdated seals and gaskets</li>
        <li>Installation of modern pressure monitoring systems</li>
        <li>Implementation of digital control interfaces</li>
      </ul>

      <h3>Results</h3>
      <p>
        The restored chamber now operates with improved precision and safety while
        maintaining its original functionality. The project serves as both a working
        piece of equipment and a historical artifact, demonstrating the evolution of
        materials testing technology.
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

export default VacuumChamber; 