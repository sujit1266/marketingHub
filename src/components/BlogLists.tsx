"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
      
 const BlogListsComponent = () => {
  return (
    <div>
      <div className="w-full mx-auto text-center mb-6 lg:mb-0 pt-[150px] pb-[150px] bg-gradient-to-t from-[#fab781] to-[#ffffff]">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Our Blogs
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore aut
          aspernatur cumque dolor enim iste?
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
              src="https://images.unsplash.com/photo-1657299171054-e679f630a776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
              width={400}
              height={400}
            />
          </div>
          <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            Atlassian powers sales and support at scale with Preline.
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
              src="https://images.unsplash.com/photo-1657299171054-e679f630a776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
              width={400}
              height={400}
            />
          </div>
          <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            Atlassian powers sales and support at scale with Preline.
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
              src="https://images.unsplash.com/photo-1657299171054-e679f630a776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
              width={400}
              height={400}
            />
          </div>
          <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            Atlassian powers sales and support at scale with Preline.
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
              src="https://images.unsplash.com/photo-1657299171054-e679f630a776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
              width={400}
              height={400}
            />
          </div>
          <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            Atlassian powers sales and support at scale with Preline.
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
              src="https://images.unsplash.com/photo-1657299171054-e679f630a776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
              width={400}
              height={400}
            />
          </div>
          <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            Atlassian powers sales and support at scale with Preline.
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
              src="https://images.unsplash.com/photo-1657299171054-e679f630a776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
              width={400}
              height={400}
            />
          </div>
          <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            Atlassian powers sales and support at scale with Preline.
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

