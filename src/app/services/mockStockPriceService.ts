import { Injectable } from '@angular/core';
import { StockValues } from '../model/stockValues';
import { IStockPriceService } from './interface/stockPriceService';
import { FilterSettings } from '../model/filterSettings';

@Injectable({
    providedIn: 'root',
})

export class MockStockPriceService implements IStockPriceService {
    constructor() {
    }

    stockPriceGenerator(filterSetting: FilterSettings): Array<StockValues> {
        let values = [];
        for(let d = new Date(filterSetting.startDate); d <= filterSetting.endDate; d.setDate(d.getDate() + 1)){
            let value = new StockValues();
            value.Date = new Date(d);
            value.CloseValue = this.getRandomValue(200);
            values.push(value);
        }
        return values;
    }

    private getRandomValue(max: number){
        let precision = 100;
        return Math.floor(Math.random() * (max * precision - 1 * precision) + 1 * precision) / (1*precision);
    }
}
