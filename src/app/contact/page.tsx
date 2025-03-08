import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiMapPin2Fill } from "react-icons/ri";

const ContactUs = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mb-12 drop-shadow-md pt-[250px] pb-[150px] bg-gradient-to-t from-[#fab781] to-[#ffffff] text-zinc-800">
          Contact Us
        </h2>
    <section className="bg-navy-800 text-slate-600  from-navy-900 to-buttonColor py-16 w-[85rem] mx-auto">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <FaPhone className="h-6 w-6 text-buttonColor mr-4" />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center">
              <MdEmail className="h-6 w-6 text-buttonColor mr-4" />
              <p><a href="mailto:support@tripsaga.com" className="text-buttonColor">support@tripsaga.com</a></p>
            </div>
            <div className="flex items-center">
              <RiMapPin2Fill className="h-6 w-6 text-buttonColor mr-4" />
              <p>123 Travel Lane, Adventure City, India</p>
            </div>
            <p>
              Web:{" "}
              <a
                href="#"
                className="text-orange-400 hover:text-yellow-400 transition"
              >
                www.tripsaga.com
              </a>
            </p>
          </div>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-buttonColor   border-2 border-buttonColor focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder:text-slate-200"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-buttonColor   border-2 border-buttonColor focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder:text-slate-200"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-md bg-buttonColor   border-2 border-buttonColor focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder:text-slate-200"
              rows="4"
            ></textarea>
            <button className="gradient-btn px-20 w-full bg-black py-4 text-white rounded-3xl">Send Message</button>
          </form>
        </div>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5264029103!2d76.76356756251504!3d28.64368460987646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1740240662476!5m2!1sen!2sin"
            width="600"
            height="450"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="mt-12 bg-buttonColor h-64 rounded-xl flex items-center justify-center shadow-lg w-full"
          ></iframe>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ContactUs;