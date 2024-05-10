import { comparePassword, hashedPassword } from '@/lib/bcrypt';
import prisma from '@/prisma';
import { User } from '@prisma/client';

export const loginService = async (body: Omit<User, 'id'>) => {
  try {
    const { email, password, role } = body;
    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (!existingUser) {
      throw new Error(`Invalid email address`);
    }
    // const hashPassword = await hashedPassword(password);
    const isPasswordValid = await comparePassword(
      password,
      existingUser.password,
    );
    if (!isPasswordValid) {
      throw new Error('incorect password');
    }
    return {
      message: 'login success',
      data: existingUser,
      //   token,
    };
  } catch (error) {
    throw error;
  }
};
