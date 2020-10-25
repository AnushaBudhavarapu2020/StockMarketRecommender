import { FilterSettings } from 'src/app/model/filterSettings';
import { StockValues } from 'src/app/model/stockValues';

export interface IStockPriceService{
    stockPriceGenerator(filterSetting: FilterSettings) : Array<StockValues>;
}