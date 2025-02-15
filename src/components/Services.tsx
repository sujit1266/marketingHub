"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import contentMarketing from "../../public/img/services/content-marketing.jpg";
import socialMediaMarketing from "../../public/img/services/social-media-marketing.jpg";
import digitalMarketing from "../../public/img/services/digital-marketing.jpg";
import emailMarketing from "../../public/img/services/email-marketing.jpg";
import seo from "../../public/img/services/seo.jpg";
import websiteDevelopment from "../../public/img/services/website-development.jpg";

const serCard = [
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Climbing to the top of search engine results isn’t easy, but with our advanced SEO strategies, it’s achievable.",
    img: seo,
  },
  {
    title: "Digital Marketing",
    desc: "Get instant results with DM campaigns designed to maximize ROI.",
    img: digitalMarketing,
  },
  {
    title: "Social Media Marketing (SMM)",
    desc: "We help you build a strong presence across platforms like Facebook, Instagram, LinkedIn, and Twitter.",
    img: socialMediaMarketing,
  },
  {
    title: "Content Marketing",
    desc: "Our content marketing services ensure your brand’s message resonates with your audience.",
    img: contentMarketing,
  },
  {
    title: "Website Design & Development",
    desc: "Your website is the cornerstone of your digital identity.",
    img: websiteDevelopment,
  },
  {
    title: "Email Marketing",
    desc: "Email marketing remains one of the most effective ways to engage customers.",
    img: emailMarketing,
  },
];

function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const clonedSerCard = [...serCard, ...serCard.slice(0, 2)];

  const nextSlide = () => {
    setActiveIndex((prev) => {
      if (prev >= serCard.length) {
        setTransitionEnabled(false);
        setTimeout(() => setTransitionEnabled(true), 10);
        return 0;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setActiveIndex((prev) => {
      if (prev === 0) {
        setTransitionEnabled(false);
        setTimeout(() => setTransitionEnabled(true), 10);
        return serCard.length;
      }
      return prev - 1;
    });
  };

  const visibleCards = [
    clonedSerCard[activeIndex % clonedSerCard.length],
    clonedSerCard[(activeIndex + 1) % clonedSerCard.length],
    clonedSerCard[(activeIndex + 2) % clonedSerCard.length],
  ];

  return (
    <div className="relative mt-20 bg-gray-100 py-10">
      <h3 className="text-3xl font-bold text-center text-[#ffa550] mb-6">
        Our Services
      </h3>
      <div className="relative flex items-center justify-center w-full overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute left-4 bg-gray-800 text-white px-4 py-2 rounded-full z-20"
        >
          ❮
        </button>
        <div className="flex justify-center items-center gap-4 w-[300%] overflow-hidden">
          {visibleCards.map((item, index) => (
            <div
              key={index}
              className={`w-1/3 px-4 transition-transform duration-500 ${
                transitionEnabled ? "ease-in-out" : "transition-none"
              } ${
                index === 1
                  ? "scale-110 z-10 transform-gpu"
                  : "scale-90 opacity-70 z-0"
              }`}
            >
              <div className="p-6 bg-white rounded-lg shadow-lg text-center h-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="rounded-md mx-auto mb-4"
                />
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-4 bg-gray-800 text-white px-4 py-2 rounded-full z-20"
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default Services;
