import { Module } from '@nestjs/common';
import { UuidService } from './services/uuid.service';
import { ValidatorService } from './services/validator.service';

@Module({
  providers: [UuidService, ValidatorService],
  exports: [UuidService, ValidatorService],
})
export class CommonModule {}
