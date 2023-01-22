import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { IUser, IUserOrders, IUsers } from './user.interface';
import { UserService } from './user.service';

@Controller('/user')
@UseGuards(JwtAuthGuard)
export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    getUsers(): IUsers {
        return this.userService.getUsers();
    }

    @Get(':id')
    getUserById(@Param() param:any): IUser {
        return this.userService.getUserById(param.id);
    }

    @Get(':id/orders')
    getUserOrders(@Param() param:any):IUserOrders {
        return this.userService.getUserOrders(param.id);
    }

}
