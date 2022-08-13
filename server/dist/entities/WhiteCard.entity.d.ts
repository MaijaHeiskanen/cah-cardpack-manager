import { BaseCard, CARD_TYPES } from './BaseCard.entity';
import { Cardpack } from './Cardpack.entity';
export declare class WhiteCard extends BaseCard {
    type: CARD_TYPES.WHITE;
    cardpack: Cardpack;
}
