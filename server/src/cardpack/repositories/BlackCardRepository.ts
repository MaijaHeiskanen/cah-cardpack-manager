import { EntityRepository } from '@mikro-orm/postgresql';
import { BlackCard } from 'src/entities/BlackCard.entity';

export class BlackCardRepository extends EntityRepository<BlackCard> {}
