import {
  Collection,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  Property,
} from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { BaseModel } from './BaseModel.entity';
import { BlackCard } from './BlackCard.entity';
import { Language } from './Language.entity';
import { User } from './User.entity';
import { WhiteCard } from './WhiteCard.entity';

@Entity()
export class Cardpack extends BaseModel {
  @ApiProperty()
  @Property({ unique: true })
  code!: string;

  @ApiProperty()
  @Property()
  name!: string;

  @ApiProperty()
  @Property({ nullable: true })
  description?: string;

  @ApiProperty()
  @Property()
  nsfw!: boolean;

  @ApiProperty()
  @ManyToMany(() => Language)
  languages!: Language[];

  @ApiProperty()
  @ManyToOne(() => User, { mapToPk: true })
  userId!: string;

  @ApiProperty({ type: [BlackCard] })
  @OneToMany({
    mappedBy: 'cardpack',
    entity: () => BlackCard,
  })
  blackCards = new Collection<BlackCard>(this);

  @ApiProperty({ type: [WhiteCard] })
  @OneToMany({
    mappedBy: 'cardpack',
    entity: () => WhiteCard,
  })
  whiteCards = new Collection<WhiteCard>(this);
}
