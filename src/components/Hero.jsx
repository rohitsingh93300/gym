import React from "react";
import BannerImg from "../assets/hero1.jpg";

const BgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Hero = () => {
  return (
    <div
      id="#"
      style={BgStyle}
      className="dark:bg-black dark:text-white duration-300  "
    >
      <div className="bg-white/10  dark:bg-black/80 duration-300 ">
        <div className="max-w-7xl mx-auto h-[90vh] md:min-h-[620px]  flex items-center">
          <div className="md:w-1/2 w-full pl-5 md:pl-0 space-y-5">
            <p className="text-red-500 text-lg md:text-2xl ">
              Start Your Fitness Journey
            </p>
            <h1
             
              className="text-5xl md:text-7xl font-bold text-white"
            >
              Your Fitness Journey Begins!
            </h1>
            <p className="mr-24 text-white"> 
            Join us today and start your fitness journey with expert trainers and state-of-the-art facilities.
            </p>
            <button
              className="bg-red-500 px-3 py-2 rounded-md "
            >
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 hidden">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;