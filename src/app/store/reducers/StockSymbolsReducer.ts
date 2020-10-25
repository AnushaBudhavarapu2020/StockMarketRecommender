import { StockModel } from "src/app/model/stockModel";

let stockSymbolsReducer: Reducer<Array<StockModel>> = (state: Array<StockModel>, action: Action) => {
    if (action.type === 'SET'){
        state = action.payload;
    }
    return {...state};
}

export default stockSymbolsReducer;