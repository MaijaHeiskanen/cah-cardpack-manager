import { Entity, Enum, Property } from '@mikro-orm/core';
import { BaseModel } from './BaseModel.entity';

export enum CARD_TYPES {
  WHITE = 'white',
  BLACK = 'black',
}

@Entity()
export class BaseCard extends BaseModel {
  @Property()
  text!: string;

  @Enum(() => CARD_TYPES)
  type!: CARD_TYPES;
}
