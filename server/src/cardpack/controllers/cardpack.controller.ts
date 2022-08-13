import { Body, Controller, Post } from '@nestjs/common';
import { Language } from 'src/entities/Language.entity';
import { User } from 'src/entities/User.entity';
import { CardpackService } from '../services/cardpack.service';

@Controller('cardpack')
export class CardpackController {
  constructor(private readonly cardpackService: CardpackService) {}

  @Post()
  getHello(@Body() user: User, @Body() lang: Language): string {
    return this.cardpackService.getHello() + user.username + lang;
  }
}
