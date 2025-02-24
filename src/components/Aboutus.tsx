import React from 'react';
import Image from 'next/image';

function Aboutus() {
     return (
          <section className="flex flex-col lg:flex-row items-center justify-between p-10 bg-white">
               {/* Left side text */}
               <div className="lg:w-1/2 mt-10">
                    <h2 className="text-5xl font-bold text-orange-600 mb-4">
                         Accelerate <span className="text-black">your</span> <br></br>business with us
                    </h2>
                    <p className="text-[1.25rem] mb-2">
                         Learn more about our range of our services.
                    </p>
                    <p className="text-gray-700 mb-6 text-[1.25rem] w-[70%]">
                         Whether you need transformational <strong>brand strategy</strong>, <strong>communications</strong>, <strong>digital experiences</strong> or more valuable relationships with your customers – we are ready to take your brief.
                    </p>
                    <a href="#services" className="inline-flex items-center px-6 py-3 text-white bg-orange-600 rounded-md hover:bg-orange-500 transition duration-300">
                         SEE ALL SERVICES
                         <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12" />
                         </svg>
                    </a>
               </div>

               {/* Right side images */}
               <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
                    <div className="relative flex flex-wrap">
                         <Image src="/images/example1.png" alt="Service Image 1" width={200} height={300} className="m-2" />
                         <Image src="/images/example2.png" alt="Service Image 2" width={200} height={300} className="m-2" />
                         <Image src="/images/example3.png" alt="Service Image 3" width={200} height={300} className="m-2" />
                    </div>
               </div>
          </section>
     );
}

export default Aboutus
