"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { NAVIGATION } from "@/constants/nav";

import { HamburgerIcon } from "@/components/icons/HamburgerIcon";

import { MenuSection } from "./components/MenuSection";

export const NavigationMenu = () => {
  return (
    <div className="absolute right-4 top-4">
      <Menu
        as="div"
        className="relative inline-block"
      >
        <Menu.Button className="btn-secondary p-1">
          <HamburgerIcon />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            as="nav"
            className="absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-slate-300 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <MenuSection links={NAVIGATION} />
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
