

export interface IItem {
    id:string;
    name:string;
    description:string;
    price:number;
}

export interface IItems {
    items: IItem[];
}