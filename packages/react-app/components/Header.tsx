import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-colors-primary border-b border-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-1 focus:ring-inset focus:rounded-none focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center text-white font-semibold text-2xl">
                  <Link href="/"><p>ScotchSecure</p></Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/about" className="inline-flex items-center border-b-2 border-black px-1 pt-1 text-sm font-medium text-gray-900">
                    About
                  </Link>
                  <Link href="/challenges" className="inline-flex items-center border-b-2 border-black px-1 pt-1 text-sm font-medium text-gray-900">
                    Challenges
                  </Link>
                  <Link href="/fantoken" className="inline-flex items-center border-b-2 border-black px-1 pt-1 text-sm font-medium text-gray-900">
                    Fan Token
                  </Link>
                  <Link href="/microwork" className="inline-flex items-center border-b-2 border-black px-1 pt-1 text-sm font-medium text-gray-900">
                    Microwork
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-black py-2 pl-3 pr-4 text-base font-medium text-black"
              >
                About
              </Disclosure.Button>
              {/* Add here your custom menu elements */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

declare global {
  interface Window {
    ethereum: any;
  }
}