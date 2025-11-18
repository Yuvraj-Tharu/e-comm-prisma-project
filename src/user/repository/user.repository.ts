import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const UserRepository = {
  async createUser(data: { name: string; email?: string; address: string }) {
    return prisma.user.create({
      data,
    });
  },

  async getAllUsers() {
    return prisma.user.findMany();
  },

  async getUserById(id: number) {
    return prisma.user.findUnique({
      where: { id },
    });
  },

  async updateUser(
    id: number,
    data: { name?: string; email?: string; address?: string }
  ) {
    return prisma.user.update({
      where: { id },
      data,
    });
  },

  async deleteUser(id: number) {
    return prisma.user.delete({
      where: { id },
    });
  },
};
