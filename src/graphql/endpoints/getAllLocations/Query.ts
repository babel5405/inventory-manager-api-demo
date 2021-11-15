import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const Query = () => {
    return prisma.location.findMany()
}

export default Query;