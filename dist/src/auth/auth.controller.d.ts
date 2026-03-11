import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        user: {
            id: any;
            email: any;
            nome: any;
            foto: any;
        };
        access_token: string;
    }>;
    login(dto: LoginDto): Promise<{
        user: {
            id: any;
            email: any;
            nome: any;
            foto: any;
        };
        access_token: string;
    }>;
    getProfile(req: any): Promise<any>;
}
