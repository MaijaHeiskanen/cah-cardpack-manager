import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { getLanguages } from '../languages';
import { LanguageService } from '../services/language.service';

@ApiTags('Language')
@Controller('language')
export class LangiageController {
  constructor(private readonly languageService: LanguageService) {}

  @Get()
  async getLanguages() {
    const newLanguage = await this.languageService.createLanguage({
      code: 'aa',
      name: 'Afar',
      native: 'Afar',
      rtl: 0,
    });

    return newLanguage;
  }
}
