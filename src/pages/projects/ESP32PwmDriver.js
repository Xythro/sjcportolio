import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import controllerImg from "../../assets/images/Generic_controller.jpg";

const ESP32PwmDriver = () => {
  const title = "Generic ESP32 multiplexed PWM driver";
  const description = "An ESP32-based multiplexed PWM driver for controlling many channels efficiently.";
  const images = [controllerImg];

  const content = (
    <div>
      <h2>Project Overview</h2>
      <p>
        A compact, reusable PWM driver built on the ESP32 platform, designed to multiplex and drive many PWM outputs
        for applications like LEDs, motors, and actuators.
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

export default ESP32PwmDriver; 