import { hashedPassword } from '@/lib/bcrypt';
import prisma from '@/prisma';
import { User } from '@prisma/client';

export const registerService = async (body: Omit<User, 'id'>) => {
  try {
    const { username, email, password, referalCode } = body;
    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      throw new Error(`Email already exist`);
    }

    const existingRevealCode = await prisma.user.findFirst({
      where: { referalCode: referalCode },
      select: { id: true },
    });

    if (existingRevealCode) {
      const findpoint = await prisma.point.findUnique({
        where: { userId: existingRevealCode.id },
        select: { point: true, expiredDate: true },
      });
      // console.log(findpoint);

      const newPoint = Number(findpoint?.point) + 100;
      await prisma.point.update({
        where: { userId: existingRevealCode.id },
        data: { point: newPoint, totalPoint: 100 },
      });

      if (findpoint?.expiredDate !== null) {
        const expiredDate = new Date(findpoint?.expiredDate!);
        const updateDate = new Date(
          expiredDate.setMonth(expiredDate.getMonth() + 3),
        );
        await prisma.point.update({
          where: { userId: existingRevealCode.id },
          data: { expiredDate: updateDate },
        });
      }
    }

    const hashPassword = await hashedPassword(password);
    const generateRevealCode = crypto.randomUUID().slice(0, 5);

    return await prisma.user.create({
      data: {
        ...body,
        password: hashPassword,
        isVerified: true,
        referalCode: generateRevealCode,
        point: { create: { point: 0, totalPoint: 0 } },
      },
    });
  } catch (error) {
    throw error;
  }
};
