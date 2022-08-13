import { Injectable } from '@nestjs/common';
import { Cardpack } from 'src/entities/Cardpack.entity';

@Injectable()
export class CardpackService {
  getCardpack(id: string) {
    return new Cardpack();
  }

  getHello(): string {
    return 'Hello cardpack';
  }
}
