import { Language } from 'src/entities/Language.entity';

export type CreateLanguageDto = Pick<
  Language,
  'code' | 'name' | 'native' | 'rtl'
>;
