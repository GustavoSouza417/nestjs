import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { user } from '../../prisma/generated/prisma/client.js';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  public async findAll(): Promise<user[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  public async findOne (
    @Param('id', new ParseUUIDPipe()) id: string
  ): Promise<user | null> {
    return this.userService.findOne(id);
  }
}