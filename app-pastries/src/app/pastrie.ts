import { Observable } from "rxjs";

export enum CHOICE {
    Up = "Priority",
    Down = "Unwanted"
  }
  
export interface Pastrie  {
    _id: string;
    ref: string;
    name: string;
    description: string;
    quantity: number;
    order: number;
    url?: string;
    tags?: Array<string>;
    like?: string;
    check?: boolean;
    choice: CHOICE | null;
}

export interface List {
    _id: string;
    ingredients: Array<String>;
}

export function quantitySup(pastrie: Pastrie[]): void{
    for(let i = 0; i < pastrie.length; i++) {
        if (pastrie[i].quantity > 5) {
            pastrie[i].check = true;
        } else {
            pastrie[i].check = false;
        }
    }
}

export class User {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public id? : string
  ) {  }

}

export type Paginate = {
    start : number;
    end : number;
};

export type ResponseYam = {
    combination : string,
    pastries : Pastrie[],
    //pastries: Observable<Pastrie[]>,
    count : number
}