import { Entity, Enum, Property } from '@mikro-orm/core';
import { BaseModel } from './BaseModel';

export enum CARD_TYPES {
  WHITE = 'white',
  BLACK = 'black',
}

@Entity()
export class BaseCard extends BaseModel {
  @Property()
  cardpackId!: string;

  @Property()
  text!: string;

  @Enum(() => CARD_TYPES)
  type!: CARD_TYPES;
}
