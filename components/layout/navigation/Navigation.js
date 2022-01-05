/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";

import tw from "twin.macro";
import { signOut } from "next-auth/react";
import {
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlineUser,
  HiOutlineLogout,
  HiOutlineCog,
  HiOutlineFolder,
  HiOutlineCalendar,
  HiOutlineInbox,
  HiOutlineChartBar
} from "react-icons/hi";

import { MobileNavigation } from "./MobileNavigation";
const navigation = [
  { name: "Dashboard", href: "#", icon: HiOutlineHome, current: true },
  { name: "Clients", href: "#", icon: HiOutlineUser, current: false },
  { name: "Projects", href: "#", icon: HiOutlineFolder, current: false },
  { name: "Calendar", href: "#", icon: HiOutlineCalendar, current: false },
  { name: "Documents", href: "#", icon: HiOutlineInbox, current: false },
  { name: "Reports", href: "#", icon: HiOutlineChartBar, current: false }
];

export const Navigation = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <MobileNavigation
        navigation={navigation}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Static sidebar for desktop */}
      <div tw="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div tw="flex-1 flex flex-col min-h-0 bg-gray-800">
          <div tw="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div tw="flex items-center flex-shrink-0 px-4">
              <h1 tw="text-base text-gray-50 font-bold uppercase tracking-wide">
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
                      ? tw`bg-gray-900 text-white`
                      : tw`text-gray-300 hover:bg-gray-700 hover:text-white`
                  ]}
                >
                  <item.icon
                    css={[
                      tw`mr-3 flex-shrink-0 h-6 w-6`,
                      item.current
                        ? tw`text-gray-300`
                        : tw`text-gray-400 hover:text-gray-300`
                    ]}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
            <div tw="mt-10 border-t border-gray-900 p-2 space-y-1">
              <a
                onClick={() => signOut()}
                css={[
                  tw`flex items-center px-2 py-2 text-base font-medium rounded-md w-full text-gray-300 hover:bg-gray-700 hover:text-white`
                ]}
              >
                <HiOutlineCog
                  css={[
                    tw`mr-3 flex-shrink-0 h-6 w-6 text-gray-400 hover:text-gray-300`
                  ]}
                  aria-hidden="true"
                />
                Settings
              </a>
              <button
                onClick={() => signOut()}
                css={[
                  tw`flex items-center px-2 py-2 text-base font-medium rounded-md w-full text-gray-300 hover:bg-gray-700 hover:text-white`
                ]}
              >
                <HiOutlineLogout
                  css={[
                    tw`mr-3 flex-shrink-0 h-6 w-6 text-gray-400 hover:text-gray-300`
                  ]}
                  aria-hidden="true"
                />
                Logout
              </button>
            </div>
          </div>
          {/* <div tw="flex p-4 border-t border-gray-900">
            <button tw="w-full block">
              <div tw="flex items-center">
                <div>
                  <HiOutlineLogout
                    css={[tw`mr-3 h-6 w-6 text-gray-400 hover:text-gray-300`]}
                  />
                </div>
                <div>
                  <p tw="text-lg font-medium text-white">Log Out</p>
                </div>
              </div>
            </button>
          </div> */}
        </div>
      </div>
      <div tw="md:pl-72 flex flex-col flex-1">
        <div tw="sticky flex top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
          <button
            type="button"
            tw="ml-auto -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span tw="sr-only">Open sidebar</span>
            <HiOutlineMenu tw="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main tw="flex-1">
          <div tw="py-6">
            <div tw="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div tw="py-4">{children}</div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
