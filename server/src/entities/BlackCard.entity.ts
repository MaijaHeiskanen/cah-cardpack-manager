import { Entity, Enum, ManyToOne } from '@mikro-orm/core';
import { BaseCard, CARD_TYPES } from './BaseCard.entity';
import { Cardpack } from './Cardpack.entity';

@Entity()
export class BlackCard extends BaseCard {
  @Enum({ items: [CARD_TYPES.BLACK] })
  type!: CARD_TYPES.BLACK;

  @ManyToOne({ entity: () => Cardpack })
  cardpack!: Cardpack;
}
