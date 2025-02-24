import Image from "next/image";
import React from "react";
import { Container }  from "@/components/Container";
import Link from "next/link";

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title1: string;
    title2: string;
    desc: string;
    desc2: string;
    image: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}
export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  return (
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap mt-28">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 mr-20 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div>
            <Image
              src={data.image}
              width={721}
              // height={521}
              alt="Benefits"
              className={"object-cover"}
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-start w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-[#ffa550] lg:leading-tight lg:text-2xl dark:text-white">
              Welcome to
              </h3>
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-[#000] lg:leading-tight lg:text-6xl dark:text-white">
                market<span className="text-[#ffa550]">i</span>an<span className="text-[#ffa550]">hub</span>
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 font-mono">
                {data.desc}
              </p>
              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 font-mono">
                {data.desc2}
              </p>
            </div>

            <div className="mt-6">
            <Link className="px-12 py-4 text-white bg-buttonColor hover:bg-buttonColorHover rounded-md" href="/about">Learn More</Link>
              </div>

            {/* <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div> */}
          </div>
        </div>
      </Container>
  );
};

function Benefit(props: any) {
  return (
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
  );
}
