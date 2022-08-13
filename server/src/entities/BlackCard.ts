import { Entity, Enum } from '@mikro-orm/core';
import { BaseCard, CARD_TYPES } from './BaseCard';

@Entity()
export class BlackCard extends BaseCard {
  @Enum({ items: [CARD_TYPES.BLACK] })
  type!: CARD_TYPES.BLACK;
}
