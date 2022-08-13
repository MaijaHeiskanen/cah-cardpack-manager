import { BaseEntity } from '@mikro-orm/core';
export declare class Language extends BaseEntity<Language, 'code'> {
    code: string;
    name: string;
    native: string;
}
