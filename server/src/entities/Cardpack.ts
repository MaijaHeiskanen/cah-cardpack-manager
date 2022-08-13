import {
  Cascade,
  Collection,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  Property,
} from '@mikro-orm/core';
import { BaseModel } from './BaseModel';
import { BlackCard } from './BlackCard';
import { Language } from './Language';
import { User } from './User';
import { WhiteCard } from './WhiteCard';

@Entity()
export class Cardpack extends BaseModel {
  @Property({ unique: true })
  code!: string;

  @Property()
  name!: string;

  @Property()
  description: string;

  @Property()
  nsfw!: boolean;

  @ManyToMany(() => Language)
  languages!: Language[];

  @ManyToOne(() => User, { mapToPk: true })
  userId!: string;

  @OneToMany(() => BlackCard, (blackCard) => blackCard.id, {
    cascade: [Cascade.ALL],
  })
  blackCards = new Collection<BlackCard>(this);

  @OneToMany(() => WhiteCard, (whiteCard) => whiteCard.id, {
    cascade: [Cascade.ALL],
  })
  whiteCards = new Collection<WhiteCard>(this);
}
