import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Cardpack } from 'src/entities/Cardpack.entity';

@Injectable()
export class CardpackService {
  constructor(
    @InjectRepository(Cardpack)
    private readonly cardpackRepository: EntityRepository<Cardpack>,
  ) {}

  getCardpacks() {
    return [new Cardpack('aaa', 'aaa', true, 'aaa')];
  }

  // getCardpack(id: string) {
  //   return new Cardpack('aaa', id, true, 'aaa');
  // }

  createCardpack(id: string) {
    const newCardpack = this.cardpackRepository.create(
      new Cardpack('aaa', id, true, 'aaa'),
    );

    this.cardpackRepository.persistAndFlush(newCardpack);

    return newCardpack;
  }

  getHello(): string {
    return 'Hello cardpack';
  }
}
