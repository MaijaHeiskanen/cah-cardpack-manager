import { LoginService } from '../services/login.service';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    getHello(): string;
}
