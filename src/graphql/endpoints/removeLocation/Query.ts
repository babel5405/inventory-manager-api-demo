import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const Query = (id : number) => {
    prisma.location.delete({
        where: {
            id
        }
    });
}

export default Query;