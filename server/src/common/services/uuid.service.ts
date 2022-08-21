import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UuidService {
  generateUuid() {
    return uuidv4();
  }
}
