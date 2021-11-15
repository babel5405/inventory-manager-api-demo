import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const Query = () => {
    return prisma.category.findMany()
}

export default Query;