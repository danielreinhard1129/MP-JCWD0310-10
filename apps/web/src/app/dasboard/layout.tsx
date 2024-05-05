import { Header } from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="flex h-screen flex-row">
        <Sidebar />
        <div className="flex w-full flex-col">
          <nav className="px-12 pb-4 pt-8">
            <div className="font-sans  text-3xl font-medium">Overview</div>
          </nav>
          {/* <Header /> */}
          <div className="flex-1 bg-gray-100 px-12 py-8 text-4xl font-bold">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
