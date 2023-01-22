import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { IOrders, IOrder, IOrderDetails } from './order.interface';
import { OrderService } from './order.service';

@UseGuards(JwtAuthGuard)
@Controller('order')
export class OrderController {

    constructor(private orderService: OrderService){}

    @Get()
    getOrders(): IOrders {
        return this.orderService.getOrders();
    }

    @Get(':id')
    getOrderById(@Param() param:any):IOrder {
        return this.orderService.getOrderById(param.id);
    }

    @Get(':id/detail')
    getOrderDetailById(@Param() param:any):IOrderDetails {
        const orderId = param.id
        return this.orderService.getOrderDetailById(orderId);
    }

}
