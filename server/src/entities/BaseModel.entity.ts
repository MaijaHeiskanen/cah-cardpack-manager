import { BaseEntity, Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class BaseModel extends BaseEntity<BaseModel, 'id'> {
  @ApiProperty()
  // @PrimaryKey({ type: 'uuid' })
  @PrimaryKey()
  id!: string;

  @ApiProperty()
  @Property()
  createdAt: Date = new Date();

  @ApiProperty()
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
