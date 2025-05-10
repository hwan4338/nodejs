import { PrismaClient } from '@/generated/prisma';

let globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient;
};

let prisma: PrismaClient;

//운영모드 ,환경모드 인지에 따라.
if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (!globalWithPrisma.prisma) {
        globalWithPrisma.prisma = new PrismaClient();
    }
    prisma = globalWithPrisma.prisma;
}

export default prisma;
