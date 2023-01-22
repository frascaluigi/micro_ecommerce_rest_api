import { HttpException, HttpStatus, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { readFile } from '../shared/readFile';
import { IItem, IItems } from './item.interface';

@Injectable()
export class ItemService implements OnApplicationBootstrap{

    private _items: Array<IItem>;

    constructor(){
        this._items = new Array<IItem>;
    }
    
    public get items(): Array<IItem> {
        return this._items;
    }
    public set items(value: Array<IItem>) {
        this._items = value;
    }

    onApplicationBootstrap() {
        // console.log("bootstrap item service");

        try{
            const fileOrders = readFile('item.csv');

            fileOrders.map(r => {
                const item:IItem = {
                    id: r.at(0)!,
                    name:r.at(1)!,
                    description:r.at(2)!,
                    price:+r.at(3)!
                }
                this._items.push(item);
            
            });
        }
        catch(e){
            console.log("exception:", e.message);
            process.exit(0);
        }
    }

    getItems():IItems{
        return {
            items: this._items
        }
    }

    getItemById(id:string):IItem{
        const item = this._items.find(item => item.id === id);
        if(!item) throw new HttpException('order not found', HttpStatus.NOT_FOUND);

        return item;
    }

}
