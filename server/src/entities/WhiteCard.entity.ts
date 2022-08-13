import { Entity, Enum, ManyToOne } from '@mikro-orm/core';
import { BaseCard, CARD_TYPES } from './BaseCard.entity';
import { Cardpack } from './Cardpack.entity';

@Entity()
export class WhiteCard extends BaseCard {
  @Enum({ items: [CARD_TYPES.WHITE] })
  type!: CARD_TYPES.WHITE;

  @ManyToOne({ entity: () => Cardpack })
  cardpack!: Cardpack;
}
