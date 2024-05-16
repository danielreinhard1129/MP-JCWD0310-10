"use client";

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import Doughnutt from "./components/Doughnut";
import LineChart from "./components/LineChart";

ChartJS.register(ArcElement, Tooltip, Legend);

const dasboardPage = () => {
  return (
    <div className="-mt-4 h-full">
      <div className="m-auto grid max-w-6xl gap-8  md:grid-cols-3">
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
      <div className=" gap-4 pt-8 md:flex">
        <div className="h-auto rounded-lg bg-white p-4 transition duration-300 hover:shadow-xl">
          {/* <h2 className="mb-2 text-2xl font-semibold">Profit</h2> */}
          <LineChart />
        </div>
        <div className="h-auto rounded-lg bg-white p-4  transition duration-300 hover:shadow-xl max-md:mt-10">
          <div>
            <Doughnutt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default dasboardPage;
