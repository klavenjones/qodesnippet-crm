import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import tw, { css } from "twin.macro";
import { HiX, HiOutlineCog, HiOutlineLogout } from "react-icons/hi";

export const MobileNavigation = ({
  navigation,
  sidebarOpen,
  setSidebarOpen
}) => {
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          tw="fixed inset-0 flex z-40 md:hidden"
          onClose={setSidebarOpen}
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
            <Dialog.Overlay tw="fixed inset-0 bg-gray-600 bg-opacity-75" />
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
            <div tw="relative flex-1 flex flex-col max-w-xs w-full bg-green-900">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div tw="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    tw="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span tw="sr-only">Close sidebar</span>
                    <HiX tw="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div tw="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div tw="flex-shrink-0 flex items-center px-4">
                  <h1 tw="text-lg text-gray-50 font-bold uppercase tracking-wide">
                    QodeSnippet Design Studio
                  </h1>
                </div>
                <nav tw="mt-5 px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      css={[
                        tw`flex items-center px-2 py-2 text-base font-medium rounded-md`,
                        item.current
                          ? tw`bg-green-700 text-white`
                          : tw`text-gray-300 hover:bg-green-700 hover:text-white`
                      ]}
                    >
                      <item.icon
                        css={[
                          tw`mr-4 flex-shrink-0 h-6 w-6`,
                          item.current
                            ? tw`text-gray-50`
                            : tw`text-gray-50 hover:text-white`
                        ]}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
                <div tw="mt-10 border-t border-gray-900 px-2 pb-2 pt-5 space-y-1">
                  <a
                    onClick={() => signOut()}
                    css={[
                      tw`flex items-center px-2 py-2 text-base font-medium rounded-md w-full text-gray-50 hover:bg-green-700 hover:text-white`
                    ]}
                  >
                    <HiOutlineCog
                      css={[
                        tw`mr-3 flex-shrink-0 h-6 w-6 text-gray-50 hover:text-white`
                      ]}
                      aria-hidden="true"
                    />
                    Settings
                  </a>
                  <button
                    onClick={() => signOut()}
                    css={[
                      tw`flex items-center px-2 py-2 text-base font-medium rounded-md w-full text-gray-50 hover:bg-green-700 hover:text-white`
                    ]}
                  >
                    <HiOutlineLogout
                      css={[
                        tw`mr-3 flex-shrink-0 h-6 w-6 text-gray-50 hover:text-white`
                      ]}
                      aria-hidden="true"
                    />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
          <div tw="flex-shrink-0 w-14"></div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
