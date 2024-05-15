import Link from "next/link";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Facebook, Instagram, Phone, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <div className="container grid bg-[#438e96]">
      <div className="m-10 flex justify-between text-white">
        <div className="grid">
          <h1 className="font-bold">Tentang Kami</h1>
          <div className="flex flex-col gap-5 py-10">
            <p>Tentang Kami</p>
            <p>Blogs</p>
          </div>
        </div>

        <div className="grid">
          <h1 className="font-bold">Kategori</h1>
          <div className="flex flex-col gap-5 py-10">
            <p>Olahraga</p>
            <p>Musik</p>
            <p>Seminar</p>
          </div>
        </div>

        <div className="grid">
          <h1 className="font-bold">Penyelenggara</h1>
          <div className="flex flex-col gap-5 py-10">
            <p>Creator</p>
            <p>Masuk</p>
            <p>Daftar</p>
          </div>
        </div>

        <div className="grid">
          <h1 className="font-bold">Informasi</h1>
          <div className="flex flex-col gap-5 py-10">
            <p>Syarat dan Ketentuan</p>
            <p>FAQ</p>
            <p>Tiket Gelang</p>
          </div>
        </div>
      </div>

      <div className="mx-10 flex justify-between text-white">
        <Separator />
      </div>
      <div className="mx-10 mt-5 flex justify-between text-white">
        <div className="flex justify-between">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={70} height={70} />
          </Link>
          <div className="flex  items-center justify-center font-bold text-white ">
            <h3>Event Hunter</h3>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p>© 2024 Artatix. All Rights Reserved</p>
        </div>
        <div className="flex items-center justify-center gap-10">
          <Instagram />
          <Facebook />
          <Phone />
          <Twitter />
        </div>
      </div>
    </div>
  );
};
