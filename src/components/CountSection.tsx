"use client"

import React from "react";
import CountUp from "react-countup";
         
const CountSection = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-[#c77838] to-[#924709] w-full">
        <div className="max-w-[100rem] mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8  lg:py-20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="pb-1 text-4xl font-extrabold text-white">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="mt-3 text-lg text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, doloremque!
            </p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">
                Components
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                <CountUp start={0} end={50} duration={7} />+
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">
                Free
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                <CountUp start={0} end={100} duration={7} />+
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">
                Dark Mode
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                <CountUp start={0} end={1000} duration={7} />+
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">
                Categories
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                <CountUp start={0} end={100} duration={7} />+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default CountSection;