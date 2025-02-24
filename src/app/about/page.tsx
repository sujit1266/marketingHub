import CountSection from "@/components/CountSection";
import React from "react";

function AboutUs() {
  return (
    <div className="pt-20">
      <section className="py-14 lg:py-24 relative z-0 bg-gradient-to-t from-[#fab781] to-[#ffffff] ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
            Lorem ipsum dolor sit amet.
            <span className="text-[#c77838]"> Professional Growth. ⁤</span>
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quas?
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWJvdXR8ZW58MHx8MHx8fDA%3D"
                alt="About Us tailwind page"
                className="max-lg:mx-auto rounded-lg"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  About Us{" "}
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  at veritatis totam quia sit ea impedit eos vitae iure non
                  fugit similique sint ipsum, cupiditate pariatur cumque
                  blanditiis ab quos a incidunt rem, sunt veniam id? Dolorem,
                  nemo quia unde iste veritatis ad aliquam quasi ipsa hic
                  inventore beatae quisquam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1702034785.png"
                  alt="About Us tailwind page"
                  className="block lg:hidden mb-9 mx-auto"
                />
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  MarketianHub: Mission & Vision{" "}
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  <span className="font-bold text-gray-600"> Mission: </span> At
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  nisi tenetur ab quod. Expedita, iste.Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Sequi nisi tenetur ab quod.
                  Expedita, iste.
                </p>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  <span className="font-bold text-gray-600"> Vision: </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  nisi tenetur ab quod. Expedita, iste.Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Sequi nisi tenetur ab quod.
                  Expedita, iste.
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

      <div className="px-3 md:px-0">
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

      <div className=" py-14 lg:py-24 bg-gradient-to-t from-gray-200 to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-16 rounded-full">
            <h2 className="text-4xl font-manrope font-bold text-gray-900 text-center">
              What our happy user says!
            </h2>
          </div>

          <div className="swiper mySwiper2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="relative mb-20">
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                      I have been using pagedone for several months now, and I
                      must say that it has made my life a lot easier. The
                      platform's intuitive interface and ease of use have
                      allowed me to manage my finances more effectively and make
                      informed investment decisions. I particularly like the
                      product's auto-tracking feature, which has saved me a lot
                      of time and effort.
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
      </div>

      <section className="py-20 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-300 rounded-2xl p-8 xl:p-11">
            <h2 className="font-manrope text-4xl text-black text-center font-bold mb-4">
              Subscribe to the latest offer
            </h2>
            <p className="text-black text-center mb-11 max-lg:max-w-2xl mx-auto">
              Join our community of subscribers and receive regular updates
              delivered straight to your inbox. It's quick, easy, and free
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

export default AboutUs;
