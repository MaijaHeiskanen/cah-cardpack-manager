import { EntityRepository } from '@mikro-orm/postgresql';
import { User } from 'src/entities/User.entity';

export class UserRepository extends EntityRepository<User> {}
