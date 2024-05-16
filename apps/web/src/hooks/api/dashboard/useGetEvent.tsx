import { Event } from "@/types/event.type";
import { axiosInstance } from "@/lib/axios";
import { appConfig } from "@/utils/config";
import { format } from "date-fns";
const { baseUrl } = appConfig;

interface EventArgs
  extends Omit<Event, "id" | "Category" | "image" | "ticket"> {
  // Category: { title: string };
}

const useGetEvent = () => {
  const getEvent = async (payload: EventArgs) => {
    try {
      const response = await axiosInstance.get("/dashboard/get-event", {
        params: {
          payload,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
      // console.log(error);
    }
  };

  return { getEvent };
};

export default useGetEvent;
