import path from 'path';
import { Options } from '@mikro-orm/core';
import { BaseModel } from './entities/BaseModel.entity';
import { BlackCard } from './entities/BlackCard.entity';
import { Cardpack } from './entities/Cardpack.entity';
import { Language } from './entities/Language.entity';
import { User } from './entities/User.entity';
import { WhiteCard } from './entities/WhiteCard.entity';

const cofnig: Options = {
  entities: [BaseModel, User, Language, WhiteCard, BlackCard, Cardpack],
  entitiesTs: ['src/entities'],
  dbName: 'cah-pack-manager-db',
  password: 'password',
  type: 'postgresql',
  port: 5432,
  migrations: {
    // path: path.join(__dirname, './migrations'),
    path: './migrations',
  },
};

export default cofnig;
