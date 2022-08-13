import { EntityRepository } from '@mikro-orm/postgresql';
import { WhiteCard } from 'src/entities/WhiteCard.entity';

export class WhiteCardRepository extends EntityRepository<WhiteCard> {}
