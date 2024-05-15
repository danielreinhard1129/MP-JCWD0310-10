import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Event = () => {
  return (
    <>
      <div className="m-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div className="rounded-lg bg-gradient-to-br from-green-200 to-green-400 p-6 transition duration-300 hover:border-gray-200 hover:bg-green-300 hover:shadow-xl">
          <h2 className="mb-2 text-2xl font-semibold">Profit</h2>
          <p className="text-lg text-gray-600">
            View your profit insights here.
          </p>
        </div>
        <div className="rounded-lg bg-gradient-to-br from-blue-200 to-blue-400 p-6 transition duration-300 hover:shadow-xl">
          <h2 className="mb-2 text-2xl font-semibold">Sales Report</h2>
          <p className="text-lg text-gray-600">
            Analyze your sales performance.
          </p>
        </div>
        <div className="rounded-lg bg-gradient-to-br from-purple-200 to-purple-400 p-6 transition duration-300 hover:shadow-xl">
          <h2 className="mb-2 text-2xl font-semibold">Buy</h2>
          <p className="text-lg text-gray-600">Explore buying options.</p>
        </div>
      </div>

      <div className="my-8  px-4 text-sm">
        <Accordion type="single" collapsible className="w-full ">
          <AccordionItem value="item-1" className="gray-200 mb-4 rounded-lg ">
            <AccordionTrigger className="flex items-center justify-between rounded-lg  bg-blue-200 px-4 py-3 font-medium text-gray-800">
              <span>Payment Validation</span>
            </AccordionTrigger>
            <AccordionContent className="bg-green-200 px-4 py-2 ">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">No</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Event</th>
                    <th className="px-4 py-2">Date & Time</th>
                    <th className="px-4 py-2">status</th>
                    <th className="px-4 py-2">Approval</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">John Doe</td>
                    <td className="px-4 py-2">Conference</td>
                    <td className="px-4 py-2">2024-05-04 10:00 AM</td>
                    <td className="px-4 py-2">Pending</td>
                    <td className="px-4 py-2">-</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">2</td>
                    <td className="px-4 py-2">Jane Smith</td>
                    <td className="px-4 py-2">Workshop</td>
                    <td className="px-4 py-2">2024-05-05 02:00 PM</td>
                    <td className="px-4 py-2">Approved</td>
                    <td className="px-4 py-2">Yes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">3</td>
                    <td className="px-4 py-2">Alice Johnson</td>
                    <td className="px-4 py-2">Seminar</td>
                    <td className="px-4 py-2">2024-05-06 09:00 AM</td>
                    <td className="px-4 py-2">Rejected</td>
                    <td className="px-4 py-2">No</td>
                  </tr>
                </tbody>
              </table>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="gray-200 mb-4 rounded-lg ">
            <AccordionTrigger className="flex items-center justify-between rounded-lg  bg-blue-200 px-4 py-3 font-medium text-gray-800">
              <span>Payment History</span>
            </AccordionTrigger>
            <AccordionContent className="bg-green-200 px-4 py-2 ">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">No</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Event</th>
                    <th className="px-4 py-2">Date & Time</th>
                    <th className="px-4 py-2">status</th>
                    <th className="px-4 py-2">Approval</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">John Doe</td>
                    <td className="px-4 py-2">Conference</td>
                    <td className="px-4 py-2">2024-05-04 10:00 AM</td>
                    <td className="px-4 py-2">Pending</td>
                    <td className="px-4 py-2">-</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">2</td>
                    <td className="px-4 py-2">Jane Smith</td>
                    <td className="px-4 py-2">Workshop</td>
                    <td className="px-4 py-2">2024-05-05 02:00 PM</td>
                    <td className="px-4 py-2">Approved</td>
                    <td className="px-4 py-2">Yes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">3</td>
                    <td className="px-4 py-2">Alice Johnson</td>
                    <td className="px-4 py-2">Seminar</td>
                    <td className="px-4 py-2">2024-05-06 09:00 AM</td>
                    <td className="px-4 py-2">Rejected</td>
                    <td className="px-4 py-2">No</td>
                  </tr>
                </tbody>
              </table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Event;
