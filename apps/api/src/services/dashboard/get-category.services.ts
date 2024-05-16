import prisma from '@/prisma';
import { Category } from '@prisma/client';

export const getCategoriEvent = async (body: Omit<Category, 'id'>) => {
  try {
    return await prisma.category.findMany({
      include: { event: { include: { user: true } } },
    });
  } catch (error) {}
};
