import { Module } from '@nestjs/common';
import { LoginController } from './controllers/login.controller';
import { UserController } from './controllers/user.controller';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';

@Module({
  controllers: [UserController, LoginController],
  providers: [UserService, LoginService],
})
export class UserModule {}
