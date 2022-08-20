import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/entities/User.entity';
import { UserRepository } from 'src/user/repositories/UserRepository';
import { UserService } from '../services/user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly repo: UserRepository,
  ) {}

  @Get('/:id')
  getUser(@Param('id') id: string) {
    return this.userService.createUser(id);
  }
}
