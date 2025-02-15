"use client";
import React, { useRef, useState } from "react";
import Marquee from 'react-fast-marquee';


export default function TagScroll() {
  return (
    <>
          <Marquee pauseOnHover direction="right" className="border-y-2 border-solid py-10">
               <div className="ml-14 text-4xl font-bold font-[system-ui]">
               Agriculture and Allied Industries
               </div>
               <div className="ml-14 text-4xl font-bold font-[system-ui]">
                    Auto Components
               </div>
               <div className="ml-14 text-4xl font-bold font-[system-ui]">
               Automobiles
               </div>
               <div className="ml-14 text-4xl font-bold font-[system-ui]">            
                    Aviation
               </div>
               <div className="ml-14 text-4xl font-bold font-[system-ui]">
               Ayush
               </div>
               <div className="ml-14 text-4xl font-bold font-[system-ui]">
                    Banking 
               </div>
               <div className="ml-14 text-4xl font-bold font-[system-ui]">
                    Biotechonology
               </div>
               <div className="ml-14 text-4xl font-bold font-[system-ui]">
                    Cement
               </div>
               <div className="ml-14 text-4xl font-bold font-[system-ui]">
                    Chemicals
               </div>
               <div className="ml-14 text-4xl font-bold font-[system-ui]">
                    E-commerce
               </div>
          </Marquee>
          <Marquee pauseOnHover direction="left" className="border-y-2 border-solid py-10 mt-4">
               <div className="ml-14 text-4xl font-bold font-[system-ui]">
                    Food processing
               </div>
               <div className="ml-14 text-4xl font-bold font-[system-ui]">
                    Healthcare
               </div>
               <div className="ml-14 text-4xl font-bold font-[system-ui]">
               Lupin
               </div>
               <div className="ml-14 text-4xl font-bold font-[system-ui]">
               Aurobindo Pharma
               </div>
               <div className="ml-14 text-4xl font-bold font-[system-ui]">
               National Fertilizers Limited
               </div>
               <div className="ml-14 text-4xl font-bold font-[system-ui]">
               Tech Mahindra
               </div>
               <div className="ml-14 text-4xl font-bold font-[system-ui]">
               Wipro
               </div>
               <div className="ml-14 text-4xl font-bold font-[system-ui]">
               Arvind Ltd.
               </div>
               <div className="ml-14 text-4xl font-bold font-[system-ui]">
               Vedanta
               </div>
               <div className="ml-14 text-4xl font-bold font-[system-ui]">
               Axis Bank
               </div>
          </Marquee>
    </>
  );
}
