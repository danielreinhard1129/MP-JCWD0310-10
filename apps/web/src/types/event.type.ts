
export interface Event {
  id: number;
  name: String;
  location: String;
  description: String;
  image: File[];
  startDate: Date;
  endDate: Date;
  categories: string;
  // Category: { title: "" };
  userId?: number;
  ticket: { name_ticket: string; qty_ticket: string; price_ticket: string };
  // user: User;
}
