import { BaseEntity } from '@mikro-orm/core';
export declare class BaseModel extends BaseEntity<BaseModel, 'id'> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
}
