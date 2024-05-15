import { ReactNode } from 'react';

export interface Event {
  id: number;
  name: string;
  publishDate: Date;
  limit: number;
  location: string;
  description: string;
  image: string[];
  startDate: Date;
  endDate: Date;
  booked: boolean;

  userId: number;
}
