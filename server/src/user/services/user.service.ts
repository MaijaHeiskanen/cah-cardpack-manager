import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/User.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {}
  getUser(id: string) {
    return new User('aa', id);
  }
  getHello(): string {
    return 'Hello user!';
  }
  async createUser(id: string) {
    const user = this.userRepository.create(new User('aaa', id));

    this.userRepository.persistAndFlush(user);

    return user;
  }
}
