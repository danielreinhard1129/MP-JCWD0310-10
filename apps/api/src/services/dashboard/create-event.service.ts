import prisma from '@/prisma';
import { Event } from '@/types/event.type';
import { format, formatDate } from 'date-fns';
import { Request } from 'express';
interface EventType extends Omit<Event, 'id'> {
  categories: string;
  name_ticket: string;
  qty_ticket: number;
  price_ticket: number;
}

export const createEventService = async (
  body: EventType,
  file: Express.Multer.File,
) => {
  try {
    const {
      categories,
      name_ticket,
      qty_ticket,
      userId,
      price_ticket,
      ...eventData
    } = body;
    // console.log('ini create event' + file.filename);
    return await prisma.event.create({
      data: {
        ...eventData,
        image: `/images/${file.filename}`,
        limit: 100,
        booked: true,

        userId: Number(userId),
        Category: {
          create: {
            title: categories,
          },
        },
        ticket: {
          create: {
            ticketType: name_ticket,
            seats: Number(qty_ticket),
            price: Number(price_ticket),
            description: 'kosong',
          },
        },
      },
    });
  } catch (error) {
    throw error;
  }
};
