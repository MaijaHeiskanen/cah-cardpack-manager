import { Entity, Enum, ManyToOne, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { CARD_TYPES } from '../enums/cardtype';
import { BaseModel } from './BaseModel.entity';
import { Cardpack } from './Cardpack.entity';

@Entity()
export class WhiteCard extends BaseModel {
  @ApiProperty()
  @Property()
  text!: string;

  @ApiProperty()
  @Enum({ items: [CARD_TYPES.WHITE] })
  type: CARD_TYPES.WHITE = CARD_TYPES.WHITE;

  @ApiProperty()
  @ManyToOne({ entity: () => Cardpack, mapToPk: true })
  cardpackId!: string;

  constructor(text: string, cardpackId: string) {
    super();
    this.text = text;
    this.type = CARD_TYPES.WHITE;
    this.cardpackId = cardpackId;
  }
}
