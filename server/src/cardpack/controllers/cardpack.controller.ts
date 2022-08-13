import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Cardpack } from 'src/entities/Cardpack.entity';
import { CardpackService } from '../services/cardpack.service';

@ApiTags('Cardpack')
@Controller('cardpack')
export class CardpackController {
  constructor(private readonly cardpackService: CardpackService) {}

  @Get('/:id')
  getCardpack(@Param('id') id: string) {
    return this.cardpackService.getCardpack(id);
  }

  @Post('/:id')
  postCardpack(@Param('id') id: string, @Body() cardpack: Cardpack) {
    return this.cardpackService.getCardpack(id);
  }

  @Patch('/:id')
  patchCardpack(@Param('id') id: string, @Body() cardpack: Cardpack) {
    return this.cardpackService.getCardpack(id);
  }
}
