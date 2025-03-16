// pages/services.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import contentMarketing from "../../../public/img/services/content-marketing.jpg";
import digitalMarketing from "../../../public/img/services/digital-marketing.jpg";
import emailMarketing from "../../../public/img/services/email-marketing.jpg";
import seo from "../../../public/img/services/seo.jpg";
import socialMedia from "../../../public/img/services/social-media-marketing.jpg";
import websiteDevelop from "../../../public/img/services/website-development.jpg";
import user1 from "../../../public/img/user1.jpg";
import user2 from "../../../public/img/user2.jpg";
import user3 from "../../../public/img/user3.jpg";
import Link from 'next/link';

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
          <div className="max-w-4xl z-10 relative">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in leading-tight">
              Strategic Marke ng Solu ons to Elevate Your Business
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 text-buttonColor">
              At Marke anHub, we specialize in providing affordable, result-driven, and customized digital
              solu ons for small businesses across India. Whether you're looking to boost online visibility,
              generate leads, enhance brand iden ty, or create a stunning website, our expert team has the right
              strategy for you.
            </p>
            <Link href={"/services#core-services"}>
              <button className="bg-[#000] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg">
                Explore Our Services
              </button>
            </Link>
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
            We offer a wide range of digital marke ng and branding services, including SEO, PPC, Social Media
            Marke ng, Website Development, Graphic Designing, Branding, and Content Marke ng. Our goal
            is to help your business stand out, a ract customers, and grow sustainably in the ever-evolving
            digital landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 container mx-auto px-6 lg:px-12" id='core-services'>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Service 1 */}
          <div className="group bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative h-56 mb-6 overflow-hidden rounded-lg">
              <Image
                src={seo} // Replace with your image
                alt="Web Development"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Search Engine Optimization (SEO)</h3>
            <p className="text-gray-600 mb-4">
              Our SEO strategies help improve your website’s ranking, drive organic traffic, and increase visibility.
            </p>
            <p className='text-md font-bold'>What We Offer:</p>
            <ul className="text-gray-600 list-inside mb-4 list-none">
              <li>✔ Keyword Research & Strategy</li>
              <li>✔ On-Page & Off-Page SEO</li>
              <li>✔ Technical SEO & Website Audits</li>
              <li>✔ Local SEO for Small Businesses</li>
              <li>✔ High-Quality Link Building</li>

            </ul>
            <a href="#" className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
              Discover More →
            </a>
          </div>

          {/* Service 2 */}
          <div className="group bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative h-56 mb-6 overflow-hidden rounded-lg">
              <Image
                src={digitalMarketing} // Replace with your image
                alt="Digital Marketing"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Pay-Per-Click (PPC) Adver sing</h3>
            <p className="text-gray-600 mb-4">
              We design and manage Google Ads, Facebook Ads, and other paid campaigns to maximize your
              return on investment (ROI).
            </p>
            <p className='text-md font-bold'>Our PPC Services:</p>
            <ul className="text-gray-600 list-inside mb-4 list-none">
              <li>✔ Google Ads (Search, Display & Shopping)</li>
              <li>✔ Facebook & Instagram Ads</li>
              <li>✔ LinkedIn & YouTube Adver sing</li>
              <li>✔ Retarge ng & Remarke ng Campaigns</li>
              <li>✔ A/B Tes ng & Performance Opmiza on</li>
            </ul>
            <a href="#" className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
              Discover More →
            </a>
          </div>

          {/* Service 3 */}
          <div className="group bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative h-56 mb-6 overflow-hidden rounded-lg">
              <Image
                src={socialMedia} // Replace with your image
                alt="App Development"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Social Media Marketing (SMM)
            </h3>
            <p className="text-gray-600 mb-4">
              We create and manage strategic social media campaigns that increase brand awareness, engage
              customers, and drive sales.
            </p>
            <p className='text-md font-bold'>Platforms We Work On:</p>
            <ul className="text-gray-600 list-inside mb-4 list-none">
              <li>✔ Facebook & Instagram Marke ng</li>
              <li>✔ LinkedIn & Twi er Campaigns</li>
              <li>✔ YouTube Video Marke ng</li>
              <li>✔ Social Media Content Crea on</li>
              <li>✔ Community Engagement & Management</li>
            </ul>
            <a href="#" className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
              Discover More →
            </a>
          </div>

          {/* Service 4 */}
          <div className="group bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative h-56 mb-6 overflow-hidden rounded-lg">
              <Image
                src={websiteDevelop} // Replace with your image
                alt="App Development"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Website Development
            </h3>
            <p className="text-gray-600 mb-4">
              We develop responsive, SEO-friendly, and high-conver ng websites that reflect your brand and
              a ract customers.
            </p>
            <p className='text-md font-bold'>Our Web Development Services: </p>
            <ul className="text-gray-600 list-inside mb-4 list-none">
              <li>✔ Custom Website Design & Development</li>
              <li>✔ E-Commerce Website Solutions</li>
              <li>✔ Mobile-Responsive & Fast-Loading Websites</li>
              <li>✔ Landing Page Design for Lead Genera on</li>
              <li>✔ Website Maintenance & Support</li>
            </ul>
            <a href="#" className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
              Discover More →
            </a>
          </div>

          {/* Service 5 */}
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
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Graphic Designing
            </h3>
            <p className="text-gray-600 mb-4">
              Our crea ve graphic design services ensure your business looks professional and appealing.
            </p>
            <p className='text-md font-bold'>What We Design:</p>
            <ul className="text-gray-600 list-inside mb-4 list-none">
              <li>✔ Logos & Brand Identity</li>
              <li>✔ Social Media Graphics & Banners</li>
              <li>✔ Brochures, Flyers & Business Cards</li>
              <li>✔ Infographics & Custom Illustra ons</li>
              <li>✔ Packaging & Print Design</li>
            </ul>
            <a href="#" className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
              Discover More →
            </a>
          </div>

          {/* Service 6 */}
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
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Branding
            </h3>
            <p className="text-gray-600 mb-4">
              We help you create a unique and memorable brand that resonates with your target audience.
            </p>
            <p className='text-md font-bold'>Branding Services:</p>
            <ul className="text-gray-600 list-inside mb-4 list-none">
              <li>✔ Logo & Visual Identity Design</li>
              <li>✔ Brand Posi oning & Messaging</li>
              <li>✔ Brand Strategy & Storytelling</li>
              <li>✔ Brand Guidelines Development</li>
              <li>✔ Rebranding & Brand Refresh</li>
            </ul>
            <a href="#" className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
              Discover More →
            </a>
          </div>

          {/* Service 7 */}
          <div className="group bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative h-56 mb-6 overflow-hidden rounded-lg">
              <Image
                src={emailMarketing} // Replace with your image
                alt="App Development"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Email Marketing</h3>
            <p className="text-gray-600 mb-4">
              We design personalized email campaigns that engage your audience and drive revenue.
            </p>
            <p className='text-md font-bold'>Email Marketing Solutions:</p>
            <ul className="text-gray-600 list-inside mb-4 list-none">
              <li>✔ Email Campaign Strategy & Automation</li>
              <li>✔ Newsle ers & Promo onal Emails</li>
              <li>✔ Drip Campaigns & Lead Nurturing</li>
              <li>✔ Email List Building & Segmentation</li>
              <li>✔ A/B Testing & Performance Opmization</li>
            </ul>
            <a href="#" className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
              Discover More →
            </a>
          </div>

          {/* Service 8 */}
          <div className="group bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative h-56 mb-6 overflow-hidden rounded-lg">
              <Image
                src={contentMarketing} // Replace with your image
                alt="App Development"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Content Marketing</h3>
            <p className="text-gray-600 mb-4">
              We cra SEO-friendly, high-quality content that boosts visibility and builds trust with your audience.
            </p>
            <p className='text-md font-bold'>Our Content Services:</p>
            <ul className="text-gray-600 list-inside mb-4 list-none">
              <li>✔ Blog Wri ng & Ar cle Creation</li>
              <li>✔ Website & Landing Page Copy</li>
              <li>✔ Product Descrip ons & E-Commerce Content</li>
              <li>✔ Video Scripts & Social Media Content</li>
              <li>✔ Press Releases & Guest Blogging</li>
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
              <h3 className="text-xl font-semibold mb-2">Discovery & Research</h3>
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
                "Marketinghub transformed our online presence with a stunning website and a marketing campaign that doubled our leads in just three months!"
              </p>
              <div className="flex items-center">
                <Image src={user1} alt="Client" width={50} height={50} className="rounded-full mr-4" />
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
                <Image src={user2} alt="Client" width={50} height={50} className="rounded-full mr-4" />
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
            Partner with Marketinghub Agency to harness the power of digital marketing and development. Let’s turn your vision into reality with solutions that deliver results.
          </p>
          <Link href={"/contact"}>
            <button className="bg-[#000] text-white px-10 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg">
              Contact Us Today
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;