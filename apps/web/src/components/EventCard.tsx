import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "./ui/button";

interface EventCardProps {
  title: string;
  description: string;
  category: string;
  author: string;
  imageUrl: string;
  createdAt: Date;
  eventId: number;
  startDate: Date;
  location: string;
  tickets: number;
}

const EventCard: FC<EventCardProps> = ({
  title,
  description,
  category,
  author,
  imageUrl,
  createdAt,
  eventId,
  startDate,
  tickets,
  location
}) => {
  const formattedPrice = (tickets: number): string => {
    return tickets === 0
      ? "Free entrance"
      : new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(tickets);
  };
  return (
    <Link href={`/${eventId}`}>
      <Card>
        <CardHeader>
          <div className="relative  z-10 mb-5 h-[140px] w-[270px] overflow-hidden rounded-md">
            <Image
              src={`/Franky.jpeg`}
              alt="thumbnail"
              className="items-center object-cover"
              fill
            />
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="flex gap-3">
            <CalendarDays /> {format(startDate, "dd MMMM yyyy")}
          </CardDescription>
          <CardDescription className="flex gap-3">
            <MapPin /> {location}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-col-2 flex justify-between">
          <div className="grid">
            <CardDescription className="flex gap-3">Harga</CardDescription>
            <p className="font-bold text-orange-400">
              {formattedPrice(tickets)}
            </p>
          </div>
          <Link href={`/${tickets}`}>
            <Button className="bg-green-500 text-black">Beli</Button>
          </Link>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
