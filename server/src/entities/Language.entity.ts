import { BaseEntity, Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';

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
}
