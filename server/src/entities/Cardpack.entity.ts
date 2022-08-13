import {
  Collection,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  Property,
} from '@mikro-orm/core';
import { BaseModel } from './BaseModel.entity';
import { BlackCard } from './BlackCard.entity';
import { Language } from './Language.entity';
import { User } from './User.entity';
import { WhiteCard } from './WhiteCard.entity';

@Entity()
export class Cardpack extends BaseModel {
  @Property({ unique: true })
  code!: string;

  @Property()
  name!: string;

  @Property({ nullable: true })
  description?: string;

  @Property()
  nsfw!: boolean;

  @ManyToMany(() => Language)
  languages!: Language[];

  @ManyToOne(() => User, { mapToPk: true })
  userId!: string;

  @OneToMany({
    mappedBy: 'cardpack',
    entity: () => BlackCard,
  })
  blackCards = new Collection<BlackCard>(this);

  @OneToMany({
    mappedBy: 'cardpack',
    entity: () => WhiteCard,
  })
  whiteCards = new Collection<WhiteCard>(this);
}
