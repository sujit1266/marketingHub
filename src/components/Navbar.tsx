"use client";
import Link from "next/link";
import Image from "next/image";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export const Navbar = () => {
  const navigation = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Blog", to: "/blog" },
  ];

  const servicesDropdown = [
    { label: "Web Development", to: "/services/web-development" },
    { label: "Graphic Design", to: "/services/graphic-design" },
    { label: "Consulting", to: "/services/consulting" },
    { label: "Web Development", to: "/services/web-development" },
    { label: "Graphic Design", to: "/services/graphic-design" },
    { label: "Consulting", to: "/services/consulting" },
  ];

  return (
    <div className={`w-full fixed z-[999] bg-[rgba(255,255,255,1)] px-10`}>
      <nav className="relative flex flex-wrap items-center justify-between p-4 lg:justify-between xl:px-1 z-[999] h-[max-content]">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <span>
              <Image
                src="/img/logo.png"
                width="2000"
                alt="N"
                height="2000"
                className="w-60 md:w-80"
              />
            </span>
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="/contact"
              className="px-6 py-2 text-white bg-buttonColor hover:bg-buttonColorHover rounded-md md:ml-5 font-bold"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.to}
                    className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                  >
                    {item.label}
                  </Link>
                ))}
                {/* Services with Dropdown for Mobile */}
                <div className="w-full px-4 py-2 -ml-4">
                  <Link
                    href="/services"
                    className="block text-gray-500 dark:text-gray-300 hover:text-buttonColor focus:text-buttonColor focus:outline-none"
                  >
                    Services
                  </Link>
                  {servicesDropdown.map((service, index) => (
                    <Link
                      key={index}
                      href={service.to}
                      className="block px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                >
                  Contact Us
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu.to}
                  className="inline-block px-4 py-2 text-xl text-gray-800 no-underline rounded-md focus:text-buttonColor focus:outline-none hover:text-buttonColor font-bold"
                >
                  {menu.label}
                </Link>
              </li>
            ))}
            {/* Services Dropdown for Desktop */}
            <li className="mr-3 nav__item relative">
              <Menu as="div" className="relative inline-block text-left">
                {({ open, close }) => {
                  const [isHovering, setIsHovering] = useState(false);

                  return (
                    <>
                      <div
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                      >
                        <Menu.Button className="inline-flex items-center px-4 py-2 text-xl text-gray-800 no-underline rounded-md hover:text-buttonColor focus:text-buttonColor font-bold">
                          <Link href="/services" className="flex items-center">
                            Services
                          </Link>
                          <svg
                            className={`ml-2 w-4 h-4 fill-current transition-transform duration-200 ${
                              open || isHovering ? "rotate-180" : "rotate-0"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Menu.Button>
                        <Transition
                          show={open || isHovering}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="absolute left-0 mt-2 w-64 bg-white shadow-md rounded-md border border-gray-200 focus:outline-none"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => {
                              setIsHovering(false);
                              if (open) close(); // Close the dropdown if it was opened by click
                            }}
                          >
                            <div className="py-3">
                              {servicesDropdown.map((service, index) => (
                                <Menu.Item key={index}>
                                  {({ active }) => (
                                    <Link
                                      href={service.to}
                                      onClick={() => close()} // Close dropdown on click
                                      className={`${
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700"
                                      } block px-6 py-4 text-base font-bold hover:bg-gray-100 hover:text-buttonColor`}
                                    >
                                      {service.label}
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </div>
                    </>
                  );
                }}
              </Menu>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};