import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardpackModule } from './cardpack/cardpack.module';
import { BaseCard } from './entities/BaseCard.entity';
import { BaseModel } from './entities/BaseModel.entity';
import { BlackCard } from './entities/BlackCard.entity';
import { Cardpack } from './entities/Cardpack.entity';
import { Language } from './entities/Language.entity';
import { User } from './entities/User.entity';
import { WhiteCard } from './entities/WhiteCard.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    CardpackModule,
    MikroOrmModule.forRoot({
      entities: [
        BaseModel,
        BaseCard,
        User,
        Language,
        WhiteCard,
        BlackCard,
        Cardpack,
      ],
      entitiesTs: ['src/entities'],
      dbName: 'cah-cardpack-manager',
      type: 'postgresql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
