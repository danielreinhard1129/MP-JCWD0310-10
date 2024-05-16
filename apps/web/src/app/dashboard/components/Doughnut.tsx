"use client";

import useGetEvent from "@/hooks/api/dashboard/useGetEvent";
import { Doughnut } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import { Event } from "../../../types/event.type";
import { useAppSelector } from "@/redux/hooks";

const Doughnutt: React.FC = () => {
  const { getEvent } = useGetEvent();
  const { id } = useAppSelector((state) => state.user);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const payload = {
          name: "",
          description: "",
          startDate: "",
          endDate: "",
          location: "",
          categories: "",
          Category: { title: "" },
        };
        const data = await getEvent(payload);
        setEvents(data);
      } catch (error) {}
    };
    fetchData();
    return () => {};
  }, []);

  const userEvents = events.filter((event) => event.userId === id);
  //   const filterEvents_sports = events.filter(
  //     (event) => event.categories === "sports",
  //   );
  //   const filterEvents_music = events.filter(
  //     (event) => event.categories === "music",
  //   );
  const filterEvents_art = events
    .filter
    // (event) => event.Category.title === "art",
    ();

  const data = {
    labels: ["Art", "kosong"],
    datasets: [
      {
        label: "Category",
        data: [
          //   Number(filterEvents_sports.length),
          //   Number(filterEvents_music.length),
          Number(filterEvents_art.length),
          100,
        ],
        backgroundColor: [
          //   "rgb(255, 99, 132)",
          //   "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(54, 200, 80)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {};
  console.log(filterEvents_art);
  return (
    <div>
      <Doughnut data={data} options={options}></Doughnut>
      {/* <div className="font-bold text-gray-950">{userEvents}</div> */}
    </div>
  );
};

export default Doughnutt;
