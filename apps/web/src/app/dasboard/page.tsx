"use client";

const dasboardPage = () => {
  return (
    <>
      <div className="m-auto grid max-w-6xl grid-cols-3 gap-8">
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
      <div className="px-4">try</div>
    </>
  );
};

export default dasboardPage;
