import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from 'src/dtos/CreateLanguage.dto';
import { Language } from 'src/entities/Language.entity';
import { getLanguages } from '../languages';

@Injectable()
export class LanguageService {
  constructor(
    @InjectRepository(Language)
    private readonly languageRepository: EntityRepository<Language>,
  ) {}

  async getLanguages(): Promise<Language[]> {
    const allLanguages = await this.languageRepository.findAll();

    return allLanguages;
  }

  async createLanguage(language: CreateLanguageDto): Promise<Language> {
    const createdLanguage = this.languageRepository.create(language);

    this.languageRepository.persistAndFlush(createdLanguage);

    return createdLanguage;
  }

  async initAllLanguages() {
    const languages = getLanguages();

    const promises = languages.map(async (language) => {
      return await this.createLanguage(language);
    });

    const ls = await Promise.all(promises);

    return ls;
  }
}
