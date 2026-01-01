import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { user } from '../../prisma/generated/prisma/client.js';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  public async findAll(): Promise<user[]> {
    return await this.userRepository.findAll();
  }

  public async findOne(id: string): Promise<user | null> {
    return await this.userRepository.findOne(id);
  }
}