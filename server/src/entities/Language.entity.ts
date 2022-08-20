import {
  BaseEntity,
  Entity,
  Enum,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';

export enum READING_DIRECTION {
  LEFT_TO_RIGHT = 0,
  RIGHT_TO_LEFT = 1,
}

@Entity()
export class Language extends BaseEntity<Language, 'code'> {
  @ApiProperty()
  @PrimaryKey()
  code!: string;

  @ApiProperty()
  @Property({ unique: true })
  name!: string;

  @ApiProperty()
  @Property({ unique: true })
  native!: string;

  @ApiProperty()
  @Enum({
    items: [READING_DIRECTION.LEFT_TO_RIGHT, READING_DIRECTION.RIGHT_TO_LEFT],
    nullable: false,
  })
  rtl: READING_DIRECTION = 0;
}
