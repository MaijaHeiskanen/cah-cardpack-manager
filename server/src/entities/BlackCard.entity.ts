import { Entity, Enum, ManyToOne, Property, t } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { CARD_TYPES } from '../enums/cardtype';
import { BaseModel } from './BaseModel.entity';
import { Cardpack } from './Cardpack.entity';

@Entity()
export class BlackCard extends BaseModel {
  @ApiProperty()
  @Property()
  text!: string;

  @ApiProperty()
  @Enum({ items: [CARD_TYPES.BLACK] })
  type: CARD_TYPES.BLACK = CARD_TYPES.BLACK;

  @ApiProperty()
  @ManyToOne({ entity: () => Cardpack, mapToPk: true })
  cardpackId!: string;

  constructor(text: string, cardpackId: string) {
    super();
    this.text = text;
    this.type = CARD_TYPES.BLACK;
    this.cardpackId = cardpackId;
  }
}
