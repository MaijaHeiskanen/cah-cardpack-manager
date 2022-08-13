import { BaseEntity, Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Language extends BaseEntity<Language, 'code'> {
  @PrimaryKey()
  code!: string;

  @Property({ unique: true })
  name!: string;

  @Property({ unique: true })
  native!: string;
}
