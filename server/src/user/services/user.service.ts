import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/User.entity';

@Injectable()
export class UserService {
  getUser(id: string) {
    return new User();
  }
  getHello(): string {
    return 'Hello user!';
  }
}
