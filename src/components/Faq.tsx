"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What services does marketianhub offer?",
    answer: "We provide a full range of digital marketing services, including SEO, PPC advertising, Social Media Marketing, Content Marketing, Email Marketing, and Website Development. Our strategies are designed to enhance your online presence and drive growth.",
  },
  {
    question: "How can marketianhub help my business grow?",
    answer: "Our expert team creates data-driven marketing strategies to increase visibility, attract targeted traffic, and boost conversions. We optimize your online presence with SEO, paid ads, engaging content, and social media strategies to help your business succeed.",
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "SEO takes 3–6 months to show significant improvements, while PPC and social media ads can generate immediate results. We continuously optimize campaigns to ensure long-term success and sustainable business growth.",
  },
  {
    question: "Does marketianhub work with small businesses and startups?",
    answer:
      "Yes! We work with businesses of all sizes, from startups to large enterprises. Our flexible and budget-friendly digital marketing solutions are customized to meet your specific business needs and help you scale effectively.",
  },
  {
    question: "How can I get started with marketianhub?",
    answer:
      "Simply reach out to us through our website for a free consultation. Our team will analyze your business needs and create a personalized digital marketing plan to help you achieve your goals efficiently. Let’s grow your brand together! ",
  },
];
