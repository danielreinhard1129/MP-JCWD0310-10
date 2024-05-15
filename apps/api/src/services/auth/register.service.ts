import { hashedPassword } from '@/lib/bcrypt';
import prisma from '@/prisma';
import { User } from '@prisma/client';

export const registerService = async (body: Omit<User, 'id'>) => {
  try {
    const { username, email, password, referralCode } = body;
    const today = new Date();
    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      throw new Error(`Email already exist`);
    }

    const existingRevealCode = await prisma.user.findFirst({
      where: { referralCode: referralCode },
      select: { id: true },
    });

    if (existingRevealCode) {
      //add point and add 3 months
      const findpoint = await prisma.point.findUnique({
        where: { userId: existingRevealCode.id },
        select: { point: true, expiredDate: true },
      });
      const newPoint = Number(findpoint?.point) + 10000;
      await prisma.point.update({
        where: { userId: existingRevealCode.id },
        data: { point: newPoint },
      });

      const updateDate = new Date(today.setMonth(today.getMonth() + 3));
      await prisma.point.update({
        where: { userId: existingRevealCode.id },
        data: { expiredDate: updateDate },
      });
    }

    // add rewards
    const reward = existingUser ? 0.1 : 0;
    const rewardExpiredDate = new Date(today.setMonth(today.getMonth() + 3));
    const hashPassword = await hashedPassword(password);
    const generateReferralCode = crypto.randomUUID().slice(0, 5).toUpperCase();

    return await prisma.user.create({
      data: {
        ...body,
        password: hashPassword,
        isVerified: true,
        referralCode: generateReferralCode,
        point: { create: { point: 0 } },
        rewards: {
          create: { rewards: reward, expiredDate: rewardExpiredDate },
        },
      },
    });
  } catch (error) {
    throw error;
  }
};
