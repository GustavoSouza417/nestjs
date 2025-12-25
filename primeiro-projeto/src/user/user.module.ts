import { Module } from '@nestjs/common';
import { ControllerService } from './controller/controller.service';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  providers: [ControllerService, UserService],
  controllers: [UserController]
})
export class UserModule {}
