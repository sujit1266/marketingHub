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
        <p className="py-6 text-lg md:text-xl max-w-2xl">
          In today’s fast-moving digital world, having a strong online presence is essential for any
          business looking to succeed and stay ahead of the competition. At Marketianhub, we
          specialize in helping brands grow with customized and innovative digital marketing strategies
          designed just for you.
        </p>

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
            className="flex items-center space-x-2 px-6 py-3 text-lg font-medium text-gray-300 bg-gray-800 hover:bg-gray-900 rounded-md transition duration-300"
          >
            <svg
              role="img"
              width="24"
              height="24"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <span> View on Github</span>
          </a>
        </div>
      </Container>
    </div>
  );
};
