import { Entity, Enum, ManyToOne } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { BaseCard, CARD_TYPES } from './BaseCard.entity';
import { Cardpack } from './Cardpack.entity';

@Entity()
export class BlackCard extends BaseCard {
  @ApiProperty()
  @Enum({ items: [CARD_TYPES.BLACK] })
  type!: CARD_TYPES.BLACK;

  @ApiProperty()
  @ManyToOne({ entity: () => Cardpack })
  cardpack!: Cardpack;
}
