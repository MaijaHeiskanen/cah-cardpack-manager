import { Entity, Property } from '@mikro-orm/core';
import { BaseModel } from './BaseModel.entity';

@Entity()
export class User extends BaseModel {
  @Property({ unique: true })
  email!: string;

  @Property({ unique: true })
  username!: string;
}