import prisma from '@/prisma';
import { Event } from '@prisma/client';
import { format, formatDate } from 'date-fns';

export const createEventService = async (body: Omit<Event, `id`>) => {
  try {
    return await prisma.event.create({
      data: {
        ...body,

        limit: 100,
        booked: true,
      },
    });
  } catch (error) {
    throw error;
  }
};
