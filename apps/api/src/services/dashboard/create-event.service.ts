import prisma from '@/prisma';
import { Event } from '@prisma/client';
import { format, formatDate } from 'date-fns';
import { Request } from 'express';

export const createEventService = async (body: Omit<Event, `id`>) => {
  try {
    return await prisma.event.create({
      data: {
        ...body,
        limit: 100,
        booked: true,
        userId: 1,
      },
    });
  } catch (error) {
    throw error;
  }
};
