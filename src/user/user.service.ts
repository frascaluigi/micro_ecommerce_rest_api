import { HttpException, HttpStatus, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { OrderService } from '../order/order.service';

import { readFile } from '../shared/readFile';
import { IUser, IUsers, IUserOrders } from './user.interface';


@Injectable()
export class UserService implements OnApplicationBootstrap{

    private _users: Array<IUser>;

    constructor(private orderService: OrderService){
        this._users = new Array<IUser>;
    }

    onApplicationBootstrap() {
        // console.log("bootstrap user service..");
        
        try{
            const fileUsers = readFile('user.csv');

            fileUsers.map(r => {
                const user = {
                    id: r.at(0)!,
                    username:r.at(1)!,
                    email:r.at(2)!,
                    password:r.at(3)!
                }
                this._users.push(user);
            
            });
        }
        catch(e){
            console.log("exception:", e.message);
            process.exit(0);
        }
    }

    public get users(): Array<IUser> {
        return this._users;
    }
    public set users(value: Array<IUser>) {
        this._users = value;
    }

    getUsers():IUsers{
        return {
            users: this._users
        }
    }

    getUserById(id:string){
        const user = this._users.find(user => user.id === id);
        if(!user) throw new HttpException('user not found', HttpStatus.NOT_FOUND);

        return user;
    }

    getUserOrders(userId:string):IUserOrders{
        const user = this.getUserById(userId);
        const orders = this.orderService.getOrdersByUserId(userId);
        
        return {
            id: user.id,
            username: user.username,
            ...orders
        }
        
    }

    findOneByEmail(email:string):IUser{
        const user = this._users.find(user => user.email === email);
        if(!user) throw new HttpException('unhautorized', HttpStatus.UNAUTHORIZED);
        return user;
    }


}
