"use client";
import { AlignJustify, ChevronDown, Phone, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Header = () => {
  const [searchClick, setSearchClick] = useState(false);
  const searchClickRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        searchClickRef.current &&
        !searchClickRef.current.contains(event.target)
      ) {
        setSearchClick(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setSearchClick(!searchClick);
  };

  return (
    <div className="fixed top-0 bg-[#438E96] md:container ">
      <div className="md:mx-auto md:px-4 ">
        <div className="flex flex-row items-center gap-3 md:relative md:gap-10 md:py-2 md:mx-0 mx-3">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </Link>

          <div className="items-center justify-center font-bold text-white md:flex">
            <h2>Event Hunter</h2>
          </div>
          <SearchIcon
            className={`md:absolute md:left-[540px]  ${searchClick ? "text-red-600" : "text-black"}`}
          />
          <Input
            className="hidden md:flex md:w-72"
            type="text"
            placeholder="cari event..."
            onClick={handleClick}
          />

          <div className="hidden md:flex md:gap-5 md:text-white">
            <Phone />
            <h3>Hubungi Kami</h3>
          </div>

          <div className="flex gap-5 text-white">
            <Image
              className=""
              src="/indonesia.png"
              alt="Indonesia"
              width={30}
              height={30}
            />
            <h3>Id</h3>
            <ChevronDown className="md:items-center md:justify-center md:text-center" />
          </div>
          <AlignJustify className="md right-0 text-white md:hidden" />
          <Button className="hidden md:absolute md:right-0 md:flex md:border-2 md:border-white md:bg-transparent md:text-white">
            Buat Event
          </Button>
        </div>
      </div>
    </div>
  );
};
