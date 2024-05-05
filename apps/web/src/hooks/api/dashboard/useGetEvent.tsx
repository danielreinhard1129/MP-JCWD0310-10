import { Event } from "@/app/dasboard/(pages)/types/event.type";
import { axiosInstance } from "@/lib/axios";
import axios from "axios";
import { useState } from "react";
import { appConfig } from "@/utils/config";
const { baseUrl } = appConfig;

interface EventArgs extends Omit<Event, "id"> {
  name: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  location: string;
}

const useGetEvent = () => {
  const getEvent = async (payload: EventArgs) => {
    try {
      const response = await axiosInstance.get("/dashboard/get-event", {
        params: payload,
      });
      return response.data;
    } catch (error) {
      // console.log(error);
      throw error;
    }
  };

  return { getEvent };
};

export default useGetEvent;
