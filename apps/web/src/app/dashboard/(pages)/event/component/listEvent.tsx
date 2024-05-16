"use client";

import React, { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import useGetEvent from "@/hooks/api/dashboard/useGetEvent";
import { Event } from "../../../../../types/event.types";
import { format, parseISO } from "date-fns";
import { useAppSelector } from "@/redux/hooks";
const ListEvent = () => {
  const { getEvent } = useGetEvent();
  const [events, setEvents] = useState<Event[]>([]);
  const { id } = useAppSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const payload = {
          name: "",
          description: "",
          startDate: "",
          endDate: "",
          location: "",
        };

        const data = await getEvent(payload);
        setEvents(data);
      } catch (error) {}
    };
    fetchData();
    return () => {};
  }, []);
  const userEvents = events.filter((event) => event.userId === id);
  return (
    <>
      <div
        className="relative mt-8 h-[350px] overflow-y-auto text-sm"
        style={{
          scrollbarWidth: "none",
        }}
      >
        <table className="w-full table-auto">
          <thead>
            <tr className="sticky top-0 bg-gray-200">
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

          <tbody className="overscroll-contain ">
            {userEvents
              .slice()
              .reverse()
              .map((e, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-gray-100" : ""}>
                  <td className="px-4 py-2">{i + 1}</td>
                  <td className="px-4 py-2 ">{e.name}</td>
                  <td className="px-4 py-2 max-md:hidden">{e.description}</td>
                  <td className="px-4 py-2 ">{e.location}</td>
                  <td className="px-4 py-2  max-md:hidden">
                    {format(parseISO(e.startDate), "dd MMM yyyy HH:mm")}
                  </td>
                  <td className="px-4 py-2 max-md:hidden">
                    {format(parseISO(e.endDate), "dd MMM yyyy HH:mm")}
                  </td>
                  <td className="px-4 py-2 text-center max-md:hidden">
                    <input type="checkbox" checked={!!e.image} readOnly />
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
      </div>
    </>
  );
};

export default ListEvent;
