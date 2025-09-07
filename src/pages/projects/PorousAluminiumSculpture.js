import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import saltCastGif from "../../assets/images/SaltCast_spin.gif";

const PorousAluminiumSculpture = () => {
  const title = "Porous Aluminium Sculpture using salt infiltration casting";
  const description = "Exploring salt-infiltration casting to create porous aluminium structures for artistic and functional applications.";
  const images = [saltCastGif];

  const content = (
    <div>
      <h2>Process Summary</h2>
      <p>
        Salt particles are packed to a desired geometry, infiltrated with molten aluminium, and then leached out to leave a
        lightweight porous metal structure with controllable pore size and density.
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

export default PorousAluminiumSculpture; 