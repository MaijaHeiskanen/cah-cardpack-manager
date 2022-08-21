import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { BlackCard } from 'src/entities/BlackCard.entity';
import { Cardpack } from 'src/entities/Cardpack.entity';
import { Language } from 'src/entities/Language.entity';
import { WhiteCard } from 'src/entities/WhiteCard.entity';
import { CardpackController } from './controllers/cardpack.controller';
import { LangiageController } from './controllers/language.controller';
import { CardpackService } from './services/cardpack.service';
import { LanguageService } from './services/language.service';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [Cardpack, Language, WhiteCard, BlackCard],
    }),
    CommonModule,
  ],
  controllers: [CardpackController, LangiageController],
  providers: [CardpackService, LanguageService],
})
export class CardpackModule {}
