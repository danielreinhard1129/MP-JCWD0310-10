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
  // Category: { title: "" };
  userId?: number;
  ticket: { name_ticket: string; qty_ticket: string; price_ticket: string };
  // user: User;
}
// categories: {
//   title: string;
// }
// [];
