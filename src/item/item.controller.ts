import { Controller, Get, Param } from '@nestjs/common';
import { IItem, IItems } from './item.interface';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {

    constructor(private itemService: ItemService){}

    @Get()
    getOrders(): IItems {
        return this.itemService.getItems()
    }

    @Get(':id')
    getOrderById(@Param() param:any):IItem {
        return this.itemService.getItemById(param.id);
    }



}
