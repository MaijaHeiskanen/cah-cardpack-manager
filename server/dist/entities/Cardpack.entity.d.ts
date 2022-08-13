import { Collection } from '@mikro-orm/core';
import { BaseModel } from './BaseModel.entity';
import { BlackCard } from './BlackCard.entity';
import { Language } from './Language.entity';
import { WhiteCard } from './WhiteCard.entity';
export declare class Cardpack extends BaseModel {
    code: string;
    name: string;
    description?: string;
    nsfw: boolean;
    languages: Language[];
    userId: string;
    blackCards: Collection<BlackCard, unknown>;
    whiteCards: Collection<WhiteCard, unknown>;
}
