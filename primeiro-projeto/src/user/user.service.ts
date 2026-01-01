import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { user } from '../../prisma/generated/prisma/client';
import { UserCreateDto } from './dto/user-create.dto';
import * as bcrypt from 'bcrypt';
import { UserCreateInterface } from './interface/user-create.interface';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  public async findAll(): Promise<user[]> {
    return await this.userRepository.findAll();
  }

  public async findOne(id: string): Promise<user | null> {
    return await this.userRepository.findOne(id);
  }

  public async create(dto: UserCreateDto): Promise<string> {
    const hashedPassword: string = await bcrypt.hash(dto.password, 10);

    const userToSave: UserCreateInterface = {
      ...dto,
      password: hashedPassword
    }

    return this.userRepository.create(userToSave);
  }
}