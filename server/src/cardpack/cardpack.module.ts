import { Module } from '@nestjs/common';
import { CardpackController } from './controllers/cardpack.controller';
import { BlackCardRepository } from './repositories/BlackCardRepository';
import { CardpackRepository } from './repositories/CardpackRepository';
import { WhiteCardRepository } from './repositories/WhiteCardRepository';
import { CardpackService } from './services/cardpack.service';

@Module({
  controllers: [CardpackController],
  providers: [
    CardpackService,
    CardpackRepository,
    WhiteCardRepository,
    BlackCardRepository,
  ],
})
export class CardpackModule {}
