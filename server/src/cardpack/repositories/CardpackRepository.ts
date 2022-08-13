import { EntityRepository } from '@mikro-orm/postgresql';
import { Cardpack } from 'src/entities/Cardpack.entity';

export class CardpackRepository extends EntityRepository<Cardpack> {}
