"use client";
import React, { useRef, useState } from "react";
import Marquee from 'react-fast-marquee';

const industries1 = ["E-commerce & Retail",
     "Healthcare & Medical",
     "Real Estate",
     "Education & E-learning",
     "Finance & Banking",
     "Legal Services",
     "Travel & Hospitality",
     "Automotive Industry",
     "Food & Beverage",
     "SaaS & IT Services",
     "Entertainment & Media",
     "Fashion & Beauty",]

const industries2 = ["Home Services (Plumbing, Electri,cians, Cleaning, etc.)",
     "Manufacturing & B2B",
     "Nonprofits & Charities",
     "Sports & Fitness",
     "Event Planning & Wedding Services",
     "Telecommunications",
     "Pharmaceuticals & Biotech",
     "Logistics & Supply Chain",
     "Pet Care & Veterinary Services",
     "Government & Public Services",
     "Energy & Renewable Resources",
     "Gaming & eSports",
     "Luxury Goods & Jewelry"]

export default function TagScroll() {
     return (
          <>   
               <h3 className="text-4xl font-bold text-center text-[#ffa550] mb-14">Where We Serve</h3>
               {/* <h3 className="text-4xl font-bold text-center text-[#000] mb-10">Where <span className="text-[#ffa550]">W</span>e Se<span className="text-[#ffa550]">rve</span></h3> */}
               <Marquee pauseOnHover direction="right" className="border-y-2 border-solid py-10">
                    {
                         industries1.map((item,index) => <div className="ml-14 text-4xl font-bold font-[system-ui]" key={index}>{item}</div>)
                    }
               </Marquee>
               <Marquee pauseOnHover direction="left" className="border-y-2 border-solid py-10 mt-4">
                    {
                         industries2.map((item,index) => <div className="ml-14 text-4xl font-bold font-[system-ui]" key={index}>{item}</div>)
                    }
               </Marquee>
          </>
     );
}
