// "use client";
// import React from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import contentMarketing from "../../public/img/services/content-marketing.jpg";
// import socialMediaMarketing from "../../public/img/services/social-media-marketing.jpg";
// import digitalMarketing from "../../public/img/services/digital-marketing.jpg";
// import emailMarketing from "../../public/img/services/email-marketing.jpg";
// import seo from "../../public/img/services/seo.jpg";
// import websiteDevelopment from "../../public/img/services/website-development.jpg";
// import { StaticImageData } from "next/image";
// import Link from "next/link";

// interface ServiceCard {
//   title: string;
//   desc: string;
//   img: StaticImageData;
//   link: string; // Added link for the "Learn More" button
// }

// const serCard: ServiceCard[] = [
//   {
//     title: "Search Engine Optimization (SEO)",
//     desc: "Climbing to the top of search engine results isn’t easy, but with our advanced SEO strategies, it’s achievable.",
//     img: seo,
//     link: "/services/seo",
//   },
//   {
//     title: "Digital Marketing",
//     desc: "Get instant results with DM campaigns designed to maximize ROI.",
//     img: digitalMarketing,
//     link: "/services/digital-marketing",
//   },
//   {
//     title: "Social Media Marketing (SMM)",
//     desc: "We help you build a strong presence across platforms like Facebook, Instagram, LinkedIn, and Twitter.",
//     img: socialMediaMarketing,
//     link: "/services/social-media-marketing",
//   },
//   {
//     title: "Content Marketing",
//     desc: "Our content marketing services ensure your brand’s message resonates with your audience.",
//     img: contentMarketing,
//     link: "/services/content-marketing",
//   },
//   {
//     title: "Website Design & Development",
//     desc: "Your website is the cornerstone of your digital identity.",
//     img: websiteDevelopment,
//     link: "/services/website-development",
//   },
//   {
//     title: "Email Marketing",
//     desc: "Email marketing remains one of the most effective ways to engage customers.",
//     img: emailMarketing,
//     link: "/services/email-marketing",
//   },
// ];

// const Services: React.FC = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: "0px",
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           centerPadding: "20px",
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           centerPadding: "15px",
//         },
//       },
//     ],
//     afterChange: (current: number) => {
//       const cards = document.querySelectorAll(".slick-slide");
//       cards.forEach((card, index) => {
//         if (index === current + 1) {
//           card.classList.add("animate-pop-out");
//         } else {
//           card.classList.remove("animate-pop-out");
//         }
//       });
//     },
//   };

//   return (
//     <div
//       className={`relative mt-20 py-16 px-6 bg-[url(../../public/img/shape1-1.png)] bg-center bg-no-repeat bg-contain`}
//     >
//       <h3 className="text-3xl md:text-4xl font-extrabold text-center text-[#ffa550] mb-12 tracking-tight drop-shadow-md">
//         Our Services
//       </h3>
//       <div className="max-w-7xl mx-auto">
//         <Slider {...settings}>
//           {serCard.map((item, index) => (
//             <div
//               key={index}
//               className="px-3 md:px-6 outline-none focus:outline-none"
//             >
//               <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-[550px] md:h-[600px] flex flex-col">
//                 <div className="relative w-full h-64 md:h-72">
//                   <Image
//                     src={item.img}
//                     alt={item.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-t-2xl"
//                   />
//                 </div>
//                 <div className="p-8 flex flex-col flex-grow">
//                   <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-wide line-clamp-2">
//                     {item.title}
//                   </h4>
//                   <p className="text-gray-700 text-base md:text-lg leading-relaxed flex-grow line-clamp-3">
//                     {item.desc}
//                   </p>
//                   <Link
//                     href={item.link}
//                     className="mt-4 inline-block px-6 py-2 text-center text-white bg-[#ffa550] hover:bg-[#ff8c00] rounded-md transition-colors duration-200"
//                   >
//                     Learn More
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Custom Styles */}
//       <style jsx global>{`
//         .slick-slide {
//           transition: all 0.5s ease-in-out;
//         }
//         .slick-center {
//           transform: scale(1.15);
//           z-index: 10;
//         }
//         .slick-slide:not(.slick-center) {
//           transform: scale(0.9);
//           opacity: 1;
//         }
//         .slick-prev,
//         .slick-next {
//           width: 48px;
//           height: 48px;
//           background: #1f2937;
//           border-radius: 50%;
//           z-index: 20;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//         }
//         .slick-prev:hover,
//         .slick-next:hover {
//           background: #ffa550;
//           transform: scale(1.1);
//         }
//         .slick-prev {
//           left: -60px;
//         }
//         .slick-next {
//           right: -60px;
//         }
//         .slick-prev:before,
//         .slick-next:before {
//           font-size: 24px;
//           color: white;
//         }
//         @keyframes pop-out {
//           0% {
//             transform: scale(1) translateY(0);
//           }
//           50% {
//             transform: scale(1.2) translateY(-25px);
//           }
//           100% {
//             transform: scale(1.15) translateY(0);
//           }
//         }
//         .animate-pop-out {
//           animation: pop-out 0.7s ease-in-out;
//         }
//         @media (max-width: 1024px) {
//           .slick-prev {
//             left: -40px;
//           }
//           .slick-next {
//             right: -40px;
//           }
//         }
//         @media (max-width: 640px) {
//           .slick-prev {
//             left: -25px;
//           }
//           .slick-next {
//             right: -25px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Services;



"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import contentMarketing from "../../public/img/services/content-marketing.jpg";
import socialMediaMarketing from "../../public/img/services/social-media-marketing.jpg";
import digitalMarketing from "../../public/img/services/digital-marketing.jpg";
import emailMarketing from "../../public/img/services/email-marketing.jpg";
import seo from "../../public/img/services/seo.jpg";
import websiteDevelopment from "../../public/img/services/website-development.jpg";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface ServiceCard {
  title: string;
  desc: string;
  img: StaticImageData;
  link: string;
}

const serCard: ServiceCard[] = [
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Climbing to the top of search engine results isn’t easy, but with our advanced SEO strategies, it’s achievable.",
    img: seo,
    link: "/services/seo",
  },
  {
    title: "Digital Marketing",
    desc: "Get instant results with DM campaigns designed to maximize ROI.",
    img: digitalMarketing,
    link: "/services/digital-marketing",
  },
  {
    title: "Social Media Marketing (SMM)",
    desc: "We help you build a strong presence across platforms like Facebook, Instagram, LinkedIn, and Twitter.",
    img: socialMediaMarketing,
    link: "/services/social-media-marketing",
  },
  {
    title: "Content Marketing",
    desc: "Our content marketing services ensure your brand’s message resonates with your audience.",
    img: contentMarketing,
    link: "/services/content-marketing",
  },
  {
    title: "Website Design & Development",
    desc: "Your website is the cornerstone of your digital identity.",
    img: websiteDevelopment,
    link: "/services/website-development",
  },
  {
    title: "Email Marketing",
    desc: "Email marketing remains one of the most effective ways to engage customers.",
    img: emailMarketing,
    link: "/services/email-marketing",
  },
];

const Services: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "15px",
        },
      },
    ],
    afterChange: (current: number) => {
      const cards = document.querySelectorAll(".slick-slide");
      cards.forEach((card, index) => {
        if (index === current + 1) {
          card.classList.add("animate-pop-out");
        } else {
          card.classList.remove("animate-pop-out");
        }
      });
    },
  };

  return (
    <div
      className={`relative mt-20 py-16 px-6 bg-[url(../../public/img/shape1-1.png)] bg-center bg-no-repeat bg-contain`}
    >
      <h3 className="text-3xl md:text-4xl font-extrabold text-center text-[#ffa550] mb-12 tracking-tight drop-shadow-md">
        Our Services
      </h3>
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {serCard.map((item, index) => (
            <div
              key={index}
              className="px-3 md:px-6 outline-none focus:outline-none"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-visible hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow mb-4 md:mb-6">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    className="mt-auto inline-block px-6 py-2 text-center text-white bg-[#ffa550] hover:bg-[#ff8c00] rounded-md transition-colors duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .slick-slide {
          transition: all 0.5s ease-in-out;
        }
        .slick-center {
          transform: scale(1.05);
          z-index: 10;
        }
        .slick-slide:not(.slick-center) {
          transform: scale(0.95);
          opacity: 0.8;
        }
        .slick-prev,
        .slick-next {
          width: 48px;
          height: 48px;
          background: #1f2937;
          border-radius: 50%;
          z-index: 20;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .slick-prev:hover,
        .slick-next:hover {
          background: #ffa550;
          transform: scale(1.1);
        }
        .slick-prev {
          left: -60px;
        }
        .slick-next {
          right: -60px;
        }
        .slick-prev:before,
        .slick-next:before {
          font-size: 24px;
          color: white;
        }
        @keyframes pop-out {
          0% {
            transform: scale(0.95) translateY(0);
          }
          50% {
            transform: scale(1.1) translateY(-10px);
          }
          100% {
            transform: scale(1.05) translateY(0);
          }
        }
        .animate-pop-out {
          animation: pop-out 0.7s ease-in-out;
        }
        @media (max-width: 1024px) {
          .slick-prev {
            left: -40px;
          }
          .slick-next {
            right: -40px;
          }
        }
        @media (max-width: 640px) {
          .slick-prev {
            left: -25px;
          }
          .slick-next {
            right: -25px;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;