import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { IUser } from '../user/user.interface';

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwtService: JwtService){}

    async validateUser(email: string, plainTextPassword: string): Promise<any> {
        const user = this.userService.findOneByEmail(email);
        const isPasswordMatch = await bcrypt.compare(plainTextPassword, user.password);
        if (user && isPasswordMatch) {
          const { password, ...result } = user;
          return result;
        }
        return null;
    }

    async login(user:Omit<IUser, "password">) {
      const payload = { username: user.username, id: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }

}
