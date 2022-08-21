import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { UuidService } from 'src/common/services/uuid.service';
import { User } from 'src/entities/User.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
    private readonly uuidService: UuidService,
  ) {}

  getUser(id: string) {
    return new User(
      this.uuidService.generateUuid(),
      this.uuidService.generateUuid(),
      this.uuidService.generateUuid(),
    );
  }

  getHello(): string {
    return 'Hello user!';
  }

  async createUser(id: string) {
    const user = this.userRepository.create(
      new User(
        this.uuidService.generateUuid(),
        this.uuidService.generateUuid(),
        this.uuidService.generateUuid(),
      ),
    );

    this.userRepository.persistAndFlush(user);

    return user;
  }
}
