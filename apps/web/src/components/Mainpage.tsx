"use client";

import { SelectCategory } from "@/components/SelectCategory";
import { SelectLocation } from "@/components/SelectLocation";
import { SelectWaktu } from "@/components/SelectWaktu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useGetEvents from "@/hooks/api/event/useGetEvents";
import { useState } from "react";
import Pagination from "./Pagination";
import Image from "next/image";
import { CalendarDays, Ghost, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import ghost from "@material-tailwind/react/theme/components/timeline/timelineIconColors/ghost";

const Mainpage = () => {
  const [page, setPage] = useState<number>(1);
  const { data: events, meta } = useGetEvents({
    page,
    take: 6,
  });

  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };
  return (
    <div className="container mt-56 grid grid-cols-3">
      <div className="space-y-4 md:col-span-1 md:grid">
        <h1 className="pb-5 text-3xl font-bold ">Jelajah</h1>
        <SelectLocation />
        <SelectCategory />
        <SelectWaktu />
      </div>
      <div className="md:col-span-2 md:grid">
        {/* {events.map((event, index) => {
          return (
            <EventCard
              key={index}
              title={event.title}
              author={event.user.fullName}
              category={event.category}
              createdAt={new Date(event.createdAt)}
              description={event.description}
              imageUrl={appConfig.baseUrl + `/assets${event.thumbnail}`}
              eventId={eventid}
            />
          );
        })} */}
        <div className="container overflow-hidden ">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Card>
              <CardHeader>
                <div className="relative  z-10 h-[140px] w-[270px] overflow-hidden rounded-md mb-5">
                  <Image
                    src={`/Franky.jpeg`}
                    alt="thumbnail"
                    className="object-cover items-center"
                    fill
                  />
                </div>
                <CardTitle>MOTOGP MANDALIKA</CardTitle>
                <CardDescription className="flex gap-3">
                  <CalendarDays /> 10 Maret 2024
                </CardDescription>
                <CardDescription className="flex gap-3">
                  <MapPin /> Pulau Lombok
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-col-2 flex justify-between">
                <div className="grid">
                  <CardDescription className="flex gap-3">
                    Harga
                  </CardDescription>
                  <p className="text-orange-400 font-bold">Rp.5.000.000</p>
                </div>
                <Button className="bg-green-500 text-black">Beli</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="my-8 flex justify-center ">
          <Pagination
            total={meta?.total || 0}
            take={meta?.take || 0}
            onChangePage={handleChangePaginate}
          />
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
