import { IOrder } from "../order/order.interface";



export interface IUser {
    id: string;
    username: string;
    email:string;
    password:string;
}

export interface IUsers {
    users: IUser[];
}


export interface IUserOrders extends Pick<IUser, "id" | "username"> {
    orders: IOrder[]
}