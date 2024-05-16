"use client";
import AuthGuard from "@/hoc/AuthGuard";
import { Header } from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const ProtectedChildren = AuthGuard(() => (
    <>
      <Sidebar />
      <div className="flex w-full flex-col ">
        <Header />
        <div className="flex-1 bg-gray-100 py-8 font-bold  max-md:px-4 md:px-12">
          {children}
        </div>
      </div>
    </>
  ));

  return (
    <>
      <section className="flex h-screen flex-row">
        <ProtectedChildren />
      </section>
    </>
  );
}
