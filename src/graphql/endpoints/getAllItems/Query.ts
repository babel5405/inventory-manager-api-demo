import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const Query = () => {
    return prisma.item.findMany()
}

export default Query;