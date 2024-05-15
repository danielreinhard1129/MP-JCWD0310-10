import prisma from '@/prisma';
import { Event } from '@/types/event.type';
import { format, formatDate } from 'date-fns';
import { Request } from 'express';
interface EventType extends Omit<Event, 'id'> {
  categories: string;
}

export const createEventService = async (
  body: EventType,
  file: Express.Multer.File,
) => {
  try {
    const { categories, userId, ...eventData } = body;
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
      },
    });
  } catch (error) {
    throw error;
  }
};
