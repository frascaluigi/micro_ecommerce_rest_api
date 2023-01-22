import { IItem } from "../item/item.interface";

export interface IOrder {
    id:string;
    userId:string;
    createdAt: Date;
    status:string;
}


export interface IOrders {
    orders: IOrder[];
}

export interface IOrderDetail {
    orderId:string;
    itemId:string;
    quantity:number;
    subtotal:number;
}

export interface IOrderItemDetail extends Omit<IOrderDetail, "itemId"> {
    item:IItem;
}

export interface IOrderDetails {
    detail: IOrderItemDetail[];
}