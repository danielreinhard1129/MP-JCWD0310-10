
export interface Event {
  id: number;
  name: String;
  location: String;
  description: String;
  image: File[];
  startDate: Date;
  endDate: Date;
  categories: string;
  userId?: number;
  // user: User;
}
