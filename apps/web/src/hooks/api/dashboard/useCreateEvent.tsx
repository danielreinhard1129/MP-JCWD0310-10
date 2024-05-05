"use client";

import { Event } from "@/app/dasboard/(pages)/types/event.type";
import { axiosInstance } from "@/lib/axios";

import axios, { AxiosError } from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface EventArgs extends Omit<Event, "id"> {
  name: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  location: string;
}
const useCreateEvent = () => {
  const router = useRouter();

  const createEvent = async (payload: EventArgs) => {
    try {
      payload.startDate = new Date(payload.startDate).toISOString();
      payload.endDate = new Date(payload.endDate).toISOString();

      const { data } = await axiosInstance.post(
        "/dashboard/create-event",
        payload,
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
