import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidatorService {
  validateEmail(email: string) {
    return true;
  }
}
