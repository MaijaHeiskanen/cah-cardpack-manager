import { Entity, Enum, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { BaseModel } from './BaseModel.entity';

export enum CARD_TYPES {
  WHITE = 'white',
  BLACK = 'black',
}

@Entity()
export class BaseCard extends BaseModel {
  @ApiProperty()
  @Property()
  text!: string;

  @ApiProperty()
  @Enum(() => CARD_TYPES)
  type!: CARD_TYPES;
}
