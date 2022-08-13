import { BaseCard, CARD_TYPES } from './BaseCard.entity';
import { Cardpack } from './Cardpack.entity';
export declare class BlackCard extends BaseCard {
    type: CARD_TYPES.BLACK;
    cardpack: Cardpack;
}
