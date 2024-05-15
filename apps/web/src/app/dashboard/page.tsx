"use client";

import AuthGuard from "@/hoc/AuthGuard";
import LineChart from "./components/LineChart";
import { useAppSelector } from "@/redux/hooks";

const dasboardPage = () => {
  return (
    <div className="h-full">
      <div className="m-auto grid max-w-6xl gap-8 md:grid-cols-3 ">
        <div className="rounded-lg bg-white p-6 transition duration-300 hover:shadow-xl">
          <h2 className="mb-2 text-2xl font-semibold">Profit</h2>
          <p className="text-lg text-gray-600">
            View your profit insights here.
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 transition duration-300 hover:shadow-xl">
          <h2 className="mb-2 text-2xl font-semibold">Sales Report</h2>
          <p className="text-lg text-gray-600">
            Analyze your sales performance.
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 transition duration-300 hover:shadow-xl">
          <h2 className="mb-2 text-2xl font-semibold">Buy</h2>
          <p className="text-lg text-gray-600">Explore buying options.</p>
        </div>
      </div>
      <div className=" pt-8">
        <div className="h-auto rounded-lg bg-white  transition duration-300 hover:shadow-xl ">
          {/* <h2 className="mb-2 text-2xl font-semibold">Profit</h2> */}
          <div className="w-full text-lg text-gray-600 ">
            <LineChart />
            {/* View your profit insights here. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default dasboardPage;
