"use client";

import React, { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import useGetEvent from "@/hooks/api/dashboard/useGetEvent";
import { Event } from "../../types/event.type";
const ListEvent = () => {
  const { getEvent } = useGetEvent();
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const payload = {
          name: "",
          description: "",
          image: "",
          startDate: "",
          endDate: "",
          location: "",
        };
        const data = await getEvent(payload);
        setEvents(data);
      } catch (error) {
        console.log("Error fetching events:", error);
      }
    };

    fetchData();

    return () => {};
  }, [getEvent]);

  return (
    <>
      <div className="my-8 h-64  text-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Start Date</th>
              <th className="px-4 py-2">End Date</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Edit</th>
            </tr>
          </thead>
        </table>
        <ScrollArea className="h-64">
          <table className="w-full table-auto">
            <tbody>
              {events.map((e, i) => (
                <tr key={i}>
                  <td className="px-4 py-2">{i + 1}</td>
                  <td className="px-4 py-2">{e.name}</td>
                  <td className="px-4 py-2">{e.description}</td>
                  <td className="px-4 py-2">{e.location}</td>
                  <td className="px-4 py-2">{e.startDate}</td>
                  <td className="px-4 py-2">{e.endDate}</td>
                  <td className="px-4 py-2 text-center">
                    <input type="checkbox" checked={true} />
                  </td>
                  <td className="px-4 py-2">
                    <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea>
      </div>
    </>
  );
};

export default ListEvent;
