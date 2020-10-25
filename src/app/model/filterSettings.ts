import { StockModel } from './stockModel';
import { Algorithm } from './enums/algorithmEnum';

export class FilterSettings{
    model: StockModel;
    startDate: Date;
    endDate: Date;
    socialMedia: string;
    Algorithm: Algorithm = Algorithm.Algo2;
    fetched: boolean = false;
    CalculateRecommendation: boolean = true;
}
