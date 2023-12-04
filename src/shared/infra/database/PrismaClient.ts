import { env } from "../../env/index" 
import { PrismaClient, Prisma } from '@prisma/client';

const log: Prisma.LogLevel[] = env.NODE_ENV == 'dev' ? ['query', 'info', 'warn', 'error'] : ['error'];

const prisma = new PrismaClient({ log });

export default prisma;