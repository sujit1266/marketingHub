"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import b1 from "../../public/img/b1.jpg"
import b2 from "../../public/img/b2.jpg"
import b3 from "../../public/img/b3.jpg"
import b4 from "../../public/img/b4.jpg"
import b5 from "../../public/img/b5.jpg"
import b6 from "../../public/img/b6.jpg";

const BlogListsComponent = () => {
  return (
    <div>
      <div className="w-full mx-auto text-center mb-6 lg:mb-0 pt-[150px] pb-[150px] bg-gradient-to-t from-[#fab781] to-[#ffffff]">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Our Blogs
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400 w-[70%] mx-auto">
          Welcome to our blog! Here, we share valuable insights, tips, and the latest trends in marketing to help you grow your business. Whether you're looking for expert advice, industry updates, or creative strategies, our blog is designed to inspire and inform.
        </p>
      </div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10"
            href={`/blog/${1}`}
          >
            <div className="aspect-w-16 aspect-h-10">
              <Image
                className="w-full object-cover rounded-xl"
                src={b1}
                width={400}
                height={400}
                alt="img1"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Learn the essential steps to create a memorable and impactful brand that resonates with your audience in 2025.
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              Learn more
              <svg
                className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </Link>
          <Link
            className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10"
            href={`/blog/${1}`}
          >
            <div className="aspect-w-16 aspect-h-10">
              <Image
                className="w-full object-cover rounded-xl"
                src={b2}
                width={400}
                height={400}
                alt="img2"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Stay ahead of the curve with the latest digital marketing trends that will define success in the coming years.          </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              Learn more
              <svg
                className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </Link>

          <Link
            className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10"
            href={`/blog/${1}`}
          >
            <div className="aspect-w-16 aspect-h-10">
              <Image
                className="w-full object-cover rounded-xl"
                src={b3}
                width={400}
                height={400}
                alt="img4"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Discover how to leverage social media to grow your brand, engage with your audience, and drive business results.          </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              Learn more
              <svg
                className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </Link>
          <Link
            className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10"
            href={`/blog/${1}`}
          >
            <div className="aspect-w-16 aspect-h-10">
              <Image
                className="w-full object-cover rounded-xl"
                src={b4}
                width={400}
                height={400}
                alt="img4"
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Unlock the key SEO strategies to improve your website’s ranking and visibility in the ever-evolving search landscape of 2025.

            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              Learn more
              <svg
                className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </Link>
          <Link
            className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10"
            href={`/blog/${1}`}
          >
            <div className="aspect-w-16 aspect-h-10">
              <Image
                className="w-full object-cover rounded-xl"
                src={b5}
                alt="Blog Image"
                width={400}
                height={400}
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Understand the power of data-driven marketing and how it can help you make smarter decisions and accelerate business growth.


            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              Learn more
              <svg
                className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </Link>
          <Link
            className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10"
            href={`/blog/${1}`}
          >
            <div className="aspect-w-16 aspect-h-10">
              <Image
                className="w-full object-cover rounded-xl"
                src={b6}
                alt="Blog Image"
                width={400}
                height={400}
              />
            </div>
            <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Master the art of crafting engaging content that connects with your audience and drives meaningful marketing results.
            </h3>
            <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
              Learn more
              <svg
                className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogListsComponent;

