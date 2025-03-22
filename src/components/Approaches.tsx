import React from 'react';

const OurApproach = () => {
     return (
          <section className="bg-gradient-to-t from-[#fab781] to-purple-50 py-20 px-4">
               <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Approach</h2>
                    <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                         At Marke anHub, we follow a strategic, step-by-step approach to marke ng success:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         {/* Step 1 */}
                         <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                              <div className="text-buttonColor text-4xl font-bold mb-4">01</div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-4">Understand Your Business</h3>
                              <p className="text-gray-600">
                                   We take the me to learn about your business, industry, and
                                   goals.
                              </p>
                         </div>

                         {/* Step 2 */}
                         <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                              <div className="text-buttonColor text-4xl font-bold mb-4">02</div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-4">Develop a Custom Strategy</h3>
                              <p className="text-gray-600">
                                   We create a tailored marke ng plan that aligns with your
                                   needs.
                              </p>
                         </div>

                         {/* Step 3 */}
                         <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                              <div className="text-buttonColor text-4xl font-bold mb-4">03</div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-4">Execute & Opmize</h3>
                              <p className="text-gray-600">
                                   We implement the strategy, track results, and con nuously opmize
                                   for be er performance.
                              </p>
                         </div>

                         <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                              <div className="text-buttonColor text-4xl font-bold mb-4">03</div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-4">Deliver Measurable Results</h3>
                              <p className="text-gray-600">
                                   We focus on genera ng real business growth, not just vanity
                                   metrics.
                              </p>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default OurApproach;