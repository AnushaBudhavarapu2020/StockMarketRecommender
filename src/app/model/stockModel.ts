import { StockSymbol } from './interface/stockSymbol';
import { StockValues } from './stockValues';

export class StockModel implements StockSymbol{
    constructor(code: string, name: string){
        this.Code = code;
        this.Name = name;
    }
    Code: string;    
    Name: string;
    Values: Array<StockValues>;
    Data: any;
}