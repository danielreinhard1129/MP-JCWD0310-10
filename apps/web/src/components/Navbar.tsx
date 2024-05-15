"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAppSelector } from "@/redux/hooks";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [navBackground, setnavBackgroudn] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 520) {
      setnavBackgroudn(true);
    } else {
      setnavBackgroudn(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  });

  const { username } = useAppSelector((state) => state.user);
  const pathname = usePathname();
  const shouldBeHidden =
    pathname.startsWith("/auth") || pathname.startsWith("/dashboard");
  return (
    <>
      <nav
        className={` fixed top-0 z-10  w-full py-4  md:px-32 ${shouldBeHidden ? "hidden" : ""} `}
        // className={`fixed top-0 z-10 w-full py-4 md:px-32 ${
        //   pathname.startsWith("/auth") ? "hidden" : ""
        // }`}
      >
        <div
          // className={`flex justify-between rounded-xl p-4 px-8 font-bold text-white shadow  ${navBackground ? "bg-gray-800" : "backdrop-blur-lg"}`}
          className={`flex justify-between rounded-xl bg-eastern-blue-500 p-4 px-8 font-bold text-white  shadow`}
        >
          <div className=" text-3xl text-white">LOGO</div>

          <div className="flex items-center gap-4  max-md:hidden">
            <div className="flex items-center gap-2 text-center text-xl text-gray-200 ">
              <div>Welcome back! </div>{" "}
              <div className="text-white">{username}</div>
            </div>

            <img
              className="inline-block h-10 w-10  rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>

          <div className="  md:hidden ">
            <Sheet>
              <SheetTrigger>
                <AlignJustify className="text-white" size="24" />
              </SheetTrigger>
              <SheetContent className="bg-transparent backdrop-blur-lg">
                <div>
                  <ul className="flex flex-col gap-4 p-4">
                    <p className="text-white hover:underline">
                      <Link href={"/"}>Home</Link>
                    </p>
                    <p className="text-white hover:underline">
                      <Link href={"/about"}>About Us</Link>
                    </p>
                    <p className="text-white hover:underline">
                      <Link href={"/services"}>Services</Link>
                    </p>
                    <p className="text-white hover:underline">
                      <Link href={"/team"}>Teams</Link>
                    </p>
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}
