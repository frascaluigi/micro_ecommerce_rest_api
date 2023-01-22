import { HttpException, HttpStatus, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ItemService } from '../item/item.service';
import { readFile } from '../shared/readFile';
import { IOrder, IOrderDetail, IOrderDetails, IOrderItemDetail, IOrders } from './order.interface';

@Injectable()
export class OrderService implements OnApplicationBootstrap {

    private _orders: Array<IOrder>;
    private _order_item_details: Array<IOrderDetail>;

    constructor(private itemService: ItemService){
        this._orders = new Array<IOrder>;
        this._order_item_details = new Array<IOrderDetail>;
    }

    public get orders(): Array<IOrder> {
        return this._orders;
    }
    public set orders(value: Array<IOrder>) {
        this._orders = value;
    }

    public get order_item_details(): Array<IOrderDetail> {
        return this._order_item_details;
    }
    public set order_item_details(value: Array<IOrderDetail>) {
        this._order_item_details = value;
    }

    onApplicationBootstrap() {
        // console.log("bootstrap order service..");
        
        try{
            const fileOrders = readFile('order.csv');
            const fileOrderItemDetails = readFile('order_item_detail.csv');

            fileOrders.map(r => {
                const order:IOrder = {
                    id: r.at(0)!,
                    userId:r.at(1)!,
                    createdAt:new Date(r.at(2)!),
                    status:r.at(3)!
                }
                this._orders.push(order);
            
            });

            fileOrderItemDetails.map(r => {
                const orderItemDetail:IOrderDetail = {
                    orderId: r.at(0)!,
                    itemId:r.at(1)!,
                    quantity:+r.at(2)!,
                    subtotal:+r.at(3)!
                }
                this._order_item_details.push(orderItemDetail);
            
            });
        }
        catch(e){
            console.log("exception:", e.message);
            process.exit(0);
        }
    }

    getOrders():IOrders{
        return {
            orders: this._orders
        }
    }

    getOrderById(id:string):IOrder{
        const order = this._orders.find(order => order.id === id);
        if(!order) throw new HttpException('order not found', HttpStatus.NOT_FOUND);

        return order;
    }

    getOrdersByUserId(userId:string):IOrders{
        const orders = this._orders.filter(o => o.userId === userId);
        return {orders};
    }

    getOrderDetailById(orderId:string):IOrderDetails {
        const order = this.getOrderById(orderId);
        const orderDetail = this._order_item_details
            .filter(od => od.orderId === order.id)
            .map(od => {
                const orderWithItemDetail:IOrderItemDetail = {
                    orderId: od.orderId,
                    item: this.itemService.getItemById(od.itemId),
                    quantity: od.quantity,
                    subtotal: od.subtotal
                };

                return orderWithItemDetail;
            });

        if(!orderDetail) throw new HttpException('order not found', HttpStatus.NOT_FOUND);
        return {detail: orderDetail};
    }


}
