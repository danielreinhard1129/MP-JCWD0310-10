import { Event } from "@/types/event.type";
import { axiosInstance } from "@/lib/axios";
import { appConfig } from "@/utils/config";
import { format } from "date-fns";
const { baseUrl } = appConfig;

interface EventArgs extends Omit<Event, "id" | "categories" | "image"> {}

const useGetEvent = () => {
  const getEvent = async (payload: EventArgs) => {
    try {
      // payload.startDate = format(payload.startDate, "MMM-dd-yyyy, mm:HH:ss");
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
