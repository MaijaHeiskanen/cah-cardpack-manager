import { Entity, Property } from '@mikro-orm/core';
import { ApiProperty } from '@nestjs/swagger';
import { BaseModel } from './BaseModel.entity';

@Entity()
export class User extends BaseModel {
  @ApiProperty()
  @Property({ unique: true })
  email!: string;

  @ApiProperty()
  @Property({ unique: true })
  username!: string;

  constructor(id: string, email: string, username: string) {
    super();
    this.email = email;
    this.username = username;
    this.id = id;
  }
}
