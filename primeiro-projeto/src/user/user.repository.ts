import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import { user } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}
  
  public getUser(): string {
    return "Repository User!";
  }
}