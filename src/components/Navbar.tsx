"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between pt-3 h-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
      {/* <div className="flex flex-row items-center justify-between"> */}
      <div className="flex-shrink-0">
        <Image
          src="/logo/Aromo Transparent Logo 01.svg"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <Link
            href="/"
            className={`${
              window.location.pathname === "/"
                ? "bg-slate-700 text-white"
                : "text-slate-300 hover:bg-slate-700 hover:text-white"
            }   px-3 py-2 rounded-md text-sm font-medium`}
          >
            Home
          </Link>
          <Link
            href="/doctor"
            className={`${
              window.location.pathname === " /doctor"
                ? "bg-slate-700 text-white"
                : "text-slate-300 hover:bg-slate-700 hover:text-white"
            }   px-3 py-2 rounded-md text-sm font-medium`}
          >
            Doctor
          </Link>

          <Link
            href="/hospital"
            className={`${
              window.location.pathname === "/hospital"
                ? "bg-slate-700 text-white"
                : "text-slate-300 hover:bg-slate-700 hover:text-white"
            }   px-3 py-2 rounded-md text-sm font-medium`}
          >
            Hospital
          </Link>
          <Link
            href="/ambulance"
            className={`${
              window.location.pathname === " /ambulance"
                ? "bg-slate-700 text-white"
                : "text-slate-300 hover:bg-slate-700 hover:text-white"
            }   px-3 py-2 rounded-md text-sm font-medium`}
          >
            Ambulance
          </Link>
        </div>
      </div>
      {/* </div> */}

      <div className="-mr-2 flex md:hidden">
        {/* <!-- Mobile menu button --> */}

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<FaBars />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>
              <Link href="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/doctor">Doctor</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/hospital">Hospital</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/ambulance">Ambulance</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
