import { Language } from 'src/entities/Language.entity';
import { User } from 'src/entities/User.entity';
import { CardpackService } from '../services/cardpack.service';
export declare class CardpackController {
    private readonly cardpackService;
    constructor(cardpackService: CardpackService);
    getHello(user: User, lang: Language): string;
}
