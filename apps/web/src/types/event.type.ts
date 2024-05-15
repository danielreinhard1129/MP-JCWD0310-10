import { ReactNode } from "react";
import { User } from "./user.type";

export interface Event {
  id: number;
  name: String;
  location: String;
  description: String;
  image: File[];
  startDate: string;
  endDate: string;
  categories: string;
  userId?: number;
  // user: User;
}
// categories: {
//   title: string;
// }
// [];
