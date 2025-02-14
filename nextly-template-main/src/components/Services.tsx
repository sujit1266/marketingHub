"use client";
import shapeimg from "../../public/img/shape1-1.png";
import React, { useRef, useState } from 'react';
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import ServiceCard from "./ServiceCard";

// import required modules
import { EffectCoverflow,Navigation } from 'swiper/modules';
const serCard=[
  {title : "Search Engine Optimization (SEO)", 
    desc: "Climbing to the top of search engine results isn’t easy, but with our advanced SEO strategies, it’s achievable. Our SEO services include: Our goal? To not just drive traffic to your site, but to attract potential customers actively searching for your services."},
  {title : " Pay-Per-Click (PPC) Advertising",
    desc: "Get instant results with PPC campaigns designed to maximize ROI. Our PPC services cover: Social media is where your customers are—and so should you be. We help you build a strong presence across platforms like Facebook, Instagram, LinkedIn, and Twitter. Our SMM services include:"
  },
  {title : "3. Social Media Marketing (SMM) ",
    desc : "Social media is where your customers are—and so should you be. We help you build a strong presence across platforms like Facebook, Instagram, LinkedIn, and Twitter. Our SMM services include: "
  },
  {title : "Content Marketing",
    desc: "Content is the kingpin of digital marketing. Our content marketing services ensure your brand’s message resonates with your audience through: "
  },
  {title : " Website Design & Development",
    desc: "Your website is the cornerstone of your digital identity. Our development team specializes in: "
  },
  {title : "Email Marketing",
    desc: "Email marketing remains one of the most effective ways to engage customers. We create personalized campaigns that nurture leads and drive conversions. From newsletters to product launches, we handle it all. "
  }
];

function Services() {
  return (
    <div className={`mt-20 bg-[url(../../public/img/shape1-1.png)] bg-center bg-no-repeat bg-auto h-[830px]`}>
      <h3 className="w-[100%] mt-3 text-3xl font-bold leading-snug tracking-tight text-[#ffa550] lg:leading-tight lg:text-4xl dark:text-white text-center">Our Services</h3>
      <Swiper 
      navigation={true} 
      modules={[Navigation,EffectCoverflow]} 
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      className="mySwiper !p-4 !pb-10"
      slidesPerView={3}
      spaceBetween={30}
      >
        {serCard.map((item,index)=><SwiperSlide key={index} className="text-center"><ServiceCard heading={item.title} desc={item.desc}/></SwiperSlide>)}
      </Swiper>
    </div>
  )
}

export default Services
