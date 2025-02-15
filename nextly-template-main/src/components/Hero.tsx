import { Container } from "@/components/Container";
import React from "react";

export const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-[90px] md:top-[110px] left-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better readability */}
      <div className="absolute top-[90px] md:top-[110px] left-0 h-[100%] w-[100%] inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <Container className="relative z-10 flex flex-col items-center text-white text-center px-6">
        <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-6xl w-[70%]">
          Transforming Businesses with 360° Digital Marketing Solutions
        </h1>
        <p className="py-6 text-lg md:text-xl max-w-2xl"></p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
            target="_blank"
            rel="noopener"
            className="px-8 py-4 text-lg font-medium text-white bg-buttonColor hover:bg-buttonColorHover rounded-md transition duration-300"
          >
            Download for Free
          </a>
          <a
            href="https://github.com/web3templates/nextly-template/"
            target="_blank"
            rel="noopener"
            className="flex items-center space-x-2 px-12 py-4 text-lg font-medium text-gray-300 bg-gray-800 hover:bg-gray-900 rounded-md transition duration-300"
          >
            <span> Contact Us</span>
          </a>
        </div>
      </Container>
    </div>
  );
};
