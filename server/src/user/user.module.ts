import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { User } from 'src/entities/User.entity';
import { UserRepository } from 'src/user/repositories/UserRepository';
import { LoginController } from './controllers/login.controller';
import { UserController } from './controllers/user.controller';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [User],
    }),
    CommonModule,
  ],
  controllers: [UserController, LoginController],
  providers: [UserService, LoginService, UserRepository],
})
export class UserModule {}
