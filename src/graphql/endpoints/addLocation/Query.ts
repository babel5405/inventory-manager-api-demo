import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const Query = (name : string, description: string) => {
    return prisma.location.create({
        data: {
            name,
            description
        }
    });
}

export default Query;