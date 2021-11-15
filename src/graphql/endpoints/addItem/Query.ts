import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const Query = (name : string, description : string , locationId : number, categoryId : number) => {
    return prisma.item.create({
        data: {
            name,
            description,
            locationId,
            categoryId
        }
    });
}

export default Query;