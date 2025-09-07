import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import esk8Img from "../../assets/images/Esk8_horizontal.jpg";

const CustomESK8 = () => {
  const title = "Custom ESK8 with scratchbuilt trucks, deck, battery and enclosure";
  const description = "A ground-up electric skateboard build featuring custom trucks, deck, battery pack, and enclosure.";
  const images = [esk8Img];

  const content = (
    <div>
      <h2>Build Overview</h2>
      <p>
        This project documents a fully custom electric skateboard build, including scratchbuilt trucks, a hand-shaped deck,
        a high-discharge battery pack, and a molded enclosure designed for serviceability and durability.
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

export default CustomESK8; 