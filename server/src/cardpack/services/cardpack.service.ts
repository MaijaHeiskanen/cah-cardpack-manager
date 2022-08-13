import { Injectable } from '@nestjs/common';

@Injectable()
export class CardpackService {
  getHello(): string {
    return 'Hello cardpack';
  }
}
