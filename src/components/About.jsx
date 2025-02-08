import { useState } from "react";

import React from "react";

const About = ({ setScreen }) => {
  return (
    <div
      className="bg-zinc-900 h-screen flex flex-col justify-center items-center text-left "
      onClick={() => setScreen("home")}
    >
      <div className="w-1/2 lg:w-1/4 text-white ">
        <p className="  "> Hello, </p>
        <p className=" mt-3 ">
          {" "}
          Welcome to MotiQuo. I created this website during a time when I
          struggled with motivation, and I found that motivational quotes helped
          me move forward. I hope you discover the same encouragement here, and
          I wish you strength and success on your journey.
        </p>
        <p className="mt-3">- Justin</p>
      </div>
    </div>
  );
};

export default About;
