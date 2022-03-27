import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Menu, Popover, Tab, Transition } from "@headlessui/react";
import { MenuIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { MdFacebook } from "react-icons/md";
import { BsBasket } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const navigation = {
  pages: [
    { name: "Home", to: "/" },
    { name: "Products", to: "/products" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  return (
    <div>
      <TopHeader />
      <NavBar />
    </div>
  );
}

const TopHeader = () => {
  return (
    <>
      <div className="bg-green-800 h-14 flex items-center font-medium text-white">
        <div className="container mx-auto flex justify-between px-4 sm:px-6 lg:px-10">
          <div className="flex items-center space-x-3">
            <a href="https://facebook.com/">
              <MdFacebook size={20} />
            </a>
            <a href="https://instagram.com/">
              <FiInstagram size={20} />
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <SearchIcon className="w-6 h-6" aria-hidden="true" />
            <p className="border h-8 border-gray-200"></p>
            <FaRegHeart size={24} />
            <p className="border h-8 border-gray-200"></p>
            <Menu as="div" className="ml-3 relative">
              <div>
                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-white">
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div
                  className="border-t border-gray-200 py-6 px-4 space-y-6"
                  onClick={() => setOpen(false)}
                >
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link
                        to={page.to}
                        className="-m-2 p-2 block font-medium text-gray-900"
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  <div className="flow-root">
                    <Link
                      to="/"
                      className="-m-2 p-2 block font-medium text-gray-900"
                    >
                      Login
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link
                      to="/"
                      className="-m-2 p-2 block font-medium text-gray-900"
                    >
                      Create account
                    </Link>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <header className="relative bg-gray-50">
          <nav
            aria-label="Top"
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className=" border-gray-200">
              <div className="h-16 flex items-center justify-between">
                <button
                  type="button"
                  className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <Link to="/">
                    <img
                      src={require("../../assets/logo.png")}
                      alt="logo"
                      className="h-16 w-auto"
                    />
                  </Link>
                </div>

                {/* Flyout menus */}
                <Popover.Group className="hidden lg:mx-auto lg:block lg:self-stretch">
                  <div className="h-full flex space-x-8">
                    {navigation.pages.map((page) => (
                      <Link
                        key={page.name}
                        to={page.to}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                </Popover.Group>

                <div className=" flex items-center">
                  {/* Search */}
                  {/* <div className="flex lg:ml-6">
                    <a
                      href="#"
                      className="p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Search</span>
                      <SearchIcon className="w-6 h-6" aria-hidden="true" />
                    </a>
                  </div> */}

                  {/* Cart */}
                  <div className="ml-4 md:ml-auto flow-root lg:ml-6">
                    <Link
                      to="/"
                      className="group -m-2 py-2 flex items-center border rounded-full px-4 bg-white shadow-sm"
                    >
                      <BsBasket className="flex-shrink-0 h-6 w-6 text-green-600 group-hover:text-gray-500" />
                      <span className="ml-2 hidden md:flex lg:flex text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        0 item(s)
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
