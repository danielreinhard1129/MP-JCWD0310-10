import React from "react";
import {
  LayoutDashboard,
  FileBarChart,
  LogOut,
  Settings,
  Theater,
  Ticket,
  UserRound,
} from "lucide-react";

import Link from "next/link";

interface NavigationBarProps {
  href: string;
  children: React.ReactNode;
}

export const NavigationBar = ({ href, children }: NavigationBarProps) => {
  return (
    <Link href={href}>
      <p className="flex cursor-pointer items-center gap-x-2 py-2 text-white transition duration-300 hover:text-gray-300">
        {children}
      </p>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <>
      <section className=" flex h-screen w-80 flex-col justify-between rounded-r-xl bg-eastern-blue-500 px-4  pb-4 max-md:hidden">
        <div className=" ">
          <div className="pb-4 pt-8 text-center text-3xl text-white">LOGO</div>
          <div className="m-4 mt-8 flex flex-col gap-y-4 px-4">
            <NavigationBar href={"/dashboard"}>
              <LayoutDashboard />
              Dashboard
            </NavigationBar>
            <NavigationBar href={"/dashboard/event"}>
              <Theater />
              Event
            </NavigationBar>
            <NavigationBar href={"/dashboard/order"}>
              <Ticket />
              Order
            </NavigationBar>
            <NavigationBar href={"/dashboard/analytic"}>
              <FileBarChart />
              Analytics
            </NavigationBar>
            <NavigationBar href={"/dashboard/setting"}>
              <Settings />
              setting
            </NavigationBar>
          </div>
        </div>
        <div className="m-4 flex cursor-pointer items-center p-4 text-white transition duration-300 hover:text-gray-300">
          <LogOut />
          <p>Logout</p>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
