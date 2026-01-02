import { Body, Controller, Get, Post, HttpCode, HttpStatus, Param, ParseUUIDPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { user } from '../../prisma/generated/prisma/client';
import { UserCreateDto } from './dto/user-create.dto';

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

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async create (
    @Body () dto: UserCreateDto
  ): Promise<string> {
    const { confirmPassword, ...data } = dto;
    return this.userService.create(data);
  }
}