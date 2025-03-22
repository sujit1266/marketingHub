import React from 'react';
import {
     FaChartLine,
     FaBullhorn,
     FaSearch,
     FaThumbsUp,
     FaRocket,
     FaUsers,
     FaLightbulb,
     FaGlobe,
     FaHandshake,
     FaLaptopCode,
     FaComments,
     FaMoneyBillWave,
   } from "react-icons/fa";

function EmailMark() {
  return (
    <div className="bg-white text-gray-900 py-36 lg:py-56 px-6 md:px-12 lg:px-24">
             {/* Hero Section */}
             <section className="text-center mb-16">
               <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#c77838]">
                 Accelerate Your Business with Cutting-Edge Digital Marketing
               </h1>
               <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
                 Unlock your brand’s full potential with data-driven strategies,
                 innovative campaigns, and expert execution. From SEO to paid
                 advertising, we help you achieve measurable success in the digital
                 landscape.
               </p>
               <button className="px-6 py-3 text-lg font-semibold shadow-md text-white bg-buttonColor hover:bg-buttonColorHover rounded-md transition duration-300">
                 Get Started Today
               </button>
             </section>
       
             {/* Services Section */}
             <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 {
                   icon: <FaChartLine />,
                   title: "SEO Optimization",
                   desc: "Rank higher on search engines and attract organic traffic with our expert SEO solutions.",
                 },
                 {
                   icon: <FaBullhorn />,
                   title: "Social Media Marketing",
                   desc: "Grow your brand’s reach with targeted social media strategies and engaging content.",
                 },
                 {
                   icon: <FaSearch />,
                   title: "PPC Advertising",
                   desc: "Drive quality leads with data-driven paid ad campaigns that maximize ROI.",
                 },
                 {
                   icon: <FaThumbsUp />,
                   title: "Content Marketing",
                   desc: "Engage and convert with high-quality blogs, videos, and infographics tailored to your audience.",
                 },
                 {
                   icon: <FaLaptopCode />,
                   title: "Web Design & Development",
                   desc: "Create a stunning, user-friendly website optimized for conversions.",
                 },
                 {
                   icon: <FaMoneyBillWave />,
                   title: "E-commerce Marketing",
                   desc: "Boost your online store’s revenue with strategic digital marketing campaigns.",
                 },
                 {
                   icon: <FaComments />,
                   title: "Reputation Management",
                   desc: "Protect and enhance your brand image with proactive reputation management.",
                 },
                 {
                   icon: <FaHandshake />,
                   title: "Lead Generation",
                   desc: "Attract, engage, and convert potential customers with high-quality leads.",
                 },
               ].map((service, index) => (
                 <div
                   key={index}
                   className="p-6 bg-gray-100 rounded-xl shadow-lg text-center"
                 >
                   <div className="text-[#c77838] text-5xl mb-4">{service.icon}</div>
                   <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                   <p className="text-gray-700">{service.desc}</p>
                 </div>
               ))}
             </section>
       
             {/* Why Choose Us Section */}
             <section className="mt-16 text-center">
               <h2 className="text-3xl font-bold mb-4 text-[#c77838]">
                 Why Choose Us?
               </h2>
               <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                 Partner with us for a results-driven approach, industry expertise, and
                 cutting-edge strategies that guarantee business growth.
               </p>
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left max-w-5xl mx-auto">
                 {[
                   {
                     icon: <FaRocket />,
                     title: "Proven Strategies",
                     desc: "Our data-driven marketing approach ensures real results for your business.",
                   },
                   {
                     icon: <FaUsers />,
                     title: "Expert Team",
                     desc: "Work with certified professionals who are passionate about digital marketing.",
                   },
                   {
                     icon: <FaLightbulb />,
                     title: "Innovative Solutions",
                     desc: "Stay ahead with the latest marketing trends and cutting-edge technology.",
                   },
                   {
                     icon: <FaGlobe />,
                     title: "Global Reach",
                     desc: "Expand your business internationally with targeted and localized campaigns.",
                   },
                 ].map((item, index) => (
                   <div
                     key={index}
                     className="p-6 bg-gray-100 rounded-xl shadow-lg text-center"
                   >
                     <div className="text-[#c77838] text-5xl mb-4">{item.icon}</div>
                     <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                     <p className="text-gray-700">{item.desc}</p>
                   </div>
                 ))}
               </div>
             </section>
       
             {/* CTA Section */}
             <section className="mt-16 text-center">
               <h2 className="text-3xl font-bold mb-4 text-[#c77838]">
                 Let’s Grow Your Business Together!
               </h2>
               <p className="text-lg text-gray-600 mb-6">
                 Take the next step towards online success. Get in touch with us for a
                 tailored digital marketing strategy.
               </p>
               <button className="px-6 py-3 text-lg font-semibold shadow-md text-white bg-buttonColor hover:bg-buttonColorHover rounded-md transition duration-300">
                 Contact Us Now
               </button>
             </section>
           </div>
  )
}

export default EmailMark
