"use client";

import { Event } from "@/types/event.types";
import { axiosInstance } from "@/lib/axios";

import { useRouter } from "next/navigation";
import { FileWithPath } from "react-dropzone";

interface EventArgs extends Omit<Event, "id"> {
  name: string;
  description: string;
  image: File[];
  startDate: string;
  endDate: string;
  location: string;
  userId?: number;
}
const useCreateEvent = () => {
  const router = useRouter();

  const createEvent = async (payload: EventArgs) => {
    try {
      const createBlogForm = new FormData();

      createBlogForm.append("userId", String(payload.userId));
      const startDate = new Date(payload.startDate).toISOString();
      const endDate = new Date(payload.endDate).toISOString();

      createBlogForm.append("name", payload.name);
      createBlogForm.append("description", payload.description);
      payload.image.forEach((file: FileWithPath) => {
        createBlogForm.append("image", file);
      });

      createBlogForm.append("startDate", startDate);
      createBlogForm.append("endDate", endDate);
      createBlogForm.append("location", payload.location);
      createBlogForm.append("categories", payload.categories);

      createBlogForm.append("name_ticket", payload.ticket.name_ticket);
      createBlogForm.append("qty_ticket", payload.ticket.qty_ticket);
      createBlogForm.append("price_ticket", payload.ticket.price_ticket);

      await axiosInstance.post<Event>(
        "/dashboard/create-event",
        createBlogForm,
      );

      location.reload();
      alert("Create event Success");
    } catch (error) {
      console.log(error);
    }
  };
  return { createEvent };
};

export default useCreateEvent;
