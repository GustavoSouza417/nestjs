import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { user } from '../../prisma/generated/prisma/client.js';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  public async findAll(): Promise<user[]> {
    return await this.prisma.user.findMany();
  }

  public async findOne(id: string): Promise<user | null> {
    return await this.prisma.user.findUnique ({
      where: { id }
    });
  }
}