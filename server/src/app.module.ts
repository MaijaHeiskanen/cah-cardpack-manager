import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardpackModule } from './cardpack/cardpack.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, CardpackModule, MikroOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
