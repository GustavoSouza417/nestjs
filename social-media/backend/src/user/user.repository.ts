import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { user } from '../../prisma/generated/prisma/client.js';
import { UserCreateInterface } from './interface/user-create.interface.js';

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

  public async create(user: UserCreateInterface): Promise<string> {
    const newUser: user = await this.prisma.user.create ({
      data: {
        name: user.name,
        birthdate: user.birthdate,
        sex: user.sex,
        email: user.email,
        phone: user.phone,
        password: user.password
      }
    });

    return newUser.id;
  }
}