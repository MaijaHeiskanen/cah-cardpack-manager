import { BaseModel } from './BaseModel.entity';
export declare enum CARD_TYPES {
    WHITE = "white",
    BLACK = "black"
}
export declare class BaseCard extends BaseModel {
    text: string;
    type: CARD_TYPES;
}
