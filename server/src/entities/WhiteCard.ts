import { Entity, Enum } from '@mikro-orm/core';
import { BaseCard, CARD_TYPES } from './BaseCard';

@Entity()
export class WhiteCard extends BaseCard {
  @Enum({ items: [CARD_TYPES.WHITE] })
  type!: CARD_TYPES.WHITE;
}
