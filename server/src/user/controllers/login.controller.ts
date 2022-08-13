import { Controller, Get } from '@nestjs/common';
import { LoginService } from '../services/login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  getHello(): string {
    return this.loginService.getHello();
  }
}
