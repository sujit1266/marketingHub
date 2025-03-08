// pages/services.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Head>
        <title>Our Services - DigitalSync Agency</title>
        <meta name="description" content="Explore our expert digital marketing and development services" />
      </Head> */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#fab781] to-[#ffffff] text-black py-24 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 mt-[100px]">
          <div className="max-w-3xl z-10 relative">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in leading-tight">
              Elevate Your Brand with Expert Digital Solutions
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 text-buttonColor">
              At DigitalSync Agency, we deliver cutting-edge digital marketing and development services to help your business thrive in a competitive online world.
            </p>
            <button className="bg-[#000] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg">
              Explore Our Services
            </button>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-bg-pattern.jpg" // Replace with a subtle background pattern
            alt="Background pattern"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 hidden lg:block">
          <Image
            src="/hero-illustration.png" // Replace with a relevant illustration
            alt="Digital services illustration"
            width={600}
            height={400}
            className="opacity-80"
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Comprehensive Digital Solutions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            From crafting high-performance websites to executing data-driven marketing campaigns, our team combines creativity and technology to deliver measurable results. Partner with us to unlock your brand’s full potential.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Service 1 */}
          <div className="group bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative h-56 mb-6 overflow-hidden rounded-lg">
              <Image
                src="/web-dev-service.jpg" // Replace with your image
                alt="Web Development"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Web Development</h3>
            <p className="text-gray-600 mb-4">
              We build responsive, fast, and SEO-optimized websites using the latest frameworks like Next.js, React, and Tailwind CSS. Whether you need an e-commerce platform, a corporate site, or a custom web application, we’ve got you covered.
            </p>
            <ul className="text-gray-600 list-disc list-inside mb-4">
              <li>Custom website design</li>
              <li>Full-stack development</li>
              <li>API integrations</li>
            </ul>
            <a href="#" className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
              Discover More →
            </a>
          </div>

          {/* Service 2 */}
          <div className="group bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative h-56 mb-6 overflow-hidden rounded-lg">
              <Image
                src="/digital-marketing-service.jpg" // Replace with your image
                alt="Digital Marketing"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Digital Marketing</h3>
            <p className="text-gray-600 mb-4">
              Our data-driven digital marketing strategies amplify your online presence. From SEO and PPC to social media campaigns, we craft tailored solutions to drive traffic, leads, and conversions.
            </p>
            <ul className="text-gray-600 list-disc list-inside mb-4">
              <li>Search Engine Optimization (SEO)</li>
              <li>Pay-Per-Click (PPC) Advertising</li>
              <li>Social Media Management</li>
            </ul>
            <a href="#" className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
              Discover More →
            </a>
          </div>

          {/* Service 3 */}
          <div className="group bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative h-56 mb-6 overflow-hidden rounded-lg">
              <Image
                src="/app-dev-service.jpg" // Replace with your image
                alt="App Development"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">App Development</h3>
            <p className="text-gray-600 mb-4">
              Transform your ideas into powerful mobile and web applications. We specialize in creating user-friendly, scalable apps with seamless performance across all devices.
            </p>
            <ul className="text-gray-600 list-disc list-inside mb-4">
              <li>Native & Cross-Platform Apps</li>
              <li>UI/UX Design</li>
              <li>Ongoing Maintenance</li>
            </ul>
            <a href="#" className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
              Discover More →
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Proven Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-buttonColor text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">We start by understanding your goals, audience, and challenges to create a tailored strategy.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-buttonColor text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-gray-600">Our team designs a detailed roadmap with timelines, deliverables, and key performance indicators.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-buttonColor text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Execution</h3>
              <p className="text-gray-600">We bring the plan to life with precision, leveraging the best tools and techniques.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-buttonColor text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-2">Optimization</h3>
              <p className="text-gray-600">Continuous monitoring and refinement ensure long-term success and growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <p className="text-gray-600 italic mb-4">
                "DigitalSync transformed our online presence with a stunning website and a marketing campaign that doubled our leads in just three months!"
              </p>
              <div className="flex items-center">
                <Image src="/client1.jpg" alt="Client" width={50} height={50} className="rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-gray-800">Sarah Johnson</p>
                  <p className="text-gray-500 text-sm">CEO, TechTrend Innovations</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <p className="text-gray-600 italic mb-4">
                "Their app development team delivered a seamless product ahead of schedule. The support has been phenomenal."
              </p>
              <div className="flex items-center">
                <Image src="/client2.jpg" alt="Client" width={50} height={50} className="rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-gray-800">Mark Davis</p>
                  <p className="text-gray-500 text-sm">Founder, GrowEasy Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r bg-buttonColor text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Skyrocket Your Business?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Partner with DigitalSync Agency to harness the power of digital marketing and development. Let’s turn your vision into reality with solutions that deliver results.
          </p>
          <button className="bg-[#000] text-white px-10 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;