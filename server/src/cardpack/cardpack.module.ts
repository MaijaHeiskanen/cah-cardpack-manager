import { Module } from '@nestjs/common';
import { CardpackController } from './controllers/cardpack.controller';
import { CardpackService } from './services/cardpack.service';

@Module({
  controllers: [CardpackController],
  providers: [CardpackService],
})
export class CardpackModule {}
