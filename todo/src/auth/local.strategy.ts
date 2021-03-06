import { Injectable, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }
    /** 
    async validate(email: string, pass: string): Promise<any> {
        const user = await this.authService.validateUser(email, pass);
        if (!user) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'vamos ver se vai agora',
              }, 403);
        }
        return user;
    }
    */

}