import React from "react";
import ChefImage from "../asset/chef.jpg";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white to-orange-300 py-20">
      <div className="md:flex md:justify-between md:ml-24">
        <div className="md:w-1/3">
          <h3 className="text-3xl font-bold md:text-6xl mb-10 text-blue-800">
            Our Story
          </h3>
          <p className="text-blue-900 text-base font-mono">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <br />
          <p className="text-blue-900 text-base font-mono">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer.
          </p>
          <br />
          <button className="bg-blue-800 px-3 py-1 text-white rounded items-center mb-10">
            Contact Me
          </button>
        </div>
        <div className="md:w-1/2 relative mt-10 md:mt-0 md:mr-10">
          <img
            src={ChefImage}
            alt="Chef"
            className="w-2/3 h-2/3 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
