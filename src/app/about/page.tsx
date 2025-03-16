import CountSection from "@/components/CountSection";
import React from "react";
import "../../../css/style.css";
import Image from "next/image";
import logoImg from "../../../public/img/Logo Final.png";
import ChooseUsCard from "@/components/ChooseUsCard";
import chooseUsImage1 from "../../../public/img/choose-us-img1.png";
import chooseUsImage2 from "../../../public/img/choose-us-img2.jpeg";
import chooseUsImage3 from "../../../public/img/choose-us-img3.jpeg";
import chooseUsImage4 from "../../../public/img/choose-us-img4.jpeg";
import chooseUsImage5 from "../../../public/img/choose-us-img5.jpeg";
import chooseUsImage6 from "../../../public/img/choose-us-img6.jpeg";
import OurApproach from "@/components/Approaches";

function AboutUs() {
  return (
    <div className="pt-20">
      <section className="py-14 lg:py-24 relative z-0 bg-gradient-to-t from-[#fab781] to-[#ffffff] ">
        <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-4 relative text-center">
          <h1 className="w-full mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
            About Us
            <span className="text-[#c77838] block w-full"> Empowering Small Businesses, Driving Big Success
              ⁤</span>
          </h1>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWJvdXR8ZW58MHx8MHx8fDA%3D"
                alt="About Us tailwind page"
                className="max-lg:mx-auto rounded-lg"
              />
            </div>
            <div className="lg:pl-[0px] flex items-start mt-20">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  About Us | Marke anHub {" "}
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  At Marke anHub, we believe every small business has the poten al to thrive in today’s compe ve
                  market. Our mission is to provide affordable, result-driven, and customized marke ng solu ons that
                  help businesses across India build their brand, a ract customers, and drive revenue. Whether
                  you're a startup, local retailer, service provider, or e-commerce business, we guide you through the
                  digital landscape to maximize your poten al.
                  As a full-service marke ng agency, we understand the challenges small businesses face, including
                  limited budgets, technical gaps, and intense compe on. That’s why we offer cost-effec ve, data
                  driven, and scalable strategies to help brands establish a strong presence both online and offline.
                  Our expert team of marketers, strategists, content creators, and designers cra s unique marke ng
                  campaigns, covering brand building, social media management, SEO, and paid adver sing, ensuring
                  sustainable growth and success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1702034785.png"
                  alt="About Us tailwind page"
                  className="block lg:hidden mb-9 mx-auto"
                />
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  Our Mission & Vission{" "}
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  <span className="font-bold text-gray-600"> Mission: </span> At
                  At Marke anHub, our mission is to empower small businesses with innova ve marke ng solu ons
                  that enhance their brand presence and drive growth. We aim to bridge the gap between tradi onal
                  businesses and the digital world by providing result-oriented strategies tailored to each business's
                  unique needs. Our approach focuses on helping businesses increase visibility, engage with
                  customers, and generate sustainable revenue. By leveraging cu ng-edge technology, data-driven
                  marke ng techniques, and crea ve storytelling, we ensure that every small business we work with
                  gets the best chance to thrive in today’s compe ve market.
                </p>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  <span className="font-bold text-gray-600"> Vision: </span>
                  Our vision is to create a business environment where small enterprises can compete with larger
                  brands by using modern marke ng techniques and digital transforma on. We aspire to make
                  marke ng services accessible, effec ve, and affordable for businesses of all sizes across India,
                  enabling them to scale, innovate, and succeed in a rapidly evolving marketplace.
                </p>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  <span className="font-bold text-gray-600"> Values: </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  nisi tenetur ab quod. Expedita, iste.Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Sequi nisi tenetur ab quod.
                  Expedita, iste.
                </p>
              </div>
            </div>
            <div className="img-box ">
              <img
                src="https://pagedone.io/asset/uploads/1702034785.png"
                alt="About Us tailwind page"
                className="hidden lg:block "
              />
            </div>
          </div>
        </div>
      </section>

      <CountSection />


      <div className="choose-us-section h-[1000px]
      w-full relative">
        <h2 className="text-4xl font-manrope font-bold text-gray-900 text-center mt-24">
          Why Choose Marke anHub?
        </h2>
        <div className="choose-us-wrapper grid grid-cols-3 h-full w-full mt-20">
          <div className="choose-us-left flex flex-col items-center">
            <div className="first-wrapper absolute left-[300px]">
              <ChooseUsCard image={chooseUsImage1} title="Tailored Strategies" text="We don’t believe in a one-size-fits-all approach. Every business gets a 
customized marke ng plan designed for its unique needs and goals."/>
            </div>
            <div className="sec-wrapper mt-[350px]">
              <ChooseUsCard image={chooseUsImage2} title="Budget-Friendly Solu ons" text="We offer cost-effec ve marke ng packages designed specifically for 
small businesses."/>
            </div>
            <div className="first-wrapper absolute left-[300px] bottom-[-70px]">
              <ChooseUsCard image={chooseUsImage3} title="Experienced Team" text=" Our team consists of skilled professionals with years of experience in digital 
marke ng and brand building."/>
            </div>
          </div>
          <div className="choose-us-main flex justify-center items-center">
            <div className="center-div h-[400px] w-[400px] rounded-full flex justify-center items-center">
              <Image
                src={logoImg}
                alt="logo img"
              />
            </div>
          </div>
          <div className="choose-us-right flex flex-col items-center">
            <div className="first-wrapper absolute right-[300px]">
              <ChooseUsCard image={chooseUsImage4} title="Data-Driven Results" text="We use analy cs and performance tracking to measure results and opmize 
campaigns for be er success. "/>
            </div>
            <div className="sec-wrapper mt-[350px]">
              <ChooseUsCard image={chooseUsImage5} title="Dedicated Support" text=" We are passionate about helping small businesses grow. Our team provides 
personalized support and guidance every step of the way."/>
            </div>
            <div className="first-wrapper absolute right-[300px] bottom-[-70px]">
              <ChooseUsCard image={chooseUsImage6} title="Pan-India Reach" text="Whether you’re in Delhi, Mumbai, Bangalore, Kolkata, Chennai, or a small 
town, we are here to help your business thrive. "/>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-0 mt-44">
        <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden bg-gray-100 shadow-lg rounded-lg mt-10">
          {/* Background Image/Area with Overlay */}
          <div
            className="relative h-40 sm:h-48 md:h-64 lg:h-72 xl:h-80 bg-cover bg-center bg-no-repeat "
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
              backgroundBlendMode: "overlay",
            }}
          >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-6 md:px-8 lg:px-12">
              {/* Left Text Section */}
              <div className="text-white text-center sm:text-left w-full sm:w-auto">
                <h3 className="text-xs sm:text-sm md:text-base font-light tracking-wide uppercase">
                  Get A Free Quote
                </h3>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-1 sm:mt-2 leading-tight">
                  Dreaming of digital success?
                </h1>
                <p className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2 font-medium">
                  Discuss your project with us.
                </p>
              </div>

              {/* Right Button Section */}
              <div className="mt-4 sm:mt-0 flex justify-center sm:justify-end w-full sm:w-auto">
                <button className="bg-buttonColor hover:bg-buttonColorHover text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-md   transition duration-300 font-semibold text-xs sm:text-sm md:text-base">
                  Get Started →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OurApproach />


      {/* <div className=" py-14 lg:py-24 bg-gradient-to-t from-gray-200 to-gray-50">
        <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-16 rounded-full">
            <h2 className="text-4xl font-manrope font-bold text-gray-900 text-center">
              Join Hands with MarketianHub Today!
            </h2>
          </div>

          <div className="swiper mySwiper2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="relative mb-20">
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                      We believe that every small business deserves the opportunity to grow and succeed. With our
                      exper se, affordable solu ons, and passion for helping businesses, we are commi ed to being your
                      trusted marke ng partner.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1704349534.png"
                  alt="Emily image"
                  className="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-indigo-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <section className="py-20 ">
        <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-300 rounded-2xl p-8 xl:p-20">
            <h2 className="font-manrope text-4xl text-black text-center font-bold mb-4">
              Join Hands with MarketianHub Today!
            </h2>
            <p className="text-black text-center mb-11 max-lg:max-w-2xl mx-auto">
              We believe that every small business deserves the opportunity to grow and succeed. With our
              exper se, affordable solu ons, and passion for helping businesses, we are commi ed to being your
              trusted marke ng partner.
            </p>
            <div className="max-w-md mx-auto lg:bg-transparent lg:border border-gray-800 rounded-3xl max-lg:py-3 lg:rounded-full lg:h-12 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
              <input
                type="text"
                name="email"
                className="py-2 px-6 bg-transparent rounded-full  text-gray-800 max-lg:text-center placeholder:text-gray-900 focus:outline-none flex-1 w-full lg:w-auto lg:py-2 lg:px-6 lg:bg-transparent"
                placeholder="Enter your email.."
              />
              <button
                type="submit"
                className="py-2 px-5 text-sm   bg-buttonColor hover:bg-buttonColorHover shadow-md rounded-full  text-white font-semibold "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
